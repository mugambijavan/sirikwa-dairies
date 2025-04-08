    'use client';

    import { useEffect } from 'react';
    import Image from 'next/image';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default function Gallery() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const galleryImages = [
        '/assets/img/gallery1.jpg',
        '/assets/img/gallery2.jpg',
        // Add more images
    ];

    return (
        <main>
        <section className="bg-blue-50 py-16">
            <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Our Gallery</h1>
            <p className="text-gray-600" data-aos="fade-up">Visual journey through our dairy operations</p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, i) => (
                <div 
                    key={i}
                    className="aspect-square relative overflow-hidden rounded-lg hover:shadow-lg transition-shadow"
                    data-aos="zoom-in"
                >
                    <Image
                    src={img}
                    alt={`Gallery image ${i+1}`}
                    fill
                    className="object-cover cursor-pointer transform hover:scale-105 transition"
                    />
                </div>
                ))}
            </div>
            </div>
        </section>
        </main>
    );
    }