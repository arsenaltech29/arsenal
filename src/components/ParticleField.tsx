import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['rgba(30,111,255,', 'rgba(201,168,76,', 'rgba(255,255,255,'];

    const spawn = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.6 + 0.2),
      size: Math.random() * 2 + 0.5,
      opacity: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    for (let i = 0; i < 60; i++) {
      const p = spawn();
      p.y = Math.random() * canvas.height;
      p.opacity = Math.random() * 0.4;
      particlesRef.current.push(p);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.3) {
        particlesRef.current.push(spawn());
      }

      particlesRef.current = particlesRef.current.filter(p => p.y > -10 && p.opacity > -0.1);

      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < canvas.height * 0.8) {
          p.opacity = Math.min(p.opacity + 0.008, 0.5);
        }
        if (p.y < 100) p.opacity -= 0.01;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
