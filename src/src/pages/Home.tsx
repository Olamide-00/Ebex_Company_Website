import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaRocket, 
  FaCode, 
  FaMobile, 
  FaPaintBrush,
  FaArrowRight,
  FaCube,
  FaCheckCircle,
  FaBriefcase,
  FaUsers,
  FaAward,
  FaServer,
  FaCloud,
  FaShieldAlt
} from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import SectionTitle from '../components/SectionTitle'

const services = [
  {
    icon: FaCode,
    title: 'Custom Software Development',
    description: 'Enterprise-grade solutions engineered to scale with your business growth.',
    color: '#4A6CF7'
  },
  {
    icon: FaMobile,
    title: 'Mobile App Development',
    description: 'Native and cross-platform experiences that users love and engage with.',
    color: '#7C3AED'
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description: 'Human-centered designs that create meaningful digital experiences.',
    color: '#EC4899'
  },
  {
    icon: FaCube,
    title: 'CMS Solutions',
    description: 'Flexible content management systems built for enterprise needs.',
    color: '#14B8A6'
  }
]

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: FaBriefcase },
  { value: '98%', label: 'Client Satisfaction', icon: FaUsers },
  { value: '50+', label: 'Expert Team', icon: FaUsers },
  { value: '15+', label: 'Years of Excellence', icon: FaAward }
]

const features = [
  'Custom-built for your specific needs',
  'Scalable architecture from day one',
  'Enterprise-grade security standards',
  'Dedicated support & maintenance'
]

// Service cards for the hero section
const heroServices = [
  { icon: FaServer, label: 'Web Apps', color: '#4A6CF7' },
  { icon: FaMobile, label: 'Mobile Apps', color: '#7C3AED' },
  { icon: FaCloud, label: 'Cloud Solutions', color: '#EC4899' },
  { icon: FaShieldAlt, label: 'Security', color: '#14B8A6' }
]

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="text-sm text-gray-600 font-medium">Available for projects</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-gray-900">
                Build the Future
                <span className="block mt-2 gradient-text">
                  With Ebex Solution
                </span>
              </h1>
              
              <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed">
                We engineer cutting-edge digital solutions that transform businesses 
                and drive sustainable growth through innovation and technical excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25">
                  <span>Start Your Project</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-semibold transition-all">
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
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${service.color}15` }}
                    >
                      <service.icon className="text-2xl" style={{ color: service.color }} />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">{service.label}</h4>
                    <p className="text-sm text-gray-400">Enterprise-grade</p>
                  </motion.div>
                ))}
                
                {/* Bottom card spanning full width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="col-span-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">Trusted by 50+ companies</h4>
                      <p className="text-white/70 text-sm">Join our growing list of satisfied clients</p>
                    </div>
                    <FaRocket className="text-3xl text-white/30" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Icon className="text-3xl text-gray-300 mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              )
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
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <span className="inline-block text-sm font-medium text-blue-600 mb-4">
                  WHY CHOOSE US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Built for
                  <span className="block gradient-text">
                    Enterprise Excellence
                  </span>
                </h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  Every solution we build is crafted with precision, scalability, 
                  and your business growth in mind.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Clients Worldwide', value: '50+' },
                  { label: 'Projects Completed', value: '200+' },
                  { label: 'Team Members', value: '25+' },
                  { label: 'Avg. Experience', value: '7+ Years' }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="relative rounded-3xl p-16 text-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/20">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Ready to Build Something
                  <span className="block gradient-text">
                    Extraordinary?
                  </span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                  Let's create innovative solutions that will transform your business 
                  and set new standards in your industry.
                </p>
                <Link to="/contact" className="group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25">
                  Start Your Project
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}