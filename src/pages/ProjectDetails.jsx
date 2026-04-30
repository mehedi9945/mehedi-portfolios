import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Github } from '../components/Icons'
import { projectsData } from '../components/Projects'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {project.stack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden mb-12 border border-foreground/10 glass">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary"></span>
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary"></span>
                  Challenges Faced
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary"></span>
                  Future Improvements
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.future}
                </p>
              </section>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-3xl glass border border-foreground/10">
                <h3 className="text-xl font-bold mb-6">Links</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                  >
                    View Live Site
                    <ExternalLink size={20} />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors"
                  >
                    Source Code
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
