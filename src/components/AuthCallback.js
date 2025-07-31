import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './AuthCallback.css';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code');
      const error = searchParams.get('error');

      if (error) {
        setStatus('error');
        setError(`OAuth Error: ${error}`);
        return;
      }

      if (!code) {
        setStatus('error');
        setError('Authorization code not found');
        return;
      }

      try {
        // Shopier'ın örnek koduna göre token exchange
        const tokenUrl = 'https://api.shopier.com/v1/oauth2/token';
        
        const postData = {
          grant_type: 'authorization_code',
          code: code,
          client_id: 'd0ea2d8f7c960042e2bff93594e8fc37',
          client_secret: '2fe19aed82bfd639ac51fe505b50e686268dbc5e87505a9c95f9d05fcb2213e0',
          redirect_uri: 'https://mailsy-new.vercel.app/auth/callback'
        };

        const response = await axios.post(tokenUrl, postData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });

        const { access_token, refresh_token, token_type, expires_in } = response.data;

        // Token'ları localStorage'a kaydet
        localStorage.setItem('shopier_access_token', access_token);
        localStorage.setItem('shopier_refresh_token', refresh_token);
        localStorage.setItem('shopier_token_type', token_type);
        localStorage.setItem('shopier_expires_in', expires_in);

        setStatus('success');
        
        // Dashboard'a yönlendir
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);

      } catch (error) {
        console.error('Token exchange error:', error);
        setStatus('error');
        setError(error.response?.data?.message || 'Token exchange failed');
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="auth-callback">
      <div className="callback-container">
        {status === 'loading' && (
          <>
            <h2>Giriş yapılıyor...</h2>
            <p>Shopier hesabınız doğrulanıyor, lütfen bekleyin.</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <h2>✅ Giriş Başarılı!</h2>
            <p>Dashboard'a yönlendiriliyorsunuz...</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div className="error-icon">❌</div>
            <h2>Giriş Hatası</h2>
            <p>{error}</p>
            <button 
              onClick={() => navigate('/login')} 
              className="retry-btn"
            >
              Tekrar Dene
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCallback;