'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out-quad'
    });
  }, []);

  const slides = [
    '/img138.jpeg',
    '/img140.jpg',
    '/img120.jpeg',
    '/img119.jpeg'
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            className="h-full"
          >
            {slides.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full w-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-[5px]"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container text-center text-white">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]"
              data-aos="zoom-in-down"
              data-aos-delay="200"
            >
              Welcome to <span className="text-blue-300">Sirikwa Dairies</span>
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Revolutionizing dairy farming through innovation and quality
            </p>
            <Link 
              href="/about" 
              className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Discover More
            </Link>
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container flex justify-center">
            <div className="swiper-pagination !relative !bottom-0" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Sirikwa Dairies
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sirikwa Dairies is a farmer-owned dairy company focused on the bulking, chilling, 
              and marketing of high-quality milk, and the provision of related dairy services.
              
              <br /><br /><strong>Our Presence:</strong><br />
              ▪ Registered Main Office: Ziwa Town (45 km west of Eldoret, near University of Eldoret)<br />
              ▪ Branch Offices: Kiplombe (Uasin Gishu County) & Likuyani (Kakamega County)<br />
              ▪ Milk Collection Area: Uasin Gishu, Kakamega, Elgeyo Marakwet, and Trans Nzoia Counties

              <br /><br /><strong>Our Vision:</strong><br />
              To be a leading high-quality dairy company that enhances the economic status of farmers 
              and improves the welfare of our communities.

              <br /><br /><strong>Our Mission:</strong><br />
              To improve the livelihoods of our dairy farmers through efficient bulking, chilling, 
              and marketing of high-quality dairy products, while providing valuable related services 
              to our customers.
            </p>
            </div>
            <div 
              className="relative rounded-xl overflow-hidden shadow-xl aspect-video"
              data-aos="flip-left"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/StSte7WjQuk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div 
            className="bg-blue-50 rounded-2xl p-8 mb-20 text-center"
            data-aos="zoom-in"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Vision & Mission
            </h3>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              To become a leading high-quality dairy company improving farmers economic status 
              while enhancing welfare through superior bulking, chilling, and marketing of 
              dairy products.
            </p>
          </div>

          {/* Tabbed Features Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              {[1, 2, 3, 4].map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`p-4 text-center rounded-lg transition-all ${
                    activeTab === tabId
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  <h3 className="text-lg font-semibold">
                    {['Products', 'Projects', 'Services', 'Marketing'][tabId - 1]}
                  </h3>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Products Tab */}
              {activeTab === 1 && (
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-4" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Premium Dairy Products
                    </h2>
                    <p className="text-gray-600 italic">
                      Partnering with processors like Brookside and NKCC to deliver
                      premium milk products while maintaining rigorous quality standards.
                    </p>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/img106.jpg"
                      alt="Dairy Products"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 2 && (
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-4" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Development Initiatives
                    </h2>
                    <div className="space-y-2">
                      {[
                        'Annual General Meeting Organization',
                        'Milk ATM Network Expansion',
                        'Farmer Credit Facilities'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/img106.jpg"
                      alt="Dairy Projects"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 3 && (
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-4" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Comprehensive Services
                    </h2>
                    <div className="grid gap-2">
                      {[
                        'Extension & Training Programs',
                        'Milk Collection Logistics',
                        'Feed & Fodder Management',
                        'Veterinary Support',
                        'Market Access Solutions'
                      ].map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/img106.jpg"
                      alt="Dairy Services"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Marketing Tab */}
              {activeTab === 4 && (
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="space-y-4" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-800">
                      Market Leadership
                    </h2>
                    <p className="text-gray-600">
                      Implementing cooperative models for fair pricing and sustainable
                      partnerships across multiple counties.
                    </p>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/img106.jpg"
                      alt="Marketing Profile"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Operations Map Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Operations Map
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving farmers across multiple counties with our collection network and 
              chilling facilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" data-aos="zoom-in">
            {[
              { county: 'Uasin Gishu', branches: 2 },
              { county: 'Kakamega', branches: 1 },
              { county: 'Transzoia', branches: 3 },
              { county: 'Elgeyo Marakwet', branches: 2 },
            ].map((location, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {location.county}
                </h4>
                <p className="text-blue-600 font-medium">
                  {location.branches} {location.branches > 1 ? 'Branches' : 'Branch'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-blue-900 text-white py-12 mt-20">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="space-y-4" data-aos="fade-up">
        <div className="relative w-48 h-20 mb-4">
          <Image
            src="/sirikwalogo.jpg"
            alt="Sirikwa Dairies Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-gray-300">
          Empowering farmers through quality dairy solutions since 2010
        </p>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-300" />
          <span className="text-gray-300">Ziwa Town, Uasin Gishu County</span>
        </div>
      </div>
      {/* Quick Links */}
      <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
          Quick Links
        </h3>
        <nav className="flex flex-col space-y-2">
          <Link href="/about" className="text-gray-300 hover:text-blue-300 transition">
            About Us
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-blue-300 transition">
            Products & Services
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-blue-300 transition">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-blue-300 transition">
            Contact
          </Link>
        </nav>
      </div>

      {/* Contact Info */}
      <div className="space-y-4" data-aos="fade-up" data-aos-delay="150">
        <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
          Contact Us
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-300" />
            <span className="text-gray-300">+254 712 345 678</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-300" />
            <span className="text-gray-300">info@sirikwadairies.co.ke</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-300" />
            <span className="text-gray-300">Mon-Fri: 8AM - 5PM</span>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-500 pb-2">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-blue-300 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300 transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-blue-300 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1994.6972298652904!2d35.2197!3d0.835173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89dd23bbc633580d!2sSirikwa%20Dairies!5e0!3m2!1sen!2ske!4v1655130368691!5m2!1sen!2ske"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-blue-800 mt-8 pt-6 text-center">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Sirikwa Dairies & Gen PLC. All rights reserved.
      </p>
      <p className="text-gray-400 mt-2">
        Developed by <a href="https://bhakitah.co.ke" target="_blank" rel="noopener" className="hover:text-blue-300">
          BhakitahTech
        </a>
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}