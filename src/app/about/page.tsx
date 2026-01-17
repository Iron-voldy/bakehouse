import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Luna's Bakehouse, Devon",
    description: "Flavour, fibre, and feeling are fundamental at Luna's Bakehouse. We use heritage grains, wild yeasts and long fermentation for maximum taste and nutrition.",
};

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero with Image */}
            <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EDE7DD] to-[#D4C8B8]" />
                <Image
                    src="/newsletter-hero.png"
                    alt="Artisan baker kneading dough"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
                    <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#2C2417] mb-3 sm:mb-4">About Luna&apos;s and Me</h1>
                    <p className="text-[#4A3B32] text-base sm:text-lg md:text-xl">A grain geek, a soil regeneration advocate, and the heart behind Luna&apos;s</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto">
                <h2>I&apos;m Venus</h2>
                <p>
                    I am a grain geek, a soil regeneration advocate, and the heart behind Luna&apos;s.
                    I&apos;ve spent years working with herbs, soil, and traditional crafts, and eventually
                    found my way to baking as a daily devotional act...
                </p>
                <p>
                    ...the kind of act that starts with seed and soil, and ends with something simple
                    and beautiful you can tear apart with your hands and share.
                </p>
                <p>
                    This bakery grew from a deep belief that the best food is local, alive, and grounded
                    in relationships – to the land and each other.
                </p>

                <h2>The Name &quot;Luna&apos;s&quot;</h2>
                <p>
                    Luna&apos;s is named for the biodynamic rhythms I follow: lunar, seasonal, intuitive.
                </p>
                <p>
                    I care about nourishment in every sense – flavour, fibre, feeling. That&apos;s why we
                    mill our own flour, use heritage grains grown nearby, and bake bread with wild yeasts
                    and a long fermentation.
                </p>
                <p className="text-[#2C2417] font-medium text-xl italic font-serif">
                    It&apos;s slow food that doesn&apos;t shout. It sustains.
                </p>

                <h2>Luna&apos;s Foods</h2>
                <p>
                    If you are someone who loves good bread, deep roots, and local food systems,
                    I hope you find something here to get your teeth into.
                </p>

                {/* Qualities Grid */}
                <div className="grid md:grid-cols-2 gap-6 mt-8 mb-8">
                    <div className="bg-[#EDE7DD] rounded-xl p-6">
                        <h4 className="font-serif text-xl text-[#2C2417] mb-3">Stone-Milled Grain</h4>
                        <p className="text-[#6B5D52]">Flour made on site by us, fresh each week</p>
                    </div>
                    <div className="bg-[#EDE7DD] rounded-xl p-6">
                        <h4 className="font-serif text-xl text-[#2C2417] mb-3">Grown Regeneratively</h4>
                        <p className="text-[#6B5D52]">In Devon, supporting soil health</p>
                    </div>
                    <div className="bg-[#EDE7DD] rounded-xl p-6">
                        <h4 className="font-serif text-xl text-[#2C2417] mb-3">Heritage Grains</h4>
                        <p className="text-[#6B5D52]">Ancient varieties with deep flavour</p>
                    </div>
                    <div className="bg-[#EDE7DD] rounded-xl p-6">
                        <h4 className="font-serif text-xl text-[#2C2417] mb-3">Better Gut Health</h4>
                        <p className="text-[#6B5D52]">Long fermentation for easier digestion</p>
                    </div>
                    <div className="bg-[#EDE7DD] rounded-xl p-6">
                        <h4 className="font-serif text-xl text-[#2C2417] mb-3">No Shortcuts</h4>
                        <p className="text-[#6B5D52]">Never any additives or artificial ingredients</p>
                    </div>
                    <div className="bg-[#EDE7DD] rounded-xl p-6">
                        <h4 className="font-serif text-xl text-[#2C2417] mb-3">Made With Love</h4>
                        <p className="text-[#6B5D52]">By real humans, with heart</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a href="/loaf-letter" className="cta-button">
                        Join the Loaf Letter
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
