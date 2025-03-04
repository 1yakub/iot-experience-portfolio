import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: ReactNode
  className?: string
  darkBg?: boolean
  icon?: 'arrow' | 'calendar' | 'chat' | 'explore'
}

const CTAButton = ({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  children, 
  className = '',
  darkBg = false,
  icon = 'arrow'
}: CTAButtonProps) => {
  const baseStyles = "neobrutalist group inline-flex items-center justify-center transition-all duration-300"
  
  const variantStyles = {
    primary: `bg-[#0984E3] border-[#2D3436] text-white hover:bg-[#0972C3] hover:scale-[1.02] hover:-translate-y-0.5`,
    secondary: `bg-white text-[#2D3436] border-[#2D3436] hover:bg-gray-50 hover:scale-[1.02] hover:-translate-y-0.5`,
    outline: `bg-transparent border-white text-white hover:bg-white/10 hover:scale-[1.02] hover:-translate-y-0.5`,
    gradient: `bg-gradient-to-r from-[#0984E3] to-[#00B894] text-white border-[#2D3436] hover:from-[#0972C3] hover:to-[#00A583] hover:scale-[1.02] hover:-translate-y-0.5`
  }

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-2",
    lg: "text-lg px-8 py-4 gap-3"
  }

  const widthStyle = fullWidth ? "w-full" : ""

  const icons = {
    arrow: (
      <motion.svg 
        className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'}`}
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M13 7l5 5m0 0l-5 5m5-5H6" 
        />
      </motion.svg>
    ),
    calendar: (
      <svg 
        className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} transform group-hover:translate-x-1 transition-transform`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    ),
    chat: (
      <svg 
        className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} transform group-hover:translate-x-1 transition-transform`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        />
      </svg>
    ),
    explore: (
      <svg 
        className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} transform group-hover:translate-x-1 transition-transform`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
        />
      </svg>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={href}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${widthStyle}
          ${className}
        `}
      >
        {children}
        {icons[icon]}
      </Link>
    </motion.div>
  )
}

export default CTAButton 