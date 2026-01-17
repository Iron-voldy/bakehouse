'use client';

import { useEffect, useRef } from 'react';

export default function CursorTracker() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const targetRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>();

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const animate = () => {
            positionRef.current.x = lerp(positionRef.current.x, targetRef.current.x, 0.15);
            positionRef.current.y = lerp(positionRef.current.y, targetRef.current.y, 0.15);

            cursor.style.left = `${positionRef.current.x}px`;
            cursor.style.top = `${positionRef.current.y}px`;

            rafRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetRef.current.x = e.clientX;
            targetRef.current.y = e.clientY;
        };

        // Check for CTA buttons to expand cursor
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.cta-button') || target.closest('a') || target.closest('button')) {
                cursor.classList.add('expanded');
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.cta-button') || target.closest('a') || target.closest('button')) {
                cursor.classList.remove('expanded');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor" />;
}
