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
import { CheckIcon } from 'lucide-react';

  export default function Home() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    const features = [
      { 
        title: 'Products',
        content: 'High-quality dairy products from trusted farmers',
        image: '/assets/img/M11.jpg'
      },
      // Add other features
    ];


    return (
      <main>
        {/* Hero Section */}
        <section className="relative h-screen">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="h-full"
          >
            {['/assets/img/B5.jpeg', '/assets/img/B2.jpeg'].map((img, i) => (
              <SwiperSlide key={i}>
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 bg-black/30 flex items-center">
            <div className="container text-center text-white" data-aos="fade-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to <span className="text-blue-400">Sirikwa Dairies</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Improving lives through quality dairy products
              </p>
              <Link href="/about" className="btn bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8" data-aos="fade-right">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Commitment</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <CheckIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-gray-600">Rigorous quality control measures at every stage</p>
                    </div>
                  </div>
                  {/* Add other values similarly */}
                </div>
              </div>
              
              <div className="relative h-96 rounded-xl overflow-hidden" data-aos="fade-left">
                <Image
                  src="/assets/img/cowmilk.jpeg"
                  alt="Dairy Farm"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Our Offerings</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  data-aos="fade-up"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }