import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mill & Grain | Luna's Bakehouse, Devon",
    description: "We use organic, local, and heritage grains at Luna's Bakehouse. Cornovii. Olands. Devon Landrace. YQ. No pesticides or fertilisers. Stone milled on site.",
};

const grains = [
    {
        name: "Cornovii",
        description: "An ancient British landrace wheat named after the Cornovii tribe, this grain is deeply rooted in our landscape and our history. It thrives in Devon's wetter, cooler climate and offers a naturally robust, mineral rich flour. Its golden colour and deep flavour make it a standout in our focaccia and flatbreads.",
        qualities: ["Ancient British landrace", "Mineral rich", "Golden colour", "Deep flavour"],
    },
    {
        name: "Ølands",
        description: "Originally from the Swedish island of Øland, adapted for the climate here, this heritage wheat is known for its soft texture, buttery flavour, and digestibility. It makes a gentle golden flour that is perfect for enriched doughs, buns, and pastries. It is especially digestible for those sensitive to standard bread wheat.",
        qualities: ["Soft texture", "Buttery flavour", "Gentle digestibility", "Perfect for pastries"],
    },
    {
        name: "Devon Landrace",
        description: "This is the closest we've got to a truly local grain – wheat that has adapted over centuries to Devon's soils, rain, and rhythms. It's a landrace, naturally selected in the field by generations of farmers, and not bred in a lab. Full of character, deeply nutritious.",
        qualities: ["Truly local", "Centuries of adaptation", "Full of character", "Deeply nutritious"],
    },
    {
        name: "YQ",
        description: "This is a genetically diverse population of species grown together. It was developed by Suffolk agroforester Martin Wolfe. Unlike monoculture wheats, YQ is designed to thrive in organic systems, where different plants work together to adapt to soil and weather. It bakes up beautifully – strong enough for most bakes, with a lovely nutty taste.",
        qualities: ["Genetically diverse", "Organic systems", "Strong for baking", "Nutty taste"],
    },
];

export default function MillGrainPage() {
    return (
        <main className="overflow-x-hidden">
            {/* Hero with Image */}
            <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EDE7DD] to-[#D4C8B8]" />
                <Image
                    src="/grain-hero.png"
                    alt="Heritage wheat grains with stone mill"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
                    <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl text-[#2C2417] mb-3 sm:mb-4">Why Grains Matter</h1>
                    <p className="text-[#4A3B32] text-base sm:text-lg md:text-xl">At Luna&apos;s Bakehouse the story of every loaf begins with the grain</p>
                </div>
            </section>

            {/* Intro Content */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-3xl mx-auto">
                <h2>How Our Grains Are Chosen</h2>
                <p>
                    Our grains are grown and milled in Devon, and chosen for flavour, nutrition, and resilience.
                    We work with a small selection of heritage and diverse wheat varieties, all grown within
                    a short distance of our mill using organic or regenerative practices.
                </p>
                <p>
                    These wheats were not bred for yield or shelf life – they were chosen for flavour,
                    nutrition, soil health, and connection to place.
                </p>

                <h2>The Quality of Our Grains</h2>
                <p>
                    Most commercial bread is made with refined flour from a single wheat variety engineered
                    for yield, speed, and resistance, grown with chemicals, and ultra-processed.
                </p>
                <p className="text-[#2C2417] font-medium">Our grains are different.</p>

                {/* Quality Points */}
                <div className="grid md:grid-cols-2 gap-4 mt-6 mb-8">
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Grown without artificial pesticides or fertilisers</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Stone-milled fresh on site for maximum nutrition</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Rich in flavour, fibre, and gut-friendly enzymes</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Better for soil, wildlife, and long-term food security</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Low input and resilient</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Packed with trace minerals</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Great depth of flavour</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-[#C9A66B] text-xl">✦</span>
                        <p className="text-[#4A3B32]">Easier to digest than modern wheats</p>
                    </div>
                </div>
            </section>

            {/* Grain Cards */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#EDE7DD]">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C2417] mb-3">Our Heritage Grains</h2>
                    <p className="text-[#6B5D52] text-base sm:text-lg max-w-md mx-auto">Each variety brings its own unique character to our breads</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
                    {grains.map((grain) => (
                        <div key={grain.name} className="bg-white rounded-xl p-8 shadow-sm">
                            <h3 className="font-serif text-2xl text-[#2C2417] mb-4">{grain.name}</h3>
                            <p className="text-[#6B5D52] mb-6 leading-relaxed">{grain.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {grain.qualities.map((quality) => (
                                    <span
                                        key={quality}
                                        className="text-xs uppercase tracking-wide text-[#4A3B32] bg-[#F5F1EB] px-3 py-1 rounded-full"
                                    >
                                        {quality}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
