import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'

interface ProjectStat {
  label: string
  value: string
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  category: string
  year: string
  stats: ProjectStat[]
  color: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  year,
  stats,
  color,
  index
}: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-white border-4 border-[#2D3436] group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D3436] via-[#2D3436]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <motion.span 
                className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                {category}
              </motion.span>
              <span className="text-sm font-medium">{year}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-white/90 mb-4">{description}</p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  <div className={`text-lg font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#2D3436]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <CTAButton 
          href={`/portfolio/${title.toLowerCase().replace(/\s+/g, '-')}`}
          variant="gradient"
          size="md"
          fullWidth
          icon="explore"
        >
          View Project
        </CTAButton>
      </div>
    </motion.div>
  )
} 