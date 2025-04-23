    'use client';

    import { useEffect } from 'react';
    import Image from 'next/image';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const products = [
        {
        title: 'Fresh Milk',
        description: 'Daily collected, pasteurized, and chilled to perfection',
        image: '/assets/img/milk-bottles.jpg'
        },
        {
        title: 'Dairy Inputs',
        description: 'Quality animal feeds and veterinary products',
        image: '/assets/img/animal-feed.jpg'
        },
        // Add more products
    ];

    const services = [
        {
        title: 'Milk Collection',
        description: 'Efficient bulk milk collection system',
        icon: '🔄'
        },
        {
        title: 'Extension Services',
        description: 'Expert agricultural advisory services',
        icon: '🌱'
        },
        // Add more services
    ];

    return (
        <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-blue-50 flex items-center">
            <div className="container text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold mb-4">Our Products & Services</h1>
            <p className="text-xl text-gray-600">Quality dairy solutions for farmers and consumers</p>
            </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Our Products</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, i) => (
                <div 
                    key={i}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                    data-aos="fade-up"
                >
                    <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                <div 
                    key={i}
                    className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
                    data-aos="fade-up"
                >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>
        </main>
    );
    }