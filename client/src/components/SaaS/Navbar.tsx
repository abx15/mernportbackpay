import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "AI Planner", path: "/give-me-work" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/60 py-3 shadow-sm"
          : "bg-white/50 backdrop-blur-md py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-primary/40"
          >
            A
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
              Arun<span className="text-primary">.Bind</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary/60">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.div key={link.name} whileHover={{ y: -2 }}>
              <Link
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group",
                  pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="relative group bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/40 active:scale-95 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <Sparkles size={16} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-bold uppercase tracking-wider block py-2 px-4 rounded-lg transition-all",
                      pathname === link.path
                        ? "text-white bg-gradient-to-r from-primary to-blue-600"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all hover:shadow-lg hover:shadow-primary/40 flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
