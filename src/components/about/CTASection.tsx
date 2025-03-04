import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'

export default function CTASection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#2D3436] mb-8">
            Join us in building the future of IoT technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CTAButton 
                href="/contact" 
                variant="primary"
                size="lg"
                icon="calendar"
              >
                Schedule a Meeting
              </CTAButton>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CTAButton 
                href="/services" 
                variant="secondary"
                size="lg"
                icon="explore"
              >
                Explore Our Services
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 