import React from 'react';
import Cards from './Cards.jsx';
import LogoSliders from './LogoSliders.jsx';
import Menu from './Menu.jsx';
import StackingCards from './StackingCards.jsx';
import HeroSection from './HeroSection.jsx';
import FAQ from './FAQ.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <HeroSection />
      <StackingCards />
      {/* <Cards /> */}
      <LogoSliders />
      <FAQ />
    </div>
  );
}

export default App;
