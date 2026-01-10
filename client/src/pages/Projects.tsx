import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Sparkles } from "lucide-react";
import ProjectCard from "../components/SaaS/ProjectCard";
import { cn } from "../utils/cn";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Frontend",
    "Full Stack",
    "React",
    "JavaScript",
    "AI",
    "SaaS",
  ];

  const fallbackProjects = [
    {
      title: "NeuralFlux AI",
      description:
        "Next-generation analytics dashboard for enterprise data intelligence and predictive modeling.",
      tags: ["AI", "React", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "AI",
    },
    {
      title: "Vortex Trading",
      description:
        "Low-latency algorithmic trading platform featuring decentralized asset management.",
      tags: ["Full Stack", "Web3", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "Full Stack",
    },
    {
      title: "CloudVault SaaS",
      description:
        "Enterprise-grade multi-tenant storage solution with end-to-end encryption architecture.",
      tags: ["SaaS", "Cloud", "Frontend"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "SaaS",
    },
    {
      title: "Pure UI Framework",
      description:
        "A high-performance React component library built with accessibility and speed in mind.",
      tags: ["Frontend", "React", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "Frontend",
    },
    {
      title: "Nexus Core",
      description:
        "Centralized infrastructure management for distributed cloud environments and edge computing.",
      tags: ["Cloud", "Node.js", "Full Stack"],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000",
      demo: "#",
      github: "#",
      category: "Full Stack",
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

  return (
    <div className="min-h-screen bg-white pt-48 pb-32">
      <div className="w-full px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 text-primary"
            >
              <Sparkles size={18} />
              <span className="text-xs font-black uppercase tracking-[0.4em]">
                Elite Portfolio
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-foreground uppercase leading-none tracking-tighter">
              EXHIBITION <br />
              <span className="text-primary italic">MODERN.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl">
              A curated collection of digital experiences, cloud architectures,
              and AI integrations built for high-performance teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "h-12 px-8 rounded-2xl font-bold text-[10px] uppercase tracking-widest transition-all",
                  filter === c
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "bg-gray-50 text-muted-foreground hover:bg-gray-100 hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="h-96 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary/10 border-t-primary rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: any, index: number) => (
                <motion.div
                  layout
                  key={project.title || index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard {...project} className="h-[650px]" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredProjects.length === 0 && (
          <div className="py-60 text-center">
            <p className="text-4xl font-black text-gray-100 uppercase tracking-widest">
              Project Unidentified
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
