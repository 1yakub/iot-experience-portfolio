import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'

export default function CTASection() {
  return (
    <section className="py-20 bg-[#2D3436] relative overflow-hidden">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-lg"
          >
            <motion.span 
              className="flex h-2 w-2 rounded-full bg-[#00B894]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="tracking-wider uppercase">Ready to Begin?</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Start Your IoT Journey Today
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 h-4 bg-[#0984E3]/20 bottom-2 w-96 max-w-full -z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>

          <motion.p 
            className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Take the first step towards digital transformation. Our team is ready to help you implement IoT solutions that drive real business value.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CTAButton 
                  href="/contact" 
                  variant="primary"
                  size="lg"
                  darkBg
                  icon="chat"
                  className="bg-[#0984E3] hover:bg-[#0972C3]"
                >
                  Schedule Consultation
                </CTAButton>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <CTAButton 
                  href="/services" 
                  variant="outline"
                  size="lg"
                  darkBg
                  icon="explore"
                >
                  Explore Services
                </CTAButton>
              </motion.div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { number: "100%", label: "Satisfaction Rate" },
              { number: "2-4", label: "Weeks to Launch" },
              { number: "24/7", label: "Support" },
              { number: "100+", label: "Projects Delivered" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 