import BakeryScroll from "@/components/BakeryScroll";
import Footer from "@/components/Footer";
import CursorTracker from "@/components/CursorTracker";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <CursorTracker />
      <BakeryScroll />

      {/* Locations Section */}
      <section id="locations" className="py-16 md:py-24 px-4 sm:px-6" style={{ background: '#EDE7DD' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3" style={{ color: '#4A3B32' }}>Find Us</h2>
            <p style={{ color: '#8D7F71' }} className="text-lg max-w-md mx-auto">
              You&apos;ll find our bread and pastries at Dartington and Totnes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dartington */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl mb-4" style={{ color: '#4A3B32' }}>Dartington</h3>
              <address className="not-italic mb-4 leading-relaxed" style={{ color: '#8D7F71' }}>
                <p>2 Cedar Units</p>
                <p>Webbers Yard Estate</p>
                <p>TQ9 6JY</p>
              </address>
              <div className="font-medium mb-6" style={{ color: '#4A3B32' }}>
                <p>Tuesday - Saturday: 8:30AM - 1:30PM</p>
                <p>Sunday: 9:00AM - 12:30PM</p>
              </div>
              <a
                href="mailto:hello@lunasbakehouselove.com?subject=Dartington Enquiry"
                className="inline-block px-6 py-3 border-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  borderColor: '#C9A66B',
                  color: '#C9A66B'
                }}
              >
                Email Us
              </a>
            </div>

            {/* Totnes */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-serif text-2xl mb-4" style={{ color: '#4A3B32' }}>Totnes</h3>
              <address className="not-italic mb-4 leading-relaxed" style={{ color: '#8D7F71' }}>
                <p>101a High Street</p>
                <p>TQ9 5PF</p>
              </address>
              <div className="font-medium mb-6" style={{ color: '#4A3B32' }}>
                <p>Wednesday - Saturday: 9AM - 3PM</p>
              </div>
              <a
                href="mailto:hello@lunasbakehouselove.com?subject=Totnes Enquiry"
                className="inline-block px-6 py-3 border-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  borderColor: '#C9A66B',
                  color: '#C9A66B'
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Mighty Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: '#F2EEE9' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-3" style={{ color: '#4A3B32' }}>What Makes Us Mighty</h2>
            <p style={{ color: '#8D7F71' }} className="text-lg max-w-md mx-auto">
              A small but mighty bakery rooted in Devon&apos;s fields
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Stone-Milled Grain", desc: "Flour made on site by us, fresh each week" },
              { title: "Regeneratively Grown", desc: "Heritage grains from nearby Devon farms" },
              { title: "Better Gut Health", desc: "Long fermentation for easier digestion" },
              { title: "No Shortcuts", desc: "Never any additives or artificial ingredients" },
              { title: "Heritage Grains", desc: "Cornovii, Ølands, Devon Landrace, YQ" },
              { title: "Made With Love", desc: "By real humans, with heart" },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: '#EDE7DD' }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#C9A66B' }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1" style={{ color: '#4A3B32' }}>{feature.title}</h4>
                  <p style={{ color: '#8D7F71' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 px-4 sm:px-6" style={{ background: '#EDE7DD' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: '#4A3B32' }}>
            Luna&apos;s Loaf Letter
          </h2>
          <p style={{ color: '#8D7F71' }} className="text-lg mb-8">
            We&apos;re getting ready to launch online ordering for our fresh bread, pastries, and flour.
            Sign up and be the first to know when it goes live.
          </p>
          <a
            href="/loaf-letter"
            className="cta-button"
          >
            Sign Up
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
