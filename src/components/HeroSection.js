import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
<img src={`${process.env.PUBLIC_URL}/videos/a.png`} alt="a.png" />
<h1>Mustafa Karataş</h1>
    </div>
  );
}

export default HeroSection;