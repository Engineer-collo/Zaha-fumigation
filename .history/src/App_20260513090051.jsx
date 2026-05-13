import React from "react";
import {
  ShieldCheck,
  Bug,
  Phone,
  Star,
  ChevronDown,
  Menu,
  X,
  Building2,
  Clock3,
  CheckCircle2
} from "lucide-react";

export default function ZahaFumigationWebsite() {
  const services = [
    {
      title: "Residential Fumigation",
      description:
        "Protect your home from bedbugs, cockroaches, termites, rodents, and other harmful pests."
    },
    {
      title: "Office & Commercial Pest Control",
      description:
        "Professional pest management solutions for offices, hotels, warehouses, and businesses."
    },
    {
      title: "Termite Control",
      description:
        "Advanced termite treatment solutions that protect your property and furniture."
    },
    {
      title: "Rodent Control",
      description:
        "Safe and effective elimination of rats and mice from homes and workplaces."
    },
    {
      title: "Mosquito & Fly Control",
      description:
        "Reduce disease-causing insects with professional mosquito and fly treatment."
    },
    {
      title: "Sanitization Services",
      description:
        "Deep sanitization and disinfection services for healthier living and working spaces."
    }
  ];

  const testimonials = [
    {
      name: "Brian Otieno",
      feedback:
        "Zaha Fumigation completely eliminated bedbugs in our apartment. Very professional team."
    },
    {
      name: "Mercy Wanjiku",
      feedback:
        "Fast response and excellent customer service. Our office is now pest free."
    },
    {
      name: "Kevin Kiptoo",
      feedback:
        "Highly recommend their termite control services. Reliable and affordable."
    }
  ];

  const faqs = [
    {
      question: "How long does fumigation take?",
      answer:
        "Most fumigation services take between 2 to 6 hours depending on the size of the property and the type of pest infestation."
    },
    {
      question: "Is fumigation safe for children and pets?",
      answer:
        "Yes. We use approved and safe treatment methods and provide safety instructions before and after treatment."
    },
    {
      question: "How often should fumigation be done?",
      answer:
        "Residential properties should undergo pest control every 3 to 6 months depending on the environment."
    },
    {
      question: "Do you offer emergency pest control services?",
      answer:
        "Yes. We provide emergency fumigation and pest control services for homes and businesses."
    }
  ];

  const [openFAQ, setOpenFAQ] = React.useState(null);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
  <img
    src="/zaha-logo.png"
    alt="Zaha Fumigation Logo"
    className="w-14 h-14 object-contain"
  />

  <div>
    <h1 className="text-3xl font-extrabold text-green-700 tracking-tight">
      Zaha Fumigation
    </h1>

    <p className="text-xs text-gray-500">
      Safe • Reliable • Professional
    </p>
  </div>
</div>
          <div className="hidden md:flex gap-8 font-medium items-center">
            <a href="#home" className="hover:text-green-700 transition">Home</a>
            <a href="#about" className="hover:text-green-700 transition">About</a>
            <a href="#services" className="hover:text-green-700 transition">Services</a>
            <a href="#testimonials" className="hover:text-green-700 transition">Testimonials</a>
            <a href="#faq" className="hover:text-green-700 transition">FAQs</a>
            <a href="#contact" className="hover:text-green-700 transition">Contact</a>

            <a
              href="#contact"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition font-semibold"
            >
              Free Inspection
            </a>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-green-700"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 shadow-lg">
            <a href="#home" className="block">Home</a>
            <a href="#about" className="block">About</a>
            <a href="#services" className="block">Services</a>
            <a href="#testimonials" className="block">Testimonials</a>
            <a href="#faq" className="block">FAQs</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="ptmin-h-screen bg-gradient-to-r from-green-700 to-green-900 text-white flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold mb-6">
              <ShieldCheck size={18} />
              Trusted Pest Control Experts in Kenya
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Protect Your Home & Business From Harmful Pests
            </h1>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Fast, safe, and affordable fumigation services for homes,
              offices, restaurants, schools, apartments, and businesses.
              We eliminate pests professionally using eco-friendly solutions.
            </p>

            <div className="flex flex-wrap gap-8 mb-10 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" />
                Licensed Professionals
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" />
                Same Day Service
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-yellow-400" />
                Affordable Pricing
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-2xl font-semibold transition"
              >
                Book Inspection
              </a>

              <a
                href="#services"
                className="border border-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-2xl font-semibold transition"
              >
                Our Services
              </a>
            </div>
          </div>

          <div>
            <img
              src="/home-pic.png"
              alt="Fumigation"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-green-800">
              About Zaha Fumigation
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              We are a professional fumigation and pest control company dedicated
              to protecting homes, offices, and commercial properties from pests.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-3xl font-bold text-green-700">5+</h3>
                <p className="mt-2 text-gray-600">Years Experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-3xl font-bold text-green-700">1000+</h3>
                <p className="mt-2 text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Why Choose Zaha Fumigation?
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We combine professional expertise, modern treatment methods, and fast response services to keep your environment pest free.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md text-center">
              <ShieldCheck className="mx-auto text-green-700 mb-4" size={45} />
              <h3 className="font-bold text-xl mb-3">Certified Experts</h3>
              <p className="text-gray-600">Professional and trained fumigation technicians.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md text-center">
              <Clock3 className="mx-auto text-green-700 mb-4" size={45} />
              <h3 className="font-bold text-xl mb-3">Fast Response</h3>
              <p className="text-gray-600">Same day inspections and emergency support.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md text-center">
              <Building2 className="mx-auto text-green-700 mb-4" size={45} />
              <h3 className="font-bold text-xl mb-3">Commercial Services</h3>
              <p className="text-gray-600">Trusted by offices, apartments, and businesses.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md text-center">
              <Bug className="mx-auto text-green-700 mb-4" size={45} />
              <h3 className="font-bold text-xl mb-3">Guaranteed Results</h3>
              <p className="text-gray-600">Effective treatment using modern pest control methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Our Services
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional pest management solutions tailored for homes and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-green-700 hover:text-white transition duration-300 rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-md">
                <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  “{testimonial.feedback}”
                </p>
                <h4 className="font-bold text-green-700">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h3 className="text-xl font-bold text-green-700">
                    {faq.question}
                  </h3>

                  <span className="text-3xl text-green-700 font-bold">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Contact Us Today
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Need urgent pest control services? Reach out to our team today.
            </p>

            <div className="space-y-4 text-lg">
              <p>
                <span className="font-bold">Phone:</span> +254 700 000 000
              </p>
              <p>
                <span className="font-bold">Email:</span>
                info@zahafumigation.com
              </p>
              <p>
                <span className="font-bold">Location:</span> Nairobi, Kenya
              </p>
            </div>
          </div>

          <form className="bg-white text-black rounded-3xl p-8 shadow-2xl space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Describe your pest problem"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Zaha Fumigation
            </h2>
            <p className="leading-relaxed">
              Professional pest control and fumigation services for homes and businesses across Kenya.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block hover:text-white">Home</a>
              <a href="#services" className="block hover:text-white">Services</a>
              <a href="#faq" className="block hover:text-white">FAQs</a>
              <a href="#contact" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <div className="space-y-3">
              <p>Bedbug Control</p>
              <p>Termite Treatment</p>
              <p>Rodent Control</p>
              <p>Commercial Fumigation</p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Business Hours</h3>
            <div className="space-y-3">
              <p>Mon - Sat: 7:00 AM - 7:00 PM</p>
              <p>Sunday: Emergency Only</p>
              <div className="flex items-center gap-3 text-green-400 font-semibold mt-4">
                <Phone size={18} />
                +254 700 000 000
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} Zaha Fumigation. All rights reserved.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-semibold"
      >
        WhatsApp
      </a>
    </div>
  );
}
