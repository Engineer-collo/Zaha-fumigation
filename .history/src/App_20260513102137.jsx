import React, { useState } from "react";
import {
  BookOpen,
  PenSquare,
  DollarSign,
  Star,
  CheckCircle,
  X,
} from "lucide-react";

function App() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-rose-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[6px] text-pink-200 font-semibold mb-4">
              Learn • Write • Publish • Monetize
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Turn Your Life Experiences Into A Profitable Book
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Discover how to write powerful books from your personal journey,
              experiences, struggles, and victories — and learn how to monetize
              your book successfully online and offline.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setOpenForm(true)}
                className="bg-white text-rose-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition"
              >
                Register Now
              </button>

              <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-rose-700 transition">
                Learn More
              </button>
            </div>

            <div className="flex gap-8 mt-10 flex-wrap">
              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-pink-100">Students Mentored</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-pink-100">Books Published</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-pink-100">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                alt="Coach Redempta Kanja"
                className="w-full h-[500px] object-cover rounded-2xl"
              />

              <div className="mt-6">
                <h2 className="text-3xl font-bold">
                  Coach Redempta Kanja
                </h2>

                <p className="text-pink-100 mt-2">
                  Author Mentor • Publishing Coach • Book Monetization Expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
            <BookOpen className="w-12 h-12 text-rose-700 mb-5" />

            <h3 className="text-2xl font-bold mb-4">
              Write Your Story
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Learn how to transform your personal experiences into an inspiring
              and impactful book people will love to read.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
            <PenSquare className="w-12 h-12 text-purple-700 mb-5" />

            <h3 className="text-2xl font-bold mb-4">
              Publish Professionally
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Discover modern publishing strategies, editing techniques, and
              branding that make your book stand out.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
            <DollarSign className="w-12 h-12 text-green-700 mb-5" />

            <h3 className="text-2xl font-bold mb-4">
              Monetize Your Book
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Learn practical ways to generate income through book sales,
              coaching, speaking engagements, and digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why Join This Program?
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              This mentorship program is designed for aspiring authors,
              entrepreneurs, coaches, and anyone with a story worth sharing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Step-by-step guidance on writing your book",
              "Learn storytelling techniques that engage readers",
              "Get publishing and branding insights",
              "Understand how to market your book effectively",
              "Learn online monetization strategies",
              "Gain mentorship from Coach Redempta Kanja",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl"
              >
                <CheckCircle className="text-green-600 w-7 h-7 mt-1" />

                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-r from-rose-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Success Stories
            </h2>

            <p className="text-pink-100 text-lg">
              Hear from people who transformed their stories into successful
              books.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
              >
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-100 leading-relaxed mb-6">
                  “This program helped me write my first book and start earning
                  from my story. I never imagined my life experiences could
                  become a source of income.”
                </p>

                <div>
                  <h4 className="font-bold text-xl">Successful Student</h4>
                  <p className="text-pink-100">Published Author</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Your Story Has Power.
            <br />
            Turn It Into A Book Today.
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Join Coach Redempta Kanja and start your journey towards becoming a
            published and profitable author.
          </p>

          <button
            onClick={() => setOpenForm(true)}
            className="bg-rose-600 hover:bg-rose-700 px-10 py-5 rounded-full text-xl font-bold transition shadow-xl"
          >
            Register For The Program
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-8 text-center">
        <p>
          © 2026 Redempta Kanja Book Writing Program. All rights reserved.
        </p>
      </footer>

      {/* MODAL FORM */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-8 relative shadow-2xl">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black"
            >
              <X size={30} />
            </button>

            <h2 className="text-4xl font-bold mb-3 text-center">
              Registration Form
            </h2>

            <p className="text-gray-600 text-center mb-8">
              Fill in your details to join the mentorship program.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-600"
              />

              <textarea
                rows="5"
                placeholder="Tell us why you want to join this program..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-rose-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-rose-700 hover:bg-rose-800 text-white py-4 rounded-xl font-bold text-lg transition"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;