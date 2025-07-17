import React from 'react';
import './HeroSection.css';
import HeroBackgroundAnimation from './HeroBackgroundAnimation.jsx';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-bg-animation">
      <HeroBackgroundAnimation />
    </div>
    <div className="hero-content">
      <h1 className="hero-headline">
        <span className="hero-anim-left"><span className="hero-orange">together</span> <span className="hero-light">we</span></span><br />
        <span className="hero-anim-right"><span className="hero-light">let's transform your data</span></span><br />
        <span className="hero-anim-left2"><span className="hero-light">in</span> <span className="hero-orange">value</span><span className="hero-light">.</span></span>
      </h1>
      <button className="hero-cta-btn hero-anim-btn">
        Let's work together <span className="hero-cta-arrow">❯</span>
      </button>
    </div>
  </section>
);

export default HeroSection; 