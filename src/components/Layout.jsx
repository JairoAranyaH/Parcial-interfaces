import React from 'react';
import './Layout.css';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({ children, currentPage, onPageChange }) {
  return (
    <div className="layout">
      <Header onNavigateToHome={() => onPageChange('inicio')} />
      <div className="layout-container">
        <Sidebar currentPage={currentPage} onPageChange={onPageChange} />
        <main className="layout-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;