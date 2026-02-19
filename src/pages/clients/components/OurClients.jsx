import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";
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

const OurClients = () => {
  return (
    <section className="section-padding py-8 bg-secondary">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientsData.map((client, i) => (
            <motion.div
              key={client.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group relative bg-card border border-border aspect-square flex items-center justify-center p-8 hover:border-foreground/20 transition-all duration-500"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
