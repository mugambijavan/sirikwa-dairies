'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { ChartBarIcon, CheckIcon } from 'lucide-react';

export default function About() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const partners = [
    { name: 'Brookside Dairy', logo: '/assets/img/P18.png' },
    // Add other partners
  ];

  const testimonials = [
    {
      name: 'Mr. Philips',
      role: 'Chairman',
      text: 'Committed to improving farmer livelihoods',
      image: '/assets/img/1C.jpeg'
    },
    // Add other testimonials
  ];

  return (
    <main className="relative">
      {/* Enhanced Hero Section */}
      <section className="relative h-96 bg-blue-50 flex items-center">
        <div className="absolute inset-0 bg-[url('/assets/img/maziwa.jpeg')] bg-cover bg-center blur-sm" />
        <div className="container text-center relative z-10" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            About Sirikwa Dairies
          </h1>
          <p className="text-xl text-gray-600">
            Empowering farmers through quality dairy solutions
          </p>  
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
              data-aos="fade-right"
            >
              <Image
                src="/assets/img/P43.jpeg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-800">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Established in 2010, Sirikwa Dairies has grown to become a leader...
              </p>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <ChartBarIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">12,000+ Liters Daily</h3>
                  <p className="text-gray-600">High-quality milk processed daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
            Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Quality Assurance',
              'Integrity',
              'Transparency & Accountability',
              'Team Work',
              'Customer Satisfaction',
              'Professionalism',
              'Effective Governance',
              'Diversity'
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex items-center gap-3">
                  <CheckIcon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
            Strategic Objectives
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Increase daily milk collection volumes',
              'Expand business operations and income streams',
              'Provide efficient quality dairy services',
              'Enhance strategic governance',
              'Improve resource management',
              'Boost farmer satisfaction/loyalty',
              'Strengthen partnership strategies'
            ].map((objective, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-all"
                data-aos="fade-right"
                data-aos-delay={index * 50}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 px-3 py-1 rounded-full text-sm font-bold text-blue-600">
                    0{index + 1}
                  </div>
                  <p className="text-gray-600">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <div 
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-center mt-4 font-medium">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Leadership Insights
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }}}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  data-aos="fade-up"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}