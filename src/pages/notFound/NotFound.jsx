import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../components/animation/FadeUp ";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="text-center max-w-xl mx-auto">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-[120px] md:text-[180px] font-bold tracking-[0.2em] text-foreground/10 leading-none mb-4"
          >
            404
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="w-16 h-px bg-foreground/20 mx-auto mb-8"
          />
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-2xl md:text-3xl font-light tracking-[0.1em] text-foreground mb-4"
          >
            Page Not Found
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="text-sm text-muted-foreground mb-10 tracking-wide"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            <Link
              to="/"
              className="inline-block border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground/10 hover:text-foreground transition-all duration-500 opacity-0 animate-fade-in"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
