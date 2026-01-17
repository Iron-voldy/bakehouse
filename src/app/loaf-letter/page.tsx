'use client';

import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const newsletters = [
    {
        id: 1,
        title: "Luna's Loaf Letter #2 - Late November 2025",
        topics: ["Warmth", "Little Luna's Opening in Totnes", "Dartington: The Mothership", "Luna's Mince Pies"],
        date: "November 2025",
    },
    {
        id: 2,
        title: "Luna's Loaf Letter #1 - Autumn 2025",
        topics: ["A Living Garden", "Local Grain", "Supper Club", "Hands-on Workshops", "Totnes Soon"],
        date: "Autumn 2025",
    },
];

export default function LoafLetterPage() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
    };

    return (
        <main className="overflow-x-hidden">
            {/* Hero with Image */}
            <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EDE7DD] to-[#D4C8B8]" />
                <Image
                    src="/newsletter-hero.png"
                    alt="Baker kneading fresh dough"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
                    <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#2C2417] mb-3 sm:mb-4">Luna&apos;s Loaf Letter</h1>
                    <p className="text-[#4A3B32] text-base sm:text-lg md:text-xl">Seasonal updates, recipes, and stories from the floury heart of Luna&apos;s Bakehouse</p>
                </div>
            </section>

            {/* Signup Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-xl mx-auto text-center">
                    {!isSubmitted ? (
                        <>
                            <h2 className="font-serif text-2xl md:text-3xl text-[#2C2417] mb-4">
                                Join the Loaf Letter
                            </h2>
                            <p className="text-[#6B5D52] mb-8">
                                We&apos;re getting ready to launch online ordering for our fresh bread, pastries, and flour.
                                Sign up and be the first to know when it goes live.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Address *"
                                        required
                                        className="w-full px-6 py-4 rounded-full border border-[#D4C8B8] bg-white text-[#2C2417] placeholder-[#8D7F71] focus:outline-none focus:border-[#C9A66B] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="firstName" className="sr-only">First Name (Optional)</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="First Name (Optional)"
                                        className="w-full px-6 py-4 rounded-full border border-[#D4C8B8] bg-white text-[#2C2417] placeholder-[#8D7F71] focus:outline-none focus:border-[#C9A66B] transition-colors"
                                    />
                                </div>
                                <button type="submit" className="cta-button w-full">
                                    Sign Up
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="py-8">
                            <div className="text-5xl mb-6">🥖</div>
                            <h2 className="font-serif text-2xl md:text-3xl text-[#2C2417] mb-4">
                                Thanks for Signing Up!
                            </h2>
                            <p className="text-[#6B5D52] mb-4">
                                You&apos;ll be the first to hear when online orders go live, plus you&apos;ll get
                                seasonal updates, recipes, and stories from the floury heart of Luna&apos;s Bakehouse.
                            </p>
                            <p className="text-[#4A3B32] font-medium">
                                In the meantime, follow us on{" "}
                                <a
                                    href="https://www.instagram.com/lunasbakehousedevon/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C9A66B] hover:underline"
                                >
                                    Instagram
                                </a>{" "}
                                and come say hi at our café in Dartington – we&apos;d love to meet you.
                            </p>
                            <p className="text-[#6B5D52] italic mt-6">
                                Your bread is rising...<br />
                                See you soon,<br />
                                <span className="font-serif text-[#2C2417]">Venus</span>
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Past Newsletters */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#EDE7DD]">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C2417] mb-3">Past Loaf Letters</h2>
                    <p className="text-[#6B5D52] text-base sm:text-lg max-w-md mx-auto">Catch up on what you might have missed</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
                    {newsletters.map((newsletter) => (
                        <article key={newsletter.id} className="bg-white rounded-xl p-8 shadow-sm">
                            <p className="text-sm uppercase tracking-wide text-[#8D7F71] mb-2">
                                {newsletter.date}
                            </p>
                            <h3 className="font-serif text-xl text-[#2C2417] mb-4">
                                {newsletter.title}
                            </h3>
                            <ul className="space-y-2">
                                {newsletter.topics.map((topic) => (
                                    <li key={topic} className="flex items-center gap-2 text-[#6B5D52]">
                                        <span className="text-[#C9A66B]">✦</span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
