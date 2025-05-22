// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sirikwa Dairies',
  description: 'Farmer-owned dairy cooperative providing premium milk products',
  icons: {
    icon: '/images/img146.png', // Main favicon
    apple: '/images/apple-touch-icon.png', // Optional: for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Add additional icon versions */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/sirikwalogo-32x32.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/sirikwalogo-16x16.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.jpg"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}