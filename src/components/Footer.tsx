'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email')
      return
    }

    setStatus('loading')
    setMessage('Subscribing...')

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'IoT Solutions', href: '/services' },
    { label: 'Enterprise IoT', href: '/enterprise' },
    { label: 'Use Cases', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    {
      href: 'https://github.com',
      label: 'GitHub',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
        </svg>
      ),
    },
    {
      href: 'https://twitter.com',
      label: 'Twitter',
      icon: (
        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
        </svg>
      ),
    },
  ]

  // Animation variants
  const connectionVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: { repeat: Infinity, duration: 1.5 },
    },
  }

  return (
    <footer className='bg-[#0F172A] mt-20'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 mb-8'>
          {/* Brand Section */}
          <div className='md:col-span-4'>
            <Link href='/' className='flex items-center space-x-2 group'>
              <motion.div
                className='relative w-12 h-12'
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {/* Circuit board pattern background */}
                <div className='absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden'>
                  <div className='absolute inset-0 opacity-30'>
                    <svg
                      width='100%'
                      height='100%'
                      viewBox='0 0 100 100'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10,30 L90,30'
                        stroke='white'
                        strokeWidth='1'
                        fill='none'
                      />
                      <path
                        d='M10,50 L90,50'
                        stroke='white'
                        strokeWidth='1'
                        fill='none'
                      />
                      <path
                        d='M10,70 L90,70'
                        stroke='white'
                        strokeWidth='1'
                        fill='none'
                      />
                      <path
                        d='M30,10 L30,90'
                        stroke='white'
                        strokeWidth='1'
                        fill='none'
                      />
                      <path
                        d='M50,10 L50,90'
                        stroke='white'
                        strokeWidth='1'
                        fill='none'
                      />
                      <path
                        d='M70,10 L70,90'
                        stroke='white'
                        strokeWidth='1'
                        fill='none'
                      />
                      <circle cx='30' cy='30' r='3' fill='white' />
                      <circle cx='50' cy='50' r='3' fill='white' />
                      <circle cx='70' cy='70' r='3' fill='white' />
                      <circle cx='30' cy='70' r='3' fill='white' />
                      <circle cx='70' cy='30' r='3' fill='white' />
                    </svg>
                  </div>
                </div>

                {/* Animated connection lines */}
                <motion.div
                  className='absolute inset-0 opacity-70'
                  variants={connectionVariants}
                  animate='animate'
                >
                  <svg
                    width='100%'
                    height='100%'
                    viewBox='0 0 100 100'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M30,30 L70,70'
                      stroke='white'
                      strokeWidth='2'
                      fill='none'
                    />
                    <path
                      d='M70,30 L30,70'
                      stroke='white'
                      strokeWidth='2'
                      fill='none'
                    />
                  </svg>
                </motion.div>

                {/* IoT icon */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-xl font-bold text-white'>IoT</span>
                </div>
              </motion.div>

              <div className='flex flex-col'>
                <span className='text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'>
                  IoT-X
                </span>
                <span className='text-xs text-white/70'>
                  Enterprise Solutions
                </span>
              </div>
            </Link>

            <p className='mt-4 text-white/70 max-w-md'>
              Connecting the physical world to digital experiences through
              innovative IoT solutions for enterprises and smart environments.
            </p>

            <div className='flex space-x-4 mt-6'>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/70 hover:text-indigo-400 transition-colors duration-200'
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className='md:col-span-3 md:ml-auto'>
            <h3 className='text-lg font-bold text-white mb-4'>Navigation</h3>
            <ul className='space-y-2'>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-white/70 hover:text-indigo-400 transition-colors duration-200 flex items-center'
                  >
                    <svg
                      className='w-3 h-3 mr-2 text-indigo-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className='md:col-span-2'>
            <h3 className='text-lg font-bold text-white mb-4'>Resources</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/blog'
                  className='text-white/70 hover:text-indigo-400 transition-colors duration-200 flex items-center'
                >
                  <svg
                    className='w-3 h-3 mr-2 text-indigo-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/documentation'
                  className='text-white/70 hover:text-indigo-400 transition-colors duration-200 flex items-center'
                >
                  <svg
                    className='w-3 h-3 mr-2 text-indigo-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/case-studies'
                  className='text-white/70 hover:text-indigo-400 transition-colors duration-200 flex items-center'
                >
                  <svg
                    className='w-3 h-3 mr-2 text-indigo-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  <span>Case Studies</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-white/70 hover:text-indigo-400 transition-colors duration-200 flex items-center'
                >
                  <svg
                    className='w-3 h-3 mr-2 text-indigo-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                  <span>FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='md:col-span-3'>
            <h3 className='text-lg font-bold text-white mb-4'>Stay Updated</h3>
            <p className='text-sm text-white/70 mb-4'>
              Subscribe to receive the latest IoT insights and updates.
            </p>
            <form onSubmit={handleSubmit} className='mt-4'>
              <div className='flex flex-col space-y-3'>
                <div className='relative'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className={`w-full px-4 py-2 bg-white/10 border ${
                      status === 'error'
                        ? 'border-red-500'
                        : 'border-indigo-500/30'
                    } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                  />
                  {status === 'error' && (
                    <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                      <svg
                        className='w-5 h-5 text-red-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                  )}
                  {status === 'success' && (
                    <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                      <svg
                        className='w-5 h-5 text-green-500'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {message && (
                  <p
                    className={`text-sm ${
                      status === 'error'
                        ? 'text-red-500'
                        : status === 'success'
                        ? 'text-green-500'
                        : 'text-white/70'
                    }`}
                  >
                    {message}
                  </p>
                )}
                <button
                  type='submit'
                  disabled={status === 'loading'}
                  className={`${
                    status === 'loading'
                      ? 'bg-indigo-700/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:shadow-indigo-500/30'
                  } text-white font-medium px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center`}
                >
                  {status === 'loading' ? (
                    <svg
                      className='animate-spin h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  ) : (
                    <>
                      Subscribe
                      <svg
                        className='w-4 h-4 ml-2 transform group-hover:translate-x-0.5 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M13 7l5 5m0 0l-5 5m5-5H6'
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-white/10 pt-8 mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-white/50 text-sm mb-4 md:mb-0'>
              © {new Date().getFullYear()} IoT-X. All rights reserved.
            </p>
            <div className='flex space-x-6 text-sm'>
              <Link
                href='/privacy'
                className='text-white/50 hover:text-indigo-400 transition-colors duration-200'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                className='text-white/50 hover:text-indigo-400 transition-colors duration-200'
              >
                Terms of Service
              </Link>
              <Link
                href='/cookies'
                className='text-white/50 hover:text-indigo-400 transition-colors duration-200'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
