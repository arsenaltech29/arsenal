import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.1;
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPosRef.current.x}px`;
        followerRef.current.style.top = `${followerPosRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '50px'; cursorRef.current.style.height = '50px'; }
    };
    const onLeave = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '10px'; cursorRef.current.style.height = '10px'; }
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
