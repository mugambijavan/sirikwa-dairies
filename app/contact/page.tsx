'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <section className="bg-blue-50 py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Get in Touch</h1>
          <p className="text-gray-600" data-aos="fade-up">We are here to answer your dairy-related questions</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 border rounded-lg"
                  ></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8" data-aos="fade-left">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-3 text-gray-600">
                  <p>📍 Ziwa Town, Uasin Gishu County</p>
                  <p>📞 +254 712 345 678</p>
                  <p>📧 info@sirikwadairies.co.ke</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                {/* Google Map Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}