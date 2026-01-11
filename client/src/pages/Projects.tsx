import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Filter, Code2, Zap, Award } from "lucide-react";
import ProjectCard from "../components/SaaS/ProjectCard";
import { cn } from "../utils/cn";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "All",
    "Frontend",
    "Full Stack",
    "React",
    "JavaScript",
    "AI",
    "SaaS",
    "Mobile",
    "E-Commerce",
  ];

  const fallbackProjects = [
    {
      title: "NeuralFlux AI",
      description:
        "Next-generation analytics dashboard for enterprise data intelligence and predictive modeling with real-time insights.",
      tags: ["AI", "React", "Node.js", "TensorFlow"],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "AI",
      isFeatured: true,
      stats: { users: "2.5K", performance: "99.9%" },
    },
    {
      title: "Vortex Trading",
      description:
        "Low-latency algorithmic trading platform featuring decentralized asset management and blockchain integration.",
      tags: ["Full Stack", "Web3", "JavaScript", "Blockchain"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "Full Stack",
      stats: { transactions: "50K+", uptime: "99.99%" },
    },
    {
      title: "CloudVault SaaS",
      description:
        "Enterprise-grade multi-tenant storage solution with end-to-end encryption, advanced security protocols, and compliance certifications.",
      tags: ["SaaS", "Cloud", "Frontend", "Security"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "SaaS",
      isFeatured: true,
      stats: { storage: "1M GB+", users: "50K+" },
    },
    {
      title: "Pure UI Framework",
      description:
        "A high-performance React component library built with accessibility standards and performance optimization in mind.",
      tags: ["Frontend", "React", "TypeScript", "Components"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "Frontend",
      stats: { components: "250+", downloads: "100K+" },
    },
    {
      title: "Nexus Core",
      description:
        "Centralized infrastructure management for distributed cloud environments with automated scaling and edge computing support.",
      tags: ["Cloud", "Node.js", "Full Stack", "DevOps"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "Full Stack",
      stats: { servers: "500+", latency: "<50ms" },
    },
    {
      title: "ShopCart Pro",
      description:
        "Full-featured e-commerce platform with AI recommendations, real-time inventory management, and seamless payment integration.",
      tags: ["E-Commerce", "React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1523474253046-7634c40707d7?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "E-Commerce",
      isFeatured: true,
      stats: { products: "10K+", conversion: "3.5%" },
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "";
        if (apiUrl) {
          const { data } = await axios.get(`${apiUrl}/api/projects`);
          if (data && data.length > 0) {
            setProjects(data);
          } else {
            setProjects(fallbackProjects);
          }
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (p: any) =>
      p &&
      (filter === "All" ||
        (p.category &&
          p.category.toLowerCase().includes(filter.toLowerCase())) ||
        (p.tags &&
          p.tags.some(
            (t: string) => t && t.toLowerCase().includes(filter.toLowerCase())
          )))
  );

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const otherProjects = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-48 pb-32">
      <div className="w-full px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="mb-32 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-primary">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} />
              </motion.div>
              <span className="text-xs font-black uppercase tracking-[0.3em] bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </div>

            <div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-foreground uppercase leading-none tracking-tighter mb-6">
                EXHIBITION <br />
                <span className="text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text italic">
                  MODERN
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
                Discover a curated collection of digital experiences, cloud
                architectures, and AI integrations built for high-performance
                teams and modern enterprises.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Code2, label: "Projects", value: filteredProjects.length },
                { icon: Zap, label: "Performance", value: "99.9%" },
                { icon: Award, label: "Quality", value: "AAA" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-white border border-gray-200 backdrop-blur-sm"
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-black text-foreground mt-1">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-primary" />
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Filter by Category
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((c, idx) => (
                <motion.button
                  key={c}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(c)}
                  className={cn(
                    "h-11 px-6 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300",
                    filter === c
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/30 scale-105"
                      : "bg-white border border-gray-200 text-muted-foreground hover:bg-gray-50 hover:text-foreground hover:border-primary/30"
                  )}
                >
                  {c}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="h-96 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary/10 border-t-primary rounded-full"
            />
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-24"
              >
                <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase mb-8 flex items-center gap-3">
                  <Award size={24} className="text-primary" />
                  Featured Work
                </h2>
                <motion.div layout className="grid grid-cols-1 gap-12">
                  <AnimatePresence mode="popLayout">
                    {featuredProjects.map((project: any, index: number) => (
                      <motion.div
                        layout
                        key={project.title || index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ProjectCard
                          {...project}
                          className="h-[700px] md:h-[600px]"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase mb-8">
                  Other Projects
                </h2>
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
                >
                  <AnimatePresence mode="popLayout">
                    {otherProjects.map((project: any, index: number) => (
                      <motion.div
                        layout
                        key={project.title || index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ProjectCard
                          {...project}
                          className="h-[650px] md:h-[600px]"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <Sparkles className="w-16 h-16 mx-auto mb-6 text-gray-300" />
                <p className="text-3xl font-black text-gray-100 uppercase tracking-widest">
                  Projects Not Found
                </p>
                <p className="text-gray-400 mt-4">
                  Try selecting a different category
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
