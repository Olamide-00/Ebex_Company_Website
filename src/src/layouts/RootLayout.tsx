import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaBars,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa'
import { useState, useEffect } from 'react'


import logo from '../../assets/ebex-logo.png'

const socialLinks = [
  { icon: FaGithub, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaTwitter, href: '#' },
  { icon: FaInstagram, href: '#' },
  { icon: FaYoutube, href: '#' },
]

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function RootLayout() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg shadow-black/5' 
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Image */}
            <NavLink to="/" className="group flex items-center space-x-3 relative">
              <motion.div 
                className="relative w-32 h-12 rounded-xl overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <img 
                  src={logo} 
                  alt="Ebex Solution Logo" 
                  className=" h-full width-full object-cover rounded-xl"
                />
                {/* Animated Ring */}
                <motion.div 
                  className="absolute -inset-1 rounded-xl border-2 border-blue-400/30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              
              {/* <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-none">
                  Ebex <span className="text-blue-600">Solution</span>
                </span>
                <span className="text-[8px] text-gray-400 tracking-[3px] uppercase font-medium">
                  Extraordinary Solutions
                </span>
              </div> */}
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2 rounded-xl transition-all duration-300"
                    onMouseEnter={() => setHoveredNav(item.path)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Background hover effect */}
                    {hoveredNav === item.path && !isActive && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-gray-100/80 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <motion.div 
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          layoutId="underline"
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                      </motion.div>
                    )}
                  </NavLink>
                )
              })}
            </nav>

            {/* Right Section - Social + CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300 relative group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} />
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                )
              })}
              
              <motion.div 
                className="w-px h-6 bg-gray-200"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              <NavLink to="/contact">
                <motion.button 
                  className="group relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <FaArrowRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={12} />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors bg-gray-100/50 hover:bg-gray-200/50"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-20"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 border border-blue-100' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                            />
                          )}
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                className="mt-8 pt-8 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex flex-col space-y-6">
                  <div className="flex space-x-6 justify-center">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon size={22} />
                        </motion.a>
                      )
                    })}
                  </div>
                  
                  <NavLink to="/contact" className="block">
                    <motion.button 
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </NavLink>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 mt-20 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-34 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src={logo} 
                    alt="Ebex Solution Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 block">
                    Ebex <span className="text-blue-600">Solution</span>
                  </span>
                  <span className="text-[8px] text-gray-400 tracking-[2px] uppercase">
                    Extraordinary Solutions
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Empowering businesses with cutting-edge technology solutions. 
                We build the future, one line of code at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-700">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="text-gray-400 hover:text-blue-600 transition-colors">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-gray-700">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Ebex Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}