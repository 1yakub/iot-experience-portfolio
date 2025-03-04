import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "Smart Home Automation",
    description: "Revolutionizing home living with IoT technology",
    image: "/images/portfolio-1.jpg",
    category: "Smart Home",
    year: "2024",
    stats: [
      { label: "Connected Devices", value: "500+" },
      { label: "Energy Savings", value: "40%" },
      { label: "User Satisfaction", value: "98%" }
    ],
    color: "from-[#0984E3] to-[#00B894]"
  },
  {
    title: "Industrial IoT",
    description: "Optimizing manufacturing processes with real-time data",
    image: "/images/portfolio-2.jpg",
    category: "Industrial",
    year: "2023",
    stats: [
      { label: "Efficiency Increase", value: "35%" },
      { label: "Downtime Reduction", value: "60%" },
      { label: "ROI", value: "280%" }
    ],
    color: "from-[#00B894] to-[#38B2AC]"
  },
  {
    title: "Smart City Solutions",
    description: "Building connected communities for a better future",
    image: "/images/portfolio-3.jpg",
    category: "Smart City",
    year: "2023",
    stats: [
      { label: "Energy Savings", value: "45%" },
      { label: "Traffic Reduction", value: "30%" },
      { label: "Public Safety", value: "+65%" }
    ],
    color: "from-[#38B2AC] to-[#0984E3]"
  },
  {
    title: "Healthcare IoT",
    description: "Improving patient care with connected medical devices",
    image: "/images/portfolio-4.jpg",
    category: "Healthcare",
    year: "2024",
    stats: [
      { label: "Patient Monitoring", value: "24/7" },
      { label: "Response Time", value: "-40%" },
      { label: "Patient Satisfaction", value: "95%" }
    ],
    color: "from-[#0984E3] to-[#00B894]"
  },
  {
    title: "Agriculture IoT",
    description: "Smart farming solutions for sustainable agriculture",
    image: "/images/portfolio-5.jpg",
    category: "Agriculture",
    year: "2023",
    stats: [
      { label: "Water Savings", value: "50%" },
      { label: "Yield Increase", value: "35%" },
      { label: "Resource Efficiency", value: "+45%" }
    ],
    color: "from-[#00B894] to-[#38B2AC]"
  },
  {
    title: "Retail IoT",
    description: "Enhancing shopping experience with smart retail solutions",
    image: "/images/portfolio-6.jpg",
    category: "Retail",
    year: "2024",
    stats: [
      { label: "Customer Engagement", value: "+75%" },
      { label: "Sales Increase", value: "40%" },
      { label: "Inventory Accuracy", value: "99%" }
    ],
    color: "from-[#38B2AC] to-[#0984E3]"
  }
]

interface ProjectsGridProps {
  activeCategory: string
}

export default function ProjectsGrid({ activeCategory }: ProjectsGridProps) {
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 