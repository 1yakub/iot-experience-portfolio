import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative py-32 bg-[#2D3436] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0984E3]/10 via-transparent to-[#00B894]/10" />
      </div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute -left-32 top-1/4 w-96 h-96 bg-[#0984E3] rounded-full filter blur-[120px] opacity-20"
        animate={{ 
          x: [-20, 20],
          y: [-20, 20],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 w-96 h-96 bg-[#00B894] rounded-full filter blur-[120px] opacity-20"
        animate={{ 
          x: [20, -20],
          y: [20, -20],
          scale: [1.1, 1, 1.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="flex h-2 w-2 rounded-full bg-[#00B894]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="tracking-wider uppercase">Start Your Journey</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 relative">
            <motion.span 
              className="block text-white mb-2 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Begin Your IoT
              <motion.div 
                className="absolute -left-6 -right-6 h-4 bg-[#0984E3]/20 bottom-2 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-[#0984E3] via-[#00B894] to-[#0984E3] bg-clip-text text-transparent bg-[length:200%_auto] relative z-10"
              initial={{ opacity: 0, y: 20, backgroundPosition: "0% 50%" }}
              animate={{ 
                opacity: 1, 
                y: 0,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.6 },
                y: { duration: 0.6, delay: 0.6 },
                backgroundPosition: { 
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              Transformation Today
            </motion.span>
          </h1>

          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Follow our simple process to start implementing IoT solutions that will revolutionize your business operations.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#steps"
              className="px-8 py-4 bg-gradient-to-r from-[#0984E3] to-[#00B894] text-white rounded-lg font-medium shadow-lg shadow-[#0984E3]/20 hover:shadow-xl hover:shadow-[#0984E3]/30 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Steps
            </motion.a>
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 