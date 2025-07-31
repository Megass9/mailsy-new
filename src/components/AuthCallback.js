import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './AuthCallback.css';

const AuthCallback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const error = searchParams.get('error');

        if (error) {
          setError('Giriş iptal edildi veya hata oluştu');
          setLoading(false);
          return;
        }

        if (!code) {
          setError('Yetkilendirme kodu bulunamadı');
          setLoading(false);
          return;
        }

        // Shopier'dan access token al
        const tokenResponse = await axios.post('https://api.shopier.com/oauth/token', {
          grant_type: 'authorization_code',
          client_id: process.env.REACT_APP_SHOPIER_CLIENT_ID,
          client_secret: process.env.REACT_APP_SHOPIER_CLIENT_SECRET,
          code: code,
          redirect_uri: process.env.REACT_APP_REDIRECT_URI
        });

        const { access_token } = tokenResponse.data;

        // Token'ı localStorage'a kaydet
        localStorage.setItem('shopier_access_token', access_token);

        // Kullanıcı bilgilerini al
        const userResponse = await axios.get('https://api.shopier.com/user', {
          headers: {
            'Authorization': `Bearer ${access_token}`
          }
        });

        localStorage.setItem('user_data', JSON.stringify(userResponse.data));

        // Dashboard'a yönlendir
        navigate('/dashboard');

      } catch (error) {
        console.error('Auth callback error:', error);
        setError('Giriş işlemi sırasında hata oluştu');
        setLoading(false);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  if (loading) {
    return (
      <div className="auth-callback">
        <div className="callback-container">
          <div className="loading-spinner"></div>
          <h2>Giriş yapılıyor...</h2>
          <p>Shopier hesabınız doğrulanıyor, lütfen bekleyin.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="auth-callback">
        <div className="callback-container">
          <div className="error-icon">❌</div>
          <h2>Giriş Hatası</h2>
          <p>{error}</p>
          <button 
            onClick={() => navigate('/login')}
            className="retry-btn"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default AuthCallback;