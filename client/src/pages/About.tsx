import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Code } from "lucide-react";

const About = () => {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Full Stack Engineer",
      company: "TechFlow Systems",
      description:
        "Architecting scalable MERN applications and leading AI integration initiatives for enterprise clients.",
    },
    {
      year: "2021 - 2023",
      role: "Full Stack Developer",
      company: "Creative Labs",
      description:
        "Developed high-performance web platforms and optimized user experiences for SaaS products.",
    },
  ];

  const skills = [
    "React / Next.js",
    "Node.js / Express",
    "MongoDB",
    "TypeScript",
    "GSAP / Framer Motion",
    "Tailwind CSS",
    "AI / Prompt Engineering",
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                Our Story
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-none">
                Elite <span className="text-primary italic">Engineering</span>{" "}
                <br /> Meets Minimal Design.
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed italic">
                "I believe that the best technology is invisible. It should
                empower users through simplicity and reliability."
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                With over 5 years of experience in the MERN stack and AI
                development, I specialize in building digital products that
                aren't just functional, but exceptional. My approach combines
                rigorous backend logic with a refined frontend aesthetic.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="p-8 rounded-3xl bg-[#F8F9FA] space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Strategy First</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    We don't just write code; we solve business problems with
                    strategic technical solutions.
                  </p>
                </div>
                <div className="p-8 rounded-3xl bg-[#F8F9FA] space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Modern Stack</h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    Using the latest technologies to ensure your product is
                    fast, secure, and ready for scale.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Timeline & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16 lg:sticky lg:top-40"
          >
            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-widest flex items-center gap-3">
                <Award className="text-primary" /> Experience
              </h2>
              <div className="space-y-12 border-l-2 border-gray-100 pl-8 ml-3">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white" />
                    <div className="space-y-2">
                      <span className="text-sm font-black text-primary uppercase tracking-widest">
                        {exp.year}
                      </span>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground font-bold text-sm">
                        {exp.company}
                      </p>
                      <p className="text-foreground/70 font-medium text-sm leading-relaxed max-w-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-widest flex items-center gap-3">
                <BookOpen className="text-primary" /> Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-xl bg-white border border-gray-100 soft-shadow text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
