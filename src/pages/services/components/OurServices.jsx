import { motion } from "framer-motion";
import { fadeUp } from "../../../components/animation/FadeUp ";
import {
  Monitor,
  Megaphone,
  Printer,
  Film,
  Globe,
  Users,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Outdoor Advertising",
    description:
      "Strategic billboard placements across prime locations including highways, urban centers, and high-traffic corridors for maximum brand visibility.",
    features: [
      "Highway billboards",
      "Urban signage",
      "Digital screens",
      "Transit advertising",
    ],
  },
  {
    icon: Megaphone,
    title: "Events & Activations",
    description:
      "End-to-end event management and brand activations that create memorable experiences and drive meaningful engagement.",
    features: [
      "Brand activations",
      "Exhibition design",
      "Corporate events",
      "Product launches",
    ],
  },
  {
    icon: Printer,
    title: "Printing Services",
    description:
      "Premium print solutions from large-format banners to corporate collateral, delivering exceptional quality and consistency.",
    features: [
      "Large-format printing",
      "Corporate collateral",
      "Packaging design",
      "Branded materials",
    ],
  },
  {
    icon: Film,
    title: "Advertising & Production",
    description:
      "Full-service creative production including concept development, filming, and post-production for compelling brand storytelling.",
    features: [
      "Video production",
      "Photography",
      "Motion graphics",
      "Post-production",
    ],
  },
  {
    icon: Globe,
    title: "E-Marketing Services",
    description:
      "Data-driven digital marketing strategies spanning SEO, SEM, social advertising, and performance campaigns.",
    features: [
      "SEO & SEM",
      "Social advertising",
      "Email marketing",
      "Performance campaigns",
    ],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Strategic influencer partnerships that authentically connect brands with targeted audiences across platforms.",
    features: [
      "Influencer sourcing",
      "Campaign strategy",
      "Content collaboration",
      "ROI tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Social Media Management",
    description:
      "Comprehensive social media moderation, monitoring, analysis, reporting, campaign management, and real-time alerts.",
    features: [
      "Content creation",
      "Community management",
      "Analytics & reporting",
      "Real-time monitoring",
    ],
  },
];

const OurServices = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.15}
              variants={fadeUp}
              className="group grid md:grid-cols-[1fr_2fr] gap-8 py-16
                         border-b border-border last:border-b-0
                         transition-all duration-500
                         hover:bg-foreground/5 hover:px-2
                         backdrop-blur-sm"
            >
              {/* Left Column */}
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Icon
                    size={28}
                    strokeWidth={1}
                    className="text-foreground mt-1 shrink-0"
                  />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-foreground font-medium"
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Right Column */}
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground leading-relaxed mb-6 max-w-2xl"
                >
                  {service.description}
                </motion.p>

                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, i) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="text-xs uppercase tracking-[0.15em]
                                 text-muted-foreground
                                 border border-border
                                 px-4 py-2
                                 transition-all duration-300
                                 hover:text-foreground hover:border-foreground/40"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default OurServices;
