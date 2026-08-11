import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHeart,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaAward,
  FaBriefcase,
  FaGlobe,
  FaChartLine,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import SectionTitle from "../components/SectionTitle";

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description:
      "We push boundaries and embrace emerging technologies to create groundbreaking solutions that set new industry standards.",
    color: "#D4AF37",
  },
  {
    icon: FaUsers,
    title: "Client-Centric",
    description:
      "We collaborate closely with clients, ensuring every solution is perfectly aligned with their vision and business goals.",
    color: "#F5D067",
  },
  {
    icon: FaRocket,
    title: "Excellence Driven",
    description:
      "We pursue perfection in every line of code, every pixel of design, and every interaction we create.",
    color: "#E8C468",
  },
  {
    icon: FaHeart,
    title: "Passionate Team",
    description:
      "Our passion for technology drives us to deliver exceptional results that exceed expectations every time.",
    color: "#B8860B",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Expanded operations to serve clients across Africa and Europe",
    icon: FaGlobe,
    color: "#D4AF37",
  },
  {
    year: "2023",
    title: "50+ Projects Delivered",
    description: "Successfully delivered over 50 enterprise-grade projects",
    icon: FaBriefcase,
    color: "#F5D067",
  },
  {
    year: "2022",
    title: "Team Growth",
    description: "Grew our expert team to 25+ skilled professionals",
    icon: FaUsers,
    color: "#E8C468",
  },
  {
    year: "2021",
    title: "Company Founded",
    description:
      "Ebex Solution was founded with a vision to transform the tech industry",
    icon: FaRocket,
    color: "#B8860B",
  },
];

const stats = [
  { value: "50+", label: "Happy Clients", icon: FaUsers },
  { value: "200+", label: "Projects Completed", icon: FaCode },
  { value: "98%", label: "Client Retention", icon: FaChartLine },
  { value: "7+", label: "Years Average Experience", icon: FaAward },
];

const features = [
  "Custom solutions built from scratch",
  "Agile development methodology",
  "Enterprise-grade security",
  "24/7 dedicated support",
  "Scalable architecture",
  "Cutting-edge technologies",
];

export default function About() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-950/20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 text-sm font-medium text-[#D4AF37] mb-6">
                <FaRocket className="text-xs" />
                About Ebex Solution
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Crafting Digital
                <span className="block bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Excellence Since 2021
                </span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We're a technology company dedicated to creating innovative
                software solutions that empower businesses to thrive in the
                digital age.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
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
                  <Icon className="text-3xl text-[#D4AF37] mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block text-sm font-medium text-[#D4AF37] mb-3">
                  OUR STORY
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  From Vision to
                  <span className="block bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                    Global Impact
                  </span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Founded in 2021, Ebex Solution emerged from a simple but
                  powerful vision: to bridge the gap between innovative
                  technology and business success. What started as a small team
                  of passionate developers has grown into a dynamic force in the
                  tech industry.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Today, we serve clients across the globe, delivering
                  cutting-edge solutions that transform businesses and drive
                  growth. Our journey is fueled by a relentless pursuit of
                  excellence and a commitment to our clients' success.
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl text-black font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25"
                  >
                    Work With Us
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F5D067] to-[#B8860B] border-2 border-black flex items-center justify-center text-black text-xs font-bold"
                        >
                          {["O", "A", "M", "K"][i]}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm">25+ team members</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                        style={{ background: `${milestone.color}20` }}
                      >
                        <Icon
                          className="text-xl"
                          style={{ color: milestone.color }}
                        />
                      </div>
                      <div className="text-sm font-bold text-[#D4AF37] mb-1">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {milestone.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${value.color}20` }}
                  >
                    <value.icon
                      className="text-2xl"
                      style={{ color: value.color }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500/5 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-3xl p-12 text-black">
                  <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                    <FaShieldAlt className="text-3xl text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Why Choose Ebex?</h3>
                  <p className="text-black/70 mb-6 leading-relaxed">
                    We combine technical excellence with a deep understanding of
                    business needs to deliver solutions that truly make a
                    difference.
                  </p>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-black/80"
                      >
                        <FaCheckCircle
                          className="text-black/60 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <span className="inline-block text-sm font-medium text-[#D4AF37] mb-3">
                  WHY US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Built for
                  <span className="block bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                    Your Success
                  </span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We don't just build software - we build partnerships. Every
                  project is an opportunity to create lasting value for our
                  clients.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: FaClock,
                      title: "Fast Delivery",
                      description:
                        "Agile methodology ensures quick turnaround without compromising quality",
                    },
                    {
                      icon: FaCode,
                      title: "Quality Code",
                      description:
                        "Clean, maintainable code built with the latest best practices",
                    },
                    {
                      icon: FaUsers,
                      title: "Dedicated Support",
                      description:
                        "Our team is always available to help you succeed",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white/[0.02] border-t border-white/10">
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
                  Join our growing list of satisfied clients and let's create
                  innovative solutions that will transform your business.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl text-black font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25"
                  >
                    Start Your Project
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-white/5 rounded-xl text-white font-semibold border border-white/10 hover:border-yellow-500/30 transition-all hover:shadow-lg"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
