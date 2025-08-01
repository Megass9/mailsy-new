import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const handleWatchDemo = () => {
    setShowDemoModal(true);
  };

  const closeDemoModal = () => {
    setShowDemoModal(false);
  };

  return (
    <div className='home'>
      <section className='hero'>
        <div className='hero-container'>
          <div className='hero-content'>
            <div className='hero-badge'>
              <span className='badge-text'>✨ Yeni Özellik:</span>
              <span className='badge-highlight'>AI destekli e-posta şablonları</span>
            </div>
            
            <h1 className='hero-title'>
              Shopier <br />
              Siparişleriniz İçin <br />
              <span className='gradient-text'>Otomatik E-posta Çözümü</span>
            </h1>
            
            <p className='hero-description'>
              Mailsy ile Shopier mağazanızdan gelen siparişler için 
              otomatik e-posta gönderimi yapın. Müşteri 
              memnuniyetini artırın, satışlarınızı büyütün.
            </p>
            
            <div className='hero-buttons'>
              <Link to='/login' className='hero-cta'>
                <span>Hemen Başla</span>
                <span className='btn-icon'>→</span>
              </Link>
              <button onClick={handleWatchDemo} className='demo-btn'>
                <span className='btn-icon'>▶</span>
                <span>Demo İzle</span>
              </button>
            </div>
            
            <div className='hero-stats'>
              <div className='stat-item'>
                <span className='stat-icon'>📧</span>
                <div className='stat-number'>10K+</div>
                <div className='stat-label'>Gönderilen E-posta</div>
              </div>
              <div className='stat-item'>
                <span className='stat-icon'>😊</span>
                <div className='stat-number'>500+</div>
                <div className='stat-label'>Mutlu Müşteri</div>
              </div>
              <div className='stat-item'>
                <span className='stat-icon'>⚡</span>
                <div className='stat-number'>99.9%</div>
                <div className='stat-label'>Uptime Garantisi</div>
              </div>
              <div className='stat-item'>
                <span className='stat-icon'>🔧</span>
                <div className='stat-number'>24/7</div>
                <div className='stat-label'>Destek</div>
              </div>
            </div>
          </div>
          
          <div className='hero-visual'>
            <div className='visual-container'>
              <div className='main-card'>
                <div className='card-header'>
                  <div className='card-avatar'>S</div>
                  <div className='card-info'>
                    <h3>Sipariş Onayı</h3>
                    <p>Yeni gönderilecek</p>
                  </div>
                </div>
                
                <div className='card-content'>
                  <div className='card-title'>⭐ Değerlendirme</div>
                  <div className='card-description'>
                    Yeni gönderilecek e-posta şablonu
                  </div>
                </div>
                
                <div className='card-status'>
                  <div className='status-icon'></div>
                  <span>Planlandı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='features'>
        <div className='features-container'>
          <div className='section-header'>
            <h2 className='section-title'>Neden Mailsy?</h2>
            <p className='section-description'>
              E-ticaret işletmeniz için özel olarak tasarlanmış güçlü özellikler
            </p>
          </div>
          
          <div className='features-grid'>
            <div className='feature-card'>
              <div className='feature-icon'>
                <span>🚀</span>
              </div>
              <h3 className='feature-title'>Otomatik Gönderim</h3>
              <p className='feature-description'>
                Shopier&apos;dan gelen siparişler için otomatik olarak e-posta gönderimi yapın. 
                Manuel işlem gerektirmez.
              </p>
            </div>
            
            <div className='feature-card'>
              <div className='feature-icon'>
                <span>🎨</span>
              </div>
              <h3 className='feature-title'>Özelleştirilebilir Şablonlar</h3>
              <p className='feature-description'>
                Markanıza uygun, profesyonel e-posta şablonları oluşturun. 
                Drag & drop editör ile kolayca düzenleyin.
              </p>
            </div>
            
            <div className='feature-card'>
              <div className='feature-icon'>
                <span>📊</span>
              </div>
              <h3 className='feature-title'>Detaylı Analitik</h3>
              <p className='feature-description'>
                E-posta açılma oranları, tıklama istatistikleri ve müşteri 
                etkileşimlerini takip edin.
              </p>
            </div>
            
            <div className='feature-card'>
              <div className='feature-icon'>
                <span>🔒</span>
              </div>
              <h3 className='feature-title'>Güvenli & Hızlı</h3>
              <p className='feature-description'>
                SSL şifreleme ile güvenli veri transferi. Yüksek performanslı 
                sunucular ile hızlı e-posta gönderimi.
              </p>
            </div>
            
            <div className='feature-card'>
              <div className='feature-icon'>
                <span>🔧</span>
              </div>
              <h3 className='feature-title'>Kolay Entegrasyon</h3>
              <p className='feature-description'>
                Shopier hesabınızı tek tıkla bağlayın. Karmaşık kurulum 
                gerektirmez, hemen kullanmaya başlayın.
              </p>
            </div>
            
            <div className='feature-card'>
              <div className='feature-icon'>
                <span>💬</span>
              </div>
              <h3 className='feature-title'>7/24 Destek</h3>
              <p className='feature-description'>
                Uzman destek ekibimiz her zaman yanınızda. Canlı chat, 
                e-posta ve telefon desteği.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='cta-section'>
        <div className='cta-container'>
          <div className='cta-content'>
            <h2 className='cta-title'>
              Hemen Başlayın
            </h2>
            <p className='cta-description'>
              Shopier mağazanız için otomatik e-posta gönderimini bugün başlatın. 
              Ücretsiz deneme ile tüm özellikleri keşfedin.
            </p>
            <Link to='/login' className='cta-button'>
              <span>Ücretsiz Başla</span>
              <span className='btn-icon'>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="demo-modal-overlay" onClick={closeDemoModal}>
          <div className="demo-modal" onClick={(e) => e.stopPropagation()}>
            <div className="demo-modal-header">
              <h3>📹 Mailsy Demo Video</h3>
              <button className="close-btn" onClick={closeDemoModal}>×</button>
            </div>
            <div className="demo-modal-content">
              <div className="demo-video-placeholder">
                <div className="video-icon">🎬</div>
                <h4>Demo Video Yakında!</h4>
                <p>Mailsy&apos;nin tüm özelliklerini gösteren demo videomuz hazırlanıyor.</p>
                <div className="demo-features">
                  <div className="demo-feature">
                    <span className="feature-check">✅</span>
                    <span>Shopier entegrasyonu</span>
                  </div>
                  <div className="demo-feature">
                    <span className="feature-check">✅</span>
                    <span>Otomatik e-posta gönderimi</span>
                  </div>
                  <div className="demo-feature">
                    <span className="feature-check">✅</span>
                    <span>Şablon özelleştirme</span>
                  </div>
                  <div className="demo-feature">
                    <span className="feature-check">✅</span>
                    <span>Analitik dashboard</span>
                  </div>
                </div>
                <div className="demo-actions">
                  <Link to="/login" className="demo-cta" onClick={closeDemoModal}>
                    Hemen Başla
                  </Link>
                  <button onClick={closeDemoModal} className="demo-close">
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;