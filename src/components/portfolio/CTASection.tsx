import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'

export default function CTASection() {
  return (
    <section className="py-20 bg-[#2D3436] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Start Your IoT Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's create something amazing together. Contact us to discuss your project.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <CTAButton 
                href="/contact" 
                variant="primary"
                size="lg"
                darkBg
                icon="calendar"
              >
                Schedule a Consultation
              </CTAButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CTAButton 
                href="/services" 
                variant="secondary"
                size="lg"
                darkBg
                icon="explore"
              >
                Explore Services
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 