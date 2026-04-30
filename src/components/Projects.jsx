import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const projectsData = [
  {
    id: "e-commerce",
    title: "NextGen E-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "A full-stack e-commerce platform with real-time inventory and Stripe payments.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mehedi9945",
    challenges: "Handling real-time inventory updates during high-traffic sales events.",
    future: "Implementing AI-based product recommendations."
  },
  {
    id: "task-manager",
    title: "Kanban Task Manager",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "A drag-and-drop project management tool inspired by Trello.",
    stack: ["React", "Redux Toolkit", "Framer Motion", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mehedi9945",
    challenges: "Building a performant and bug-free drag-and-drop interface from scratch.",
    future: "Adding team collaboration features and real-time chat."
  },
  {
    id: "finance-dashboard",
    title: "Crypto Finance Dashboard",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Real-time cryptocurrency tracking dashboard with interactive charts.",
    stack: ["Vue 3", "Tailwind CSS", "Chart.js", "CoinGecko API"],
    liveLink: "https://example.com",
    githubLink: "https://github.com/mehedi9945",
    challenges: "Managing state for multiple WebSocket connections for real-time prices.",
    future: "Adding portfolio tracking and price alerts."
  }
]

export default function Projects() {
  return (
    <section id="projects" className="pt-24 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
            <div className="h-px bg-foreground/20 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-3xl glass overflow-hidden border border-foreground/5 hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  <Link 
                    to={`/project/${project.id}`}
                    className="flex items-center justify-between w-full p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors group/btn text-foreground font-medium"
                  >
                    View Details
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
