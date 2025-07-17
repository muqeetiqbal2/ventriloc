import React, { useEffect, useRef } from "react";
import styles from "./StackingCards.module.css";

const cardData = [
  {
    title: "Cloud Services",
    description: "Scalable and secure cloud infrastructure for enterprises. Cloud migration, DevOps, and maintenance.",
    info: ["AWS & Azure", "Cloud Migration", "CI/CD Pipelines"],
  },
  {
    title: "Integration Services",
    description: "Seamlessly connect your apps, systems, and data across platforms to boost productivity and automation.",
    info: ["API Integration", "Data Sync", "Legacy Support"],
  },
  {
    title: "Product Development",
    description: "We build reliable digital products from idea to launch. UX, development, testing, and scaling.",
    info: ["MVP Building", "UI/UX Design", "Agile Teams"],
  },
  {
    title: "Security Services",
    description: "Comprehensive cybersecurity solutions. Threat detection, prevention, and compliance strategies.",
    info: ["Pen Testing", "Zero Trust", "Compliance"],
  },
];

const StackingCards = () => {
  const cardsRef = useRef([]);
  const currentIndex = useRef(0);
  const busy = useRef(false);
  const ANIMATION_DELAY = 1200;

  useEffect(() => {
    function showCard(index) {
      cardsRef.current.forEach((card, i) => {
        card.classList.remove(styles.cardVisible, styles.cardPeek);
        card.style.zIndex = 0;
        card.style.transform = "";
        if (i < index) {
          card.classList.add(styles.cardPeek);
          card.style.zIndex = 10 + i;
          card.style.transform = `translateY(${-40 * (index - i)}px) scale(0.97)`;
          card.style.opacity = 1;
        } else if (i === index) {
          card.classList.add(styles.cardVisible);
          card.style.zIndex = 100;
          card.style.transform = "translateY(0) scale(1)";
          card.style.opacity = 1;
        } else {
          card.style.opacity = 0;
          card.style.transform = "translateY(100vh) scale(0.95)";
        }
      });
      // Scroll lock logic
      if (index > 0 && index < cardsRef.current.length - 1) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
    function wheelHandler(e) {
      if (busy.current) return;
      if (e.deltaY > 0 && currentIndex.current < cardsRef.current.length - 1) {
        busy.current = true;
        currentIndex.current++;
        showCard(currentIndex.current);
        setTimeout(() => { busy.current = false; }, ANIMATION_DELAY);
      } else if (e.deltaY < 0 && currentIndex.current > 0) {
        busy.current = true;
        currentIndex.current--;
        showCard(currentIndex.current);
        setTimeout(() => { busy.current = false; }, ANIMATION_DELAY);
      }
    }
    window.addEventListener('wheel', wheelHandler, { passive: false });
    // Initial show
    showCard(0);
    return () => {
      window.removeEventListener('wheel', wheelHandler);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.stackingCardsRoot}>
      <div className={styles.cardContainer} id="cardContainer">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            ref={el => cardsRef.current[idx] = el}
            className={
              `${styles.card} ${idx === 0 ? styles.cardVisible : ""}`
            }
          >
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
            <div className={styles.infoBoxes}>
              {card.info.map((info, i) => (
                <div className={styles.info} key={i}>{info}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackingCards; 