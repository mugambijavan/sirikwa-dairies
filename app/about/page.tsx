'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { CheckCircle, Leaf, ShieldCheck, Handshake, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTractor } from 'react-icons/fa';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const sponsors = [
    '/sponsors/img1.png', '/sponsors/img2.jpeg', '/sponsors/img3.jpeg',
    '/sponsors/img4.jpeg', '/sponsors/img5.webp', '/sponsors/img6.png',
    '/sponsors/img7.png'
  ];

  const testimonials = [
    {
      id: 1,
      name: "Mr Philips",
      role: "Chairman",
      image: "/img145.jpeg",
      text: "We are determined to make SIRIKWA a leading high quality dairy company that will improve the economic status of our farmers and welfare of our people in the country and beyond."
    },
    {
      id: 2,
      name: "Mr Christopher",
      role: "General Manager",
      image: "/img121.jpeg",
      text: "We aim to achieve operational excellence through cutting-edge technologies, continuous staff development, and customer-centric strategies focused on sustainability and empowerment."
    },
    {
      id: 3,
      name: "Mrs Naommy",
      role: "Treasurer",
      image: "/img147.jpeg",
      text: "Our market-driven approach ensures agile response to industry dynamics, enabling data-backed decisions that drive profitability and sustainable growth."
    }
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-blue-50 flex items-center">
        <div className="absolute inset-0 bg-[url('/img120.jpeg')] bg-cover bg-center blur-sm" />
        <div className="container text-center relative z-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4">
            About Sirikwa Dairies
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
            Empowering Farmers, Enriching Communities
          </p>
        </div>
      </section>

      {/* Historical Journey */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl" data-aos="fade-right">
              <Image 
                src="/img184.png" 
                alt="History" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-4 md:space-y-6 mt-8 md:mt-0" data-aos="fade-left">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Foundation</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Sirikwa Dairies and General PCL, established in 2010 and launched in 2012, is a farmer-owned cooperative headquartered in Ziwa, Kenya, serving over 6,000 members across Uasin Gishu, Kakamega, and neighboring counties. It specializes in milk collection, chilling, and marketing—processing 12,000 kg daily—while providing farmers with competitive pricing, capacity-building services, and access to inputs like animal health care, feed, and breeding support. Founded to revive the dairy sector post-Kenya Co-operative Creameries’ collapse, Sirikwa combats poverty by offering farmers equity ownership, profit-sharing, and an integrated business hub model that pools resources and partnerships with 20+ stakeholders. Supported by East Africa Dairy Development (EADD) and TechnoServe, it supplies high-quality milk to processors like Brookside and New KCC, generating KSH 77 million annually, while aligning with Vision 2030 and MDGs to improve livelihoods through sustainable agriculture, education, and healthcare. By merging commercial efficiency with farmer empowerment, Sirikwa drives economic resilience in a region with a 30,000-liter daily milk potential.              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold">30,000L</h3>
                  <p className="text-gray-600 text-sm md:text-base">Daily Production</p>
                </div>
                <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold">3,000+</h3>
                  <p className="text-gray-600 text-sm md:text-base">Shareholders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperative Model */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-last lg:order-first" data-aos="fade-right">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Handshake className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Cooperative Advantage</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Through our unique hub model, we unite 20+ partners in providing:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {['Dairy Inputs', 'Veterinary Care', 'Financial Solutions'].map((service) => (
                  <div key={service} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                    <span className="text-sm md:text-base">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl" data-aos="fade-left">
              <Image 
                src="/img186.jpeg" 
                alt="Cooperative" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
              <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">7Ps Marketing Strategy</h2>
            </div>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Our comprehensive approach ensuring market leadership and farmer prosperity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-aos="fade-up">
            {['Product Excellence', 'Competitive Pricing', 'Strategic Promotion', 'People First', 
              'Optimal Placement', 'Efficient Processes', 'Physical Evidence'].map((strategy, index) => (
              <div key={strategy} className="p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full text-sm md:text-base">{index + 1}</div>
                  <h3 className="text-base md:text-lg font-semibold">{strategy}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl" data-aos="fade-right">
              <Image 
                src="/img135.jpeg" 
                alt="Sustainability" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 md:space-y-6 mt-8 md:mt-0" data-aos="fade-left">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sustainable Impact</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Aligned with Vision 2030 and MDGs, we have achieved:
              </p>
              <ul className="space-y-2 md:space-y-3 list-disc pl-6 text-base md:text-lg">
                {['50% reduction in milk spoilage', '30% income increase for farmers', 
                  '20+ community projects', '100% traceable supply chain'].map((item) => (
                  <li key={item} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Trusted Partners</h2>
          <div className="relative overflow-hidden py-6 md:py-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={'auto'}
              autoplay={{ delay: 1, disableOnInteraction: false, reverseDirection: true }}
              speed={3000}
              loop={true}
              freeMode={true}
              className="!overflow-visible"
              breakpoints={{
                640: { spaceBetween: 40 },
                1024: { spaceBetween: 50 }
              }}
            >
              {sponsors.map((sponsor, index) => (
                <SwiperSlide key={index} className="!w-auto">
                  <div className="relative h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 mx-2 sm:mx-4 grayscale hover:grayscale-0 transition-all">
                    <Image 
                      src={sponsor} 
                      alt={`Sponsor ${index}`} 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 640px) 128px, 192px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Leadership Insights
            </h2>
            <p className="text-gray-600">Visionary Perspectives from Our Executives</p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mx-2 transform transition hover:scale-[1.02] duration-300 h-full">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover border-4 border-white shadow-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                        <div className="flex text-yellow-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 relative pl-6">
                      <svg 
                        className="w-6 h-6 text-blue-100 absolute left-0 top-0.5"
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                      </svg>
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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