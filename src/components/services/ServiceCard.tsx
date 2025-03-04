import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'
import { useState } from 'react'

interface ServiceFeature {
  text: string
}

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ComponentType
  features: string[]
  index: number
  color: string
}

export default function ServiceCard({ title, description, icon: Icon, features, index, color }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform-gpu"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Gradient Border */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ padding: '2px', background: `linear-gradient(135deg, ${color}, ${color}88)` }}
      >
        <div className="absolute inset-0 bg-white rounded-2xl" />
      </div>

      <div className="p-8 relative">
        <motion.div 
          className="w-16 h-16 mb-6 relative"
          style={{ color }}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0
          }}
          transition={{ 
            scale: { type: "spring", stiffness: 300 },
            rotate: { duration: 0.5 }
          }}
        >
          <Icon />
          <motion.div 
            className="absolute -inset-4 rounded-full"
            style={{ background: `${color}20` }}
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.8 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold mb-4"
          animate={{ y: isHovered ? -2 : 0 }}
          style={{ color: '#2D3436' }}
        >
          {title}
        </motion.h3>

        <motion.p 
          className="text-gray-600 mb-6"
          animate={{ 
            y: isHovered ? -1 : 0,
            opacity: isHovered ? 0.9 : 0.8
          }}
        >
          {description}
        </motion.p>

        <motion.ul 
          className="space-y-3 mb-6"
          animate={{ y: isHovered ? 0 : 0 }}
        >
          {features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
            >
              <motion.svg
                className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                style={{ color }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ 
                  scale: isHovered ? 1.2 : 1,
                  rotate: isHovered ? 360 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
              <span className="text-gray-600">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          animate={{ y: isHovered ? 2 : 0 }}
        >
          <CTAButton 
            href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
            variant="primary"
            size="md"
            fullWidth
            icon="explore"
            customBgColor={color}
          >
            Learn More
          </CTAButton>
        </motion.div>
      </div>
    </motion.div>
  )
} 