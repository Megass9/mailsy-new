import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AuthCallback.css';

const AuthCallback = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const errorParam = urlParams.get('error');

    console.log('Auth callback - Code:', code);
    console.log('Auth callback - Error:', errorParam);

    if (errorParam) {
      setError('Giriş iptal edildi veya hata oluştu');
      setLoading(false);
      return;
    }

    if (code) {
      // Başarılı giriş - Dashboard'a yönlendir
      localStorage.setItem('shopier_auth_code', code);
      console.log('Auth code saved, redirecting to dashboard');
      navigate('/dashboard');
    } else {
      setError('Yetkilendirme kodu alınamadı');
      setLoading(false);
    }
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="callback-container">
        <h2>Giriş yapılıyor...</h2>
        <p>Lütfen bekleyin...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="callback-container">
        <h2>Hata</h2>
        <p>{error}</p>
        <button onClick={() => navigate('/login')} className="retry-btn">
          Tekrar Dene
        </button>
      </div>
    );
  }

  return null;
};

export default AuthCallback;