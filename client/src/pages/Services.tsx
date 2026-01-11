import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Check } from "lucide-react";
import ServiceCard from "../components/SaaS/ServiceCard";
import PaymentForm from "../components/SaaS/PaymentForm";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const allServices = [
    {
      title: "Frontend Development",
      description:
        "Custom high-performance React & Next.js interfaces with advanced GSAP animations.",
      techStack: ["React", "Next.js", "GSAP", "Tailwind"],
      price: 100,
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "GSAP Animations",
        "Performance Optimized",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Secure and scalable Node.js/Express architectures optimized for high traffic.",
      techStack: ["Node.js", "Express", "MongoDB", "JWT"],
      price: 100,
      highlight: true,
      features: [
        "RESTful APIs",
        "Database Design",
        "Security & Auth",
        "Scalable Architecture",
      ],
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connecting third-party services like Razorpay, Twilio, and more.",
      techStack: ["REST", "GraphQL", "Webhooks"],
      price: 100,
      features: [
        "Razorpay Integration",
        "Webhook Handlers",
        "Error Handling",
        "Rate Limiting",
      ],
    },
    {
      title: "PHP Applications",
      description:
        "Modernized PHP solutions for legacy systems or high-speed standalone apps.",
      techStack: ["Core PHP", "Laravel", "MySQL"],
      price: 100,
      features: [
        "Legacy Migration",
        "Modern PHP Practices",
        "Database Optimization",
        "Performance Tuning",
      ],
    },
    {
      title: "MERN Stack",
      description:
        "Full end-to-end development of dynamic web applications using MongoDB, Express, React, and Node.",
      techStack: ["MERN", "Redux", "Vercel"],
      price: 100,
      features: [
        "Full Stack Dev",
        "State Management",
        "Deployment",
        "Production Ready",
      ],
    },
    {
      title: "React Development",
      description:
        "Specialized React engineering focusing on state management and performance.",
      techStack: ["React", "Zustand", "React Query"],
      price: 100,
      highlight: true,
      features: [
        "React Hooks",
        "State Management",
        "Component Library",
        "Performance",
      ],
    },
    {
      title: "Website Optimization",
      description:
        "Improving Lighthouse scores, LCP, CLS, and FID for better SEO rankings.",
      techStack: ["Web Vitals", "Lazy-loading", "Compression"],
      price: 100,
      features: [
        "Speed Optimization",
        "SEO Improvement",
        "Lighthouse 90+",
        "Core Web Vitals",
      ],
    },
    {
      title: "UI/UX Redesign",
      description:
        "Modernizing outdated interfaces into sleek, professional, and accessible designs.",
      techStack: ["Figma", "Accessibility", "Aesthetics"],
      price: 100,
      features: [
        "Modern Design",
        "User Research",
        "Accessibility",
        "Brand Consistency",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/20 to-white min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="inline mr-2" size={14} />
            Service Catalog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-foreground uppercase tracking-tight leading-none"
          >
            Digital{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text italic">
              Transformation
            </span>
            <br /> At Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto italic"
          >
            "Direct engineering solutions at fixed rates. No hidden fees, just
            high-performance code delivered with excellence."
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mb-32"
        >
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(service.title)}
              className="cursor-pointer"
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="py-20 border-y border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-12 text-center mb-32"
        >
          {[
            { value: "100%", label: "Guaranteed Quality" },
            { value: "24/7", label: "Support Portal" },
            { value: "Secure", label: "Razorpay Checkout" },
            { value: "Fast", label: "Delivery Promise" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-5xl md:text-6xl font-black text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-foreground to-gray-900 text-white flex flex-col items-center text-center space-y-8 shadow-2xl"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Ready to Scale?
          </h2>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Let's build something extraordinary together. Select a service or
            contact us for custom enterprise solutions tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .querySelector("#payment-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-primary to-blue-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:shadow-lg hover:shadow-primary/40 transition-all"
          >
            Get Started Now
          </motion.button>
        </motion.section>

        {/* Payment Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <X size={24} />
                </button>

                {/* Payment Form */}
                <PaymentForm
                  serviceName={selectedService}
                  amount={
                    allServices.find((s) => s.title === selectedService)
                      ?.price || 100
                  }
                  onSuccess={(orderId) => {
                    setTimeout(() => setSelectedService(null), 2000);
                  }}
                  onError={(error) => {
                    console.error("Payment error:", error);
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;

