import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const services = [
    {
      title: 'Sofa Cleaning',
      image:
        'sofa-cleaning.png',
      danger:
        'Dirty sofas accumulate dust, bacteria, allergens, and unpleasant odors that can affect indoor air quality and health.',
      need:
        'Regular sofa cleaning keeps your furniture fresh, extends its lifespan, and creates a healthier living environment.',
      remedy:
        'We use professional fabric-safe cleaning solutions, deep extraction machines, and sanitization techniques to restore freshness and remove germs.',
    },
    {
      title: 'Dining Seats Cleaning',
      image:
        'diningset-cleaning.png',
      danger:
        'Dining seats collect food stains, bacteria, and hidden dirt that may cause bad smells and hygiene issues.',
      need:
        'Cleaning dining seats improves hygiene and maintains a clean dining experience.',
      remedy:
        'We perform stain removal, deep sanitization, and fabric-safe cleaning for all dining chairs.',
    },
    {
      title: 'Carpet Cleaning',
      image:
        'carpet-cleaning.png',
      danger:
        'Carpets trap dust mites, allergens, bacteria, and moisture which can lead to respiratory problems.',
      need:
        'Routine carpet cleaning improves indoor air quality and preserves the carpet’s beauty.',
      remedy:
        'We provide deep steam cleaning, stain treatment, deodorizing, and quick-drying carpet solutions.',
    },
    {
      title: 'Mattress Cleaning',
      image:
        'matress-cleaning.png',
      danger:
        'Mattresses can contain sweat, dead skin, dust mites, and bacteria that affect sleep quality and health.',
      need:
        'Professional mattress cleaning creates a healthier and more comfortable sleeping environment.',
      remedy:
        'We use deep extraction and sanitizing techniques to eliminate dirt, bacteria, and allergens.',
    },
    {
      title: 'Car Seats & Interior Detailing',
      image:
        'car.png',
      danger:
        'Vehicle interiors collect dust, germs, stains, and odors over time.',
      need:
        'Interior detailing improves hygiene, comfort, and preserves your vehicle’s value.',
      remedy:
        'We deep clean seats, dashboards, carpets, and sanitize the entire vehicle interior.',
    },
    {
      title: 'Office Cleaning',
      image:
        'office-cleaning.png',
      danger:
        'Dirty offices reduce productivity and can spread bacteria among employees.',
      need:
        'A clean workspace promotes professionalism and employee wellness.',
      remedy:
        'We provide routine office cleaning, sanitization, and waste management services.',
    },
    {
      title: 'Deep House Cleaning',
      image:
        'house-cleaning.png',
      danger:
        'Hidden dirt and bacteria accumulate in hard-to-reach areas of homes.',
      need:
        'Deep cleaning improves cleanliness, comfort, and family health.',
      remedy:
        'We thoroughly clean kitchens, living rooms, bedrooms, and hidden spaces.',
    },
    {
      title: 'Move-In / Move-Out Cleaning',
      image:
        'movement.png',
      danger:
        'Moving spaces may contain dust, stains, pests, and leftover waste.',
      need:
        'Professional cleaning ensures a fresh and welcoming environment.',
      remedy:
        'We perform complete sanitation and detailed cleaning before or after moving.',
    },
    {
      title: 'Post-Construction Cleaning',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
      danger:
        'Construction dust and debris can affect breathing and safety.',
      need:
        'Proper cleaning makes newly built spaces safe and ready for use.',
      remedy:
        'We remove dust, cement residues, paint stains, and debris professionally.',
    },
    {
      title: 'Post-Renovation Cleaning',
      image:
        'post-renovation.png',
      danger:
        'Renovation work leaves behind dust, odors, and hazardous particles.',
      need:
        'Cleaning restores comfort and cleanliness after renovation projects.',
      remedy:
        'We carry out detailed dust removal, polishing, and sanitization.',
    },
    {
      title: 'Outdoor Cleaning (Cabro, Mazeras)',
      image:
        'gabro-cleaning.png',
      danger:
        'Outdoor surfaces accumulate mud, algae, stains, and slippery dirt.',
      need:
        'Regular cleaning improves appearance and safety.',
      remedy:
        'We use pressure washing and specialized cleaning methods for outdoor surfaces.',
    },
    {
      title: 'Housekeeping Services',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
      danger:
        'Poor housekeeping leads to clutter, dirt buildup, and unhealthy environments.',
      need:
        'Professional housekeeping keeps homes and offices organized and clean.',
      remedy:
        'Our team provides scheduled cleaning, organization, and maintenance support.',
    },
    {
      title: 'Wardrobe Organizing & Decluttering',
      image:
        'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
      danger:
        'Disorganized wardrobes create stress and reduce space efficiency.',
      need:
        'Decluttering improves organization and accessibility.',
      remedy:
        'We professionally organize clothes, accessories, and storage spaces.',
    },
    {
      title: 'Toilet & Bathroom Cleaning',
      image:
        'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop',
      danger:
        'Bathrooms are breeding grounds for germs, mold, and bad odors.',
      need:
        'Frequent cleaning prevents infections and keeps bathrooms hygienic.',
      remedy:
        'We disinfect surfaces, remove stains, and sanitize toilets and bathrooms thoroughly.',
    },
    {
      title: 'Curtains Cleaning',
      image:
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
      danger:
        'Curtains trap dust, smoke, allergens, and odors.',
      need:
        'Cleaning curtains improves indoor air quality and freshness.',
      remedy:
        'We use gentle cleaning techniques suitable for different curtain fabrics.',
    },
    {
      title: 'Fumigation & Pest Control',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
      danger:
        'Pests such as cockroaches, bedbugs, termites, and rodents spread diseases and damage property.',
      need:
        'Professional fumigation protects homes, businesses, and health.',
      remedy:
        'We use approved pest control methods and safe fumigation products to eliminate infestations effectively.',
    },
  ]

  const [openService, setOpenService] = useState(null)

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

          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-7 h-1 bg-green-700 rounded"></span>
            <span className="w-7 h-1 bg-blue-700 rounded"></span>
            <span className="w-7 h-1 bg-red-600 rounded"></span>
          </button>

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

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200 px-6 py-6 space-y-5 font-semibold">
            <a
              href="#home"
              className="block hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#services"
              className="block hover:text-red-600"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <a
              href="#about"
              className="block hover:text-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              className="block hover:text-green-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-cleaning-a-modern-kitchen-1560583876547?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/55"></div>

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

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() =>
                    setOpenService(openService === index ? null : index)
                  }
                  className="w-full flex flex-col md:flex-row items-center gap-6 p-6 text-left hover:bg-gray-50 transition"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full md:w-72 h-52 object-cover rounded-2xl"
                  />

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      Click to learn about the risks, importance, and professional remedies.
                    </p>
                  </div>

                  <div className="text-4xl font-black text-green-700">
                    {openService === index ? '-' : '+'}
                  </div>
                </button>

                {openService === index && (
                  <div className="px-6 pb-8 grid md:grid-cols-3 gap-6 animate-fadeIn">
                    <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-600">
                      <h4 className="text-2xl font-black text-red-600 mb-4">
                        Danger
                      </h4>

                      <p className="text-gray-700 leading-relaxed">
                        {service.danger}
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-700">
                      <h4 className="text-2xl font-black text-blue-700 mb-4">
                        Why It’s Needed
                      </h4>

                      <p className="text-gray-700 leading-relaxed">
                        {service.need}
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-600">
                      <h4 className="text-2xl font-black text-green-700 mb-4">
                        Our Remedy
                      </h4>

                      <p className="text-gray-700 leading-relaxed">
                        {service.remedy}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            </div>
        </div>
      </section>

      {/* Our Gallery */}
<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-5">
        Our Services Gallery
      </h2>

      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Explore some of our professional cleaning, fumigation,
        sanitization, and deep cleaning services.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        'service1.png',
        'service2.png',
        'service3.png',
        'service4.png',
        'service5.png',
        'service6.png',
        'service7.png',
        'service8.png',
        'service9.png',
        'service10.png',
        'service11.png',
        'service12.png',
        'service13.png',
        'service14.png',
        'service15.png',

      ].map((img, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src={img}
            alt="ZAHA Gallery"
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h3 className="text-2xl font-black mb-2">
                ZAHA Cleaning
              </h3>
              <p className="text-sm">
                Professional Cleaning & Fumigation
              </p>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Need Urgent Fumigation or Cleaning?
            </h2>
            <p className="text-lg text-red-100">
              Our professional team is ready to respond quickly for homes,
              offices, apartments, and commercial spaces.
            </p>
          </div>

          <a
            href="https://wa.me/254769095309"
            target="_blank"
            className="bg-white text-red-600 px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>

      {/* Before & After Gallery */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-5">
              Before & After Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
            ].map((img, index) => (
              <div key={index} className="rounded-3xl overflow-hidden shadow-2xl group relative">
                <img src={img} alt="Before and After" className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-2xl font-black text-white">Amazing Results</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      {/* <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-5">
              Pricing Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Basic Package', 'Premium Package', 'Fumigation Package'].map((pkg, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl p-8 hover:-translate-y-2 transition">
                <h3 className="text-3xl font-black mb-5">{pkg}</h3>
                <div className="space-y-3 mb-8">
                  <p>✓ Professional Cleaning</p>
                  <p>✓ Sanitization</p>
                  <p>✓ Affordable Pricing</p>
                </div>
                <a href="https://wa.me/254769095309" target="_blank" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-bold">
                  Book Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-5">
              Our Working Process
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a simple and professional process to ensure excellent
              results for every client.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-black mb-5">
                1
              </div>

              <h3 className="text-2xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact us through call or WhatsApp and explain your cleaning or
                fumigation needs.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl font-black mb-5">
                2
              </div>

              <h3 className="text-2xl font-bold mb-3">Inspection</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team assesses the space and recommends the best cleaning or
                pest control solution.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-black mb-5">
                3
              </div>

              <h3 className="text-2xl font-bold mb-3">Service Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                We use professional equipment and safe products for quality
                results.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-black mb-5">
                4
              </div>

              <h3 className="text-2xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure every client receives a clean, fresh, and healthy
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      {/* <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-6">
              Areas We Serve
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              ZAHA Cleaning & Fumigation proudly serves residential and
              commercial clients in Nairobi and surrounding regions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Nairobi CBD',
                'Westlands',
                'Kilimani',
                'Kasarani',
                'Embakasi',
                'Ruiru',
                'Syokimau',
                'Kitengela',
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-md font-semibold text-gray-700"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop"
              alt="Service Areas"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-24 bg-green-700 text-white">
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

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-5">
              Vision & Mission
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our purpose is to create healthier, cleaner, and safer spaces for
              families, businesses, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-100 rounded-3xl p-10 shadow-xl border-t-4 border-green-600 hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl font-black mb-6">
                V
              </div>

              <h3 className="text-3xl font-black text-green-700 mb-5">
                Our Vision
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                To become the leading and most trusted cleaning and fumigation
                company in Kenya by delivering reliable, professional, and
                high-quality services that improve the health and comfort of our
                clients.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-10 shadow-xl border-t-4 border-blue-700 hover:-translate-y-2 transition duration-300">
              <div className="w-20 h-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-3xl font-black mb-6">
                M
              </div>

              <h3 className="text-3xl font-black text-blue-700 mb-5">
                Our Mission
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                To provide affordable, efficient, and environmentally conscious
                cleaning and pest control services using modern equipment,
                skilled professionals, and excellent customer care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Our Impact
            </h2>

            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              We are committed to delivering cleaner, healthier, and safer
              spaces for homes, offices, and businesses across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-5xl font-black mb-3">500+</h3>
              <p className="text-lg font-semibold">Happy Clients</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-5xl font-black mb-3">1000+</h3>
              <p className="text-lg font-semibold">Spaces Cleaned</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-5xl font-black mb-3">24/7</h3>
              <p className="text-lg font-semibold">Customer Support</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-5xl font-black mb-3">99%</h3>
              <p className="text-lg font-semibold">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

{/* Pest Types */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-5">
        Common Pests We Eliminate
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        {
          name: "Bedbugs",
          image:
            "bedbug.png",
        },
        {
          name: "Cockroaches",
          image:
            "c",
        },
        {
          name: "Mosquitoes",
          image:
            "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Termites",
          image:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Ants",
          image:
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop",
        },
        {
          name: "Rodents",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop",
        },
      ].map((pest, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
        >
          <img
            src={pest.image}
            alt={pest.name}
            className="w-full h-56 object-cover"
          />

          <div className="p-8 text-center">
            <h3 className="text-2xl font-black text-gray-800 mb-3">
              {pest.name}
            </h3>

            <p className="text-gray-600">
              Professional treatment and prevention services available.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Emergency Pest Alert */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Seeing Pests Around Your Home or Office?</h2>
          <a href="https://wa.me/254769095309" target="_blank" className="bg-white text-red-600 px-8 py-4 rounded-full text-xl font-black">Get Emergency Help</a>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-green-700 mb-5">Cleaning & Pest Control Tips</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Signs Your Home Needs Fumigation', 'Deep Cleaning Benefits', 'Prevent Cockroach Infestation'].map((post, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop" alt="Blog" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-black mb-4">{post}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-700 mb-5">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-gray-600">
              Here are answers to some of the common questions our clients ask.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                Do you offer same-day cleaning services?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Yes. Depending on availability and your location, we can provide
                same-day cleaning and fumigation services.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-blue-700">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                Do you clean offices and commercial spaces?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Absolutely. We handle residential homes, offices, apartments,
                shops, and other commercial spaces professionally.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-red-600 mb-3">
                How do I book your services?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Simply call or WhatsApp us using the numbers provided on the
                website and our team will assist you immediately.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-green-700 mb-3">
                Are your fumigation products safe?
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Yes. We use approved and professionally recommended products
                that are effective and safe when applied correctly.
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
              <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-red-600">
                <h3 className="font-bold text-red-600">Company Profile</h3>
                <a href="/zaha-company-profile.pdf" download className="inline-block mt-3 bg-red-600 text-white px-5 py-2 rounded-full font-semibold">Download PDF</a>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-green-600">
                <h3 className="font-bold text-green-700">Certified & Trusted</h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">Licensed</span>
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">Eco Friendly</span>
                  <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">Safe Chemicals</span>
                </div>
              </div>
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

              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition">
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

      {/* Google Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-blue-700">Find Us</h2>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <iframe title="Google Map" src="https://maps.google.com/maps?q=Nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-[500px] border-0" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* Floating Call Button */}
      <a href="tel:0769095309" className="fixed bottom-28 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl">📞</a>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254769095309"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl animate-bounce"
      >
        💬
      </a>
    </div>
  )
}
