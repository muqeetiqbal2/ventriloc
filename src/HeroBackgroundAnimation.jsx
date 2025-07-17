import React, { useRef, useEffect } from "react";

const curvePaths = [
  // Top curve
  "M10 50 Q 400 0 760 400 Q 1120 0 1510 50",
  // Bottom curve
  "M10 350 Q 400 300 760 700 Q 1120 300 1510 350"
];

const MenuBackgroundAnimation = () => {
  const highlightRefs = useRef([]);

  useEffect(() => {
    let frame = 0;
    let animId;
    function animate() {
      frame++;
      highlightRefs.current.forEach((highlight, i) => {
        if (highlight) {
          // Animate highlight along the path (faster)
          const totalLength = highlight.getTotalLength();
          const t = ((frame / 0.05) + i * 60) % totalLength;
          highlight.setAttribute("stroke-dasharray", `80 ${totalLength}`);
          highlight.setAttribute("stroke-dashoffset", totalLength - t);
        }
      });
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <svg width="100%" height="500" viewBox="0 0 1510 500" style={{ display: "block" }}>
      {/* Base curves */}
      {curvePaths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#84413a"
          strokeWidth="2"
          fill="none"
        />
      ))}
      {/* Animated highlights */}
      {curvePaths.map((d, i) => (
        <path
          key={"h" + i}
          ref={el => highlightRefs.current[i] = el}
          d={d}
          stroke="#FF682C"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

export default MenuBackgroundAnimation; 