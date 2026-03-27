// app/components/HowItWorks.tsx
'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      number: "01",
      title: "Create Your Workspace",
      description: "Set up your team or personal workspace in seconds. Invite team members and start organizing.",
      icon: "🏢"
    },
    {
      number: "02",
      title: "Add Tasks & Projects",
      description: "Create tasks, assign priorities, set due dates, and organize everything into projects.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Track & Collaborate",
      description: "Monitor progress, get real-time insights, and collaborate with your team seamlessly.",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    // Animate steps when they come into view
    stepsRef.current.forEach((step, index) => {
      if (step) {
        gsap.fromTo(step,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How DevFlow Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes, not hours
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { stepsRef.current[index] = el; }}
              className="text-center group  "
            >
              {/* Step Number Circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2" style={{ width: 'calc(100% - 80px)' }} />
                )}
              </div>

              {/* Step Icon */}
              <div className="text-5xl mb-4">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional: CTA after steps */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}