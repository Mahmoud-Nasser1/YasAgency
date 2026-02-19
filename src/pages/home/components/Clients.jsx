import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { ArrowRight } from "lucide-react";

const clientsData = [
  //   { name: "RH", logo: "/rh.png" },
  { name: "Sakan", logo: "/sakan.png" },
  { name: "United Bank", logo: "/united-bank.png" },
  { name: "Banque Misr", logo: "/banque-misr.png" },
  { name: "National Bank of Egypt", logo: "/nbe.png" },
  //   { name: "Tseppas", logo: "/tseppas.png" },
  { name: "Enmaa", logo: "/enmaa.png" },
  { name: "Ideal Standard", logo: "/ideal-standard.png" },
  { name: "alBaraka", logo: "/albaraka.png" },
  { name: "Tabarak", logo: "/tabarak.png" },
  { name: "Healthy & Tasty", logo: "/healthy-tasty.png" },
  { name: "El Mansour", logo: "/el-mansour.png" },
  { name: "Hemocure", logo: "/hemocure.png" },
  { name: "Metro", logo: "/metro.png" },
  { name: "Mansour", logo: "/mansour.png" },
  { name: "Al Moasher", logo: "/al-moasher.png" },
  { name: "LinkedIn", logo: "/linkedin.png" },
  { name: "Hootsuite", logo: "/hootsuite.png" },
];

const clients = clientsData.slice(0, 12);

const Clients = () => {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 xl:px-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#a3a3a3] mb-4 font-medium">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-12">
            Our Clients
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-border mb-12">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="bg-background flex items-center justify-center p-6 hover:bg-secondary transition-colors duration-500 aspect-square"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <Link
          to="/clients"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors group"
        >
          View All Clients{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default Clients;
