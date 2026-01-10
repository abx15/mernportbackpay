import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Arun<span className="text-primary">.Bind</span>
              </span>
            </Link>
            <p className="text-lg text-muted-foreground font-medium max-w-sm">
              Helping businesses build high-impact digital products with minimal
              design and robust engineering.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@arunbind.com"
                className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
              >
                <Mail size={18} /> hello@arunbind.com
              </a>
              <p className="text-muted-foreground font-medium">
                Remote / Global
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-medium">
          <p>© 2026 Arun Kumar Bind. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
