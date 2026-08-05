import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaCode, 
  FaMobile, 
  FaPaintBrush, 
  FaCube,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: FaCode,
    title: 'Custom Software Development',
    description: 'Enterprise-grade software solutions tailored to your specific business needs and workflows.',
    color: '#C0A86A'
  },
  {
    icon: FaMobile,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
    color: '#C0A86A'
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that captivate users and drive engagement.',
    color: '#C0A86A'
  },
  {
    icon: FaCube,
    title: 'CMS Development',
    description: 'Powerful content management systems that give you complete control over your content.',
    color: '#C0A86A'
  },
  {
    icon: FaServer,
    title: 'Web Development',
    description: 'High-performance websites and web applications built with modern technologies.',
    color: '#C0A86A'
  },
  {
    icon: FaCloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment strategies for your applications.',
    color: '#C0A86A'
  },
  {
    icon: FaShieldAlt,
    title: 'Security Consulting',
    description: 'Comprehensive security audits and implementation to protect your digital assets.',
    color: '#C0A86A'
  }
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4 border border-secondary/20">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                What We <span className="gradient-text">Deliver</span>
              </h1>
              <p className="text-lg text-white/60">
                Comprehensive digital solutions designed to help your business grow 
                and succeed in today's competitive landscape.
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
                Need a Custom <span className="gradient-text">Solution</span>?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                We're here to help bring your vision to life. Let's discuss how we can 
                create the perfect solution for your business.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Let's Talk <FaArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}