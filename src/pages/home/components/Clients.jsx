import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../../components/animation/FadeUp ";
import { ArrowRight } from "lucide-react";

const clientsData = [
  { name: "RH", logo: "/client1.png" },
  { name: "Sakan", logo: "/client2.png" },
  { name: "United Bank", logo: "/client3.png" },
  { name: "Banque Misr", logo: "/client4.png" },
  { name: "National Bank of Egypt", logo: "/client5.png" },
  { name: "Tseppas", logo: "/client6.png" },
  { name: "Enmaa", logo: "/client7.png" },
  { name: "Ideal Standard", logo: "/client8.png" },
  { name: "alBaraka", logo: "/client9.png" },
  { name: "Tabarak", logo: "/client10.png" },
  { name: "Healthy & Tasty", logo: "/client11.png" },
  { name: "El Mansour", logo: "/client12.png" },
  { name: "Hemocure", logo: "/client13.png" },
  { name: "Metro", logo: "/client14.png" },
  { name: "Mansour", logo: "/client15.png" },
  { name: "Al Moasher", logo: "/client16.png" },
  { name: "LinkedIn", logo: "/client17.png" },
  { name: "Hootsuite", logo: "/client18.png" },
  { name: "El Mansour", logo: "/client19.png" },
  { name: "Hemocure", logo: "/client20.png" },
  { name: "Metro", logo: "/client21.png" },
  { name: "Mansour", logo: "/client22.png" },
  { name: "Al Moasher", logo: "/client23.png" },
  { name: "LinkedIn", logo: "/client24.png" },
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
                className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-500 "
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
