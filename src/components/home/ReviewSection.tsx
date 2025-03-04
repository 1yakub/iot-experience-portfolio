'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  JohnAvatar,
  AliceAvatar,
  DavidAvatar,
  SophiaAvatar,
} from '@/components/icons/avatars'
import { StarIcon } from '@/components/icons'
import { useState, useEffect } from 'react'

interface Review {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  AvatarComponent: React.ComponentType<{ className?: string }>
  avatarBgColor: string
  category: string
  date: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Operations Director',
    company: 'TechCorp Industries',
    content:
      "The smart factory solution revolutionized our manufacturing process. We've seen a 40% increase in efficiency and significant cost reduction.",
    rating: 5,
    AvatarComponent: JohnAvatar,
    avatarBgColor: '#6C5CE7',
    category: 'Industrial IoT',
    date: 'March 2024',
  },
  {
    id: 2,
    name: 'Alice Chen',
    role: 'Smart City Planner',
    company: 'Metropolitan Solutions',
    content:
      "Their IoT infrastructure has transformed our city's traffic management. The real-time monitoring and adaptive systems are incredible.",
    rating: 5,
    AvatarComponent: AliceAvatar,
    avatarBgColor: '#FF7675',
    category: 'Smart City',
    date: 'February 2024',
  },
  {
    id: 3,
    name: 'David Martinez',
    role: 'Head of Agriculture',
    company: 'Green Fields Co',
    content:
      'The agricultural IoT sensors and automation have helped us optimize irrigation and reduce water usage by 30%. Outstanding results!',
    rating: 5,
    AvatarComponent: DavidAvatar,
    avatarBgColor: '#20BF6B',
    category: 'Agriculture',
    date: 'January 2024',
  },
  {
    id: 4,
    name: 'Sophia Lee',
    role: 'Healthcare Director',
    company: 'Modern Medical Center',
    content:
      'Their healthcare IoT solutions have significantly improved our patient monitoring capabilities and operational efficiency.',
    rating: 5,
    AvatarComponent: SophiaAvatar,
    avatarBgColor: '#FD79A8',
    category: 'Healthcare',
    date: 'March 2024',
  },
]

const categories = [
  'All',
  'Industrial IoT',
  'Smart City',
  'Agriculture',
  'Healthcare',
]

const categoryColors = {
  'Industrial IoT': '#6C5CE7',
  'Smart City': '#FF7675',
  Agriculture: '#20BF6B',
  Healthcare: '#FD79A8',
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      layoutId={`review-${review.id}`}
      key={review.id}
      className='bg-white rounded-2xl shadow-lg overflow-hidden transform-gpu relative group'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px -20px rgba(0,0,0,0.2)',
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient Border */}
      <div
        className='absolute inset-0 bg-gradient-to-br from-[#0984E3] via-[#00B894] to-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        style={{ padding: '2px' }}
      >
        <div className='absolute inset-0 bg-white rounded-2xl' />
      </div>

      <div className='p-8 relative'>
        {/* Quote Icon */}
        <motion.div
          className='absolute top-6 right-6 text-6xl font-serif text-gray-100'
          animate={{
            rotate: isHovered ? [0, -5, 5, -5, 0] : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          "
        </motion.div>

        <div className='flex items-center gap-4 mb-6 relative'>
          <motion.div
            className='w-16 h-16 rounded-full overflow-hidden relative'
            style={{ backgroundColor: review.avatarBgColor }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <review.AvatarComponent className='w-full h-full' />
            <motion.div
              className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'
              animate={{ opacity: isHovered ? 0.3 : 0.2 }}
            />
          </motion.div>
          <div>
            <motion.h3
              className='text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'
              animate={{ y: isHovered ? -2 : 0 }}
            >
              {review.name}
            </motion.h3>
            <motion.p
              className='text-gray-600 text-sm'
              animate={{ y: isHovered ? -1 : 0, transition: { delay: 0.05 } }}
            >
              {review.role}
            </motion.p>
            <motion.p
              className='text-[#0984E3] font-medium text-sm'
              animate={{ y: isHovered ? 0 : 0, transition: { delay: 0.1 } }}
            >
              {review.company}
            </motion.p>
          </div>
        </div>

        <motion.div
          className='flex gap-1 mb-4'
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {Array.from({ length: review.rating }).map((_, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -180 },
                visible: { opacity: 1, scale: 1, rotate: 0 },
              }}
              whileHover={{ scale: 1.2, rotate: 180 }}
            >
              <StarIcon className='w-5 h-5 text-yellow-400' />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className='text-gray-600 leading-relaxed mb-4'
          animate={{
            opacity: isHovered ? 0.9 : 0.8,
            y: isHovered ? -2 : 0,
          }}
        >
          {review.content}
        </motion.p>

        <motion.div
          className='flex items-center justify-between mt-6 pt-4 border-t border-gray-100'
          animate={{ y: isHovered ? 2 : 0 }}
        >
          <motion.span
            className='inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors'
            style={{
              backgroundColor: `${
                categoryColors[review.category as keyof typeof categoryColors]
              }20`,
              color:
                categoryColors[review.category as keyof typeof categoryColors],
            }}
            whileHover={{ scale: 1.05 }}
          >
            {review.category}
          </motion.span>
          <span className='text-sm text-gray-400'>{review.date}</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ReviewSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isInView, setIsInView] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [filteredReviews, setFilteredReviews] = useState<Review[]>([])

  useEffect(() => {
    setIsClient(true)
    // Filter reviews based on selected category
    setFilteredReviews(
      reviews.filter((review) =>
        selectedCategory === 'All' ? true : review.category === selectedCategory
      )
    )
  }, [selectedCategory])

  return (
    <section className='py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5' />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50' />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className='absolute -left-32 top-1/4 w-96 h-96 bg-[#0984E3] rounded-full filter blur-[120px] opacity-10'
        animate={{
          x: [-20, 20],
          y: [-20, 20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className='absolute -right-32 bottom-1/4 w-96 h-96 bg-[#00B894] rounded-full filter blur-[120px] opacity-10'
        animate={{
          x: [20, -20],
          y: [20, -20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className='container mx-auto px-4 relative'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center space-x-2 text-[#2D3436] text-sm font-medium mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm'
          >
            <motion.span
              className='flex h-2 w-2 rounded-full bg-[#0984E3]'
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className='tracking-wider uppercase'>Client Reviews</span>
          </motion.div>

          <motion.h2
            className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D3436] via-[#0984E3] to-[#2D3436] bg-clip-text text-transparent mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className='text-xl text-gray-600'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how our IoT solutions are transforming businesses across
            industries
          </motion.p>
        </div>

        <motion.div
          className='flex justify-center gap-3 mb-12 flex-wrap'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#0984E3] to-[#00B894] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#0984E3]/30'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Only render AnimatePresence on client-side */}
        {isClient ? (
          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto'
            layout
          >
            <AnimatePresence mode='wait'>
              {filteredReviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className='bg-white rounded-2xl shadow-lg overflow-hidden relative'
              >
                <div className='p-8'>
                  <div className='flex items-center gap-4 mb-6'>
                    <div
                      className='w-16 h-16 rounded-full overflow-hidden relative'
                      style={{ backgroundColor: review.avatarBgColor }}
                    >
                      <review.AvatarComponent className='w-full h-full' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-gray-900'>
                        {review.name}
                      </h3>
                      <p className='text-gray-600 text-sm'>{review.role}</p>
                      <p className='text-[#0984E3] font-medium text-sm'>
                        {review.company}
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    {review.content}
                  </p>
                  <div className='flex items-center justify-between mt-6 pt-4 border-t border-gray-100'>
                    <span
                      className='inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium'
                      style={{
                        backgroundColor: `${
                          categoryColors[
                            review.category as keyof typeof categoryColors
                          ]
                        }20`,
                        color:
                          categoryColors[
                            review.category as keyof typeof categoryColors
                          ],
                      }}
                    >
                      {review.category}
                    </span>
                    <span className='text-sm text-gray-400'>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
