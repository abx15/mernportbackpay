import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Successful Launches", value: "45+" },
    { label: "Lines of Clean Code", value: "500K+" },
    { label: "Trusted Partners", value: "20+" },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2 md:border-l md:border-gray-200 md:pl-8 first:border-0 first:pl-0"
            >
              <h2 className="text-6xl font-black text-primary tracking-tighter">
                {stat.value}
              </h2>
              <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
