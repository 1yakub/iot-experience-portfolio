import { motion } from 'framer-motion'

const values = [
  {
    icon: "🎯",
    title: "Innovation",
    description: "Constantly pushing boundaries to create cutting-edge solutions that redefine industry standards.",
    color: "from-[#0984E3] to-[#00B894]"
  },
  {
    icon: "🤝",
    title: "Collaboration",
    description: "Working together with clients and partners to achieve exceptional results that matter.",
    color: "from-[#00B894] to-[#38B2AC]"
  },
  {
    icon: "💡",
    title: "Excellence",
    description: "Committed to delivering the highest quality solutions with measurable impact.",
    color: "from-[#38B2AC] to-[#0984E3]"
  }
]

export default function ValuesSection() {
  return (
    <section className="py-20 bg-[#2D3436] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-xl text-white/80">
            The principles that guide our work and shape our culture.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="backdrop-blur-sm bg-white/5 p-8 border-2 border-white/20 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-5xl mb-6"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {value.icon}
              </motion.div>
              <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                {value.title}
              </h3>
              <p className="text-white/80 text-lg">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 