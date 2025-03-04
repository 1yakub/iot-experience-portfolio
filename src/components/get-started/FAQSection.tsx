import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "How long does the implementation process take?",
    answer: "The implementation timeline varies depending on your project's scope and complexity. Typically, our process takes 8-15 weeks from initial consultation to full deployment. We'll provide you with a detailed timeline during the planning phase."
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer: "We offer comprehensive post-deployment support including 24/7 technical assistance, regular system maintenance, performance monitoring, and continuous optimization. Our team remains available to help you maximize the value of your IoT solution."
  },
  {
    question: "Do you provide training for our team?",
    answer: "Yes, we provide thorough training for your team as part of the implementation process. This includes hands-on system training, documentation, and best practices for managing your IoT infrastructure."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes, our IoT solutions are designed to integrate seamlessly with your existing systems and infrastructure. We'll assess your current setup during the planning phase and ensure smooth integration with your workflows."
  },
  {
    question: "What security measures are in place?",
    answer: "Security is our top priority. We implement industry-leading security protocols, including end-to-end encryption, secure authentication, regular security audits, and compliance with relevant data protection regulations."
  },
  {
    question: "What are the maintenance requirements?",
    answer: "Our IoT solutions are designed for minimal maintenance. We provide regular system updates, proactive monitoring, and preventive maintenance to ensure optimal performance. Our support team handles most maintenance tasks remotely."
  }
]

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b border-gray-200 last:border-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="text-lg font-semibold text-[#2D3436] pr-8">{faq.question}</span>
        <motion.div
          className="w-6 h-6 flex-shrink-0 rounded-full bg-[#0984E3] text-white flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12M6 12h12"
            />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 text-[#2D3436] text-sm font-medium mb-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 shadow-sm"
          >
            <motion.span 
              className="flex h-2 w-2 rounded-full bg-[#0984E3]"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="tracking-wider uppercase">FAQ</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2D3436] via-[#0984E3] to-[#2D3436] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Common Questions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find answers to frequently asked questions about our IoT implementation process
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 