'use client'

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
          <motion.div 
            className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
            <span className="tracking-wider uppercase">Get in Touch</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <motion.span 
              className="block text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's Build Something
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Amazing Together
            </motion.span>
          </h1>

          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your IoT vision to life.
          </motion.p>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { number: '24/7', label: 'Support Available' },
              { number: '10+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Global Partners' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-lg hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute left-0 top-0 w-64 h-64 bg-[#0984E3] rounded-full filter blur-[80px] opacity-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-64 h-64 bg-[#00B894] rounded-full filter blur-[80px] opacity-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
    </section>
  )
} 