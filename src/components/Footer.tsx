import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#2C2417] text-white py-12 sm:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    {/* Dartington */}
                    <div>
                        <h4 className="font-serif text-lg sm:text-xl mb-4 text-[#C9A66B]">Dartington</h4>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            2 Cedar Units<br />
                            Webbers Yard Estate<br />
                            TQ9 6JY
                        </p>
                        <p className="text-white/60 text-sm mt-3">
                            Tue - Sat: 8:30AM - 1:30PM<br />
                            Sun: 9:00AM - 12:30PM
                        </p>
                    </div>

                    {/* Totnes */}
                    <div>
                        <h4 className="font-serif text-lg sm:text-xl mb-4 text-[#C9A66B]">Totnes</h4>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            101a High Street<br />
                            TQ9 5PF
                        </p>
                        <p className="text-white/60 text-sm mt-3">
                            Wed - Sat: 9AM - 3PM
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif text-lg sm:text-xl mb-4 text-[#C9A66B]">Contact</h4>
                        <a
                            href="mailto:hello@lunasbakehouselove.com"
                            className="text-white/80 text-sm sm:text-base hover:text-[#C9A66B] transition-colors break-all"
                        >
                            hello@lunasbakehouselove.com
                        </a>
                        <div className="flex gap-3 mt-4">
                            <a
                                href="https://www.instagram.com/lunasbakehousedevon/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-[#C9A66B] hover:text-[#C9A66B] transition-colors"
                                aria-label="Follow on Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-serif text-lg sm:text-xl mb-4 text-[#C9A66B]">Explore</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/about" className="text-white/80 text-sm sm:text-base hover:text-[#C9A66B] transition-colors">About</Link>
                            <Link href="/gallery" className="text-white/80 text-sm sm:text-base hover:text-[#C9A66B] transition-colors">Gallery & Blog</Link>
                            <Link href="/mill-grain" className="text-white/80 text-sm sm:text-base hover:text-[#C9A66B] transition-colors">Mill & Grain</Link>
                            <Link href="/loaf-letter" className="text-white/80 text-sm sm:text-base hover:text-[#C9A66B] transition-colors">Loaf Letter</Link>
                        </nav>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 text-center">
                    <p className="text-white/50 text-xs sm:text-sm">
                        © {new Date().getFullYear()} Luna&apos;s Bakehouse, Devon. Crafted with ♥ and flour.
                    </p>
                </div>
            </div>
        </footer>
    );
}
