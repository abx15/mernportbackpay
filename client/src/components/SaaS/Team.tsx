import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Arun Kumar Bind",
      role: "Founding Engineer & Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Sarah Chen",
      role: "Lead UI/UX Strategist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Marcus Thorne",
      role: "Backend Systems Expert",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">
            Our <span className="text-primary italic">A-Team</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium italic">
            A small team of elite engineers and designers dedicated to building
            the future of the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 soft-shadow hover:scale-[1.02] transition-all duration-500"
            >
              <div className="relative aspect-square mb-8 rounded-3xl overflow-hidden bg-gray-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="space-y-4 text-center">
                <div>
                  <h3 className="text-2xl font-black text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold text-sm uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={member.social.github}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
