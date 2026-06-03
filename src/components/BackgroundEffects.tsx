"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export default function BackgroundEffects() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="spotlight"
        style={
          {
            "--spotlight-x": `${position.x}px`,
            "--spotlight-y": `${position.y}px`,
          } as CSSProperties
        }
      />

      <div className="particle-field" />
    </div>
  );
}
