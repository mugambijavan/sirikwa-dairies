'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CheckCircle} from 'lucide-react';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaLeaf, FaTractor } from 'react-icons/fa';

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    AOS.init({ 
      duration: 1200, 
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const slides = [
    '/images/img138.jpeg',
    '/images/img140.jpg',
    '/images/img120.jpeg',
    '/images/img119.jpeg'
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000 }}
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
                    className="absolute inset-0 bg-cover bg-center blur-[3px] transition-all duration-1000"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-blue-900/60 backdrop-blur-[2px]" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Foreground Content */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="container mx-auto px-4">
      <motion.div 
        className="flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
          style={{ 
            fontFamily: 'Playfair Display, serif',
            textShadow: '0 4px 12px rgba(0,0,0,0.5)'
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sirikwa Dairies</span>
        </motion.h1>

        <motion.p 
          className="text-2xl md:text-4xl mb-10 max-w-4xl mx-auto leading-relaxed"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            color: '#f0f9ff'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Empowering Dairy Farmers with Innovation and Excellence
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link 
            href="/about" 
            className="inline-block bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-12 py-5 rounded-2xl text-xl font-semibold tracking-wide transform transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Explore Our Journey
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8" data-aos="fade-right">
              <motion.h2 
                className="text-5xl font-bold text-gray-800"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Sirikwa Dairies
              </motion.h2>
              <p className="text-gray-700 text-xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sirikwa Dairies, a farmer-owned cooperative, excels in bulking, chilling, and marketing premium milk while offering top-tier dairy services.
                <br /><br /><strong>Our Reach:</strong><br />
                ▪ Main Office: Ziwa Town (45 km west of Eldoret)<br />
                ▪ Branches: Kiplombe (Uasin Gishu) & Likuyani (Kakamega)<br />
                ▪ Collection Network: Uasin Gishu, Kakamega, Elgeyo Marakwet, Trans Nzoia Counties
                <br /><br /><strong>Our Vision:</strong><br />
                To lead as a high-quality dairy company, uplifting farmers and communities.
                <br /><br /><strong>Our Mission:</strong><br />
                To enhance farmer livelihoods through efficient dairy solutions and superior services.
              </p>
            </div>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video"
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
          <motion.div 
            className="bg-blue-100 rounded-3xl p-12 mb-24 text-center"
            data-aos="zoom-in"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Motto
            </h3>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Dairy Products For Health and Wealth
            </p>
          </motion.div>

          {/* Tabbed Features Section */}
          <div className="mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4].map((tabId) => (
                <motion.button
                  key={tabId}
                  onClick={() => setActiveTab(tabId)}
                  className={`p-5 text-center rounded-xl transition-all ${
                    activeTab === tabId
                      ? 'bg-blue-500 text-white shadow-xl'
                      : 'bg-white text-gray-800 hover:bg-blue-100'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-semibold">
                    {['Products', 'Projects', 'Services', 'Marketing'][tabId - 1]}
                  </h3>
                </motion.button>
              ))}
            </div>

            <motion.div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Products Tab */}
              {activeTab === 1 && (
                <div className="grid md:grid-cols-2 gap-12 p-12">
                  <div className="space-y-6" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Premium Dairy Products
                    </h2>
                    <p className="text-gray-700 text-lg italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Collaborating with industry leaders like Brookside and NKCC to deliver exceptional milk products with uncompromising quality.
                    </p>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/images/img106.jpg"
                      alt="Dairy Products"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}

              {/* Projects Tab */}
              {activeTab === 2 && (
                <div className="grid md:grid-cols-2 gap-12 p-12">
                  <div className="space-y-6" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Development Initiatives
                    </h2>
                    <div className="space-y-3">
                      {[
                        'Annual General Meeting Organization',
                        'Milk ATM Network Expansion',
                        'Farmer Credit Facilities'
                      ].map((item, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle className="w-6 h-6 text-green-500" />
                          <span className="text-gray-700 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/images/img112.jpeg"
                      alt="Dairy Projects"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}

              {/* Services Tab */}
              {activeTab === 3 && (
                <div className="grid md:grid-cols-2 gap-12 p-12">
                  <div className="space-y-6" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Comprehensive Services
                    </h2>
                    <div className="grid gap-3">
                      {[
                        'Extension & Training Programs',
                        'Milk Collection Logistics',
                        'Feed & Fodder Management',
                        'Veterinary Support',
                        'Market Access Solutions'
                      ].map((service, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <CheckCircle className="w-6 h-6 text-blue-500" />
                          <span className="text-gray-700 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/images/img159.jpeg"
                      alt="Dairy Services"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}

              {/* Marketing Tab */}
              {activeTab === 4 && (
                <div className="grid md:grid-cols-2 gap-12 p-12">
                  <div className="space-y-6" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Market Leadership
                    </h2>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Driving fair pricing and sustainable partnerships through cooperative models across multiple counties.
                    </p>
                  </div>
                  <div className="relative h-96" data-aos="fade-left">
                    <Image
                      src="/images/img171.jpeg"
                      alt="Marketing Profile"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Operations Map Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Operations Map
            </h3>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Connecting farmers across counties with our robust collection and chilling network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8" data-aos="zoom-in">
            {[
              { county: 'Uasin Gishu', branches: 2 },
              { county: 'Kakamega', branches: 1 },
              { county: 'Trans Nzoia', branches: 3 },
              { county: 'Elgeyo Marakwet', branches: 2 },
            ].map((location, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {location.county}
                </h4>
                <p className="text-blue-600 text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {location.branches} {location.branches > 1 ? 'Branches' : 'Branch'}
                </p>
              </motion.div>
            ))}
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
                                src="/images/sirikwalogo.jpg"
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