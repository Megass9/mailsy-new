import React from 'react';
import './Login.css';

const Login = () => {
  const handleShopierLogin = () => {
    alert('Butona tıklandı!'); // Test için
    
    const url = 'https://www.shopier.com/oauth/authorize?client_id=df6029f3ac6253acab4685b26f5c9210&redirect_uri=https://mailsy-new.vercel.app/auth/callback&response_type=code&scope=read_orders';
    
    console.log('URL:', url);
    
    // Yeni sekmede aç
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