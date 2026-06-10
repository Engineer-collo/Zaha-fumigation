import React from "react";
import { Clock, ShieldCheck } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-green-600 p-5 rounded-full shadow-xl">
            <ShieldCheck className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 mb-6">
          ZAHA FUMIGATION
        </h1>

        {/* Sub Heading */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-8">
          <Clock size={18} />
          Website Coming Soon
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          We are working on something amazing. Our professional pest control
          and fumigation website will be launching soon.
          Stay tuned for quality pest management solutions, inspections,
          fumigation services, and customer support.
        </p>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Need Our Services?
          </h3>
          <p className="text-gray-600 mb-2">
            Contact us for pest control and fumigation services.
          </p>

          <div className="space-y-2 text-green-700 font-semibold">
            <p>📞 </p>
            <p>📧 info@zahafumigation.com</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Zaha Fumigation. All Rights Reserved.
        </div>

      </div>
    </section>
  );
};

export default ComingSoon;