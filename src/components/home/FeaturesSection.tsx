'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Smart Home Automation",
    description: "Transform your living space with intelligent automation and connected devices.",
    icon: "🏠",
    color: "from-[#0984E3] to-[#00B894]",
    link: "/services#smart-home",
    benefits: ["Energy Efficiency", "Remote Control", "Smart Security"]
  },
  {
    title: "Industrial IoT",
    description: "Optimize manufacturing processes with real-time data and analytics.",
    icon: "🏭",
    color: "from-[#00B894] to-[#38B2AC]",
    link: "/services#industrial",
    benefits: ["Process Automation", "Predictive Maintenance", "Real-time Monitoring"]
  },
  {
    title: "Smart City Solutions",
    description: "Build connected communities with intelligent urban infrastructure.",
    icon: "🌆",
    color: "from-[#38B2AC] to-[#0984E3]",
    link: "/services#smart-city",
    benefits: ["Traffic Management", "Waste Management", "Public Safety"]
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#F5F6FA] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-[#2D3436] text-sm font-medium mb-4 bg-white px-4 py-2 rounded-full border-2 border-[#2D3436]"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
            <span className="tracking-wider uppercase">Our Solutions</span>
          </motion.div>
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Innovative IoT Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-[#2D3436]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Discover how our IoT solutions can transform your business and improve customer experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} transform rotate-6 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="bg-white p-8 border-4 border-[#2D3436] relative transform hover:-translate-y-2 transition-transform duration-300">
                <motion.div 
                  className="text-4xl mb-6"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-[#2D3436]">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-[#00B894]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <Link 
                  href={feature.link} 
                  className={`neobrutalist bg-gradient-to-r ${feature.color} border-[#2D3436] text-white w-full inline-flex items-center justify-center group`}
                >
                  Learn More
                  <motion.svg 
                    className="w-5 h-5 ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection 