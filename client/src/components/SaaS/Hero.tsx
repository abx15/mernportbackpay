import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe, Cpu, Briefcase } from "lucide-react";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      const text = new SplitType(headlineRef.current, { types: "words,chars" });

      gsap.from(text.chars, {
        opacity: 0,
        y: 50,
        rotateX: -45,
        stagger: 0.02,
        duration: 1,
        ease: "back.out(2)",
      });
    }

    gsap.from(".hero-item", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  const whatIDo = [
    {
      icon: <Globe className="text-primary" size={24} />,
      title: "Full Stack Development",
      desc: "Architecting high-performance MERN applications with a focus on scalability and clean code.",
    },
    {
      icon: <Cpu className="text-primary" size={24} />,
      title: "AI & Machine Learning",
      desc: "Integrating intelligent features and predictive models to automate complex business processes.",
    },
    {
      icon: <Briefcase className="text-primary" size={24} />,
      title: "SaaS Strategy",
      desc: "Consulting on product roadmaps and technical architectures for high-growth enterprise solutions.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-white"
    >
      <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em]"
            >
              Available for Strategic Partnerships 2026
            </motion.div>

            <h1
              ref={headlineRef}
              className="text-5xl md:text-8xl font-black text-foreground leading-[0.95] tracking-tighter"
            >
              CRAFTING DIGITAL{" "}
              <span className="text-primary italic">EXCELLENCE.</span>
            </h1>

            <p className="hero-item text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed font-medium">
              Transforming complex visions into high-performance digital
              solutions through elite Full Stack Engineering and strategic UI/UX
              design.
            </p>
          </div>

          {/* What I Do Section */}
          <div className="hero-item grid grid-cols-1 md:grid-cols-1 gap-6 pt-4">
            {whatIDo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-3xl hover:bg-gray-50 transition-colors group"
              >
                <div className="mt-1 transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-item flex flex-wrap gap-6 pt-4">
            <button className="btn-orange flex items-center gap-3 text-lg px-10 py-4 shadow-xl shadow-primary/20">
              Hire Me <ArrowRight size={22} />
            </button>
            <button
              onClick={() => (window.location.href = "/projects")}
              className="px-10 py-4 rounded-full border border-gray-200 font-bold text-lg text-foreground transition-all hover:bg-gray-50 active:scale-95"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Right Illustration/Visual */}
        <div className="relative h-[600px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[4rem] border border-gray-100 flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-gray-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 bg-primary/10 blur-[60px] rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-black text-9xl italic opacity-10 select-none">
                A
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-12 right-12 p-6 rounded-3xl bg-white soft-shadow border border-gray-50 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">
                Quality Score
              </p>
              <p className="text-xl font-bold">100% Guaranteed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
