import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SmoothScrollProvider } from "./hooks/useSmoothScroll";
import Navbar from "./components/SaaS/Navbar";
import Footer from "./components/SaaS/Footer";

// Lazy Pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Services = React.lazy(() => import("./pages/Services"));
const GiveMeWork = React.lazy(() => import("./pages/GiveMeWork"));
const Contact = React.lazy(() => import("./pages/Contact"));
const AdminLogin = React.lazy(() => import("./pages/AdminLogin"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

// Loading Skeleton
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-primary/10 border-t-primary rounded-full animate-spin" />
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-white">
          <Navbar />
          <main>
            <PageTransition>
              <React.Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/give-me-work" element={<GiveMeWork />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<Dashboard />} />
                </Routes>
              </React.Suspense>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
