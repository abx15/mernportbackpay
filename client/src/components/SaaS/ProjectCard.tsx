import React, { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
  className,
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
      scale: 1.1,
      x: x * 30,
      y: y * 30,
      rotateX: -y * 10,
      rotateY: x * 10,
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
        "group relative w-full h-[550px] rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 soft-shadow transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/5",
        className
      )}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-end">
        <div className="max-w-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="h-14 px-8 bg-primary text-white rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                View Project <ArrowUpRight size={18} />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
