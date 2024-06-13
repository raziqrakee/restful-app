import React from 'react';
import '../Welcome.css';

export default function Welcome() {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <img src="/header.png" alt="Header" className="header-image" />
        <h1 className="welcome-title">Restful Web Services</h1>
        <p className="welcome-description">
          Welcome to Team 5's Restful Web Services System! This platform demonstrates how REST APIs can be utilized to perform Create, Read, Update, and Delete (CRUD) operations on user data.
        </p>
        <p className="welcome-framework">
          <strong>Front-End Framework:</strong> React
        </p>
        <p className="welcome-framework">
          <strong>Back-End Framework:</strong> Spring Boot
        </p>
      </header>
    </div>
  );
}

