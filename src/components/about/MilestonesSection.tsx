import { motion } from 'framer-motion'

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "IoT-X was established with a vision to transform industries through IoT technology.",
    icon: "🚀"
  },
  {
    year: "2018",
    title: "First Major Project",
    description: "Successfully implemented smart city solutions for a metropolitan area.",
    icon: "🌆"
  },
  {
    year: "2021",
    title: "Global Expansion",
    description: "Expanded operations to multiple countries and established international partnerships.",
    icon: "🌍"
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as a leading IoT solutions provider with over 500 successful projects.",
    icon: "🏆"
  }
]

export default function MilestonesSection() {
  return (
    <section className="py-20 bg-[#F5F6FA]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-xl text-[#2D3436]">
            From our founding to industry leadership, every milestone shapes our story.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 border-4 border-[#2D3436] group hover:-translate-y-2 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {milestone.icon}
              </motion.div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent mb-2">
                {milestone.year}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2D3436]">{milestone.title}</h3>
              <p className="text-gray-600">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 