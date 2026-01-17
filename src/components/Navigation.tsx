'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/mill-grain', label: 'Mill & Grain' },
    { href: '/loaf-letter', label: 'Loaf Letter' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] px-4 py-4 sm:px-6 sm:py-5 flex justify-between items-center transition-all duration-300 ${isScrolled
                        ? 'bg-[#F5F1EB]/98 backdrop-blur-md shadow-sm'
                        : 'bg-[#F5F1EB]/95 backdrop-blur-sm'
                    }`}
            >
                <Link
                    href="/"
                    className="font-serif text-xl sm:text-2xl font-semibold text-[#2C2417] hover:text-[#C9A66B] transition-colors"
                >
                    Luna&apos;s Bakehouse
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium uppercase tracking-wider transition-colors ${pathname === link.href
                                    ? 'text-[#C9A66B]'
                                    : 'text-[#4A3B32] hover:text-[#C9A66B]'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[110]"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileOpen}
                >
                    <span
                        className={`block w-6 h-0.5 bg-[#2C2417] transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-[#2C2417] my-1.5 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-[#2C2417] transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}
                    />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[99] bg-[#F5F1EB] flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col items-center gap-6 sm:gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-2xl sm:text-3xl font-serif transition-colors ${pathname === link.href
                                                ? 'text-[#C9A66B]'
                                                : 'text-[#2C2417] hover:text-[#C9A66B]'
                                            }`}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Contact info in mobile menu */}
                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <p className="text-sm text-[#6B5D52]">
                                Dartington & Totnes, Devon
                            </p>
                            <a
                                href="mailto:hello@lunasbakehouselove.com"
                                className="text-sm text-[#C9A66B] hover:underline"
                            >
                                hello@lunasbakehouselove.com
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
