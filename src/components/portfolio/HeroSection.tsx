import { motion } from 'framer-motion'

interface CategoryProps {
  name: string
  isActive: boolean
  onClick: () => void
}

const CategoryButton = ({ name, isActive, onClick }: CategoryProps) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all
      ${isActive 
        ? 'bg-white text-[#2D3436]' 
        : 'bg-white/10 text-white/90 hover:bg-white hover:text-[#2D3436]'}
      focus:outline-none focus:ring-2 focus:ring-white/20`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {name}
  </motion.button>
)

interface HeroSectionProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function HeroSection({ activeCategory, setActiveCategory }: HeroSectionProps) {
  const categories = ["All", "Smart Home", "Industrial", "Smart City", "Healthcare", "Agriculture", "Retail"]

  return (
    <section className="relative py-20 bg-[#2D3436] text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 text-white/80 text-sm font-medium mb-4 bg-white/5 px-4 py-2 rounded-full border border-white/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse"></span>
            <span className="tracking-wider uppercase">Our Work</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <motion.span 
              className="block text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Transforming Industries
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Through Innovation
            </motion.span>
          </h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Explore our innovative IoT solutions that are transforming industries and improving lives through intelligent connectivity and real-time analytics.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {categories.map((category, index) => (
              <CategoryButton
                key={category}
                name={category}
                isActive={category === activeCategory}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 