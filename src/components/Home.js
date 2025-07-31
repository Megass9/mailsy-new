import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Mailsy</h1>
        <p>E-ticaret siparişlerinizi otomatik e-posta ile yönetin</p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">
            Shopier ile Giriş Yap
          </Link>
          <Link to="/dashboard" className="btn btn-secondary">
            Demo Görüntüle
          </Link>
        </div>
      </div>
      
      <div className="features">
        <h2>Özellikler</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🚀 Otomatik E-posta</h3>
            <p>Siparişler için otomatik e-posta gönderimi</p>
          </div>
          <div className="feature-card">
            <h3>📊 Sipariş Takibi</h3>
            <p>Tüm siparişlerinizi tek yerden takip edin</p>
          </div>
          <div className="feature-card">
            <h3>🔗 Shopier Entegrasyonu</h3>
            <p>Shopier hesabınızla kolay entegrasyon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;