import React from 'react';
import './Login.css';

const Login = () => {
  const handleShopierLogin = () => {
    const clientId = process.env.REACT_APP_SHOPIER_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const authUrl = process.env.REACT_APP_SHOPIER_AUTH_URL;
    
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'read_orders read_products'
    });
    
    window.location.href = `${authUrl}?${params.toString()}`;
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-card">
          <h1>Mailsy'e Giriş</h1>
          <p>Shopier hesabınızla giriş yaparak başlayın</p>
          
          <button 
            onClick={handleShopierLogin}
            className="shopier-login-btn"
          >
            <img src="/shopier-logo.png" alt="Shopier" />
            Shopier ile Giriş Yap
          </button>
          
          <div className="login-info">
            <h3>Neden Shopier ile giriş?</h3>
            <ul>
              <li>✅ Güvenli OAuth2 kimlik doğrulama</li>
              <li>✅ Sipariş verilerinize güvenli erişim</li>
              <li>✅ Tek tıkla hızlı giriş</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;