import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Next.js"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "VS Code","Figma"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="pt-24 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">Skills</h2>
            <div className="h-px bg-foreground/20 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl glass border border-foreground/5 hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-6 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
