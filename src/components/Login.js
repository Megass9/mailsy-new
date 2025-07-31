import React from 'react';
import './Login.css';

const Login = () => {
  const handleShopierLogin = () => {
    const redirectUri = encodeURIComponent('https://mailsy-new.vercel.app/auth/callback');
    const url = `https://www.shopier.com/oauth/authorize?client_id=d0ea2d8f7c960042e2bff93594e8fc37&redirect_uri=${redirectUri}&response_type=code&scope=read_orders`;
    
    console.log('Encoded URL:', url);
    window.open(url, '_blank');
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <h1>Mailsy'e Hoş Geldiniz</h1>
          <p>Shopier hesabınızla giriş yaparak siparişlerinizi yönetin</p>
          
          <button 
            onClick={handleShopierLogin}
            className="shopier-login-btn"
          >
            🛒 Shopier ile Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;