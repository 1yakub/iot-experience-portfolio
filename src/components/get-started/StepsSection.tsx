import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Schedule a free consultation with our IoT experts to discuss your business needs and goals.",
    icon: "🤝",
    color: "#0984E3"
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Our team will design a customized IoT solution tailored to your specific requirements.",
    icon: "✏️",
    color: "#00B894"
  },
  {
    number: "03",
    title: "Implementation Plan",
    description: "We'll create a detailed implementation roadmap with clear milestones and timelines.",
    icon: "📋",
    color: "#6C5CE7"
  },
  {
    number: "04",
    title: "Deployment",
    description: "Our experts will handle the setup and deployment of your IoT infrastructure.",
    icon: "🚀",
    color: "#FD79A8"
  }
]

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Connection Line */}
      {index < steps.length - 1 && (
        <div className="absolute top-1/2 left-[calc(50%+120px)] w-full h-px bg-gradient-to-r from-gray-200 to-transparent md:block hidden" />
      )}

      <motion.div 
        className="relative bg-white rounded-2xl p-8 shadow-lg"
        whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      >
        <motion.div 
          className="w-16 h-16 rounded-2xl mb-6 relative flex items-center justify-center text-3xl"
          style={{ backgroundColor: `${step.color}10` }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
        >
          {step.icon}
          <motion.div 
            className="absolute inset-0 rounded-2xl"
            style={{ backgroundColor: step.color }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
          />
        </motion.div>

        <motion.div 
          className="absolute top-6 right-8 text-6xl font-bold"
          style={{ color: `${step.color}20` }}
          whileHover={{ scale: 1.1 }}
        >
          {step.number}
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 text-[#2D3436]">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default function StepsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="steps">
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
            <span className="tracking-wider uppercase">Simple Process</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D3436] via-[#0984E3] to-[#2D3436] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How to Get Started
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Follow our straightforward process to begin your IoT journey
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 