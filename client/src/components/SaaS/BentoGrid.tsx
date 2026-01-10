import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Cpu,
  Globe,
  Layout,
  MessageSquare,
  Zap,
  Smartphone,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { cn } from "../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".bento-item");

    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      scale: 0.9,
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1.2,
      ease: "expo.out",
    });
  }, []);

  const items = [
    {
      title: "Full-Stack Engineering",
      description:
        "Architecting robust, scalable backends with Node.js & Go, paired with high-performance React frontends.",
      icon: <Layout className="w-10 h-10" />,
      className:
        "md:col-span-2 md:row-span-2 bg-indigo-500/5 border-indigo-500/10",
      accent: "indigo",
    },
    {
      title: "AI Workflows",
      description: "Integrating LLMs for intelligent automation.",
      icon: <Cpu className="w-8 h-8" />,
      className: "md:col-span-1 md:row-span-1 bg-blue-500/5 border-blue-500/10",
      accent: "blue",
    },
    {
      title: "Cloud Scaling",
      description: "Deployment orchestration on AWS & GCP.",
      icon: <Rocket className="w-8 h-8" />,
      className:
        "md:col-span-1 md:row-span-1 bg-emerald-500/5 border-emerald-500/10",
      accent: "emerald",
    },
    {
      title: "Design Systems",
      description: "Creating scalable UI foundations with Tailwind & Figma.",
      icon: <Layers className="w-10 h-10" />,
      className:
        "md:col-span-1 md:row-span-2 bg-orange-500/5 border-orange-500/10",
      accent: "orange",
    },
    {
      title: "Real-time Engines",
      description: "Sub-millisecond latency using WebSockets & Redis.",
      icon: <Zap className="w-8 h-8" />,
      className:
        "md:col-span-1 md:row-span-1 bg-yellow-500/5 border-yellow-500/10",
      accent: "yellow",
    },
    {
      title: "Mobile First",
      description: "Fluid, cross-platform experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      className: "md:col-span-1 md:row-span-1 bg-rose-500/5 border-rose-500/10",
      accent: "rose",
    },
  ];

  return (
    <section className="py-32 container-fluid px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-l-4 border-primary pl-8">
        <div className="max-w-2xl">
          <h2 className="text-fluid-title font-black uppercase mb-6 leading-none">
            TECHNICAL <br />{" "}
            <span className="text-muted-foreground/30">CAPABILITIES</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Bridging the gap between ambitious design and technical feasibility
            through a curated stack of modern technologies.
          </p>
        </div>
        <div className="hidden lg:block text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">
            Efficiency Rating
          </p>
          <p className="text-4xl font-black tabular-nums">99.8%</p>
        </div>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "bento-item group relative p-10 rounded-[2.5rem] border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5",
              item.className
            )}
          >
            {/* Hover Accent Glow */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-100",
                `from-${item.accent}-500/10 via-transparent to-transparent`
              )}
            />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-12 transition-all duration-500 group-hover:scale-110",
                  `bg-${item.accent}-500/10 text-${item.accent}-500`
                )}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Decorative Grid Pattern Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
