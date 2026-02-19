import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";
const Outdoors = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] font-medium mb-12">
            Outdoor Advertising
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            { img: "/work1.png", label: "Ahmed Orabi" },
            { img: "/work2.png", label: "Nile Corniche" },
            { img: "/work3.png", label: "Zayed" },
            { img: "/work4.png", label: "Zayed Screen" },
            { img: "/work5.png", label: "Zayed Screen" },
            { img: "/work6.png", label: "Zayed Screen" },
            { img: "/work7.png", label: "Desert Road" },
            { img: "/work8.png", label: "Desert Road" },
            { img: "/work9.png", label: "WAHAT ROAD" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outdoors;
