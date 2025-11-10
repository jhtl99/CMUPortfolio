import React, { useEffect, useRef, useCallback } from "react";

interface WarpedGridProps {
  spacing?: number;        // distance between grid lines
  warpStrength?: number;   // intensity of mouse warp
  warpRadius?: number;     // distance of influence
  lineColor?: string;      // CSS color for grid lines
  lineWidth?: number;      // thickness of grid lines
  speed?: number;          // optional background drift speed
}

const WarpedGrid: React.FC<WarpedGridProps> = ({
  spacing = 60,
  warpStrength = 30,
  warpRadius = 250,
  lineColor = "rgba(255,255,255,0.2)",
  lineWidth = 1,
  speed = 0.0005,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const time = Date.now() * speed;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;

    const cols = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 1;

    // Draw vertical lines
    for (let i = 0; i < cols; i++) {
      const x = i * spacing;
      ctx.beginPath();
      for (let j = 0; j < rows; j++) {
        const y = j * spacing;
        const dx = x - mouse.current.x;
        const dy = y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / warpRadius);
        const offsetX = dx / dist * warpStrength * influence || 0;
        const offsetY = dy / dist * warpStrength * influence || 0;
        const warpedX = x + offsetX + Math.sin(time + i * 0.5) * 10;
        const warpedY = y + offsetY + Math.cos(time + j * 0.5) * 10;
        if (j === 0) ctx.moveTo(warpedX, warpedY);
        else ctx.lineTo(warpedX, warpedY);
      }
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let j = 0; j < rows; j++) {
      const y = j * spacing;
      ctx.beginPath();
      for (let i = 0; i < cols; i++) {
        const x = i * spacing;
        const dx = x - mouse.current.x;
        const dy = y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / warpRadius);
        const offsetX = dx / dist * warpStrength * influence || 0;
        const offsetY = dy / dist * warpStrength * influence || 0;
        const warpedX = x + offsetX + Math.sin(time + i * 0.3) * 10;
        const warpedY = y + offsetY - Math.cos(time + j * 0.3) * 10;
        if (i === 0) ctx.moveTo(warpedX, warpedY);
        else ctx.lineTo(warpedX, warpedY);
      }
      ctx.stroke();
    }

    animRef.current = requestAnimationFrame(draw);
  }, [spacing, warpStrength, warpRadius, lineColor, lineWidth, speed]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    const move = (e: MouseEvent) => (mouse.current = { x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    animRef.current = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", move);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [draw, handleResize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default WarpedGrid;
