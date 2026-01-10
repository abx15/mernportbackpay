import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, Database, Hammer, Terminal, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="text-primary" size={24} />,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind", level: 95 },
      { name: "GSAP", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-primary" size={24} />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 92 },
      { name: "PHP", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="text-primary" size={24} />,
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    title: "Tools & APIs",
    icon: <Hammer className="text-primary" size={24} />,
    skills: [
      { name: "REST/GraphQL", level: 92 },
      { name: "Git", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Razorpay", level: 85 },
      { name: "Twilio", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-32 bg-[#F8F9FA] w-full px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none">
            TECHNICAL <br />{" "}
            <span className="text-primary italic">ARSENAL.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium">
            A comprehensive suite of modern technologies and architectural
            practices optimized for enterprise scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group p-8 rounded-[2rem] bg-white border border-gray-100 soft-shadow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F8F9FA] flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black text-foreground mb-6 uppercase tracking-tight">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
