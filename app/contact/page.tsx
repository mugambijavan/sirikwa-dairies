'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLeaf, FaTractor} from 'react-icons/fa';


export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-blue-50 flex items-center">
        <div className="absolute inset-0 bg-[url('/img105.jpeg')] bg-cover bg-center blur-sm" />
        <div className="container text-center relative z-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4" data-aos="fade-up">Get in Touch</h1>
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
                  <p>📞 +254 791 548 000</p> <p>📞+254 726 510 216</p>
                  <p>📧 info@sirikwadairies.co.ke </p><p>📧 sirikwad@gmail.com</p>
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
            {/* Footer Section */}
            <footer className="relative bg-[#ffffff] text-[#2c3e50] py-8 mt-12 border-t border-gray-200">
              {/* Background Icons */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <FaLeaf className="text-6xl absolute top-10 left-10" />
                <FaTractor className="text-6xl absolute bottom-10 right-10" />
              </div>

              <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                  {/* Logo with Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <Image
                      src="/sirikwalogo.jpg"
                      alt="Sirikwa Dairies Logo"
                      width={192}
                      height={80}
                      className="object-contain"
                    />
                  </motion.div>

                  {/* Description */}
                  <p className="text-center text-sm mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Empowering farmers with quality dairy solutions since 2010.
                  </p>

                  {/* Copyright */}
                  <p className="text-center text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    © {new Date().getFullYear()} Sirikwa Dairies & Gen PLC. All rights reserved.
                  </p>
                  <p className="text-center text-sm mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                    Developed by{' '}
                    <a href="https://bhakitah.co.ke" target="_blank" rel="noopener" className="text-[#2c3e50] hover:text-[#8bc34a] transition">
                      BhakitahTech
                    </a>
                  </p>
                </div>
              </div>
            </footer>
    </main>
  );
}