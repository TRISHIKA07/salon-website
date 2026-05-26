import logo from './assets/logo1.jpeg'
import interior from './assets/interior.jpeg'
export default function LuxurySalonWebsite() {
  return (
    <div className="bg-[#390531] text-white min-h-screen font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A0B2E]/80 backdrop-blur-md border-b border-[#FF8C42]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            <div className="flex items-center gap-2">
  <img src={logo} className="w-10 h-10 rounded-full" />

  <h1 className="text-2xl font-bold tracking-wide text-white">
    Bliss Prime Salon
  </h1>
</div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#F26E24] transition">Home</a>
            <a href="#about" className="hover:text-[#F26E24] transition">About</a>
            <a href="#services" className="hover:text-[#F26E24] transition">Services</a>
            <a href="#gallery" className="hover:text-[#F26E24] transition">Gallery</a>
            <a href="#locations" className="hover:text-[#F26E24] transition">Locations</a>
            <a href="#contact" className="hover:text-[#F26E24] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-6"
      >
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://www.w3schools.com/howto/rain.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E]/80 to-[#1A0B2E]" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Beauty Meets <span className="text-[#FF8C42]">Luxury</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Premium salon experience with elegance, glamour, and transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FF8C42] hover:bg-[#ff9c5e] px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg shadow-[#FF8C42]/40">
              Contact us
            </button>

            <button className="border border-white hover:border-[#FF8C42] hover:text-[#FF8C42] px-8 py-4 rounded-full text-lg transition">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
              alt="Salon Interior"
              className="rounded-3xl shadow-2xl border border-[#FF8C42]/20"
            />
          </div>

          <div>
            <p className="text-[#FF8C42] uppercase tracking-widest mb-3">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elegant Beauty Experience
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Welcome to Bliss Prime Salon, your premium destination for beauty,
              glamour, and self-care. We specialize in hair styling,
              bridal makeup, facials, spa treatments, modern and trendy beauty
              transformations.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-[#4B1D6B]/40 p-6 rounded-2xl border border-[#FF8C42]/10">
                <h3 className="text-3xl font-bold text-[#FF8C42]">10+</h3>
                <p className="text-gray-300 mt-2">Years Experience</p>
              </div>

              <div className="bg-[#4B1D6B]/40 p-6 rounded-2xl border border-[#FF8C42]/10">
                <h3 className="text-3xl font-bold text-[#FF8C42]">5000+</h3>
                <p className="text-gray-300 mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-[#140822] px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#FF8C42] uppercase tracking-widest mb-3">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mb-16">
            Luxury Beauty Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Hair Styling",
              "Bridal Makeup",
              "Facial & Spa",
              "Nail Art",
              "Hair Spa",
              "Skin Care",
              "Keratin Treatment",
              "Massage Therapy",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#4B1D6B]/40 p-8 rounded-3xl border border-[#FF8C42]/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF8C42]/20 transition duration-300"
              >
                <div className="w-16 h-16 bg-[#FF8C42]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✨</span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">{service}</h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Premium salon treatments crafted with elegance and luxury.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#FF8C42] uppercase tracking-widest mb-3">
            Gallery
          </p>

          <h2 className="text-5xl font-bold">Beauty Transformations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl group border border-[#FF8C42]/10"
            >
              <img
                src={img}
                alt="Salon Work"
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-[#140822] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FF8C42] uppercase tracking-widest mb-3">
            Follow Us
          </p>

          <h2 className="text-5xl font-bold mb-6">Instagram Reels & Beauty Trends</h2>

          <p className="text-gray-300 mb-10">
            Stay connected with our latest transformations, bridal makeovers,
            and luxury salon moments.
          </p>

          <a
            href="https://www.instagram.com/bliss_prime_by_purnima?igsh=MTExYmU0ZXo1aGVnZg=="
            target="_blank"
            className="inline-block bg-[#FF8C42] hover:bg-[#ff9c5e] px-10 py-4 rounded-full text-lg font-semibold transition shadow-lg shadow-[#FF8C42]/30"
          >
            Visit Instagram
          </a>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#FF8C42] uppercase tracking-widest mb-3">
            Our Branches
          </p>

          <h2 className="text-5xl font-bold">Visit Our Salon</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#4B1D6B]/40 p-10 rounded-3xl border border-[#FF8C42]/10">
            <h3 className="text-3xl font-bold mb-4">Branch 1</h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Pani Tanki, LIG 161, next to Nagar Nigam Complex, Sector 2, Shankar Nagar, Raipur, Chhattisgarh 492004
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://maps.app.goo.gl/mXBf9BNzct9HzYvG9?g_st=ic"
                target="_blank"
                className="bg-[#FF8C42] px-6 py-3 rounded-full font-medium"
              >
                Get Directions
              </a>

              <button className="border border-white px-6 py-3 rounded-full">
                Call Now
              </button>
            </div>
          </div>

          <div className="bg-[#4B1D6B]/40 p-10 rounded-3xl border border-[#FF8C42]/10">
            <h3 className="text-3xl font-bold mb-4">Branch 2</h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Insert Your Second Salon Address Here, Raipur, Chhattisgarh.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://maps.google.com"
                target="_blank"
                className="bg-[#FF8C42] px-6 py-3 rounded-full font-medium"
              >
                Get Directions
              </a>

              <button className="border border-white px-6 py-3 rounded-full">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#140822] px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF8C42] uppercase tracking-widest mb-3">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Book Your Luxury Experience
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Connect with us for appointments, bridal bookings, salon
              inquiries, and premium beauty consultations.
            </p>

            <div className="space-y-4 text-lg text-gray-300">
              <p>📞 +91 9353254491</p>
              <p>📧 yoursalon@email.com</p>
              <p>📍 Raipur, Chhattisgarh</p>
            </div>
          </div>

          <div className="bg-[#4B1D6B]/40 p-10 rounded-3xl border border-[#FF8C42]/10">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1A0B2E] border border-[#FF8C42]/20 rounded-xl px-5 py-4 outline-none focus:border-[#FF8C42]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1A0B2E] border border-[#FF8C42]/20 rounded-xl px-5 py-4 outline-none focus:border-[#FF8C42]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-[#1A0B2E] border border-[#FF8C42]/20 rounded-xl px-5 py-4 outline-none focus:border-[#FF8C42]"
              ></textarea>

              <button className="w-full bg-[#FF8C42] hover:bg-[#ff9c5e] py-4 rounded-xl text-lg font-semibold transition shadow-lg shadow-[#FF8C42]/30">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#FF8C42]/10 py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Luxe Aura Salon</h2>

        <div className="flex justify-center gap-6 mb-6 text-gray-300">
          <a href="https://www.instagram.com/bliss_prime_by_purnima?igsh=MTExYmU0ZXo1aGVnZg==" target="_blank" className="hover:text-[#FF8C42]">Instagram</a>
          <a href="https://facebook.com" target="_blank" className="hover:text-[#FF8C42]">Facebook</a>
          <a href="https://wa.me/919876543210" target="_blank" className="hover:text-[#FF8C42]">WhatsApp</a>
        </div>

        <p className="text-gray-500">
          © 2026 Bliss Prime Salon. All Rights Reserved.
        </p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919353254491"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#FF8C42] w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-[#FF8C42]/40 hover:scale-110 transition"
      >
        💬
      </a>
    </div>
  );
}
