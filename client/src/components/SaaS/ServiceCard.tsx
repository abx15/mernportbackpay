import React from "react";
import { motion } from "framer-motion";
import { Check, ShoppingCart, Sparkles } from "lucide-react";
import { handlePayment } from "../../utils/razorpay";

interface ServiceCardProps {
  title: string;
  description: string;
  techStack: string[];
  price: number;
  onBuy?: () => void;
  highlight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  techStack,
  price,
  onBuy,
  highlight = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-10 rounded-[3rem] border flex flex-col h-full transition-all duration-500 ${
        highlight
          ? "border-primary bg-white shadow-2xl shadow-primary/10 scale-105"
          : "border-gray-100 bg-white hover:border-primary/20 hover:soft-shadow"
      }`}
    >
      {highlight && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <Sparkles size={14} /> Recommended
        </div>
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
        <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">
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

      <button
        onClick={onBuy || (() => handlePayment({ title, price }))}
        className={`w-full py-5 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 ${
          highlight
            ? "btn-orange shadow-xl shadow-primary/20"
            : "bg-gray-50 border border-gray-100 text-foreground hover:bg-gray-100"
        }`}
      >
        <ShoppingCart size={18} /> Buy Now
      </button>
    </motion.div>
  );
};

export default ServiceCard;
