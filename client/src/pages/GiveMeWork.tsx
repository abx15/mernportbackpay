import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Wand2,
  FileText,
  ArrowRight,
} from "lucide-react";

const GiveMeWork = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setResult(
        "### PROJECT PROPOSAL: ENTERPRISE AI DASHBOARD\n\n**Scope:** Architecture of a multi-tenant SaaS platform with real-time analytics.\n\n**Timeline:** 12 Weeks\n\n**Tech Stack:** React, Node.js, TensorFlow.js"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                AI Project Planner
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-none">
                Delegate Your <br />{" "}
                <span className="text-primary italic">Complexities</span> <br />{" "}
                To Intelligence.
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                Submit your project parameters and let our trained models
                architect the perfect technical roadmap for your business.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] flex items-center justify-center text-primary border border-gray-100">
                  <Wand2 size={24} />
                </div>
                <p className="text-foreground/80 font-bold">
                  Automated Technical Scoping
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] flex items-center justify-center text-primary border border-gray-100">
                  <BrainCircuit size={24} />
                </div>
                <p className="text-foreground/80 font-bold">
                  Intelligent Resource Allocation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Tool */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 md:p-14 rounded-[3.5rem] bg-[#F8F9FA] border border-gray-100 soft-shadow"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-2">
                  <Sparkles className="text-primary" /> Intelligence Core
                </h3>
                <p className="text-sm text-muted-foreground font-medium italic">
                  Describe your vision to generate a detailed roadmap.
                </p>
              </div>

              <textarea
                rows={6}
                placeholder="Ex: I want to build a decentralized logistics platform using AI for route optimization..."
                className="w-full p-8 rounded-[2rem] bg-white border border-transparent focus:border-primary/20 transition-all outline-none font-medium resize-none soft-shadow"
              />

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-5 btn-orange flex items-center justify-center gap-3 text-lg disabled:opacity-50"
              >
                {loading ? "Processing Model..." : "Generate Roadmap"}{" "}
                <Wand2 size={20} />
              </button>

              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-white border border-primary/20 soft-shadow mt-4"
                  >
                    <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mb-4">
                      <FileText size={14} /> Output Protocol
                    </div>
                    <pre className="text-sm font-medium text-foreground/80 whitespace-pre-wrap leading-relaxed">
                      {result}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GiveMeWork;
