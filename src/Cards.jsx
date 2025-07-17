import React, { useEffect, useRef } from 'react';
import './cards.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  { label: 'Card 1', rotate: -10, rotateTo: -5, bg: '#EBD4C9', color: '#401D19' },
  { label: 'Card 2', rotate: 0, rotateTo: 5, bg: '#816729', color: '#fff' },
  { label: 'Card 3', rotate: -25, rotateTo: -10, bg: '#1f3138', color: '#fff' },
  { label: 'Card 4', rotate: 5, rotateTo: 15, bg: '#FF682C', color: '#fff' }
];

const Cards = () => {
  const wrapperRef = useRef();
  const contentRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    const scrollContent = contentRef.current;
    const cards = cardRefs.current;
    const card = cards[0];
    const numCards = cards.length;
    const cardWidth = card.offsetWidth;
    const gap = 0;
    const totalScroll = (cardWidth * numCards + gap * (numCards - 1)) - window.innerWidth;

    // Horizontal scroll animation
    gsap.to(scrollContent, {
      x: () => -totalScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: () => '+=' + totalScroll,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });

    // Animate margin to zero as scroll progresses
    gsap.to(cards, {
      marginLeft: -20,
      marginRight: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: () => '+=' + totalScroll,
        scrub: true
      }
    });

    // Rotation animation for each card
    cards.forEach((card, i) => {
      const initial = cardData[i].rotate;
      const target = cardData[i].rotateTo;
      gsap.fromTo(card,
        { rotation: initial },
        {
          rotation: target,
          scrollTrigger: {
            trigger: card,
            start: 'left center',
            end: 'right center',
            scrub: true
          }
        }
      );
    });
  }, []);

  return (
    <section className="section-dark">
      <div className="horizontal-scroll-wrapper" ref={wrapperRef}>
        <div className="horizontal-scroll-content" ref={contentRef}>
          {cardData.map((card, i) => (
            <div
              className="card"
              key={i}
              ref={el => cardRefs.current[i] = el}
              style={{ backgroundColor: card.bg, color: card.color }}
              data-rotate={card.rotate}
              data-rotate-to={card.rotateTo}
            >
              {card.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards; 
