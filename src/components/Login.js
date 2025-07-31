import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleShopierLogin = () => {
    setIsLoading(true);
    const redirectUri = encodeURIComponent('https://mailsy-new.vercel.app/auth/callback');
    const url = `https://www.shopier.com/oauth/authorize?client_id=d0ea2d8f7c960042e2bff93594e8fc37&redirect_uri=${redirectUri}&response_type=code&scope=read_orders`;
    
    console.log('Encoded URL:', url);
    
    // Simulate loading for better UX
    setTimeout(() => {
      window.open(url, '_blank');
      setIsLoading(false);
    }, 1000);
  };

  const features = [
    {
      icon: '⚡',
      title: 'Hızlı Kurulum',
      description: 'Sadece birkaç tıkla Shopier hesabınızı bağlayın'
    },
    {
      icon: '🔒',
      title: 'Güvenli Bağlantı',
      description: 'OAuth 2.0 ile güvenli ve şifreli bağlantı'
    },
    {
      icon: '📧',
      title: 'Otomatik E-posta',
      description: 'Siparişler için otomatik e-posta gönderimi'
    },
    {
      icon: '📊',
      title: 'Detaylı Raporlar',
      description: 'E-posta performansını takip edin'
    }
  ];

  return (
    <div className="login">
      <div className="login-container">
        {/* Left Side - Login Form */}
        <div className="login-card">
          <div className="login-header">
            <div className="logo-container">
              <div className="logo">
                <span className="logo-icon">📧</span>
                <span className="logo-text">Mailsy</span>
              </div>
              <div className="logo-badge">Beta</div>
            </div>
            
            <h1 className="login-title">
              Shopier Hesabınızla
              <span className="gradient-text"> Giriş Yapın</span>
            </h1>
            
            <p className="login-subtitle">
              E-ticaret işletmeniz için profesyonel e-posta otomasyonu
            </p>
          </div>

          <div className="login-form">
            <button 
              className={`shopier-login-btn ${isLoading ? 'loading' : ''}`}
              onClick={handleShopierLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  <span>Bağlanıyor...</span>
                </>
              ) : (
                <>
                  <svg className="shopier-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span>Shopier ile Devam Et</span>
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            <div className="security-info">
              <div className="security-badge">
                <svg className="security-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>SSL ile korumalı güvenli bağlantı</span>
              </div>
            </div>
          </div>

          <div className="login-footer">
            <p className="terms-text">
              Devam ederek <a href="#" className="link">Kullanım Şartları</a> ve 
              <a href="#" className="link"> Gizlilik Politikası</a>'nı kabul etmiş olursunuz.
            </p>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="login-features">
          <div className="features-header">
            <h2 className="features-title">
              Neden <span className="gradient-text">Mailsy</span>?
            </h2>
            <p className="features-subtitle">
              E-ticaret işletmenizi büyütecek güçlü özellikler
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial">
            <div className="testimonial-content">
              <div className="testimonial-quote">
                "Mailsy sayesinde müşteri memnuniyetimiz %40 arttı. Otomatik e-posta sistemi harika çalışıyor!"
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👨‍💼</div>
                <div className="author-info">
                  <div className="author-name">Ahmet Yılmaz</div>
                  <div className="author-title">E-ticaret Uzmanı</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;