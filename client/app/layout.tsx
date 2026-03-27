// app/layout.tsx
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from './components/navbar';
import HomeHero from './components/homehero';
import FeaturesSection from './components/features';
import HowItWorks from './components/howitworks';
import ProductDemo from './components/productdemo';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />           {/* ← This appears on EVERY page */}
        <main><HomeHero/>
        <FeaturesSection/>
        <HowItWorks/>
        <ProductDemo/>
        </main>  {/* ← This is where page content goes */}
      </body>
    </html>
  );
}