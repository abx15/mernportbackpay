import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { cn } from "../../utils/cn";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectSlider = () => {
  const [filter, setFilter] = React.useState("All");

  const projects = [
    {
      title: "NeuralFlux AI",
      description:
        "Next-generation analytics dashboard for enterprise data intelligence and predictive modeling.",
      tags: ["AI", "React", "Node.js"],
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
      demo: "#",
      github: "#",
    },
    {
      title: "Vortex Trading",
      description:
        "Low-latency algorithmic trading platform featuring decentralized asset management.",
      tags: ["Full Stack", "Web3"],
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000",
      demo: "#",
      github: "#",
    },
    {
      title: "CloudVault SaaS",
      description:
        "Enterprise-grade multi-tenant storage solution with end-to-end encryption architecture.",
      tags: ["SaaS", "Cloud"],
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
      demo: "#",
      github: "#",
    },
    {
      title: "Quantum Learn",
      description:
        "Adaptive AI-driven learning paths and 3D visualization components for elite education.",
      tags: ["Full Stack", "AI"],
      category: "Full Stack",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
      demo: "#",
      github: "#",
    },
    {
      title: "Nexus Core",
      description:
        "Centralized infrastructure management for distributed cloud environments and edge computing.",
      tags: ["Cloud", "Node.js"],
      category: "Backend",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000",
      demo: "#",
      github: "#",
    },
  ];

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="py-32 bg-white w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter leading-none mb-8">
            ENGINEERING <span className="text-primary italic">EXCELLENCE.</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                  filter === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-gray-50 text-muted-foreground hover:bg-gray-100"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button className="slider-prev w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="slider-next w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          key={filter} // Force re-render on filter change to reset swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={filteredProjects.length > 2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".slider-prev",
            nextEl: ".slider-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 2.2,
              centeredSlides: true,
              spaceBetween: 50,
            },
          }}
          className="project-swiper !pb-20"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-col items-center gap-8 mt-12">
        <div className="swiper-pagination-custom flex justify-center gap-2 h-2"></div>

        <Link
          to="/projects"
          className="group flex items-center gap-3 text-lg font-black uppercase tracking-widest text-foreground hover:text-primary transition-colors"
        >
          View Full Projects{" "}
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform"
          />
        </Link>
      </div>

      <style>{`
        .project-swiper .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          background: #e2e8f0;
          opacity: 1;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .project-swiper .swiper-pagination-bullet-active {
          background: #FF4D2D;
          width: 80px;
        }
      `}</style>
    </section>
  );
};

export default ProjectSlider;
