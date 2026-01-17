import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery & Blog | Luna's Bakehouse, Devon",
    description: "Pictures and News from Luna's Bakehouse, Devon. See our breads, pastries, and stories from the bakery.",
};

const blogPosts = [
    {
        slug: "little-lunas",
        title: "Little Luna's in Totnes",
        excerpt: "Real pastries, buns, breads. Locally sourced ingredients. Hand made with love.",
        tags: ["News", "Totnes"],
    },
    {
        slug: "vegan-muffins",
        title: "Vegan Fare Now Available",
        excerpt: "Vegan Muffins with carrot and apple, pumpkin seeds, almond meal, and olive oil. All organic, naturally.",
        tags: ["Vegan", "Pastries"],
    },
    {
        slug: "mince-pies",
        title: "Mince Pies",
        excerpt: "Completely organic, hand made mince pies. Available in boxes of 6 for the holiday season.",
        tags: ["Seasonal", "Pastries"],
    },
    {
        slug: "real-food",
        title: "Eat Real Food",
        excerpt: "Real pastries, buns, breads. Locally sourced ingredients. Hand made with love.",
        tags: ["Philosophy"],
    },
    {
        slug: "breakfast-at-lunas",
        title: "Breakfast at Luna's",
        excerpt: "We are cosy. Hannah is on coffee. We have breakfast buns. All organic ingredients. Nourish yourself.",
        tags: ["Café", "Breakfast"],
    },
    {
        slug: "lovely-loaves",
        title: "Luna's Lovely Loaves",
        excerpt: "100% organic, nourishing, nutritious, delicious bread made with heritage grains.",
        tags: ["Breads"],
    },
    {
        slug: "hot-lunch",
        title: "Hot Lunch, 12:30",
        excerpt: "Hot lunch at 12:30pm daily. First 10 customers get the freshest fare.",
        tags: ["Café", "Lunch"],
    },
    {
        slug: "plum-pastry",
        title: "Plum Pastry",
        excerpt: "Plum pastry and coffee from Hannah. Finest in town, literally.",
        tags: ["Pastries", "Sweet"],
    },
    {
        slug: "turmeric-loaf",
        title: "Turmeric Loaf",
        excerpt: "It's delicious. It's nutritious. All organic flour we mill ourselves.",
        tags: ["Breads", "Specialty"],
    },
];

export default function GalleryPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero with Image */}
            <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EDE7DD] to-[#D4C8B8]" />
                <Image
                    src="/newsletter-hero.png"
                    alt="Fresh baked artisan bread"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
                    <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#2C2417] mb-3 sm:mb-4">Gallery & Blog</h1>
                    <p className="text-[#4A3B32] text-base sm:text-lg md:text-xl">Stories, pictures, and updates from Luna&apos;s Bakehouse</p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="card group">
                            {/* Placeholder image container */}
                            <div className="h-48 bg-gradient-to-br from-[#EDE7DD] to-[#D4C8B8] flex items-center justify-center relative overflow-hidden">
                                <span className="text-6xl opacity-30">🥖</span>
                            </div>
                            <div className="card-content">
                                <h3 className="text-[#2C2417] group-hover:text-[#C9A66B] transition-colors">
                                    {post.title}
                                </h3>
                                <p>{post.excerpt}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs uppercase tracking-wide text-[#6B5D52] bg-[#F5F1EB] px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Instagram CTA */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#EDE7DD]">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-[#2C2417] mb-4">
                        Follow Us on Instagram
                    </h2>
                    <p className="text-[#6B5D52] mb-8">
                        See more behind-the-scenes photos, daily specials, and stories from the bakery.
                    </p>
                    <a
                        href="https://www.instagram.com/lunasbakehousedevon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @lunasbakehousedevon
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
