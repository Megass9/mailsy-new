import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '📧',
      title: 'Otomatik E-posta Gönderimi',
      description: 'Shopier siparişleriniz için otomatik olarak müşterilerinize e-posta gönderin.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Hızlı Entegrasyon',
      description: 'Shopier hesabınızla tek tıkla bağlanın ve hemen kullanmaya başlayın.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📊',
      title: 'Detaylı Raporlama',
      description: 'Gönderilen e-postaları takip edin ve performans raporlarını görüntüleyin.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🎨',
      title: 'Özelleştirilebilir Şablonlar',
      description: 'Markanıza uygun e-posta şablonları oluşturun ve düzenleyin.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🔒',
      title: 'Güvenli Bağlantı',
      description: 'Verileriniz SSL şifreleme ile korunur ve güvenli bir şekilde işlenir.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '📱',
      title: 'Mobil Uyumlu',
      description: 'Tüm cihazlardan erişilebilir, responsive tasarım ile her yerde kullanın.',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Gönderilen E-posta', icon: '📧' },
    { number: '500+', label: 'Mutlu Müşteri', icon: '😊' },
    { number: '99.9%', label: 'Uptime Garantisi', icon: '⚡' },
    { number: '24/7', label: 'Destek', icon: '🛟' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content animate-slideInUp">
            <div className="hero-badge">
              <span className="badge-text">🚀 Yeni Özellik</span>
              <span className="badge-highlight">AI destekli e-posta şablonları</span>
            </div>
            
            <h1 className="hero-title">
              Shopier Siparişleriniz İçin
              <span className="gradient-text"> Otomatik E-posta </span>
              Çözümü
            </h1>
            
            <p className="hero-description">
              Mailsy ile Shopier mağazanızdan gelen siparişler için otomatik e-posta gönderimi yapın. 
              Müşteri memnuniyetini artırın, satışlarınızı büyütün.
            </p>
            
            <div className="hero-buttons">
              <Link to="/login" className="btn btn-primary btn-lg hero-cta">
                <span>Hemen Başla</span>
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <button className="btn btn-secondary btn-lg demo-btn">
                <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Demo İzle</span>
              </button>
            </div>
            
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="visual-container">
              <div className="floating-card card-1">
                <div className="card-header">
                  <div className="card-avatar">📧</div>
                  <div>
                    <div className="card-title">Sipariş Onayı</div>
                    <div className="card-subtitle">Otomatik gönderildi</div>
                  </div>
                </div>
                <div className="card-status success">✓ Teslim edildi</div>
              </div>
              
              <div className="floating-card card-2">
                <div className="card-header">
                  <div className="card-avatar">🛍️</div>
                  <div>
                    <div className="card-title">Kargo Bildirimi</div>
                    <div className="card-subtitle">2 dakika önce</div>
                  </div>
                </div>
                <div className="card-status pending">⏳ Gönderiliyor</div>
              </div>
              
              <div className="floating-card card-3">
                <div className="card-header">
                  <div className="card-avatar">⭐</div>
                  <div>
                    <div className="card-title">Değerlendirme</div>
                    <div className="card-subtitle">Yarın gönderilecek</div>
                  </div>
                </div>
                <div className="card-status scheduled">📅 Planlandı</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">
              Neden <span className="gradient-text">Mailsy</span>?
            </h2>
            <p className="section-description">
              E-ticaret işletmenizi bir üst seviyeye taşıyacak güçlü özellikler
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card animate-slideInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`feature-icon bg-gradient-to-r ${feature.color}`}>
                  <span>{feature.icon}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-arrow">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Hemen başlayın ve müşteri memnuniyetinizi artırın
            </h2>
            <p className="cta-description">
              Shopier mağazanız için profesyonel e-posta otomasyonu kurmanız sadece birkaç dakika sürer.
            </p>
            <Link to="/login" className="btn btn-primary btn-lg cta-button">
              <span>Ücretsiz Dene</span>
              <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;