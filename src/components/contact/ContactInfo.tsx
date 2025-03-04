'use client'

import { motion } from 'framer-motion'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  GlobeAltIcon, 
  MapPinIcon, 
  ClockIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

interface ContactMethod {
  icon: React.ReactNode
  title: string
  value: string
  link?: string
  color: string
  description: string
}

interface Office {
  city: string
  country: string
  address: string
  phone: string
  email: string
  timezone: string
  hours: string
  image: string
}

export default function ContactInfo() {
  const contactMethods: ContactMethod[] = [
    {
      icon: <PhoneIcon className="w-7 h-7" />,
      title: 'Phone Support',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: '#0984E3',
      description: '24/7 support for urgent inquiries'
    },
    {
      icon: <EnvelopeIcon className="w-7 h-7" />,
      title: 'Email Us',
      value: 'contact@iotcompany.com',
      link: 'mailto:contact@iotcompany.com',
      color: '#00B894',
      description: 'Response within 24 hours'
    },
    {
      icon: <GlobeAltIcon className="w-7 h-7" />,
      title: 'Visit Website',
      value: 'www.iotcompany.com',
      link: 'https://www.iotcompany.com',
      color: '#6C5CE7',
      description: 'Explore our services & solutions'
    }
  ];

  const offices: Office[] = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@iotcompany.com',
      timezone: 'PST (UTC-8)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Smart Road, London, UK SW1A 1AA',
      phone: '+44 20 7123 4567',
      email: 'london@iotcompany.com',
      timezone: 'GMT (UTC+0)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '456 Innovation Ave, Singapore 018956',
      phone: '+65 6789 0123',
      email: 'sg@iotcompany.com',
      timezone: 'SGT (UTC+8)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-16 p-4 max-w-7xl mx-auto">
      {/* Contact Methods */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {contactMethods.map((method) => (
          <motion.a
            key={method.title}
            href={method.link}
            target={method.title === 'Visit Website' ? '_blank' : undefined}
            rel={method.title === 'Visit Website' ? 'noopener noreferrer' : undefined}
            variants={itemVariants}
            className="group relative overflow-hidden bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            whileHover={{ scale: 0.99 }}
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div 
                  className="p-3 border-2 border-gray-900 transform -rotate-3"
                  style={{ backgroundColor: `${method.color}30` }}
                >
                  <div style={{ color: method.color }}>{method.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0984E3] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
                  <p className="text-gray-800 font-bold">{method.value}</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 translate-y-[-50%] rotate-12 bg-[#FFE156] opacity-20" />
          </motion.a>
        ))}
      </motion.div>

      {/* Global Offices */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]"
      >
        <div className="p-6 bg-gradient-to-r from-[#0984E3] to-[#00B894] relative overflow-hidden">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              opacity: 0.1
            }}
          />
          <div className="relative flex items-center space-x-3">
            <div className="p-2 bg-white/10 border-2 border-white/50 backdrop-blur-sm">
              <BuildingOffice2Icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Global Offices</h2>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 hover:bg-gray-50/80 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#0984E3]/10 border-2 border-gray-900 transform -rotate-3">
                      <MapPinIcon className="w-6 h-6 text-[#0984E3]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {office.city}
                      </h3>
                      <p className="text-gray-600 font-medium">{office.country}</p>
                      <p className="text-gray-500 mt-2">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#00B894]/10 border-2 border-gray-900 transform rotate-3">
                      <ClockIcon className="w-6 h-6 text-[#00B894]" />
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{office.hours}</p>
                      <p className="text-gray-500">{office.timezone}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center space-x-2 text-gray-900 hover:text-[#0984E3] transition-colors group"
                    >
                      <div className="p-2 bg-[#0984E3]/10 border-2 border-gray-900 transform -rotate-2 group-hover:rotate-0 transition-transform">
                        <PhoneIcon className="w-5 h-5 text-[#0984E3]" />
                      </div>
                      <span className="font-medium">{office.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${office.email}`}
                      className="flex items-center space-x-2 text-gray-900 hover:text-[#00B894] transition-colors group"
                    >
                      <div className="p-2 bg-[#00B894]/10 border-2 border-gray-900 transform rotate-2 group-hover:rotate-0 transition-transform">
                        <EnvelopeIcon className="w-5 h-5 text-[#00B894]" />
                      </div>
                      <span className="font-medium">{office.email}</span>
                    </a>
                  </div>
                </div>

                <div className="relative h-48 md:h-full border-2 border-gray-900 overflow-hidden transform hover:rotate-1 transition-transform duration-300">
                  <img 
                    src={office.image} 
                    alt={`${office.city} office`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 