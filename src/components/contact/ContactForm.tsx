'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(['iot', 'automation', 'consulting', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] p-8"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
            <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('name')}
                  className="w-full px-4 py-3 border-2 border-gray-900 focus:border-[#0984E3] focus:ring-0 transition-colors bg-white"
                  placeholder="John Doe"
                />
                <AnimatePresence mode="wait">
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-900 focus:border-[#0984E3] focus:ring-0 transition-colors bg-white"
                  placeholder="john@example.com"
                />
                <AnimatePresence mode="wait">
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1 text-sm text-red-500"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="company">
                  Company
                </label>
                <input
                  {...register('company')}
                  className="w-full px-4 py-3 border-2 border-gray-900 focus:border-[#0984E3] focus:ring-0 transition-colors bg-white"
                  placeholder="Your Company"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  {...register('phone')}
                  className="w-full px-4 py-3 border-2 border-gray-900 focus:border-[#0984E3] focus:ring-0 transition-colors bg-white"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Project Type Field */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="projectType">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                {...register('projectType')}
                className="w-full px-4 py-3 border-2 border-gray-900 focus:border-[#0984E3] focus:ring-0 transition-colors bg-white"
              >
                <option value="iot">IoT Development</option>
                <option value="automation">Automation Solutions</option>
                <option value="consulting">Technical Consulting</option>
                <option value="other">Other</option>
              </select>
              <AnimatePresence mode="wait">
                {errors.projectType && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.projectType.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-900 focus:border-[#0984E3] focus:ring-0 transition-colors bg-white"
                placeholder="Tell us about your project..."
              />
              <AnimatePresence mode="wait">
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-500"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-[#0984E3] text-white font-bold border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-50 border-2 border-green-500 text-green-700"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-50 border-2 border-red-500 text-red-700"
                >
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
} 