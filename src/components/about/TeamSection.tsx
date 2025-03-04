import { motion } from 'framer-motion'
import CTAButton from '@/components/shared/CTAButton'
import { SarahAvatar, MichaelAvatar, EmmaAvatar } from '@/components/icons/avatars'

interface TeamMember {
  name: string
  role: string
  bio: string
  Avatar: React.ComponentType<{ className?: string }>
}

export default function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in IoT and smart technology, Sarah leads our vision for a more connected future.',
      Avatar: SarahAvatar
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'A pioneer in IoT architecture, Michael brings extensive experience in developing scalable IoT solutions.',
      Avatar: MichaelAvatar
    },
    {
      name: 'Emma Williams',
      role: 'Head of Innovation',
      bio: 'Emma leads our R&D initiatives, focusing on emerging technologies and innovative IoT applications.',
      Avatar: EmmaAvatar
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">
            Meet the innovators and problem solvers behind our IoT solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative h-64">
                <member.Avatar className="w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-[#0984E3] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton 
            href="/contact" 
            variant="primary"
            size="lg"
            icon="chat"
          >
            Join Our Team
          </CTAButton>
        </div>
      </div>
    </section>
  )
} 