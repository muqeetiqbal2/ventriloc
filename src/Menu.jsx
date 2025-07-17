import React, { useState } from "react";
import styles from "./Menu.module.css";
import ServicesDropdown from "./ServicesDropdown";
import ContactDropdown from "./ContactDropdown";

const Menu = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setDropdownActive((prev) => !prev);
  };

  const handleContactClick = () => {
    setContactOpen(true);
  };

  return (
    <div className={styles.menuRoot} id="full-screen-div">
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className="logo">
          <p>Logo here</p>
          {/* <img src="ventriloc-logo.png" alt="Ventrilo Logo" /> */}
        </div>
        <nav className={styles.menu}>
          <a
            href="#"
            className="toggle-chevron"
            data-target="servicesPanel"
            onClick={handleServicesClick}
          >
            Services
            <i
              className={`fa-solid fa-chevron-down chevron ${styles.chevron} ${dropdownActive ? styles.rotate + " rotate" : ""}`}
            ></i>
          </a>
          <a href="#">Contact</a>
          <a href="#">in</a>
        </nav>
        <button className={styles.contactBtn + " contact-btn"} onClick={handleContactClick}>Contact us</button>
      </header>
      {/* Main dropdown */}
      <ServicesDropdown active={dropdownActive} />
      {/* Contact dropdown */}
      <ContactDropdown open={contactOpen} onClose={() => setContactOpen(false)} />
      {/* Sub dropdown and other content can be added here */}
    </div>
  );
};

export default Menu; 