    'use client';

    import { useEffect } from 'react';
    import Link from 'next/link';
    import Image from 'next/image';
    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default function Blog() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const posts = [
        {
        title: 'New Cooling Plant Launch',
        date: 'March 15, 2024',
        excerpt: 'Discover our latest investment in milk preservation technology',
        image: '/assets/img/cooling-plant.jpg',
        category: 'News'
        },
        // Add more posts
    ];

    return (
        <main>
        <section className="bg-blue-50 py-16">
            <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">Dairy Insights Blog</h1>
            <p className="text-gray-600" data-aos="fade-up">Stay updated with the latest in dairy farming</p>
            </div>
        </section>

        <section className="py-20">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                <article 
                    key={i}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    data-aos="fade-up"
                >
                    <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                    <h2 className="text-xl font-bold my-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link 
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Read More →
                    </Link>
                    </div>
                </article>
                ))}
            </div>
            </div>
        </section>
        </main>
    );
    }