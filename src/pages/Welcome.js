import React from 'react';
import '../Welcome.css';

export default function Welcome() {
  return (
    <div className="Welcome-container">
      <header className="Welcome-header">
        <img src="/header.png" alt="Header" className="header-image" />
        <h1 className="Welcome-title">Restful Web Services</h1>
        <p className="Welcome-description">
        Welcome to Team 5's Restful Web Services System! This platform demonstrates how REST APIs can be utilized to perform Create, Read, Update, and Delete (CRUD) operations on user data.        </p>
      </header>
    </div>
  );
}
