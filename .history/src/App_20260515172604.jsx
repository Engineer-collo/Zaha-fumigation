export default function MalishusFoundationWebsite() {
  const programs = [
    {
      title: 'Education Support',
      description:
        'Providing school fees assistance, mentorship, books, and digital learning opportunities for vulnerable children.',
      image:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Community Empowerment',
      description:
        'Empowering youth and families through entrepreneurship training, skills development, and community outreach.',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Health & Wellness',
      description:
        'Supporting health awareness campaigns, medical camps, and wellness initiatives in underserved communities.',
      image:
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const impacts = [
    { number: '5,000+', label: 'Lives Impacted' },
    { number: '120+', label: 'Scholarships Sponsored' },
    { number: '40+', label: 'Community Projects' },
    { number: '300+', label: 'Volunteers Engaged' },
  ]

  const testimonials = [
    {
      name: 'Mercy A.',
      role: 'Community Beneficiary',
      message:
        'Malishu’s Foundation restored hope in our community through education and empowerment programs.',
    },
    {
      name: 'Brian K.',
      role: 'Volunteer',
      message:
        'Being part of the foundation has allowed me to make a real impact and help transform lives.',
    },
    {
      name: 'Kevin M.',
      role: 'Youth Mentor',
      message:
        'The youth mentorship initiatives have inspired many young people to pursue their dreams.',
    },
  ]

  const faqs = [
    {
      q: 'How can I support the foundation?',
      a: 'You can support us through donations, volunteering, partnerships, and community outreach programs.',
    },
    {
      q: 'Does the foundation accept volunteers?',
      a: 'Yes. We welcome volunteers from different professional and social backgrounds.',
    },
    {
      q: 'Who benefits from the programs?',
      a: 'Our programs support vulnerable children, youth groups, families, and underserved communities.',
    },
  ]

  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              M
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700">
                Malishu’s Foundation
              </h1>
              <p className="text-sm text-gray-500">Transforming Lives Together</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#home" className="hover:text-green-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#programs" className="hover:text-yellow-500 transition">
              Programs
            </a>
            <a href="#impact" className="hover:text-green-600 transition">
              Impact
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
            Donate Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
          alt="Foundation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/70 to-yellow-600/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 text-white">
          <div className="inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-white/30">
            Building Hope • Empowering Communities • Inspiring Change
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Empowering Communities For A Better Tomorrow
          </h2>

          <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Malishu’s Foundation is dedicated to uplifting lives through education,
            healthcare, mentorship, and sustainable community development programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition">
              Join Our Mission
            </button>
            <button className="bg-white/20 hover:bg-white/30 border border-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop"
              alt="About Foundation"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-green-600 font-bold uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 leading-tight">
              Creating Lasting Impact In Communities
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Malishu’s Foundation is a non-profit organization focused on improving
              the quality of life for children, youth, and families through
              sustainable empowerment initiatives.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Through partnerships, volunteers, and supporters, the foundation
              continues to create opportunities that inspire hope and positive
              transformation across communities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-500">
                <h3 className="text-2xl font-bold text-green-600 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every community has equal opportunities to thrive.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower communities through sustainable and impactful programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Programs That Transform Lives
            </h2>
            <p className="text-lg text-gray-600">
              Our initiatives are designed to create sustainable impact through
              education, health, mentorship, and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  <button className="text-green-600 font-semibold hover:text-blue-600 transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section
        id="impact"
        className="py-24 bg-gradient-to-r from-green-700 via-blue-700 to-yellow-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact In Numbers
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-16 text-gray-100">
            Together with our partners and supporters, we continue to make a
            measurable difference in the lives of many people.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20"
              >
                <h3 className="text-5xl font-extrabold mb-3">{impact.number}</h3>
                <p className="text-lg text-gray-100">{impact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Voices Of Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 flex items-center justify-center text-white font-bold text-2xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  “{testimonial.message}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold uppercase tracking-widest">
              FAQs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Become Part Of The Change
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-100 leading-relaxed">
            Join hands with Malishu’s Foundation to create hope, opportunities,
            and a brighter future for communities in need.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition">
              Volunteer Today
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-yellow-400 font-bold uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Reach Out To Us
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We would love to hear from you. Whether you want to support,
              volunteer, partner, or learn more about our programs, get in touch.
            </p>

            <div className="space-y-5 text-lg">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 +254 700 000 000</p>
              <p>✉️ info@malishusfoundation.org</p>
            </div>
          </div>

          <form className="bg-white text-gray-800 rounded-3xl p-10 shadow-2xl space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Malishu’s Foundation
            </h3>
            <p>Changing lives through compassion and empowerment.</p>
          </div>

          <div className="flex gap-6 text-lg">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
