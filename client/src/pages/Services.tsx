import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ServiceCard from "../components/SaaS/ServiceCard";

const Services = () => {
  const allServices = [
    {
      title: "Frontend Development",
      description:
        "Custom high-performance React & Next.js interfaces with advanced GSAP animations.",
      techStack: ["React", "Next.js", "GSAP", "Tailwind"],
      price: 100,
    },
    {
      title: "Backend Development",
      description:
        "Secure and scalable Node.js/Express architectures optimized for high traffic.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      price: 100,
      highlight: true,
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connecting third-party services like Razorpay, Twilio, and more.",
      techStack: ["REST", "GraphQL", "Webhooks"],
      price: 100,
    },
    {
      title: "PHP Applications",
      description:
        "Modernized PHP solutions for legacy systems or high-speed standalone apps.",
      techStack: ["Core PHP", "Laravel", "MySQL"],
      price: 100,
    },
    {
      title: "MERN Stack",
      description:
        "Full end-to-end development of dynamic web applications using MongoDB, Express, React, and Node.",
      techStack: ["MERN", "Redux", "Vercel"],
      price: 100,
    },
    {
      title: "React Development",
      description:
        "Specialized React engineering focusing on state management and performance.",
      techStack: ["React", "Zustand", "React Query"],
      price: 100,
      highlight: true,
    },
    {
      title: "Website Optimization",
      description:
        "Improving Lighthouse scores, LCP, CLS, and FID for better SEO rankings.",
      techStack: ["Web Vitals", "Lazy-loading", "Compression"],
      price: 100,
    },
    {
      title: "UI/UX Redesign",
      description:
        "Modernizing outdated interfaces into sleek, professional, and accessible designs.",
      techStack: ["Figma", "Accessibility", "Aesthetics"],
      price: 100,
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            Service Catalog
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-none">
            Digital <span className="text-primary italic">Transformation</span>{" "}
            <br /> At Scale.
          </h1>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto italic">
            "Direct engineering solutions at fixed rates. No hidden fees, just
            high-performance code."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Success/Trust Badges */}
        <section className="mt-40 py-20 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-black text-foreground mb-2">100%</p>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Guaranteed Quality
            </p>
          </div>
          <div>
            <p className="text-5xl font-black text-foreground mb-2">24/7</p>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Support Portal
            </p>
          </div>
          <div>
            <p className="text-5xl font-black text-foreground mb-2">Secure</p>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Razorpay Checkout
            </p>
          </div>
          <div>
            <p className="text-5xl font-black text-foreground mb-2">Fast</p>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Delivery Promise
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 p-12 md:p-24 rounded-[4rem] bg-foreground text-white flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Ready to Scale?
          </h2>
          <p className="text-xl text-white/70 max-w-xl">
            Let's build something extraordinary together. Select a service or
            contact us for custom enterprise solutions.
          </p>
          <button className="btn-orange px-12 py-5 text-lg">
            Contact Sales Engineer
          </button>
        </section>
      </div>
    </div>
  );
};

export default Services;
