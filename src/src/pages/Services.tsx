import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaMobile,
  FaPaintBrush,
  FaBolt,
  FaGlobe,
  FaChartLine,
  FaEnvelope,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: FaGlobe,
    title: "Website Development",
    description:
      "Fast, responsive websites built to convert visitors into customers.",
    color: "#D4AF37",
  },
  {
    icon: FaMobile,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences.",
    color: "#F5D067",
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "Enterprise-grade software solutions tailored to your specific business needs and workflows.",
    color: "#E8C468",
  },
  {
    icon: FaBolt,
    title: "Code & No-Code Solutions",
    description:
      "The right build approach for your timeline, budget, and complexity.",
    color: "#B8860B",
  },
  {
    icon: FaPaintBrush,
    title: "Branding & UI/UX Design",
    description:
      "Beautiful, intuitive designs and brand identities that captivate users and drive engagement.",
    color: "#F0C550",
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing & SEO",
    description:
      "Data-driven strategies to grow your visibility, traffic, and revenue.",
    color: "#C9A227",
  },
  {
    icon: FaEnvelope,
    title: "Hosting & Business Email",
    description:
      "Reliable hosting and professional email infrastructure for your business.",
    color: "#EAC24B",
  },
  {
    icon: FaHandshake,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to help you make the right decisions.",
    color: "#CFA83C",
  },
];

export default function Services() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full text-sm font-medium mb-4 border border-[#D4AF37]/20">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                What We{" "}
                <span className="bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Deliver
                </span>
              </h1>
              <p className="text-lg text-white/60">
                Comprehensive digital solutions designed to help your business
                grow and succeed in today's competitive landscape.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="glass-card rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Need a Custom{" "}
                <span className="bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Solution
                </span>
                ?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                We're here to help bring your vision to life. Let's discuss how
                we can create the perfect solution for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl text-black font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25"
              >
                Let's Talk <FaArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
