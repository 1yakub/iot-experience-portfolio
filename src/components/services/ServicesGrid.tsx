import { motion } from 'framer-motion'
import {
  SmartHomeIcon,
  IndustrialIoTIcon,
  SmartCityIcon,
  HealthcareIoTIcon,
  AgricultureIoTIcon,
  RetailIoTIcon
} from '@/components/icons/ServiceIcons'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: "Smart Home Automation",
    description: "Transform your home with intelligent automation systems that enhance comfort, security, and energy efficiency.",
    icon: SmartHomeIcon,
    features: [
      "Automated lighting and climate control",
      "Smart security systems",
      "Energy monitoring and optimization",
      "Voice-controlled home management"
    ],
    color: "#0984E3"
  },
  {
    title: "Industrial IoT Solutions",
    description: "Optimize your manufacturing processes with advanced IoT solutions that increase efficiency and reduce downtime.",
    icon: IndustrialIoTIcon,
    features: [
      "Predictive maintenance",
      "Real-time monitoring",
      "Process automation",
      "Quality control systems"
    ],
    color: "#00B894"
  },
  {
    title: "Smart City Infrastructure",
    description: "Build sustainable and efficient cities with integrated IoT solutions for urban management and planning.",
    icon: SmartCityIcon,
    features: [
      "Traffic management systems",
      "Smart lighting solutions",
      "Waste management",
      "Environmental monitoring"
    ],
    color: "#6C5CE7"
  },
  {
    title: "Healthcare IoT",
    description: "Enhance patient care and medical operations with connected healthcare solutions and remote monitoring systems.",
    icon: HealthcareIoTIcon,
    features: [
      "Patient monitoring devices",
      "Medical asset tracking",
      "Healthcare analytics",
      "Remote diagnostics"
    ],
    color: "#FD79A8"
  },
  {
    title: "Agricultural IoT",
    description: "Maximize crop yields and optimize resource usage with smart farming solutions and precision agriculture.",
    icon: AgricultureIoTIcon,
    features: [
      "Precision irrigation",
      "Crop monitoring",
      "Soil analysis",
      "Weather monitoring"
    ],
    color: "#20BF6B"
  },
  {
    title: "Retail IoT Solutions",
    description: "Transform retail operations with smart solutions for inventory management and enhanced customer experience.",
    icon: RetailIoTIcon,
    features: [
      "Inventory tracking",
      "Smart POS systems",
      "Customer analytics",
      "Supply chain optimization"
    ],
    color: "#FF7675"
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
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
            className="inline-flex items-center space-x-2 text-[#2D3436] text-sm font-medium mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm"
          >
            <motion.span 
              className="flex h-2 w-2 rounded-full bg-[#0984E3]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="tracking-wider uppercase">What We Offer</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D3436] via-[#0984E3] to-[#2D3436] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive IoT Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From smart homes to industrial solutions, we provide cutting-edge IoT services tailored to your needs
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 