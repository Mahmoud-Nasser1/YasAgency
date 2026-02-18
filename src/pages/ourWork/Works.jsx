import React from "react";
import { FcAdvertising } from "react-icons/fc";

const Works = () => {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-9 max-w-4xl mx-8 text-white">
          <div className="flex w-1/2 items-center gap-2 px-6 py-3 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/40">
            <FcAdvertising className="w-5 h-5 text-white" />
            <span className="text-white">
              High-Impact Advertising Since 2010
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Work
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
            Delivering large-scale outdoor campaigns, premium billboards, and
            high-visibility advertising across Cairo’s most high-traffic
            locations.
          </p>
        </div>
      </section>

      <section className="relative py-24 bg-card text-white">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Section 1 – Intro */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Works & Executed Projects
            </h2>
            <p className="text-lg text-white/80">
              A portfolio of real, high-impact campaigns delivering massive
              visibility across Egypt’s most high-traffic locations.
            </p>
          </div>

          {/* Section 2 – Core Strength */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">
                Core Strength: Outdoor Advertising (OOH)
              </h3>
              <p className="text-white/80 leading-relaxed">
                Our strongest and most visible track record lies in Out-of-Home
                advertising — executing massive billboards, LED screens, and
                high-impact outdoor placements across Greater Cairo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">
                Prime Locations & Exposure
              </h3>
              <ul className="space-y-3 text-white/80">
                <li>
                  • Ahmed Orabi – High-traffic bridge & roadside billboards
                </li>
                <li>• Nile Corniche – Iconic riverside premium exposure</li>
                <li>• Sheikh Zayed – Mega LED screens & luxury developments</li>
                <li>• Desert & Wahat Roads – Heavy commuter highways</li>
              </ul>
            </div>
          </div>

          {/* Section 3 – Executed Campaigns */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Selected Executed Campaigns
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Pura Residence – Limited-time real estate promotions",
                "Seven Residence – Modern bilingual billboard campaigns",
                "Dental Clinics – High-visibility portrait-led OOH ads",
                "Construction Site Wraps – Large-scale branded facades",
                "Zayed Mega Screens – Strategic LED placements",
                "Highway Billboards – Daily mass exposure",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 – Additional Services */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">
                Events, Production & Printing
              </h3>
              <p className="text-white/80 leading-relaxed">
                From immersive event activations to high-quality printing,
                brochures, 3D items, and full building wraps — all executed with
                premium materials and creative precision.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-semibold mb-4">
                Digital & Influencer Marketing
              </h3>
              <p className="text-white/80 leading-relaxed">
                Full influencer programs, campaign monitoring, moderation,
                reporting, and integrated digital strategies supporting outdoor
                visibility.
              </p>
            </div>
          </div>

          {/* Section 5 – Clients */}
          <div className="text-center max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Trusted by Leading Brands
            </h3>
            <p className="text-white/80 leading-relaxed">
              Over 25 major brands across real estate, banking, retail, and
              healthcare trust us to deliver high-impact, high-visibility
              campaigns that reach millions every day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
