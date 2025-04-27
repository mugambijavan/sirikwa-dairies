'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'aos/dist/aos.css';
import { CheckCircle, Leaf, ShieldCheck, Handshake, Target } from 'lucide-react';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  const sponsors = [
    '/sponsors/img1.png', '/sponsors/img2.jpeg', '/sponsors/img3.jpeg',
    '/sponsors/img4.jpeg', '/sponsors/img5.webp', '/sponsors/img6.png',
    '/sponsors/img7.png', '/sponsors/img8.png'
  ];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-blue-50 flex items-center">
        <div className="absolute inset-0 bg-[url('/img171.jpeg')] bg-cover bg-center blur-sm" />
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
                Founded in 2010, Sirikwa Dairies, a leading farmer-owned enterprise spanning several counties...
              </p>
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
                {['Dairy Inputs', 'AI Services', 'Veterinary Care', 'Financial Solutions'].map((service) => (
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
    </main>
  );
}