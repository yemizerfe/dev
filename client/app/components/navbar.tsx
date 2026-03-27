'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown,
  // Products icons
  CheckSquare, FolderKanban, BarChart, Puzzle, Sparkles, ArrowRight,
  // Community icons
  MessageCircle, Code, Hash, BookOpen, Calendar, Mail, Lightbulb,
  // Resources icons
  FileText, Video, LayoutTemplate, Users, LifeBuoy, Activity, Keyboard,
  // Solutions icons
  Rocket, Building, Code2, Target, Calculator
} from 'lucide-react';
import gsap from 'gsap';

type MenuItem = {
  icon?: React.ComponentType<any>;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  badge?: string;
  variant?: 'highlight';
  separator?: boolean;
} | {
  separator: true;
};

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredDropDown,setHoveredDropDown] = useState<string |null>(null);
  const dropDownRef = useRef<{[key:string]:HTMLDivElement|null}>({});
  const meenuRefs = useRef<{[key:string]: HTMLDivElement|null}>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  // GSAP Animation on mount (navbar slide-in)
  useEffect(()=>{
    gsap.fromTo('.navbar-container',{
      y: -100,opacity:0
    },{
      y:0, opacity:1,duration:0.6,ease:'Power2.out'
    })
  },[]);

  // GSAP Animation for dropdown when it opens
  useEffect(() => {
    Object.keys(meenuRefs.current).forEach((key) => {
      const menu = meenuRefs.current[key];
      if (menu) {
        if (openDropdown === key) {
          gsap.fromTo(menu,
            { opacity: 0, y: -10, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(0.3)' }
          );
        }
      }
    });
  }, [openDropdown]);

  // ==================== PRODUCTS DROPDOWN ====================
  const productItems: MenuItem[] = [
    {
      icon: CheckSquare,
      label: "Task Management",
      href: "/features/tasks",
      description: "Create, organize, and track tasks efficiently"
    },
    {
      icon: FolderKanban,
      label: "Projects",
      href: "/features/projects",
      description: "Group tasks into projects and track progress"
    },
    {
      icon: BarChart,
      label: "Analytics & Reports",
      href: "/features/analytics",
      description: "Visualize productivity with charts and insights"
    },
    {
      icon: Puzzle,
      label: "Integrations",
      href: "/integrations",
      description: "Connect with GitHub, Slack, Jira, and more",
      badge: "20+"
    },
    { separator: true },
    {
      icon: Sparkles,
      label: "What's New",
      href: "/whats-new",
      description: "AI task suggestions, dark mode, and more",
      badge: "v2.0"
    },
    {
      icon: ArrowRight,
      label: "View All Features",
      href: "/features",
      variant: "highlight"
    }
  ];

  // ==================== COMMUNITY DROPDOWN ====================
  const communityItems: MenuItem[] = [
    {
      icon: MessageCircle,
      label: "Discord",
      href: "https://discord.gg/devflow",
      description: "Join 5,000+ developers, get help, chat live",
      external: true
    },
    {
      icon: Code,
      label: "GitHub",
      href: "https://github.com/devflow",
      description: "Star the repo, contribute, report issues",
      external: true,
      badge: "1.2k ⭐"
    },
    {
      icon: Hash,
      label: "Twitter",
      href: "https://twitter.com/devflow",
      description: "Follow for updates and announcements",
      external: true
    },
    {
      icon: BookOpen,
      label: "Blog",
      href: "/blog",
      description: "Tutorials, case studies, product updates"
    },
    { separator: true },
    {
      icon: Calendar,
      label: "Events & Webinars",
      href: "/events",
      description: "Join live sessions with the team"
    },
    {
      icon: Mail,
      label: "Newsletter",
      href: "/newsletter",
      description: "Monthly updates delivered to your inbox"
    },
    {
      icon: Lightbulb,
      label: "Feature Requests",
      href: "/feedback",
      description: "Suggest and vote on new features"
    }
  ];

  // ==================== RESOURCES DROPDOWN ====================
  const resourcesItems: MenuItem[] = [
    {
      icon: FileText,
      label: "Documentation",
      href: "/docs",
      description: "Getting started, guides, API reference"
    },
    {
      icon: Video,
      label: "Tutorials",
      href: "/tutorials",
      description: "Step-by-step video tutorials and walkthroughs",
      badge: "New"
    },
    {
      icon: LayoutTemplate,
      label: "Examples & Templates",
      href: "/templates",
      description: "Ready-to-use templates for common use cases"
    },
    {
      icon: Users,
      label: "Case Studies",
      href: "/case-studies",
      description: "How companies use DevFlow"
    },
    { separator: true },
    {
      icon: LifeBuoy,
      label: "Support Center",
      href: "/support",
      description: "FAQs, troubleshooting, contact support"
    },
    {
      icon: Activity,
      label: "Status Page",
      href: "/status",
      description: "System uptime and incidents"
    },
    {
      icon: Keyboard,
      label: "Keyboard Shortcuts",
      href: "/shortcuts",
      description: "Speed up your workflow with shortcuts"
    }
  ];

  // ==================== SOLUTIONS DROPDOWN ====================
  const solutionsItems: MenuItem[] = [
    {
      icon: Rocket,
      label: "For Startups",
      href: "/solutions/startups",
      description: "Scale your team from idea to product"
    },
    {
      icon: Users,
      label: "For Teams",
      href: "/solutions/teams",
      description: "Collaborate efficiently with your team"
    },
    {
      icon: Building,
      label: "For Enterprise",
      href: "/solutions/enterprise",
      description: "Advanced security, compliance, and support"
    },
    {
      icon: Code2,
      label: "For Developers",
      href: "/solutions/developers",
      description: "API-first approach, extensive integrations"
    },
    { separator: true },
    {
      icon: Target,
      label: "Use Cases",
      href: "/use-cases",
      description: "See how different roles use DevFlow"
    },
    {
      icon: Calculator,
      label: "ROI Calculator",
      href: "/roi",
      description: "Calculate time and cost savings"
    }
  ];

  const dropdowns = [
    { key: "products", title: "Products", items: productItems },
    { key: "community", title: "Community", items: communityItems },
    { key: "resources", title: "Resources", items: resourcesItems },
    { key: "solutions", title: "Solutions", items: solutionsItems }
  ];

  return (
    <nav className="navbar-container sticky top-0 z-50 bg-gradient-to-r from-blue-800 via-violet-800 to-indigo-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* LEFT: Logo */}
          <Link href="/" >
            <img src="/devflovv_logo.jpg" alt='devflow logo' className='w-16 shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105 transition-transform '/>
          </Link>

          {/* CENTER: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            
            {/* Dynamic Dropdowns */}
            {dropdowns.map((dropdown) => (
              <div key={dropdown.key} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === dropdown.key ? null : dropdown.key)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-400 transition-colors ${
                    isActive(`/${dropdown.key}`) ? 'text-blue-600' : 'text-white'
                  }`}
                >
                  <span className="text-sm font-medium cursor-pointer">{dropdown.title}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    openDropdown === dropdown.key ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Dropdown Menu */}
                {openDropdown === dropdown.key && (
                  <div 
                    ref={(el) => { meenuRefs.current[dropdown.key] = el; }}
                    className="absolute top-full left-0 mt-1 w-80 rounded-xl border border-gray-100 py-2 z-50 bg-white/95 backdrop-blur-md shadow-2xl shadow-black/20"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {dropdown.items.map((item, idx) => (
                      item.separator ? (
                        <div key={`sep-${idx}`} className="border-t border-gray-100 my-1"></div>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href || '#'}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className={`flex items-start space-x-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group pointer ${
                            item.variant === 'highlight' ? 'bg-blue-50 hover:bg-blue-100' : ''
                          }`}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.icon && <item.icon className={`h-5 w-5 mt-0.5 ${
                            item.variant === 'highlight' ? 'text-blue-600' : 'text-gray-500'
                          }`} />}
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-sm font-medium text-white${
                                item.variant === 'highlight' ? 'text-blue-700' : 'text-gray-900'
                              }`}>
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                              {item.external && (
                                <span className="text-xs text-gray-400">↗</span>
                              )}
                            </div>
                            {item.description && <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>}
                          </div>
                          {item.variant === 'highlight' && (
                            <ArrowRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-400 text-white transition-colors ${
                isActive('/pricing') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* RIGHT: Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-400 transition-colors text-white font-sans cursor-pointer "
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-base font-bold bg-emerald-500 text-white rounded-lg hover:bg-gray-400 transition-colors shadow-sm font-sans"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}