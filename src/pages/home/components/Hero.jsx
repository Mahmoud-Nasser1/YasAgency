import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../components/animation/FadeUp ";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/HeroImg.jpg"
          alt="City billboards at night"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="text-7xl md:text-9xl font-bold tracking-[0.2em] text-foreground mb-8"
        >
          YAS
        </motion.h1>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="w-16 h-px bg-foreground/30 mx-auto mb-8"
        />
        <motion.p
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="text-xl md:text-2xl font-light tracking-[0.15em] text-muted-foreground mb-12"
        >
          HIGH VISIBILITY, HIGHER IMPACT
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
        >
          <Link
            to="/contact"
            className="inline-block border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground/10 hover:text-foreground transition-all duration-500 opacity-0 animate-fade-in"
          >
            Let's Create Impact Together
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="w-px h-12 bg-foreground/20 mx-auto mb-2" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="h-screen relative flex items-center justify-center overflow-hidden pt-24">
//       <div className="absolute inset-0">
//         <img
//           src="/HeroImg.jpg"
//           alt="Hero Background"
//           className="w-full h-full object-cover "
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
//       </div>
//       <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
//         <h1 className="text-7xl md:text-9xl font-bold tracking-[0.2em] text-foreground mb-8 animate-fade-in">
//           YAS
//         </h1>
//         <div
//           className="w-16 h-px bg-foreground/30 mx-auto mb-8 opacity-0 animate-fade-in"
//           style={{ animationDelay: "0.3s" }}
//         />
//         <p
//           className="text-xl md:text-2xl font-light tracking-[0.15em] text-muted-foreground mb-12 opacity-0 animate-fade-in"
//           style={{ animationDelay: "0.5s" }}
//         >
//           HIGH VISIBILITY, HIGHER IMPACT
//         </p>
//         <a
//           href="#contact"
//           className="inline-block border border-foreground/30 px-10 py-4 text-xs uppercase tracking-[0.25em] text-foreground hover:bg-foreground/10 hover:text-foreground transition-all duration-500 opacity-0 animate-fade-in"
//           style={{ animationDelay: "0.7s" }}
//         >
//           Let's Create Impact Together
//         </a>
//       </div>
//       <div
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
//         style={{ animationDelay: "1s" }}
//       >
//         <div className="w-px h-12 bg-foreground/20 mx-auto mb-2" />
//         <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
//           Scroll
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;
