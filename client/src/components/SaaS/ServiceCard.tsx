import React from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Sparkles } from "lucide-react";
import { handlePayment } from "../../utils/razorpay";

interface ServiceCardProps {
  title: string;
  description: string;
  techStack: string[];
  price: number;
  features?: string[];
  onBuy?: () => void;
  highlight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  techStack,
  price,
  features = [],
  onBuy,
  highlight = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`relative p-10 rounded-[3rem] border flex flex-col h-full transition-all duration-500 ${
        highlight
          ? "border-primary bg-gradient-to-br from-white to-primary/5 shadow-2xl shadow-primary/20 scale-105"
          : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
      }`}
    >
      {highlight && (
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-primary/40"
        >
          <Sparkles size={14} /> Recommended
        </motion.div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mb-10 flex items-baseline gap-1">
        <span className="text-5xl font-black text-foreground">₹{price}</span>
        <span className="text-muted-foreground font-bold text-xs uppercase tracking-widest">
          / Fixed
        </span>
      </div>

      <div className="space-y-4 mb-12 flex-1">
        {features.length > 0 && (
          <>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">
              Key Features
            </p>
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-sm font-semibold text-foreground/80">
                  {feature}
                </span>
              </div>
            ))}
          </>
        )}

        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 pt-4">
          Tech Ecosystem
        </p>
        {techStack.map((tech) => (
          <div key={tech} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-sm font-semibold text-foreground/80">
              {tech}
            </span>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onBuy || (() => handlePayment({ title, price }))}
        className={`w-full py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 ${
          highlight
            ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-xl shadow-primary/30 hover:shadow-2xl"
            : "bg-gray-50 border border-gray-200 text-foreground hover:bg-primary hover:text-white hover:border-primary"
        }`}
      >
        <ShoppingCart size={18} /> Buy Now
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;

