'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const useCases = [
  {
    id: 'industrial',
    title: 'Industrial IoT',
    description:
      'Transform manufacturing with predictive maintenance, asset tracking, and real-time production monitoring.',
    icon: '🏭',
    color: 'from-amber-500 to-orange-600',
    benefits: [
      {
        title: 'Downtime Reduction',
        value: '73%',
        description: 'Predictive maintenance reduces unplanned downtime',
      },
      {
        title: 'Operational Efficiency',
        value: '31%',
        description: 'Improved through real-time monitoring and analytics',
      },
      {
        title: 'Energy Savings',
        value: '28%',
        description: 'Smart energy management and optimization',
      },
    ],
    features: [
      'Predictive maintenance',
      'Asset tracking and management',
      'Production line monitoring',
      'Quality control automation',
      'Environmental monitoring',
      'Worker safety systems',
    ],
    caseStudy: {
      company: 'Global Manufacturing Corp',
      challenge:
        'Frequent equipment failures causing production delays and high maintenance costs.',
      solution:
        'Implemented IoT sensors across 200+ machines with predictive analytics and real-time monitoring.',
      results:
        'Reduced downtime by 73%, increased production efficiency by 31%, and achieved ROI within 8 months.',
    },
  },
  {
    id: 'healthcare',
    title: 'Healthcare IoT',
    description:
      'Enhance patient care with remote monitoring, smart medical devices, and healthcare facility optimization.',
    icon: '🏥',
    color: 'from-blue-500 to-cyan-500',
    benefits: [
      {
        title: 'Patient Monitoring',
        value: '24/7',
        description: 'Continuous remote patient monitoring',
      },
      {
        title: 'Response Time',
        value: '62%',
        description: 'Faster emergency response with real-time alerts',
      },
      {
        title: 'Cost Reduction',
        value: '35%',
        description: 'Lower operational costs through automation',
      },
    ],
    features: [
      'Remote patient monitoring',
      'Medical asset tracking',
      'Medication management',
      'Environmental monitoring',
      'Staff and patient location',
      'Automated documentation',
    ],
    caseStudy: {
      company: 'Metropolitan Health Network',
      challenge:
        'Limited visibility into patient conditions between appointments and inefficient resource allocation.',
      solution:
        'Deployed remote monitoring devices for high-risk patients and asset tracking throughout facilities.',
      results:
        'Reduced readmissions by 42%, improved staff efficiency by 35%, and enhanced patient satisfaction scores by 28%.',
    },
  },
  {
    id: 'agriculture',
    title: 'Smart Agriculture',
    description:
      'Optimize farming operations with precision agriculture, livestock monitoring, and automated irrigation systems.',
    icon: '🌾',
    color: 'from-green-500 to-emerald-600',
    benefits: [
      {
        title: 'Water Usage',
        value: '30%',
        description: 'Reduction through precision irrigation',
      },
      {
        title: 'Crop Yield',
        value: '25%',
        description: 'Increased through optimized growing conditions',
      },
      {
        title: 'Resource Efficiency',
        value: '40%',
        description: 'More efficient use of fertilizers and pesticides',
      },
    ],
    features: [
      'Precision irrigation',
      'Soil condition monitoring',
      'Weather monitoring and forecasting',
      'Livestock tracking and health',
      'Crop health monitoring',
      'Automated greenhouse control',
    ],
    caseStudy: {
      company: 'Heartland Farms',
      challenge:
        'Unpredictable weather patterns and inefficient water usage affecting crop yields and profitability.',
      solution:
        'Implemented soil moisture sensors, weather stations, and automated irrigation across 5,000 acres.',
      results:
        'Reduced water consumption by 30%, increased crop yields by 25%, and lowered operational costs by 22%.',
    },
  },
  {
    id: 'cities',
    title: 'Smart Cities',
    description:
      'Create sustainable urban environments with intelligent infrastructure, traffic management, and public safety systems.',
    icon: '🏙️',
    color: 'from-purple-500 to-indigo-600',
    benefits: [
      {
        title: 'Traffic Congestion',
        value: '35%',
        description: 'Reduction through smart traffic management',
      },
      {
        title: 'Energy Consumption',
        value: '28%',
        description: 'Lower energy usage with smart lighting and buildings',
      },
      {
        title: 'Public Safety',
        value: '40%',
        description: 'Improvement in emergency response times',
      },
    ],
    features: [
      'Intelligent traffic management',
      'Smart street lighting',
      'Waste management optimization',
      'Air quality monitoring',
      'Public safety and security',
      'Smart parking solutions',
    ],
    caseStudy: {
      company: 'Metropolis City Council',
      challenge:
        'Growing urban population causing traffic congestion, high energy costs, and strained public services.',
      solution:
        'Deployed citywide IoT network with traffic sensors, smart lighting, and environmental monitoring.',
      results:
        'Reduced traffic congestion by 35%, lowered energy costs by 28%, and improved citizen satisfaction by 45%.',
    },
  },
  {
    id: 'retail',
    title: 'Retail IoT',
    description:
      'Revolutionize shopping experiences with inventory tracking, customer analytics, and automated checkout systems.',
    icon: '🛒',
    color: 'from-pink-500 to-rose-600',
    benefits: [
      {
        title: 'Inventory Accuracy',
        value: '99%',
        description: 'Near-perfect inventory tracking',
      },
      {
        title: 'Customer Insights',
        value: '3X',
        description: 'More detailed customer behavior data',
      },
      {
        title: 'Operational Costs',
        value: '22%',
        description: 'Reduction through automation',
      },
    ],
    features: [
      'Automated inventory management',
      'Customer behavior analytics',
      'Smart shelves and displays',
      'Personalized shopping experiences',
      'Supply chain optimization',
      'Loss prevention systems',
    ],
    caseStudy: {
      company: 'Global Retail Chain',
      challenge:
        'Inventory discrepancies, limited customer insights, and inefficient store operations affecting profitability.',
      solution:
        'Implemented RFID inventory tracking, in-store analytics, and automated checkout systems across 200 locations.',
      results:
        'Achieved 99% inventory accuracy, increased sales by 18% through personalized marketing, and reduced operational costs by 22%.',
    },
  },
  {
    id: 'energy',
    title: 'Energy Management',
    description:
      'Optimize energy production and consumption with smart grids, renewable energy integration, and demand response systems.',
    icon: '⚡',
    color: 'from-yellow-500 to-yellow-600',
    benefits: [
      {
        title: 'Grid Reliability',
        value: '45%',
        description: 'Improvement in power distribution reliability',
      },
      {
        title: 'Energy Efficiency',
        value: '32%',
        description: 'Increased efficiency in energy consumption',
      },
      {
        title: 'Renewable Integration',
        value: '60%',
        description: 'Better integration of renewable energy sources',
      },
    ],
    features: [
      'Smart grid management',
      'Demand response systems',
      'Renewable energy integration',
      'Energy consumption analytics',
      'Predictive maintenance for utilities',
      'Microgrid management',
    ],
    caseStudy: {
      company: 'Regional Utility Provider',
      challenge:
        'Aging infrastructure, increasing demand, and difficulty integrating renewable energy sources.',
      solution:
        'Deployed smart grid technology with advanced metering, demand response, and predictive maintenance.',
      results:
        'Improved grid reliability by 45%, reduced outages by 60%, and successfully integrated 40% renewable energy sources.',
    },
  },
]

const IoTUseCasesSection = () => {
  const [activeUseCase, setActiveUseCase] = useState(0)
  const [activeTab, setActiveTab] = useState('benefits') // 'benefits', 'features', 'caseStudy'

  return (
    <section className='py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
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
            className='inline-flex items-center space-x-2 text-white text-sm font-medium mb-4 bg-indigo-500/20 px-4 py-2 rounded-full border border-indigo-500/30'
          >
            <span className='flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse'></span>
            <span className='tracking-wider uppercase'>Industry Solutions</span>
          </motion.div>
          <motion.h2
            className='text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            IoT Solutions Across Industries
          </motion.h2>
          <motion.p
            className='text-xl text-white/80'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Discover how our IoT solutions are transforming operations and
            creating value in diverse industry sectors
          </motion.p>
        </motion.div>

        {/* Use Cases Selection */}
        <motion.div
          className='max-w-6xl mx-auto mb-12 flex flex-wrap justify-center gap-3'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {useCases.map((useCase, index) => (
            <motion.button
              key={useCase.id}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                activeUseCase === index
                  ? `bg-gradient-to-r ${useCase.color} text-white shadow-lg`
                  : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
              }`}
              onClick={() => setActiveUseCase(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span className='text-xl'>{useCase.icon}</span>
              <span>{useCase.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Use Case Details */}
        <motion.div
          className='max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          key={activeUseCase}
          layoutId='useCaseContainer'
        >
          {/* Header */}
          <div
            className={`bg-gradient-to-r ${useCases[activeUseCase].color} p-8`}
          >
            <div className='flex items-center space-x-4'>
              <div className='text-5xl'>{useCases[activeUseCase].icon}</div>
              <div>
                <h3 className='text-3xl font-bold text-white'>
                  {useCases[activeUseCase].title}
                </h3>
                <p className='text-white/90 mt-2 text-lg'>
                  {useCases[activeUseCase].description}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className='flex border-b border-white/10'>
            <button
              className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${
                activeTab === 'benefits'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setActiveTab('benefits')}
            >
              Key Benefits
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${
                activeTab === 'features'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium text-sm transition-colors ${
                activeTab === 'caseStudy'
                  ? 'text-white border-b-2 border-indigo-500'
                  : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setActiveTab('caseStudy')}
            >
              Case Study
            </button>
          </div>

          {/* Tab Content */}
          <div className='p-8'>
            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <motion.div
                className='grid grid-cols-1 md:grid-cols-3 gap-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {useCases[activeUseCase].benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className='bg-white/5 rounded-xl p-6 border border-white/10'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text text-transparent mb-2`}
                    >
                      {benefit.value}
                    </div>
                    <h4 className='text-lg font-semibold text-white mb-2'>
                      {benefit.title}
                    </h4>
                    <p className='text-white/70 text-sm'>
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <motion.div
                className='grid grid-cols-1 md:grid-cols-2 gap-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {useCases[activeUseCase].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className='flex items-start'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-r ${useCases[activeUseCase].color} flex items-center justify-center text-white font-bold mr-3 flex-shrink-0`}
                    >
                      {index + 1}
                    </div>
                    <div className='bg-white/5 rounded-lg p-4 border border-white/10 flex-1'>
                      <p className='text-white'>{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Case Study Tab */}
            {activeTab === 'caseStudy' && (
              <motion.div
                className='space-y-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Client
                  </h4>
                  <p className='text-white/80'>
                    {useCases[activeUseCase].caseStudy.company}
                  </p>
                </div>

                <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Challenge
                  </h4>
                  <p className='text-white/80'>
                    {useCases[activeUseCase].caseStudy.challenge}
                  </p>
                </div>

                <div className='bg-white/5 rounded-xl p-6 border border-white/10'>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Solution
                  </h4>
                  <p className='text-white/80'>
                    {useCases[activeUseCase].caseStudy.solution}
                  </p>
                </div>

                <div
                  className={`bg-gradient-to-r ${useCases[activeUseCase].color} rounded-xl p-6`}
                >
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Results
                  </h4>
                  <p className='text-white'>
                    {useCases[activeUseCase].caseStudy.results}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Industry Stats */}
        <motion.div
          className='mt-16 max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className='text-2xl font-bold text-white text-center mb-10'>
            IoT Market Growth
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {[
              {
                value: '75.4B',
                label: 'Connected IoT devices by 2025',
                icon: '📱',
              },
              { value: '$1.6T', label: 'IoT market size by 2025', icon: '💰' },
              {
                value: '127',
                label: 'New IoT devices connecting every second',
                icon: '⚡',
              },
              {
                value: '400%',
                label: 'IoT data growth rate year over year',
                icon: '📊',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className='text-3xl mb-4 flex justify-center'>
                  {stat.icon}
                </div>
                <div className='text-2xl font-bold text-white mb-2'>
                  {stat.value}
                </div>
                <p className='text-white/70 text-sm'>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className='px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Industry Solutions
          </motion.button>
          <p className='mt-4 text-white/50 text-sm'>
            Discover how our IoT solutions can transform your industry
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default IoTUseCasesSection
