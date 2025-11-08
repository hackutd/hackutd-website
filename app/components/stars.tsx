"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  prevZ: number;
}

interface StarsProps {
  count?: number;
  speed?: number;
  className?: string;
  starColor?: string;
  trailOpacity?: number;
}

export default function Stars({
  count = 3000,
  speed = 0.5,
  className = "",
  starColor = "#ffffff",
  trailOpacity = 0.8,
}: StarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let currentSpeed = 100;
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    // Initialize stars
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < count; i++) {
        starsRef.current.push({
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000,
          prevZ: Math.random() * 1000,
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = (time: number) => {
      const { width, height } = canvas;

      // --- SCROLL SPEED CALCULATION ---
      const deltaTime = time - lastTime;
      lastTime = time;

      const scrollDelta = window.scrollY - lastScrollY; // signed value
      lastScrollY = window.scrollY;

      // Map scroll delta magnitude to speed range [0.03, 10]
      const magnitude = Math.abs(scrollDelta);
      let targetSpeed = Math.min(10, 0.03 + magnitude / 50);

      // Reverse if scrolling up
      if (scrollDelta < 0) targetSpeed *= -1;

      if (magnitude > 0) {
        // Smooth ease toward target speed
        currentSpeed += (targetSpeed - currentSpeed) * 0.2;
      } else {
        // Ease back to base forward speed
        currentSpeed += (0.03 - currentSpeed) * 0.05;
      }

      // --- DRAWING ---
      ctx.clearRect(0, 0, width, height); // transparent background

      starsRef.current.forEach((star) => {
        star.prevZ = star.z;
        star.z -= currentSpeed;

        // Wrap/reset if too close or too far
        if (star.z <= 0) {
          star.x = Math.random() * 1600 - 800;
          star.y = Math.random() * 900 - 450;
          star.z = 1000;
          star.prevZ = 1000;
        }

        // Clamp z to prevent negative radius errors
        star.z = Math.max(1, Math.min(star.z, 1000));

        const x = ((star.x / star.z) * width) / 2 + width / 2;
        const y = ((star.y / star.z) * height) / 2 + height / 2;
        const prevX = ((star.x / star.prevZ) * width) / 2 + width / 2;
        const prevY = ((star.y / star.prevZ) * height) / 2 + height / 2;

        const size = Math.max(0, (1 - star.z / 1000) * 2);
        const opacity = 1 - star.z / 1000;

        ctx.strokeStyle = `${starColor}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `${starColor}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
    animate(performance.now());

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [count, starColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
    />
  );
}
