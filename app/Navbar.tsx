'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Products & Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: '/gallery', label: 'Gallery' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
                <Image
                src="/img146.png"
                alt="Sirikwa Dairies"
                width={50}
                height={50}
                className="h-12 w-12"
                />
                <span className="text-2xl font-extrabold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sirikwa Dairies
                <span className="block text-base font-medium text-gray-600">PLC</span>
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
                {links.map((link) => (
                <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-lg font-semibold ${
                        pathname === link.href 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-800 hover:text-blue-600 transition-colors'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                    {link.label}
                    </Link>
                </motion.div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100"
            >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </motion.button>
            </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden absolute w-full bg-white shadow-lg"
            >
                <div className="px-4 pt-2 pb-4">
                {links.map((link) => (
                    <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    >
                    <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                        pathname === link.href
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-800 hover:bg-gray-100'
                        }`}
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </Link>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
        </header>
    );
}