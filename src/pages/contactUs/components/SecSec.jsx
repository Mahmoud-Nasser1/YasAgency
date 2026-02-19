import { fadeUp } from "../../../components/animation/FadeUp ";
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

const SecSec = () => {
  return (
    <section className="border-t border-b border-border bg-secondary">
      <div className="max-w-6xl mx-auto px-6 py-24 md:px-12 lg:px-24 xl:px-32 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "info@yasadvertising.com",
              href: "mailto:info@yasadvertising.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+20 2 1234 5678",
              href: "tel:+20212345678",
            },
            {
              icon: Globe,
              label: "Headquarters",
              value: "Cairo, Egypt",
              href: null,
            },
          ].map(({ icon: Icon, label, value, href }) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4"
            >
              <div className="border border-border p-3 shrink-0">
                <Icon size={16} className="text-[#a3a3a3]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#a3a3a3] mb-1">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="text-foreground hover:text-muted-foreground transition-colors text-sm"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-foreground text-sm">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecSec;
