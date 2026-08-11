import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Adaeze Nwosu",
    role: "CEO, Nova Retail",
    quote:
      "Ebex Solution took our idea from a rough sketch to a fully working platform in weeks. The attention to detail and communication throughout was outstanding.",
    rating: 5,
    color: "#D4AF37",
  },
  {
    name: "Michael Bassey",
    role: "Founder, Paylink Africa",
    quote:
      "Their team rebuilt our payment infrastructure end to end. Faster, more secure, and easier to maintain than what we had before. Genuinely impressed.",
    rating: 5,
    color: "#F5D067",
  },
  {
    name: "Chiamaka Eze",
    role: "Product Lead, Horizon Health",
    quote:
      "We needed a mobile app that felt premium and worked flawlessly across devices. Ebex delivered exactly that, on time and on budget.",
    rating: 5,
    color: "#E8C468",
  },
  {
    name: "Tunde Alabi",
    role: "COO, Swiftcargo Logistics",
    quote:
      "What stood out was how well they understood our business, not just the tech. Every recommendation actually moved the needle for us.",
    rating: 5,
    color: "#B8860B",
  },
  {
    name: "Ngozi Umeh",
    role: "Marketing Director, Bloom Studio",
    quote:
      "From branding to the final website launch, the process was smooth and collaborative. Our conversion rate has never looked better.",
    rating: 5,
    color: "#F0C550",
  },
  {
    name: "David Okonjo",
    role: "CTO, Fintrack",
    quote:
      "Solid engineering, clear documentation, and a team that actually cares about long-term maintainability. Exactly what we needed.",
    rating: 5,
    color: "#C9A227",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Real feedback from businesses we've helped build, launch, and grow"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex flex-col flex-1">
                  <FaQuoteLeft
                    className="text-2xl mb-4 opacity-70"
                    style={{ color: testimonial.color }}
                  />

                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FaStar key={i} className="text-[#D4AF37]" size={14} />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-black flex-shrink-0"
                      style={{ background: testimonial.color }}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
