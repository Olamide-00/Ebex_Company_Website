import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaCode,
  FaMobile,
  FaPaintBrush,
  FaArrowRight,
  FaCheckCircle,
  FaBriefcase,
  FaUsers,
  FaAward,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaGlobe,
  FaBolt,
  FaChartLine,
  FaEnvelope,
  FaHandshake,
} from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";
import Testimonials from "../components/Testimonials";

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
      "Native and cross-platform experiences that users love and engage with.",
    color: "#F5D067",
  },
  {
    icon: FaCode,
    title: "Custom Software Development",
    description:
      "Enterprise-grade solutions engineered to scale with your business growth.",
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
      "Human-centered designs and brand identities that leave a lasting impression.",
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

const stats = [
  { value: "500+", label: "Projects Delivered", icon: FaBriefcase },
  { value: "98%", label: "Client Satisfaction", icon: FaUsers },
  { value: "50+", label: "Expert Team", icon: FaUsers },
  { value: "15+", label: "Years of Excellence", icon: FaAward },
];

const features = [
  "Custom-built for your specific needs",
  "Scalable architecture from day one",
  "Enterprise-grade security standards",
  "Dedicated support & maintenance",
];

// Service cards for the hero section
const heroServices = [
  { icon: FaServer, label: "Web Apps", color: "#D4AF37" },
  { icon: FaMobile, label: "Mobile Apps", color: "#F5D067" },
  { icon: FaCloud, label: "Cloud Solutions", color: "#E8C468" },
  { icon: FaShieldAlt, label: "Security", color: "#B8860B" },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-black to-yellow-950/20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" />
                </span>
                <span className="text-sm text-gray-300 font-medium">
                  Available for projects
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-white">
                Build the Future
                <span className="block mt-2 bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  With Ebex Solution
                </span>
              </h1>

              <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                We engineer cutting-edge digital solutions that transform
                businesses and drive sustainable growth through innovation and
                technical excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl text-black font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25"
                >
                  <span>Start Your Project</span>
                  <FaArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Service Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {heroServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-yellow-500/30 group"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${service.color}20` }}
                    >
                      <service.icon
                        className="text-2xl"
                        style={{ color: service.color }}
                      />
                    </div>
                    <h4 className="font-semibold text-white mb-1">
                      {service.label}
                    </h4>
                    <p className="text-sm text-gray-500">Enterprise-grade</p>
                  </motion.div>
                ))}

                {/* Bottom card spanning full width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="col-span-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-2xl p-6 text-black shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Trusted by 50+ companies
                      </h4>
                      <p className="text-black/70 text-sm">
                        Join our growing list of satisfied clients
                      </p>
                    </div>
                    <FaRocket className="text-3xl text-black/30" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="text-3xl text-yellow-500/40 mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Expertise"
            subtitle="We deliver exceptional digital solutions that drive real business results"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block text-sm font-medium text-[#D4AF37] mb-4">
                  WHY CHOOSE US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Built for
                  <span className="block bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                    Enterprise Excellence
                  </span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Every solution we build is crafted with precision,
                  scalability, and your business growth in mind.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle
                        className="text-[#D4AF37] mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Clients Worldwide", value: "50+" },
                  { label: "Projects Completed", value: "200+" },
                  { label: "Team Members", value: "25+" },
                  { label: "Avg. Experience", value: "7+ Years" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-6 text-center border border-white/10 shadow-sm hover:shadow-md hover:border-yellow-500/20 transition-all"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-3xl p-16 text-center overflow-hidden bg-gradient-to-br from-yellow-950/30 via-black to-amber-950/20 border border-yellow-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-yellow-500/20">
                  <FaRocket className="text-2xl text-black" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Ready to Build Something
                  <span className="block bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                    Extraordinary?
                  </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  Let's create innovative solutions that will transform your
                  business and set new standards in your industry.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl text-black font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25"
                >
                  Start Your Project
                  <FaArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
