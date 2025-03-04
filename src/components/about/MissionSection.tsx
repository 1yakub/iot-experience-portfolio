import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'

export default function MissionSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-xl text-[#2D3436]">
              At IoT-X, we are dedicated to humanizing technology and leveraging data to enhance the lives of our customers. With our innovative solutions, we strive to create exceptional experiences that make a positive impact on the world we all live in.
            </p>
            <p className="text-xl text-[#2D3436]">
              We believe in the power of connected devices and data analytics to transform businesses and improve quality of life. Our team of experts works tirelessly to develop cutting-edge IoT solutions that address real-world challenges.
            </p>
            <CTAButton 
              href="/contact" 
              variant="primary"
              size="lg"
              icon="chat"
            >
              Work with Us
            </CTAButton>
          </motion.div>
          <motion.div 
            className="relative h-[500px] border-4 border-[#2D3436] overflow-hidden group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/about-image.jpg"
              alt="About IoT-X"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 