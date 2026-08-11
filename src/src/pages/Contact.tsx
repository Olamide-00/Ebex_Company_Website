import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaBuilding,
} from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection";

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    details: "123 Tech Hub, Victoria Island",
    sub: "Lagos, Nigeria",
    color: "#D4AF37",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    details: "+234 903 601 8013",
    sub: "Mon - Fri, 9:00 AM - 6:00 PM",
    color: "#F5D067",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: "olamide@gmail.com",
    sub: "We reply within 24 hours",
    color: "#E8C468",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: "Monday - Friday",
    sub: "9:00 AM - 6:00 PM (WAT)",
    color: "#B8860B",
  },
];

const socialLinks = [
  {
    icon: FaInstagram,
    label: "Instagram",
    handle: "@ebexsolution",
    color: "#E4405F",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    handle: "@ebexsolution",
    color: "#1DA1F2",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    handle: "ebex-solution",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    handle: "ebex-solution",
    color: "#E5E5E5",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-950/20" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/20 text-sm font-medium text-[#D4AF37] mb-4">
                <FaPaperPlane className="text-xs" />
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Let's Build Something
                <span className="block bg-gradient-to-r from-[#F5D067] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                  Amazing Together
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Get in touch
                with us and let's create something extraordinary.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Contact Information
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Reach out to us through any of these channels
                  </p>

                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-yellow-500/30 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                              style={{ background: `${info.color}20` }}
                            >
                              <Icon
                                className="text-xl"
                                style={{ color: info.color }}
                              />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-500">
                                {info.title}
                              </div>
                              <div className="text-white font-medium">
                                {info.details}
                              </div>
                              <div className="text-sm text-gray-500 mt-0.5">
                                {info.sub}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Social Connect */}
                  <div className="mt-8 bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                    <h3 className="font-semibold text-gray-300 mb-4">
                      Connect With Us
                    </h3>
                    <div className="space-y-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href="#"
                            className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:shadow-md hover:bg-white/10 transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ background: `${social.color}20` }}
                              >
                                <Icon
                                  className="text-sm"
                                  style={{ color: social.color }}
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-300">
                                  {social.label}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {social.handle}
                                </div>
                              </div>
                            </div>
                            <div className="text-gray-600 group-hover:text-[#D4AF37] transition-colors">
                              <FaPaperPlane className="text-xs" />
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.2}>
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-lg">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white">
                      Send us a Message
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Fill in the form below and we'll get back to you within 24
                      hours
                    </p>
                  </div>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-400"
                    >
                      <FaCheckCircle className="text-green-400" />
                      <span>Thank you! We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                            placeholder="Olamide Oladele"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                            placeholder="olamide@gmail.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                            placeholder="090 3601 8013"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/10 transition-all"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/10 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl text-black font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                      By submitting this form, you agree to our Privacy Policy
                    </p>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Location Section */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="text-3xl text-[#D4AF37]" />
                  </div>
                  <h3 className="font-semibold text-white">Visit Our Office</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    123 Tech Hub, Victoria Island, Lagos, Nigeria
                  </p>
                  <p className="text-[#D4AF37] text-sm font-medium mt-2">
                    Get Directions →
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-2xl p-6 text-black h-64 flex flex-col justify-center items-center text-center">
                <FaClock className="text-4xl mb-4 opacity-80" />
                <h3 className="font-bold text-xl">Office Hours</h3>
                <p className="text-black/70 text-sm mt-2">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-black/60 text-sm">
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
