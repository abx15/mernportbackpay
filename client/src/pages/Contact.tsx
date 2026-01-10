import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-none">
                Let's <span className="text-primary italic">Build</span> <br />{" "}
                Something Impactful.
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg">
                Whether you have a groundbreaking idea or a complex business
                problem, I'm here to help you architect the solution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#F8F9FA] border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-white soft-shadow flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    Email Us
                  </p>
                  <p className="text-xl font-bold">hello@arunbind.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#F8F9FA] border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-white soft-shadow flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">
                    Call Us
                  </p>
                  <p className="text-xl font-bold">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 md:p-14 rounded-[3rem] bg-white border border-gray-100 shadow-2xl shadow-black/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-16 px-6 rounded-2xl bg-[#F8F9FA] border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full h-16 px-6 rounded-2xl bg-[#F8F9FA] border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
                  Project Category
                </label>
                <select className="w-full h-16 px-6 rounded-2xl bg-[#F8F9FA] border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold">
                  <option>Full Stack Development</option>
                  <option>AI / Machine Learning</option>
                  <option>UI/UX Design Strategy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-foreground ml-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-6 rounded-3xl bg-[#F8F9FA] border border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium resize-none"
                />
              </div>

              <button className="w-full py-5 btn-orange flex items-center justify-center gap-3 text-lg">
                Transmit Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
