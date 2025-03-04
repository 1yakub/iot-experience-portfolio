import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative py-20 bg-[#2D3436] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
            <span className="tracking-wider uppercase">Our Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <motion.span 
              className="block text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Pioneering the
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Future of IoT
            </motion.span>
          </h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            We are passionate about humanizing technology and leveraging real-world data to create exceptional customer experiences that transform industries.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 