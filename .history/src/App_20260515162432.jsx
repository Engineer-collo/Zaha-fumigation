export default function App() {
  const services = [
    {
      title: 'Sofa Cleaning',
      image:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Dining Seats Cleaning',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Carpet Cleaning',
      image:
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Mattress Cleaning',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Car Seats & Interior Detailing',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Office Cleaning',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Deep House Cleaning',
      image:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Move-In / Move-Out Cleaning',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Post-Construction Cleaning',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Post-Renovation Cleaning',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Outdoor Cleaning (Cabro, Mazeras)',
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Housekeeping Services',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Wardrobe Organizing & Decluttering',
      image:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Toilet & Bathroom Cleaning',
      image:
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Curtains Cleaning',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Fumigation & Pest Control',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/zaha-logo.png"
              alt="ZAHA Logo"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-2xl md:text-3xl font-black text-green-700">
                ZAHA
              <span className="text-red-600"> CLEANING</span>
            </h1>
            <p className="text-xs text-blue-700 font-semibold">
                & FUMIGATION SERVICES
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 font-semibold">
            <a href="#home" className="hover:text-green-700 transition">
              Home
            </a>
            <a href="#services" className="hover:text-red-600 transition">
              Services
            </a>
            <a href="#about" className="hover:text-blue-700 transition">
              About
            </a>
            <a href="#contact" className="hover:text-green-700 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
          alt="Cleaning Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/70 to-red-900/70"></div>

        <div className="relative z-10 max-w-5xl text-center px-6 text-white">
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Professional Cleaning & Fumigation Services
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Are you looking for quality professional cleaning services? Look no
            further... We’re just a call away.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:0769095309"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition"
            >
              Call Us Today
            </a>

            <a
              href="https://wa.me/254769095309"
              target="_blank"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
              alt="Cleaning Team"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-6">
              About ZAHA
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              ZAHA Cleaning and Fumigation Services provides professional,
              reliable, and affordable cleaning solutions for homes, offices,
              apartments, and commercial spaces.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              We specialize in deep cleaning, pest control, sofa and carpet
              cleaning, post-construction cleaning, outdoor cleaning, and many
              more services tailored to make your environment fresh, sparkling,
              and pest-free.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">
              <div className="bg-white rounded-2xl p-5 shadow-lg border-t-4 border-green-600">
                <h3 className="text-3xl font-black text-green-700">100%</h3>
                <p className="font-semibold">Customer Satisfaction</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg border-t-4 border-red-600">
                <h3 className="text-3xl font-black text-red-600">24/7</h3>
                <p className="font-semibold">Support & Response</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg border-t-4 border-blue-700">
                <h3 className="text-3xl font-black text-blue-700">Affordable</h3>
                <p className="font-semibold">Quality Services</p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-lg border-t-4 border-green-600">
                <h3 className="text-3xl font-black text-green-700">Trusted</h3>
                <p className="font-semibold">Professional Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-5">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver premium residential and commercial cleaning services
              with professionalism, care, and excellent customer service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="overflow-hidden h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  <button className="mt-3 bg-gradient-to-r from-green-600 via-blue-700 to-red-600 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-r from-green-700 via-blue-700 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              We combine professionalism, modern equipment, and trusted cleaning
              techniques to give your home or office a spotless finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Professional Team</h3>
              <p className="text-gray-100 leading-relaxed">
                Experienced and trained cleaning experts committed to quality
                results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Affordable Pricing</h3>
              <p className="text-gray-100 leading-relaxed">
                We offer competitive rates without compromising on service
                quality.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Fast Response</h3>
              <p className="text-gray-100 leading-relaxed">
                Call or WhatsApp us anytime for quick bookings and immediate
                assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-5">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by homes, offices, and businesses for exceptional cleaning
              and fumigation services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/brian.png"
                  alt="Brian"
                  className="w-20 h-20 rounded-full object-cover border-4 border-green-600"
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-800">Brian</h3>
                  <p className="text-green-700 font-semibold">Home Owner</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                “ZAHA transformed my living room and carpets completely. Their
                sofa cleaning service was professional and very affordable.”
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/kevin.png"
                  alt="Kevin"
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-700"
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-800">Kevin</h3>
                  <p className="text-blue-700 font-semibold">Office Manager</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                “Very reliable team. They cleaned our offices perfectly and the
                fumigation service helped eliminate pests completely.”
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/mercy.png"
                  alt="Mercy"
                  className="w-20 h-20 rounded-full object-cover border-4 border-red-600"
                />

                <div>
                  <h3 className="text-xl font-bold text-gray-800">Mercy</h3>
                  <p className="text-red-600 font-semibold">Apartment Client</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                “Their deep cleaning service exceeded my expectations. My house
                felt fresh, sparkling clean, and beautifully organized.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-6">
              Contact Us
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Let’s bring that sparkling clean and pest-free touch to your
              space. Contact us today for bookings and inquiries.
            </p>

            <div className="space-y-5 text-lg">
              <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-green-600">
                <h3 className="font-bold text-green-700">Phone Number</h3>
                <p>0769095309</p>
                <p>0796962848</p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-blue-700">
                <h3 className="font-bold text-blue-700">Email Address</h3>
                <p className="break-all">
                  zahacleaningandfumigationservi@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
              <div>
                <label className="block font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-200 focus:border-green-600 outline-none rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border-2 border-gray-200 focus:border-blue-700 outline-none rounded-xl p-4"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  className="w-full border-2 border-gray-200 focus:border-red-600 outline-none rounded-xl p-4"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-green-600 via-blue-700 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <img
              src="/zaha-logo.png"
              alt="ZAHA Logo"
              className="w-20 h-20 object-contain mb-3"
            />

            <h2 className="text-3xl font-black text-green-600 mb-3">
              ZAHA CLEANING & FUMIGATION
            </h2>
          </div>

          <p className="text-gray-300 mb-6">
            Professional Cleaning & Pest Control Services.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 text-lg font-semibold">
            <a href="tel:0769095309" className="hover:text-green-500">
              0769095309
            </a>

            <a href="tel:0796962848" className="hover:text-red-500">
              0796962848
            </a>

            <a
              href="mailto:zahacleaningandfumigationservi@gmail.com"
              className="hover:text-blue-500 break-all"
            >
              zahacleaningandfumigationservi@gmail.com
            </a>
          </div>

          <p className="mt-8 text-gray-500 text-sm">
            © 2026 ZAHA Cleaning & Fumigation Services. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
