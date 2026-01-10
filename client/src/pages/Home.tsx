import React from "react";
import { ArrowRight } from "lucide-react";
import Hero from "../components/SaaS/Hero";
import Stats from "../components/SaaS/Stats";
import Skills from "../components/SaaS/Skills";
import Team from "../components/SaaS/Team";
import ProjectSlider from "../components/SaaS/ProjectSlider";
import ServiceCard from "../components/SaaS/ServiceCard";

const Home = () => {
  const services = [
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
      title: "MERN Stack",
      description:
        "Full end-to-end development of dynamic web applications using MongoDB, Express, React, and Node.",
      techStack: ["MERN", "Redux", "Vercel"],
      price: 100,
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <Hero />
      <Stats />
      <Skills />
      <ProjectSlider />

      {/* Services Section */}
      <section className="py-32 bg-[#F8F9FA] w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
              Monetized Solutions
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none">
              FIXED-PRICE <br />{" "}
              <span className="text-primary italic">SERVICES.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Elite engineering services available at competitive fixed rates
              for rapid deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={() => (window.location.href = "/services")}
              className="group inline-flex items-center gap-3 text-lg font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors"
            >
              View More Services{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      <Team />

      {/* Final Conversion Section */}
      <section className="py-40 bg-[#F8F9FA] w-full px-6 md:px-12 lg:px-24">
        <div className="relative p-12 md:p-24 rounded-[4rem] bg-foreground text-white overflow-hidden group">
          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
              CRAFTING THE <br />
              <span className="text-primary italic">FUTURE.</span>
            </h2>
            <p className="text-xl md:text-3xl font-medium max-w-2xl text-white/70">
              Ready to architect your next digital leap? Let's turn your vision
              into high-performance reality.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <button className="btn-orange text-xl px-12 py-5">
                Initiate Project
              </button>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />
        </div>
      </section>
    </div>
  );
};

export default Home;
