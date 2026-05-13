import React from "react";
import {
  ShieldCheck,
  Bug,
  Phone,
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
            <a href="#home" className="hover:text-green-700 transition">
              Home
            </a>

            <a href="#about" className="hover:text-green-700 transition">
              About
            </a>

            <a href="#services" className="hover:text-green-700 transition">
              Services
            </a>

            <a href="#testimonials" className="hover:text-green-700 transition">
              Testimonials
            </a>

            <a href="#faq" className="hover:text-green-700 transition">
              FAQs
            </a>

            <a href="#contact" className="hover:text-green-700 transition">
              Contact
            </a>

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
            <a href="#home" className="block">
              Home
            </a>

            <a href="#about" className="block">
              About
            </a>

            <a href="#services" className="block">
              Services
            </a>

            <a href="#testimonials" className="block">
              Testimonials
            </a>

            <a href="#faq" className="block">
              FAQs
            </a>

            <a href="#contact" className="block">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-r from-green-700 to-green-900 text-white flex items-center"
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
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
              alt="Fumigation"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}