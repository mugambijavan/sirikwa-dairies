    'use client';
    import { useEffect } from 'react';
    import Image from 'next/image';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { Truck, Leaf,  HeartPulse, DollarSign, Milk, CheckIcon } from 'lucide-react';

    export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const services = [
        {
        title: 'Dairy Core Services',
        icon: <Milk className="w-8 h-8 text-blue-600" />,
        items: ['Bulking & Chilling', 'Quality Milk Marketing', 'Daily Collection'],
        image: '/img141.png'
        },
        {
        title: 'Agrovet & Financial',
        icon: <DollarSign className="w-8 h-8 text-green-600" />,
        items: ['Agrovet Supplies', 'Farmer Loans', 'Member Registration', 'Milk Payments'],
        image: '/img170.jpeg'
        },
        {
        title: 'Livestock Support',
        icon: <HeartPulse className="w-8 h-8 text-red-600" />,
        items: ['AI Services', 'Vet Services', 'Capacity Building', 'Mobilization'],
        image: '/img179.jpeg'
        },
        {
        title: 'Sustainable Solutions',
        icon: <Leaf className="w-8 h-8 text-emerald-600" />,
        items: ['Biogas Systems', 'Renewable Energy', 'Eco Packaging'],
        image: '/img171.jpeg'
        }
    ];

    const products = [
        {
        category: 'Milk Products',
        items: ['Fresh Milk', 'Fermented Milk', 'Pasteurized Cream'],
        image: '/img141.png'
        },
        {
        category: 'Agrovet Products',
        items: ['Animal Drugs', 'Fertilizers', 'Farming Tools'],
        image: '/img170.jpeg'
        },
        {
        category: 'Animal Feeds',
        items: ['Dairy Meal', 'Calf Feed', 'Mineral Supplements'],
        image: '/img169.jpeg'
        }
    ];

    return (
        <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-100 flex items-center">
            <div className="absolute inset-0">
            <Image
                src="/img171.jpeg"
                alt="Dairy Farm"
                fill
                className="object-cover opacity-50"
            />
            </div>
            <div className="container text-center relative z-10" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Our Comprehensive Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering farmers with end-to-end dairy ecosystem services
            </p>
            </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                Our Services Ecosystem
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                <div 
                    key={i}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                    data-aos="fade-up"
                >
                    <div className="relative h-48 bg-gray-100">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        {service.icon}
                        <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                        {service.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                            <CheckIcon className="w-4 h-4 text-green-500" />
                            {item}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                Quality Products Portfolio
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {products.map((product, i) => (
                <div 
                    key={i}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                    data-aos="fade-up"
                >
                    <div className="relative h-48 bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.category}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">{product.category}</h3>
                    <ul className="space-y-2">
                        {product.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                            <CheckIcon className="w-4 h-4 text-blue-500" />
                            {item}
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Transportation Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl" data-aos="fade-right">
                <Image
                    src="/img179.jpeg"
                    alt="Transport Services"
                    fill
                    className="object-cover"
                />
                </div>
                <div className="space-y-6" data-aos="fade-left">
                <div className="flex items-center gap-3">
                    <Truck className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">Reliable Transportation Network</h2>
                </div>
                <p className="text-gray-600">
                    Our fleet ensures fresh milk preservation with:
                </p>
                <ul className="space-y-3">
                    {['Cold-chain vehicles', '24/7 collection service', 'Real-time tracking', 
                    'Quality maintenance'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <CheckIcon className="w-5 h-5 text-green-500" />
                        {item}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </section>
        </main>
    );
    }