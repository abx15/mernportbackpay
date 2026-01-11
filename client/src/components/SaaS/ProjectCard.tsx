import React, { useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { cn } from "../../utils/cn";
import gsap from "gsap";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  className?: string;
  stats?: { [key: string]: string };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  className,
  stats,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !imageRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(imageRef.current, {
      scale: 1.15,
      x: x * 40,
      y: y * 40,
      rotateX: -y * 15,
      rotateY: x * 15,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      scale: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative w-full h-[550px] rounded-3xl overflow-hidden bg-white border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30",
        className
      )}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-gray-100">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
        {/* Top Stats */}
        {stats && Object.keys(stats).length > 0 && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex gap-4 flex-wrap">
              {Object.entries(stats).map(([key, value]) => (
                <div
                  key={key}
                  className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold text-primary border border-primary/20"
                >
                  <span className="text-muted-foreground">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Content */}
        <div className="max-w-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 hover:bg-primary hover:text-white transition-all"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {demo && demo !== "#" && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="h-14 px-8 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/40 active:scale-95"
              >
                Live Demo <ExternalLink size={18} />
              </a>
            )}
            {github && github !== "#" && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border-2 border-gray-300 bg-white/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-110 active:scale-95"
              >
                <Github size={22} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default ProjectCard;
