'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: (
        <svg
          className='w-4 h-4 mr-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />
        </svg>
      ),
    },
    {
      label: 'IoT Solutions',
      href: '/services',
      icon: (
        <svg
          className='w-4 h-4 mr-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
          />
        </svg>
      ),
    },
    // {
    //   label: 'Enterprise IoT',
    //   href: '/enterprise',
    //   icon: (
    //     <svg
    //       className='w-4 h-4 mr-1'
    //       fill='none'
    //       stroke='currentColor'
    //       viewBox='0 0 24 24'
    //     >
    //       <path
    //         strokeLinecap='round'
    //         strokeLinejoin='round'
    //         strokeWidth={2}
    //         d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    //       />
    //     </svg>
    //   ),
    // },
    {
      label: 'Use Cases',
      href: '/portfolio',
      icon: (
        <svg
          className='w-4 h-4 mr-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: (
        <svg
          className='w-4 h-4 mr-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
          />
        </svg>
      ),
    },
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Animation variants
  const logoVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 },
    },
  }

  const connectionVariants = {
    animate: {
      opacity: [0, 1, 0],
      transition: { repeat: Infinity, duration: 1.5 },
    },
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md py-3 shadow-lg'
          : 'bg-[#0F172A]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between w-full'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2 group'>
            <motion.div
              className='relative w-12 h-12'
              whileHover='hover'
              variants={logoVariants}
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

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-1'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
                {pathname === item.href && (
                  <span className='ml-2 flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse'></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className='flex items-center space-x-6'>
            {/* <div className='hidden sm:flex items-center space-x-3'>
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
            </div> */}
            <Link
              href='/get-started'
              className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 flex items-center space-x-2 group'
            >
              <span>IoT Dashboard</span>
              <svg
                className='w-4 h-4 transform group-hover:translate-x-0.5 transition-transform'
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
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white focus:outline-none'
            onClick={toggleMobileMenu}
            aria-label='Toggle mobile menu'
          >
            <div className='relative w-6 h-6'>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-0'
                    : '-translate-y-2'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ${
                  isMobileMenuOpen
                    ? '-rotate-45 translate-y-0'
                    : 'translate-y-2'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-[500px] opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className='bg-[#0F172A]/95 backdrop-blur-md rounded-xl p-4 border border-indigo-500/20'>
            <nav className='flex flex-col space-y-2'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className='flex justify-center space-x-4 mt-6 pt-6 border-t border-white/10'>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white/70 hover:text-indigo-400 transition-colors duration-200 p-2'
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <Link
              href='/get-started'
              className='mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium px-5 py-3 rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 flex items-center justify-center space-x-2 w-full'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>IoT Dashboard</span>
              <svg
                className='w-4 h-4'
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
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
