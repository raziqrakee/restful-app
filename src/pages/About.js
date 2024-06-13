import React from 'react';
import '../About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Project</h1>
      <div className="about-content">
        <h2>Subject Information</h2>
        <p><strong>Code:</strong> SECJ4383 </p>
        <p><strong>Name:</strong> Software Construction </p>
        <p><strong>Lecturer:</strong> Dr. Shahliza Abd Halim </p>

        <h2>Team Information</h2>
        <p><strong>Team Number:</strong> 5 </p>
        
        <h3>Group Members</h3>
        <ul>
          <li> Muhammad Zuhair Aza’im Bin Rosli - B21EC0040</li>
          <li> Mohamad Raziq Bin Rakee - B21EC0026</li>
          <li> Iman Naili Binti Ahmad Isyak - B21EC0021</li>
          <li> Nurin Khairina Binti Musa - B21EC0048</li>
        </ul>
      </div>
    </div>
  );
}
