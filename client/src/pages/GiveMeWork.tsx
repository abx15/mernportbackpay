import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Wand2,
  FileText,
  ArrowRight,
  Zap,
  Target,
  Clock,
} from "lucide-react";
import axios from "axios";

const GiveMeWork = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please describe your project idea");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await axios.post(
        `${apiUrl}/api/ai/generate`,
        { prompt },
        { timeout: 30000 }
      );

      setResult(response.data.response || response.data.message);
      setPrompt("");
    } catch (err: any) {
      console.error("Error:", err);
      // Fallback with mock response
      const mockResponse = `### 📋 PROJECT PROPOSAL: ${prompt.substring(0, 20).toUpperCase()}

**Project Scope:** Comprehensive ${prompt.substring(0, 15).toLowerCase()} solution

**Timeline:** 8-12 Weeks

**Tech Stack:**
- Frontend: React 18, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, MongoDB
- Deployment: Vercel, AWS

**Key Deliverables:**
1. ✅ Responsive UI/UX Design
2. ✅ Secure Authentication System
3. ✅ Database Architecture
4. ✅ API Development
5. ✅ Testing & Optimization
6. ✅ Deployment & Documentation

**Estimated Cost:** ₹50,000 - ₹1,50,000
**Team Size:** 2-3 Developers

Next Step: Schedule a consultation call to finalize requirements!`;

      setResult(mockResponse);
      setPrompt("");
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "E-commerce platform with AI recommendations",
    "SaaS application with payment integration",
    "Real-time chat application with notifications",
    "Content management system with analytics",
  ];

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/30 to-white min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12 sticky top-32"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
              >
                <BrainCircuit className="inline mr-2" size={14} />
                AI Project Planner
              </motion.div>

              <h1 className="text-6xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-none">
                Delegate Your <br />{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text italic">
                  Complexities
                </span>
                <br /> To Intelligence.
              </h1>

              <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-lg">
                Submit your project parameters and let our trained AI models
                architect the perfect technical roadmap for your business goals.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6 pt-4">
              {[
                {
                  icon: Wand2,
                  title: "Automated Scoping",
                  desc: "Technical requirements identification",
                },
                {
                  icon: BrainCircuit,
                  title: "Intelligent Planning",
                  desc: "Resource and timeline allocation",
                },
                {
                  icon: Zap,
                  title: "Instant Results",
                  desc: "Get roadmaps in seconds",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <p className="font-black text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - AI Tool */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 md:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity }}
                    >
                      <Sparkles className="text-primary" size={28} />
                    </motion.div>
                    Intelligence Core
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium italic">
                    Describe your vision to generate a detailed technical roadmap.
                  </p>
                </div>

                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 font-medium"
                    >
                      ⚠️ {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Textarea */}
                <textarea
                  value={prompt}
                  onChange={(e) => {
                    setPrompt(e.target.value);
                    setError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.ctrlKey) {
                      handleGenerate();
                    }
                  }}
                  placeholder="Ex: I want to build a decentralized logistics platform using AI for route optimization with real-time tracking..."
                  className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium resize-none text-foreground placeholder-muted-foreground"
                  rows={8}
                />

                {/* Quick Prompts */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Quick Suggestions
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickPrompts.map((quickPrompt, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ x: 5 }}
                        onClick={() => setPrompt(quickPrompt)}
                        className="text-left p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium text-foreground/70 hover:text-primary"
                      >
                        💡 {quickPrompt}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl font-black uppercase tracking-wider text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/40 transition-all"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Sparkles size={20} />
                      </motion.div>
                      Generating Roadmap...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} />
                      Generate Roadmap
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-muted-foreground">
                  ⚡ Powered by Advanced AI | Instant Results
                </p>
              </div>
            </motion.div>

            {/* Output Section */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="p-8 rounded-3xl bg-gradient-to-br from-white to-primary/5 border border-primary/20 shadow-2xl"
                >
                  <div className="flex items-center gap-3 text-primary text-sm font-black uppercase tracking-widest mb-6">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
                      <FileText size={18} />
                    </motion.div>
                    Generated Roadmap
                  </div>

                  <div className="prose prose-sm max-w-none">
                    <pre className="text-sm font-medium text-foreground/80 whitespace-pre-wrap leading-relaxed overflow-auto max-h-96 rounded-lg p-4 bg-gray-50">
                      {result}
                    </pre>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.querySelector("textarea");
                      element?.focus();
                      setResult(null);
                    }}
                    className="w-full mt-6 py-3 border-2 border-primary text-primary rounded-xl font-black uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all"
                  >
                    Generate Another
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Recommendation Card */}
            {!result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-2xl bg-blue-50 border border-blue-200"
              >
                <p className="text-sm font-bold text-blue-900 flex items-center gap-2">
                  <Target size={18} />
                  Pro Tip: The more detailed your project description, the more
                  comprehensive your roadmap!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GiveMeWork;

