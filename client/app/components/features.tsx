// app/components/FeaturesSection.tsx
'use client';

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckSquare, FolderKanban, BarChart, Puzzle, Zap, Shield, Users, Clock, TrendingUp, Award } from 'lucide-react';
import gsap from 'gsap';

export default function FeaturesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Create, organize, and track tasks with intuitive drag-and-drop interface. Set priorities, due dates, and recurring tasks effortlessly.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FolderKanban,
      title: "Project Organization",
      description: "Group tasks into projects, set milestones, and visualize progress with Gantt charts and Kanban boards. Perfect for any workflow.",
      color: "from-violet-500 to-purple-400",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600"
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Get real-time insights with beautiful charts and dashboards. Track team productivity, completion rates, and identify bottlenecks.",
      color: "from-indigo-500 to-blue-400",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Puzzle,
      title: "Integrations",
      description: "Connect with 20+ tools including GitHub, Slack, Jira, and Notion. Streamline your workflow with seamless integrations.",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant updates and real-time sync across all devices. No delays, no waiting—just pure speed.",
      color: "from-amber-500 to-orange-400",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SSO support, and role-based permissions. Your data is safe and compliant with industry standards.",
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite team members, assign tasks, and collaborate in real-time. Comments, mentions, and activity feeds keep everyone in sync.",
      color: "from-rose-500 to-pink-400",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Log hours, track time spent on tasks, and generate timesheets. Perfect for billing and productivity analysis.",
      color: "from-cyan-500 to-blue-400",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Monitor key metrics like velocity, cycle time, and throughput. Make data-driven decisions to improve efficiency.",
      color: "from-green-500 to-emerald-400",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Award,
      title: "Achievements & Gamification",
      description: "Motivate your team with achievements, badges, and performance rewards. Make work feel like a game.",
      color: "from-yellow-500 to-amber-400",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      gsap.to(scrollContainerRef.current, {
        scrollLeft: newScrollLeft,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  useEffect(() => {
    // GSAP animation for cards on mount
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Powerful features for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {' '}modern teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage tasks, collaborate, and ship faster
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container - Apple Style */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth gap-6 px-8 pb-8"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="flex-none w-[350px] md:w-[400px] group/card "
            >
              <div className="bg-gradient-to-r from-white/60 via-white/50 to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 shadow-md`}>
                  <feature.icon className={`h-8 w-8 text-white`} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-4 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all"
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div> */}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        
        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
}