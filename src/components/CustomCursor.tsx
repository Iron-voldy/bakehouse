'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
    isExpanded?: boolean;
}

export default function CustomCursor({ isExpanded = false }: CustomCursorProps) {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Track hover on links and buttons
        const handleLinkHover = () => setIsHoveringLink(true);
        const handleLinkLeave = () => setIsHoveringLink(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        // Add hover detection to links and buttons
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cta-button, .cta-button-outline');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleLinkHover);
                el.addEventListener('mouseleave', handleLinkLeave);
            });
        };

        // Initial setup
        addHoverListeners();

        // Re-add listeners when DOM changes (for dynamic content)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            observer.disconnect();

            const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cta-button, .cta-button-outline');
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHover);
                el.removeEventListener('mouseleave', handleLinkLeave);
            });
        };
    }, []);

    // Check if touch device - don't show custom cursor
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    if (isTouchDevice || !isVisible) return null;

    const expanded = isExpanded || isHoveringLink;

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className={`cursor-dot ${expanded ? 'expanded' : ''}`}
                animate={{
                    x: position.x,
                    y: position.y,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 800,
                    damping: 35,
                    mass: 0.3,
                }}
            />
            {/* Outer ring */}
            <motion.div
                className={`cursor-ring ${expanded ? 'expanded' : ''}`}
                animate={{
                    x: position.x,
                    y: position.y,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5,
                }}
            />
        </>
    );
}
