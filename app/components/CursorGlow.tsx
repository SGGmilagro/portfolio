"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 z-30 pointer-events-none"
      style={{
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.04), transparent 60%)`,
      }}
    />
  );
}