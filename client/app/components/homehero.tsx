// app/components/HeroSection.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);

  // GSAP Animation on mount
  useEffect(() => {
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    gsap.fromTo(headlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' }
    );
    
    gsap.fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out' }
    );
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-violet-800 to-indigo-950"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge / Announcement */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            New: AI-powered task suggestions
          </div>

          {/* Headline */}
          <div ref={headlineRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Manage Tasks Like a
              <span className="block md:inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                {' '}Professional Team
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              DevFlow helps developers and teams track work, collaborate efficiently, 
              and ship faster. The all-in-one task management platform trusted by 
              thousands of developers worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/signup"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
            >
              <Play className="h-4 w-4" />
              Watch Demo
            </Link>
          </div>

          {/* Social Proof / Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 text-blue-200">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-2 text-white">4.9/5 from 500+ reviews</span>
            </div>
            
            <div className="flex items-center gap-2 text-blue-200">
              <CheckCircle className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
          </div>

          {/* Company Logos */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-blue-300 mb-6 uppercase tracking-wider">
              Trusted by teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <span className="text-white/60 font-semibold text-lg">MICROSOFT</span>
              <span className="text-white/60 font-semibold text-lg">GOOGLE</span>
              <span className="text-white/60 font-semibold text-lg">NETFLIX</span>
              <span className="text-white/60 font-semibold text-lg">GITHUB</span>
              <span className="text-white/60 font-semibold text-lg">VERCEL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
}