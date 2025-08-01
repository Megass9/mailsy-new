import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    emailsSent: 0,
    successRate: 0,
    revenue: 0
  });
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [emailModal, setEmailModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('shopier_access_token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    fetchUserData();
    fetchOrders();
  }, [navigate]);

  const fetchUserData = async () => {
    try {
      // Simulated user data - replace with actual API call
      setUser({
        name: 'Ahmet Yılmaz',
        email: 'ahmet@example.com',
        shopName: 'Yılmaz E-ticaret',
        memberSince: '2024'
      });
    } catch (error) {
      console.error('User data fetch error:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      setLoading(true);
      
      // Simulated orders data - replace with actual Shopier API call
      const mockOrders = [
        {
          id: 'ORD-2024-001',
          customerName: 'Mehmet Demir',
          customerEmail: 'mehmet@example.com',
          amount: 299.99,
          status: 'completed',
          date: '2024-01-15',
          products: ['Bluetooth Kulaklık', 'Telefon Kılıfı'],
          emailSent: true,
          emailStatus: 'delivered'
        },
        {
          id: 'ORD-2024-002',
          customerName: 'Ayşe Kaya',
          customerEmail: 'ayse@example.com',
          amount: 149.50,
          status: 'pending',
          date: '2024-01-14',
          products: ['Laptop Çantası'],
          emailSent: false,
          emailStatus: 'pending'
        },
        {
          id: 'ORD-2024-003',
          customerName: 'Can Özkan',
          customerEmail: 'can@example.com',
          amount: 599.00,
          status: 'completed',
          date: '2024-01-13',
          products: ['Akıllı Saat', 'Şarj Aleti'],
          emailSent: true,
          emailStatus: 'delivered'
        }
      ];

      setOrders(mockOrders);
      
      // Calculate stats
      setStats({
        totalOrders: mockOrders.length,
        emailsSent: mockOrders.filter(o => o.emailSent).length,
        successRate: 95.2,
        revenue: mockOrders.reduce((sum, order) => sum + order.amount, 0)
      });
      
    } catch (error) {
      console.error('Orders fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('shopier_access_token');
    localStorage.removeItem('shopier_refresh_token');
    localStorage.removeItem('shopier_token_type');
    localStorage.removeItem('shopier_expires_in');
    navigate('/');
  };

  const handleSendEmail = async (order) => {
    try {
      setSelectedOrder(order);
      setEmailModal(true);
      
      // Simulate email sending
      setTimeout(() => {
        const updatedOrders = orders.map(o => 
          o.id === order.id 
            ? { ...o, emailSent: true, emailStatus: 'delivered' }
            : o
        );
        setOrders(updatedOrders);
        setEmailModal(false);
        setSelectedOrder(null);
        
        // Update stats
        setStats(prev => ({
          ...prev,
          emailsSent: prev.emailsSent + 1
        }));
      }, 2000);
      
    } catch (error) {
      console.error('Email send error:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  const getEmailStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return '✅';
      case 'pending': return '⏳';
      case 'failed': return '❌';
      default: return '📧';
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Dashboard yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <span className="logo-icon">📧</span>
              <span className="logo-text">Mailsy</span>
            </div>
            <h1>Dashboard</h1>
          </div>
          
          <div className="header-right">
            <div className="user-info">
              <div className="user-avatar">
                <span>{user?.name?.charAt(0) || 'U'}</span>
              </div>
              <div className="user-details">
                <span className="user-name">{user?.name}</span>
                <span className="user-shop">{user?.shopName}</span>
              </div>
            </div>
            
            <button onClick={handleLogout} className="logout-btn">
              <svg className="logout-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Çıkış
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="dashboard-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon orders">
              <span>📦</span>
            </div>
            <div className="stat-content">
              <h3>Toplam Sipariş</h3>
              <div className="stat-number">{stats.totalOrders}</div>
              <div className="stat-change positive">+12% bu ay</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon emails">
              <span>📧</span>
            </div>
            <div className="stat-content">
              <h3>Gönderilen E-posta</h3>
              <div className="stat-number">{stats.emailsSent}</div>
              <div className="stat-change positive">+8% bu ay</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon success">
              <span>✅</span>
            </div>
            <div className="stat-content">
              <h3>Başarı Oranı</h3>
              <div className="stat-number">{stats.successRate}%</div>
              <div className="stat-change positive">+2.1% bu ay</div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon revenue">
              <span>💰</span>
            </div>
            <div className="stat-content">
              <h3>Toplam Gelir</h3>
              <div className="stat-number">₺{stats.revenue.toLocaleString()}</div>
              <div className="stat-change positive">+15% bu ay</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Hızlı İşlemler</h2>
        <div className="actions-grid">
          <button 
            className="action-card"
            onClick={() => navigate('/email-templates')}
          >
            <div className="action-icon">📝</div>
            <div className="action-content">
              <h3>E-posta Şablonları</h3>
              <p>Şablonları düzenle ve yönet</p>
            </div>
            <div className="action-arrow">→</div>
          </button>
          
          <button 
            className="action-card"
            onClick={() => navigate('/analytics')}
          >
            <div className="action-icon">📊</div>
            <div className="action-content">
              <h3>Analitik</h3>
              <p>Detaylı raporları görüntüle</p>
            </div>
            <div className="action-arrow">→</div>
          </button>
          
          <button 
            className="action-card"
            onClick={() => navigate('/settings')}
          >
            <div className="action-icon">⚙️</div>
            <div className="action-content">
              <h3>Ayarlar</h3>
              <p>Hesap ve bildirim ayarları</p>
            </div>
            <div className="action-arrow">→</div>
          </button>
        </div>
      </section>

      {/* Recent Orders */}
      <section className="recent-orders">
        <div className="section-header">
          <h2>Son Siparişler</h2>
          <button className="view-all-btn">
            Tümünü Gör
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
        
        <div className="orders-table">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-info">
                  <h3 className="order-number">#{order.id}</h3>
                  <span className={`order-status ${getStatusColor(order.status)}`}>
                    {order.status === 'completed' ? 'Tamamlandı' : 
                     order.status === 'pending' ? 'Beklemede' : 'İptal'}
                  </span>
                </div>
                <div className="order-amount">₺{order.amount}</div>
              </div>
              
              <div className="order-details">
                <p><strong>Müşteri:</strong> {order.customerName}</p>
                <p><strong>E-posta:</strong> {order.customerEmail}</p>
                <p><strong>Tarih:</strong> {order.date}</p>
                <p><strong>Ürünler:</strong> {order.products.join(', ')}</p>
                <p><strong>E-posta Durumu:</strong> {getEmailStatusIcon(order.emailStatus)} {order.emailStatus}</p>
              </div>
              
              <div className="order-actions">
                {!order.emailSent && (
                  <button 
                    onClick={() => handleSendEmail(order)}
                    className="email-btn"
                  >
                    📧 E-posta Gönder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;