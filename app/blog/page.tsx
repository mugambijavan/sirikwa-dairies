    'use client';

    import { useEffect } from 'react';
    import Image from 'next/image';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { Headphones, FileAudio} from 'lucide-react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTractor } from 'react-icons/fa';

    export default function Blog() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const audioPosts = [
        {
        title: 'Why Sirikwa Dairies',
        date: 'March 20, 2024',
        file: '/images/AUDIO1.mp3',
        category: 'Audio Report',
        duration: '1 min'
        },
        {
        title: 'Audio Blog Post 2',
        date: 'March 25, 2024',
        file: '/images/AUDIO2.mp3',
        category: 'Expert Interview',
        duration: '1 min'
        }
    ];

    return (
        <main>
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-100 flex items-center">
            <div className="absolute inset-0">
            <Image
                src="/images/img107.jpeg"
                alt="Dairy Blog"
                fill
                className="object-cover opacity-50"
            />
            </div>
            <div className="container text-center relative z-10" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                Dairy Insights Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Immerse yourself in audio stories from the dairy frontier
            </p>
            </div>
        </section>

        {/* Audio Content Section */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-2 rounded-full mb-6">
                    <Headphones className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold">Audio Chronicles</h2>
                </div>
                <p className="text-gray-600">
                    Explore our collection of expert interviews and field reports
                </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                {audioPosts.map((post, i) => (
                    <article 
                    key={i}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                    >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                        <FileAudio className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                        <span className="text-sm text-blue-600 font-medium">
                            {post.category}
                        </span>
                        <h3 className="text-xl font-bold mt-1">{post.title}</h3>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{post.date}</span>
                        <span>{post.duration}</span>
                    </div>

                    <audio 
                        controls
                        className="w-full audio-player"
                    >
                        <source src={post.file} type="audio/mpeg" />
                        Your browser does not support audio playback
                    </audio>
                    </article>
                ))}
                </div>

                {/* Empty State Section */}
                <div className="text-center py-12" data-aos="fade-up">
                <div className="max-w-md mx-auto mb-8">
                    <Image
                    src="/images/img129.jpeg"
                    alt="Coming Soon"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg"
                    />
                </div>
                <h3 className="text-2xl font-bold mb-4">More Content Brewing</h3>
                <p className="text-gray-600">
                    Our written insights are currently in production. Stay tuned for deep dives into dairy innovation!
                </p>
                </div>
            </div>
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
                            src="/images/sirikwalogo.jpg"
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

        <style jsx global>{`
            .audio-player {
            border-radius: 12px;
            background: #f8fafc;
            }
            .audio-player::-webkit-media-controls-panel {
            background: #f8fafc;
            }
            .audio-player::-webkit-media-controls-play-button,
            .audio-player::-webkit-media-controls-timeline {
            filter: invert(20%);
            }
        `}</style>
        </main>
    );
    }