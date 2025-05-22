'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-out-cubic'
    });
  }, []);

  const galleryImages = [
    '/images/img175.jpeg',
    '/images/img127.jpg',
    '/images/img107.jpeg',
    '/images/img166.jpeg',
    '/images/img191.jpeg',
    '/images/img180.jpeg',
    '/images/img122.JPG',
    '/images/img160.jpeg',
    '/images/img143.jpeg',
    '/images/img128.jpg',
    '/images/img162.jpeg',
    '/images/img146.png',
    '/images/img190.jpeg',
    '/images/img133.jpg',
    '/images/img102.jpeg',
    '/images/img178.jpg',
    '/images/img130.jpeg',
    '/images/img115.jpeg',
    '/images/img141.png',
    '/images/img158.JPG',
    '/images/img104.jpeg',
    '/images/img149.jpeg',
    '/images/img156.webp',
    '/images/img174.jpeg',
    '/images/img147.jpeg',
    '/images/img151.jpg',
    '/images/img112.jpeg',
    '/images/img131.jpeg',
    '/images/img163.jpeg',
    '/images/img185.jpeg',
    '/images/img145.jpeg',
    '/images/img103.jpeg',
    '/images/img193.jpeg',
    '/images/img100.jpeg',
    '/images/img129.jpeg',
    '/images/img120.jpeg',
    '/images/img157.jpg',
    '/images/img111.jpeg',
    '/images/img137.jpg',
    '/images/img142.jpeg',
    '/images/img161.jpeg',
    '/images/img110.jpeg',
    '/images/img169.jpeg',
    '/images/img153.jpeg',
    '/images/img165.jpeg',
    '/images/img125.jpg',
    '/images/img119.jpeg',
    '/images/img124.jpg',
    '/images/img172.jpeg',
    '/images/img101.jpeg',
    '/images/img181.jpg',
    '/images/img170.jpeg',
    '/images/img196.jpeg',
    '/images/img106.jpg',
    '/images/img123.jpg',
    '/images/img121.jpeg',
    '/images/img117.jpg',
    '/images/img195.jpeg',
    '/images/img136.jpeg',
    '/images/img173.jpeg',
    '/images/img171.jpeg',
    '/images/img126.jpg',
    '/images/img114.jpeg',
    '/images/img176.jpeg',
    '/images/img187.jpeg',
    '/images/img188.jpeg',
    '/images/img132.webp',
    '/images/img164.jpeg',
    '/images/img177.jpg',
    '/images/img192.jpeg',
    '/images/img184.png',
    '/images/img197.jpeg',
    '/images/img105.jpeg',
    '/images/img150.JPG',
    '/images/img152.jpeg',
    '/images/img159.jpeg'
  ];

  const openLightbox = (img: string) => {
    setSelectedImage(img);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
       {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-blue-50 flex items-center">
        <div className="absolute inset-0 bg-[url('/images/img119.jpeg')] bg-cover bg-center blur-sm" />
        <div className="container text-center relative z-10" data-aos="fade-up">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Sirikwa Dairies Gallery
          </h1>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Immerse yourself in our world of quality dairy production through captivating visuals
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 [mask-image:linear-gradient(transparent,#000,transparent)]">
          <div className="animate-blob absolute w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-48 -left-48" />
          <div className="animate-blob absolute w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-48 -right-48 animation-delay-2000" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div 
                key={i}
                className="relative break-inside-avoid cursor-pointer group"
                data-aos="fade-up"
                data-aos-delay={(i % 10) * 50}
                onClick={() => openLightbox(img)}
              >
                <div className="relative overflow-hidden rounded-xl transition-all duration-500 transform group-hover:scale-[0.98]">
                  <Image
                    src={img}
                    alt={`Dairy operation image ${i+1}`}
                    width={600}
                    height={800}
                    className="object-cover w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-white font-medium truncate">Image {i+1}</p>
                    <p className="text-sm text-white/80">Dairy Production</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-200 transition-colors"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}