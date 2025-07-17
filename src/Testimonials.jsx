import React, { useEffect, useRef } from 'react';
import './Testimonials.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    content: (
      <>
        <blockquote>
          “Ventriloc exceeded our expectations with their data solutions. The team was professional, responsive, and delivered on time!”
        </blockquote>
        <div className="testimonial-author">
          <span className="testimonial-name">Sarah Johnson</span>
          <span className="testimonial-role">Head of Analytics, Acme Corp</span>
        </div>
      </>
    ),
    rotate: -10,
    rotateTo: -5,
    bg: '#EBD4C9',
    color: '#401D19'
  },
  {
    content: (
      <>
        <blockquote>
          “The expertise and support from Ventriloc helped us transform our business intelligence. Highly recommended!”
        </blockquote>
        <div className="testimonial-author">
          <span className="testimonial-name">Michael Lee</span>
          <span className="testimonial-role">BI Manager, DataWorks</span>
        </div>
      </>
    ),
    rotate: 0,
    rotateTo: 5,
    bg: '#816729',
    color: '#fff'
  },
  {
    content: (
      <>
        <blockquote>
          “We saw immediate value from Ventriloc’s solutions. Their team is knowledgeable and a pleasure to work with.”
        </blockquote>
        <div className="testimonial-author">
          <span className="testimonial-name">Emily Chen</span>
          <span className="testimonial-role">Operations Director, Insightful Inc.</span>
        </div>
      </>
    ),
    rotate: -25,
    rotateTo: -10,
    bg: '#1f3138',
    color: '#fff'
  },
  {
    content: (
      <button className="testimonial-contact-btn">Contact Us</button>
    ),
    rotate: 5,
    rotateTo: 15,
    bg: '#FF682C',
    color: '#fff'
  }
];

const Testimonials = () => {
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
      const initial = testimonials[i].rotate;
      const target = testimonials[i].rotateTo;
      gsap.fromTo(card,
        { rotation: initial },
        {
          rotation: target,
          scrollTrigger: {
            trigger: card,
            containerAnimation: ScrollTrigger.getById('scrollTrack'),
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
          {testimonials.map((t, i) => (
            <div
              className="card testimonial-card"
              key={i}
              ref={el => cardRefs.current[i] = el}
              style={{ backgroundColor: t.bg, color: t.color }}
              data-rotate={t.rotate}
              data-rotate-to={t.rotateTo}
            >
              {t.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 