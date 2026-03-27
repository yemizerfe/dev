// app/components/ProductDemo.tsx
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ProductDemo() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    // Animate demo image when it comes into view
    if (imageRef.current) {
      gsap.fromTo(imageRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See DevFlow in action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, intuitive interface that helps you stay organized
            </p>
          </div>

          {/* Demo Image Container */}
          <div ref={imageRef} className="relative">
            {/* Main Demo Image */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
              {/* Image Placeholder (replace with actual screenshot) */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-video flex items-center justify-center relative">
                {/* Dashboard Mockup */}
                <div className="absolute inset-0 p-4 md:p-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full w-full">
                    {/* Mockup Header */}
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 text-center text-sm text-gray-500">dashboard.devflow.app</div>
                    </div>
                    
                    {/* Mockup Content */}
                    <div className="p-4 md:p-6">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-blue-600">12</div>
                          <div className="text-xs text-gray-500">Tasks</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-green-600">8</div>
                          <div className="text-xs text-gray-500">Completed</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-3 text-center">
                          <div className="text-2xl font-bold text-purple-600">4</div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                      </div>
                      
                      {/* Tasks List */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-5 h-5 rounded border-2 border-blue-400"></div>
                          <span className="flex-1 text-sm">Build landing page</span>
                          <span className="text-xs text-gray-400">Due today</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
                          <span className="flex-1 text-sm line-through text-gray-400">Design system</span>
                          <span className="text-xs text-green-600">Completed</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-5 h-5 rounded border-2 border-blue-400"></div>
                          <span className="flex-1 text-sm">Write documentation</span>
                          <span className="text-xs text-gray-400">Tomorrow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                    aria-label="Play demo video"
                  >
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "⚡", text: "Real-time sync", desc: "Updates instantly across devices" },
              { icon: "📱", text: "Mobile friendly", desc: "Works on any device" },
              { icon: "🔒", text: "Secure", desc: "Bank-grade encryption" },
              { icon: "🎨", text: "Beautiful UI", desc: "Clean and intuitive design" }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-12 h-12 mx-auto bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="font-medium text-gray-900">{item.text}</p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              {/* Replace with actual video embed */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-400">Demo video placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">Embed your product demo video here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}