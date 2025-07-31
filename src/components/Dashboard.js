import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulated data for demo
    const demoOrders = [
      {
        id: 1,
        orderNumber: 'ORD-2024-001',
        customerName: 'Ahmet Yılmaz',
        customerEmail: 'ahmet@example.com',
        amount: 299.99,
        status: 'completed',
        date: '2024-01-15',
        products: ['Bluetooth Kulaklık', 'Telefon Kılıfı']
      },
      {
        id: 2,
        orderNumber: 'ORD-2024-002',
        customerName: 'Ayşe Demir',
        customerEmail: 'ayse@example.com',
        amount: 149.50,
        status: 'pending',
        date: '2024-01-16',
        products: ['Laptop Çantası']
      },
      {
        id: 3,
        orderNumber: 'ORD-2024-003',
        customerName: 'Mehmet Kaya',
        customerEmail: 'mehmet@example.com',
        amount: 89.99,
        status: 'shipped',
        date: '2024-01-17',
        products: ['Wireless Mouse']
      }
    ];

    setTimeout(() => {
      setOrders(demoOrders);
      setUser({ name: 'Demo Kullanıcı', email: 'demo@mailsy.com' });
      setLoading(false);
    }, 1000);
  }, []);

  const sendEmail = async (order) => {
    try {
      // Simulated email sending
      alert(`${order.customerName} için e-posta gönderildi!`);
    } catch (error) {
      alert('E-posta gönderilirken hata oluştu!');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#28a745';
      case 'pending': return '#ffc107';
      case 'shipped': return '#17a2b8';
      default: return '#6c757d';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Tamamlandı';
      case 'pending': return 'Beklemede';
      case 'shipped': return 'Kargoda';
      default: return 'Bilinmiyor';
    }
  };

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Mailsy Dashboard</h1>
        {user && (
          <div className="user-info">
            <span>Hoş geldin, {user.name}</span>
            <button className="logout-btn">Çıkış</button>
          </div>
        )}
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Toplam Sipariş</h3>
          <p className="stat-number">{orders.length}</p>
        </div>
        <div className="stat-card">
          <h3>Bu Ay Gelir</h3>
          <p className="stat-number">₺{orders.reduce((sum, order) => sum + order.amount, 0).toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <h3>Gönderilen E-posta</h3>
          <p className="stat-number">12</p>
        </div>
      </div>

      <div className="orders-section">
        <h2>Son Siparişler</h2>
        <div className="orders-table">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <span className="order-number">{order.orderNumber}</span>
                <span 
                  className="order-status"
                  style={{ backgroundColor: getStatusColor(order.status) }}
                >
                  {getStatusText(order.status)}
                </span>
              </div>
              
              <div className="order-details">
                <p><strong>Müşteri:</strong> {order.customerName}</p>
                <p><strong>E-posta:</strong> {order.customerEmail}</p>
                <p><strong>Tutar:</strong> ₺{order.amount}</p>
                <p><strong>Tarih:</strong> {order.date}</p>
                <p><strong>Ürünler:</strong> {order.products.join(', ')}</p>
              </div>
              
              <div className="order-actions">
                <button 
                  onClick={() => sendEmail(order)}
                  className="email-btn"
                >
                  📧 E-posta Gönder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;