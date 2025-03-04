import { motion } from 'framer-motion'

const processes = [
  {
    title: "Discovery & Planning",
    description: "We begin with a thorough analysis of your business needs and objectives to create a comprehensive implementation strategy.",
    phases: [
      "Initial requirements gathering",
      "Business process analysis",
      "Technical feasibility assessment",
      "Solution architecture planning"
    ],
    duration: "2-3 weeks",
    color: "#0984E3"
  },
  {
    title: "Development & Testing",
    description: "Our team develops and rigorously tests your IoT solution to ensure optimal performance and reliability.",
    phases: [
      "Infrastructure setup",
      "Device configuration",
      "Integration development",
      "Quality assurance testing"
    ],
    duration: "4-8 weeks",
    color: "#00B894"
  },
  {
    title: "Deployment & Training",
    description: "We handle the deployment of your IoT solution and provide comprehensive training for your team.",
    phases: [
      "System deployment",
      "User training sessions",
      "Documentation delivery",
      "Initial monitoring setup"
    ],
    duration: "2-4 weeks",
    color: "#6C5CE7"
  }
]

function ProcessCard({ process, index }: { process: typeof processes[0], index: number }) {
  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden transform-gpu"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Top Border Gradient */}
      <div 
        className="h-2 w-full"
        style={{ background: `linear-gradient(to right, ${process.color}, ${process.color}88)` }}
      />

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-[#2D3436] mb-2">{process.title}</h3>
            <p className="text-gray-600">{process.description}</p>
          </div>
          <motion.div 
            className="text-sm font-medium px-4 py-2 rounded-full"
            style={{ 
              backgroundColor: `${process.color}10`,
              color: process.color
            }}
            whileHover={{ scale: 1.05 }}
          >
            {process.duration}
          </motion.div>
        </div>

        <div className="space-y-4">
          {process.phases.map((phase, phaseIndex) => (
            <motion.div 
              key={phase}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + phaseIndex * 0.1 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-medium"
                style={{ backgroundColor: process.color }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {phaseIndex + 1}
              </motion.div>
              <span className="text-gray-600">{phase}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
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
            <span className="tracking-wider uppercase">Implementation Process</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D3436] via-[#0984E3] to-[#2D3436] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Proven Approach
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We follow a structured implementation process to ensure successful deployment of your IoT solution
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processes.map((process, index) => (
            <ProcessCard key={process.title} process={process} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 