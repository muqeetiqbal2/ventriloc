import React, { useEffect } from "react";

const LogoSliders = () => {
  useEffect(() => {
    const track = document.getElementById('slider-track');
    const wrapper = document.querySelector('.slider-wrapper');
    const logos = Array.from(track.children);
    function fillTrack() {
      let trackWidth = track.scrollWidth;
      const wrapperWidth = wrapper.offsetWidth;
      while (trackWidth < wrapperWidth * 2) {
        logos.forEach(logo => {
          const clone = logo.cloneNode(true);
          track.appendChild(clone);
        });
        trackWidth = track.scrollWidth;
      }
    }
    fillTrack();
    let pos = 0;
    const speed = 1;
    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= track.scrollWidth / 2) {
        pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
      while (track.children.length > logos.length) {
        track.removeChild(track.lastChild);
      }
      fillTrack();
    });
    return () => {
      window.removeEventListener('resize', fillTrack);
    };
  }, []);

  return (
    <>
      <style>{`
        body { margin: 0; padding: 0; background: #401D19; font-family: Arial, sans-serif; color: #F5E9E6; }
        .section-title { font-size: 24px; font-weight: 400; color: #F5E9E6; text-align: left; margin: 40px 0 40px 60px; }
        .sliders { display: flex; flex-direction: column; gap: 0px; max-width: 100%; }
        .slider-wrapper { overflow: hidden; width: 100vw; background: transparent; margin: 0 auto; margin-bottom: 40px; }
        .slider-track { display: flex; align-items: center; gap: 60px; width: max-content; animation: scroll-left 25s linear infinite; }
        .slider-track img { width: 140px; height: auto; object-fit: contain; filter: brightness(0) invert(1) grayscale(1); opacity: 0.9; transition: filter 0.3s, opacity 0.3s; }
        .slider-track img:hover { filter: brightness(1) invert(0.9) grayscale(0.2); opacity: 1; }
        .scroll-left { animation: scroll-left 25s linear infinite; }
        .scroll-right { animation: scroll-right 25s linear infinite; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>
      <div className="section-title">Strategic partner of</div>
      <div className="sliders">
        <div className="slider-wrapper">
          <div className="slider-track" id="slider-track">
            <img src="logo1.png" alt="Logo 1" />
            <img src="logo2.png" alt="Logo 2" />
            <img src="logoN.png" alt="Logo N" />
            <img src="logo1.png" alt="Logo 1" />
            <img src="logo2.png" alt="Logo 2" />
            <img src="logoN.png" alt="Logo N" />
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="slider-track scroll-right">
            <img src="https://via.placeholder.com/120x50?text=Logo+A" alt="Logo A" />
            <img src="https://via.placeholder.com/120x50?text=Logo+B" alt="Logo B" />
            <img src="https://via.placeholder.com/120x50?text=Logo+C" alt="Logo C" />
            <img src="https://via.placeholder.com/120x50?text=Logo+D" alt="Logo D" />
            <img src="https://via.placeholder.com/120x50?text=Logo+E" alt="Logo E" />
            <img src="https://via.placeholder.com/120x50?text=Logo+A" alt="Logo A" />
            <img src="https://via.placeholder.com/120x50?text=Logo+B" alt="Logo B" />
            <img src="https://via.placeholder.com/120x50?text=Logo+C" alt="Logo C" />
            <img src="https://via.placeholder.com/120x50?text=Logo+D" alt="Logo D" />
            <img src="https://via.placeholder.com/120x50?text=Logo+E" alt="Logo E" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSliders; 