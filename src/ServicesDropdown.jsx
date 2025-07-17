import React from "react";
import styles from "./Menu.module.css";
import {
  CloudServicesSVG,
  IntegrationServicesSVG,
  ProductDevelopmentSVG,
  SecurityServicesSVG,
} from "./AnimatedServiceSVGs";

const serviceCards = [
  {
    title: "Cloud Services",
    SVG: CloudServicesSVG,
  },
  {
    title: "Integration Services",
    SVG: IntegrationServicesSVG,
  },
  {
    title: "Product Development",
    SVG: ProductDevelopmentSVG,
  },
  {
    title: "Security Services",
    SVG: SecurityServicesSVG,
  },
];

const ServicesDropdown = ({ active }) => (
  <div
    id="servicesPanel"
    className={
      styles.dropdownPanel +
      " dropdown-panel" +
      (active ? " " + styles.dropdownPanelActive + " active" : "")
    }
    style={{ display: active ? "flex" : "none", flexDirection: "column" }}
  >
    <div className={styles.subpanelBlocks + " subpanel-blocks"}>
      {serviceCards.map((card, idx) => {
        const SVG = card.SVG;
        return (
          <div className={styles.subpanelBlock + " subpanel-block"} key={idx}>
            <h3>{card.title}</h3>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <SVG />
            </div>
          </div>
        );
      })}
    </div>
    {/* Book an appointment section */}
    <div style={{
      width: "100%",
      background: "#F8DED4",
      borderBottomLeftRadius: 14,
      borderBottomRightRadius: 14,
      padding: "18px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 24,
      marginTop: "auto"
    }}>
      <span style={{ color: "#FF682C", fontSize: 28, fontWeight: 400, marginRight: 24 }}>
        Let's work Together
      </span>
      <button style={{
        background: "#FF682C",
        color: "#fff",
        border: "none",
        borderRadius: 24,
        fontSize: 20,
        fontWeight: 500,
        padding: "8px 16px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(255,104,44,0.08)",
        transition: "background 0.2s"
      }}>
        Book an appointment
      </button>
    </div>
  </div>
);

export default ServicesDropdown; 