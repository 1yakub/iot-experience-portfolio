'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const enterpriseSolutions = [
  {
    title: 'Industrial IoT Automation',
    description:
      'Transform manufacturing operations with end-to-end automation, predictive maintenance, and real-time production analytics.',
    icon: '🏭',
    color: 'from-[#0984E3] to-[#00B894]',
    metrics: [
      { label: 'Production Efficiency Increase', value: '37%' },
      { label: 'Maintenance Cost Reduction', value: '42%' },
      { label: 'Average ROI Timeline', value: '9 months' },
    ],
    caseStudy: {
      company: 'Global Manufacturing Corp',
      challenge:
        'Aging equipment causing unplanned downtime and quality issues',
      solution: 'Deployed 1,200+ IoT sensors with predictive maintenance AI',
      result:
        'Reduced downtime by 63% and improved OEE by 28% within first year',
    },
  },
  {
    title: 'Smart Building Management',
    description:
      'Optimize energy usage, enhance security, and improve occupant comfort with integrated building management systems.',
    icon: '🏢',
    color: 'from-[#6C5CE7] to-[#FD79A8]',
    metrics: [
      { label: 'Energy Consumption Reduction', value: '31%' },
      { label: 'Operational Cost Savings', value: '26%' },
      { label: 'Average ROI Timeline', value: '14 months' },
    ],
    caseStudy: {
      company: 'Horizon Properties',
      challenge:
        'High energy costs and inefficient space utilization across 12 commercial buildings',
      solution:
        'Implemented IoT-enabled HVAC, lighting, and occupancy monitoring',
      result:
        'Saved $2.4M annually in energy costs and improved tenant satisfaction by 47%',
    },
  },
  {
    title: 'Supply Chain Visibility',
    description:
      'Gain end-to-end visibility with real-time tracking, condition monitoring, and predictive analytics for global supply chains.',
    icon: '🚚',
    color: 'from-[#FF7675] to-[#20BF6B]',
    metrics: [
      { label: 'Inventory Accuracy Improvement', value: '45%' },
      { label: 'Logistics Cost Reduction', value: '23%' },
      { label: 'Average ROI Timeline', value: '11 months' },
    ],
    caseStudy: {
      company: 'PharmaLogistics International',
      challenge:
        'Limited visibility and temperature excursions in pharmaceutical cold chain',
      solution:
        'Deployed IoT tracking and environmental monitoring across 40 countries',
      result:
        'Reduced product loss by 92% and improved delivery time accuracy to 99.8%',
    },
  },
]

const EnterpriseIoTSection = () => {
  const [activeSolution, setActiveSolution] = useState(0)

  return (
    <section className='py-20 bg-[#F5F6FA] relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-grid-pattern opacity-5' />
        <div className='absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white/0' />
      </div>

      <div className='container mx-auto px-4 relative'>
        <motion.div
          className='max-w-3xl mx-auto text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-flex items-center space-x-2 text-[#2D3436] text-sm font-medium mb-4 bg-white px-4 py-2 rounded-full border-2 border-[#2D3436]'
          >
            <span className='flex h-2 w-2 rounded-full bg-[#00B894] animate-pulse'></span>
            <span className='tracking-wider uppercase'>
              Enterprise Solutions
            </span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enterprise-Grade IoT Solutions
          </motion.h2>
          <motion.p
            className='text-xl text-[#2D3436]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Scalable, secure, and ROI-driven IoT solutions designed for
            enterprise digital transformation
          </motion.p>
        </motion.div>

        {/* Solution Tabs */}
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {enterpriseSolutions.map((solution, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeSolution === index
                    ? `bg-gradient-to-r ${solution.color} text-white shadow-md`
                    : 'bg-white text-[#2D3436] hover:bg-gray-100'
                }`}
                onClick={() => setActiveSolution(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <span className='mr-2'>{solution.icon}</span>
                {solution.title}
              </motion.button>
            ))}
          </div>

          {/* Active Solution Content */}
          <motion.div
            key={activeSolution}
            className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`bg-gradient-to-r ${enterpriseSolutions[activeSolution].color} p-8 text-white`}
            >
              <div className='flex items-center space-x-4'>
                <div className='text-5xl'>
                  {enterpriseSolutions[activeSolution].icon}
                </div>
                <div>
                  <h3 className='text-3xl font-bold'>
                    {enterpriseSolutions[activeSolution].title}
                  </h3>
                  <p className='text-white/80 mt-2'>
                    {enterpriseSolutions[activeSolution].description}
                  </p>
                </div>
              </div>
            </div>

            <div className='p-8'>
              {/* ROI Metrics */}
              <div className='mb-12'>
                <h4 className='text-xl font-semibold mb-6 text-[#2D3436]'>
                  Key Performance Metrics
                </h4>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {enterpriseSolutions[activeSolution].metrics.map(
                    (metric, index) => (
                      <motion.div
                        key={index}
                        className='bg-gray-50 p-6 rounded-xl border border-gray-100 text-center'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <div className='text-3xl font-bold bg-gradient-to-r from-[#0984E3] to-[#00B894] bg-clip-text text-transparent mb-2'>
                          {metric.value}
                        </div>
                        <div className='text-gray-600'>{metric.label}</div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Case Study */}
              <div>
                <h4 className='text-xl font-semibold mb-6 text-[#2D3436] flex items-center'>
                  <span className='mr-2'>Case Study:</span>
                  <span className='text-[#0984E3]'>
                    {enterpriseSolutions[activeSolution].caseStudy.company}
                  </span>
                </h4>

                <div className='bg-gray-50 rounded-xl border border-gray-100 p-6'>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <motion.div
                      className='space-y-2'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h5 className='font-semibold text-[#2D3436]'>
                        Challenge
                      </h5>
                      <p className='text-gray-600'>
                        {
                          enterpriseSolutions[activeSolution].caseStudy
                            .challenge
                        }
                      </p>
                    </motion.div>
                    <motion.div
                      className='space-y-2'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h5 className='font-semibold text-[#2D3436]'>Solution</h5>
                      <p className='text-gray-600'>
                        {enterpriseSolutions[activeSolution].caseStudy.solution}
                      </p>
                    </motion.div>
                    <motion.div
                      className='space-y-2'
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h5 className='font-semibold text-[#2D3436]'>Results</h5>
                      <p className='text-gray-600'>
                        {enterpriseSolutions[activeSolution].caseStudy.result}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className='bg-gray-50 p-6 border-t border-gray-200 flex flex-wrap justify-between items-center'>
              <div className='text-[#2D3436] font-medium'>
                Ready to transform your enterprise with IoT?
              </div>
              <Link
                href='/contact'
                className='bg-gradient-to-r from-[#0984E3] to-[#00B894] text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-all hover:scale-105 mt-4 sm:mt-0'
              >
                Schedule Enterprise Consultation
              </Link>
            </div>
          </motion.div>

          {/* Enterprise Capabilities */}
          <motion.div
            className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                title: 'Scalable Architecture',
                description:
                  'Support for millions of connected devices with horizontal scaling and multi-region deployment',
                icon: '📈',
              },
              {
                title: 'Enterprise Integration',
                description:
                  'Seamless integration with ERP, CRM, MES, and other enterprise systems',
                icon: '🔄',
              },
              {
                title: 'Regulatory Compliance',
                description:
                  'Built-in compliance with GDPR, HIPAA, ISO 27001, and industry-specific regulations',
                icon: '✅',
              },
              {
                title: '24/7 Enterprise Support',
                description:
                  'Dedicated support team with guaranteed SLAs and rapid incident response',
                icon: '🛡️',
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className='text-3xl mb-4'>{capability.icon}</div>
                <h3 className='text-lg font-bold text-[#2D3436] mb-2'>
                  {capability.title}
                </h3>
                <p className='text-gray-600 text-sm'>
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseIoTSection
