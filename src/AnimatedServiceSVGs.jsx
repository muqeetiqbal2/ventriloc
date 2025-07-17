import React, { useEffect, useRef } from "react";

const ORANGE = "#FF682C";

// Cloud Services: Pulsing/floating dots
export function CloudServicesSVG() {
  const dots = [
    { cx: 50, cy: 50 }, { cx: 150, cy: 50 }, { cx: 250, cy: 50 },
    { cx: 50, cy: 150 }, { cx: 150, cy: 150 }, { cx: 250, cy: 150 },
    { cx: 50, cy: 250 }, { cx: 150, cy: 250 }, { cx: 250, cy: 250 },
  ];
  const dotRefs = useRef([]);
  useEffect(() => {
    let frame = 0;
    let animId;
    function animate() {
      frame++;
      dotRefs.current.forEach((dot, i) => {
        if (dot) {
          const phase = (frame / 20) + i;
          dot.setAttribute("r", 4 + 2 * Math.sin(phase));
        }
      });
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      <g>
        <rect x="50" y="50" width="200" height="200" stroke={ORANGE} strokeWidth="1" />
        <line x1="150" y1="50" x2="150" y2="250" stroke={ORANGE} strokeWidth="1" />
        <line x1="50" y1="150" x2="250" y2="150" stroke={ORANGE} strokeWidth="1" />
        {dots.map((d, i) => (
          <circle key={i} ref={el => dotRefs.current[i] = el} cx={d.cx} cy={d.cy} r={4} fill={ORANGE} />
        ))}
      </g>
    </svg>
  );
}

// Integration Services: Interlocking chain links with animated dots and thickening
export function IntegrationServicesSVG() {
  const leftRef = useRef();
  const rightRef = useRef();
  const dotRef = useRef();
  const dot2Ref = useRef();
  const [thick, setThick] = React.useState(8);
  useEffect(() => {
    let frame = 0;
    let animId;
    function animate() {
      frame++;
      // Animate thickness
      const thickness = 8 + 6 * Math.abs(Math.sin(frame / 40));
      setThick(thickness);
      // Animate dots moving along ellipses
      if (dotRef.current) {
        const t = (frame / 60) % 1;
        const angle = 2 * Math.PI * t;
        const x = 120 + Math.cos(angle) * 50;
        const y = 150 + Math.sin(angle) * 30;
        dotRef.current.setAttribute("cx", x);
        dotRef.current.setAttribute("cy", y);
      }
      if (dot2Ref.current) {
        const t = ((frame / 60) + 0.5) % 1;
        const angle = 2 * Math.PI * t;
        const x = 180 + Math.cos(angle) * 50;
        const y = 150 + Math.sin(angle) * 30;
        dot2Ref.current.setAttribute("cx", x);
        dot2Ref.current.setAttribute("cy", y);
      }
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      <g>
        {/* Two interlocking chain links */}
        <ellipse ref={leftRef} cx="120" cy="150" rx="50" ry="30" stroke={ORANGE} strokeWidth={thick} fill="none" />
        <ellipse ref={rightRef} cx="180" cy="150" rx="50" ry="30" stroke={ORANGE} strokeWidth={thick} fill="none" transform="rotate(20 180 150)" />
        {/* Animated dots */}
        <circle ref={dotRef} r={10} fill={ORANGE} opacity={0.7} />
        <circle ref={dot2Ref} r={10} fill={ORANGE} opacity={0.7} />
      </g>
    </svg>
  );
}

// Product Development: Animated gear
export function ProductDevelopmentSVG() {
  const gearRef = useRef();
  useEffect(() => {
    let angle = 0;
    let animId;
    function animate() {
      angle += 2;
      if (gearRef.current) {
        gearRef.current.setAttribute("transform", `rotate(${angle} 150 150)`);
      }
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);
  // Simple gear shape
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      <g ref={gearRef}>
        <circle cx="150" cy="150" r="60" stroke={ORANGE} strokeWidth="12" fill="none" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          const x1 = 150 + Math.cos(angle) * 60;
          const y1 = 150 + Math.sin(angle) * 60;
          const x2 = 150 + Math.cos(angle) * 80;
          const y2 = 150 + Math.sin(angle) * 80;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={ORANGE} strokeWidth="10" />;
        })}
        <circle cx="150" cy="150" r="20" fill={ORANGE} />
      </g>
    </svg>
  );
}

// Security Services: Electronic shield with thick, glowing, attractive border and animated circuit lines
export function SecurityServicesSVG() {
  const shieldRef = useRef();
  const shieldGlowRef = useRef();
  const circuitRef1 = useRef();
  const circuitRef2 = useRef();
  const circuitDotRef = useRef();
  const [glow, setGlow] = React.useState(0.5);
  useEffect(() => {
    let frame = 0;
    let animId;
    function animate() {
      frame++;
      // Animate shield glow
      setGlow(0.5 + 0.5 * Math.abs(Math.sin(frame / 30)));
      // Animate shield outline
      if (shieldRef.current) {
        const total = 100;
        const progress = Math.min(1, frame / total);
        shieldRef.current.style.strokeDasharray = 800;
        shieldRef.current.style.strokeDashoffset = 800 * (1 - progress);
        shieldRef.current.style.filter = `drop-shadow(0 0 ${32 + 24 * Math.abs(Math.sin(frame / 30))}px ${ORANGE})`;
      }
      // Animate secondary glow
      if (shieldGlowRef.current) {
        shieldGlowRef.current.style.filter = `drop-shadow(0 0 ${48 + 32 * Math.abs(Math.sin(frame / 40))}px ${ORANGE})`;
        shieldGlowRef.current.setAttribute("opacity", 0.18 + 0.22 * Math.abs(Math.sin(frame / 40)));
      }
      // Animate circuit lines
      if (circuitRef1.current) {
        const t = (frame / 60) % 1;
        circuitRef1.current.setAttribute("opacity", 0.5 + 0.5 * Math.sin(2 * Math.PI * t));
      }
      if (circuitRef2.current) {
        const t = ((frame / 60) + 0.5) % 1;
        circuitRef2.current.setAttribute("opacity", 0.5 + 0.5 * Math.sin(2 * Math.PI * t));
      }
      if (circuitDotRef.current) {
        const t = (frame / 60) % 1;
        const y = 120 + 60 * Math.abs(Math.sin(2 * Math.PI * t));
        circuitDotRef.current.setAttribute("cy", y);
        circuitDotRef.current.setAttribute("opacity", 0.7 + 0.3 * Math.abs(Math.sin(2 * Math.PI * t)));
      }
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      <defs>
        <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity="0.7" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
        </radialGradient>
      </defs>
      <g>
        {/* Secondary thick glowing outline for depth */}
        <path
          ref={shieldGlowRef}
          d="M150,60 Q220,100 200,220 Q150,260 100,220 Q80,100 150,60 Z"
          stroke={ORANGE}
          strokeWidth="32"
          fill="none"
          opacity="0.2"
        />
        {/* Shield shape: classic, bold, glowing */}
        <path
          ref={shieldRef}
          d="M150,60 Q220,100 200,220 Q150,260 100,220 Q80,100 150,60 Z"
          stroke={ORANGE}
          strokeWidth="18"
          fill="url(#shieldGlow)"
        />
        {/* Electronic/circuit lines inside the shield */}
        <line ref={circuitRef1} x1="150" y1="110" x2="150" y2="200" stroke={ORANGE} strokeWidth="5" opacity="0.7" />
        <line ref={circuitRef2} x1="120" y1="170" x2="180" y2="170" stroke={ORANGE} strokeWidth="5" opacity="0.7" />
        {/* Animated circuit dot */}
        <circle ref={circuitDotRef} cx="150" cy="120" r="10" fill={ORANGE} opacity="0.8" />
        {/* Inner highlight for extra effect */}
        <ellipse cx="150" cy="200" rx="30" ry="10" fill="#fff" opacity="0.08" />
      </g>
    </svg>
  );
} 