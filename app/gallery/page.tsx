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
    '/img175.jpeg',
    '/img127.jpg',
    '/img107.jpeg',
    '/img166.jpeg',
    '/img191.jpeg',
    '/img180.jpeg',
    '/img122.JPG',
    '/img160.jpeg',
    '/img143.jpeg',
    '/img128.jpg',
    '/img162.jpeg',
    '/img146.png',
    '/img190.jpeg',
    '/img133.jpg',
    '/img102.jpeg',
    '/img178.jpg',
    '/img130.jpeg',
    '/img115.jpeg',
    '/img141.png',
    '/img158.JPG',
    '/img104.jpeg',
    '/img149.jpeg',
    '/img156.webp',
    '/img174.jpeg',
    '/img147.jpeg',
    '/img151.jpg',
    '/img112.jpeg',
    '/img131.jpeg',
    '/img163.jpeg',
    '/img185.jpeg',
    '/img145.jpeg',
    '/img103.jpeg',
    '/img193.jpeg',
    '/img100.jpeg',
    '/img129.jpeg',
    '/img120.jpeg',
    '/img157.jpg',
    '/img111.jpeg',
    '/img137.jpg',
    '/img142.jpeg',
    '/img161.jpeg',
    '/img110.jpeg',
    '/img169.jpeg',
    '/img153.jpeg',
    '/img165.jpeg',
    '/img125.jpg',
    '/img119.jpeg',
    '/img124.jpg',
    '/img172.jpeg',
    '/img101.jpeg',
    '/img181.jpg',
    '/img170.jpeg',
    '/img196.jpeg',
    '/img106.jpg',
    '/img123.jpg',
    '/img121.jpeg',
    '/img117.jpg',
    '/img195.jpeg',
    '/img136.jpeg',
    '/img173.jpeg',
    '/img171.jpeg',
    '/img126.jpg',
    '/img114.jpeg',
    '/img176.jpeg',
    '/img187.jpeg',
    '/img188.jpeg',
    '/img132.webp',
    '/img164.jpeg',
    '/img177.jpg',
    '/img192.jpeg',
    '/img184.png',
    '/img197.jpeg',
    '/img105.jpeg',
    '/img150.JPG',
    '/img152.jpeg',
    '/img159.jpeg'
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
      <section className="relative h-96 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
        <div className="container text-center relative z-10">
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