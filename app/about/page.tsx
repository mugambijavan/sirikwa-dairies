'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { ChartBarIcon } from 'lucide-react';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
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
    <main>
      {/* Breadcrumbs */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <div className="flex justify-center gap-2 text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden" data-aos="fade-right">
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
              <div className="flex items-center gap-4">
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

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <div 
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-up"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="w-full h-20 object-contain"
                />
                <h4 className="text-center mt-4 font-medium">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Leadership Insights</h2>
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
                <div className="bg-white p-8 rounded-xl shadow-lg" data-aos="fade-up">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover"
                    />
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