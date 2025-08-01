import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AuthCallback from './components/AuthCallback';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('shopier_access_token');
  return token ? children : <Navigate to="/login" replace />;
};

// Public Route Component (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('shopier_access_token');
  return !token ? children : <Navigate to="/dashboard" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            } 
          />
          
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            } 
          />
          
          {/* Auth Callback Route */}
          <Route path="/auth/callback" element={<AuthCallback />} />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          {/* Future Protected Routes */}
          <Route 
            path="/email-templates" 
            element={
              <ProtectedRoute>
                <div className="coming-soon">
                  <h2>📝 E-posta Şablonları</h2>
                  <p>Bu özellik yakında gelecek!</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/analytics" 
            element={
              <ProtectedRoute>
                <div className="coming-soon">
                  <h2>📊 Analitik</h2>
                  <p>Bu özellik yakında gelecek!</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <div className="coming-soon">
                  <h2>⚙️ Ayarlar</h2>
                  <p>Bu özellik yakında gelecek!</p>
                </div>
              </ProtectedRoute>
            } 
          />
          
          {/* 404 Route */}
          <Route 
            path="*" 
            element={
              <div className="not-found">
                <div className="not-found-content">
                  <h1>404</h1>
                  <h2>Sayfa Bulunamadı</h2>
                  <p>Aradığınız sayfa mevcut değil.</p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="home-btn"
                  >
                    Ana Sayfaya Dön
                  </button>
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;