import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="pt-24 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
            <div className="h-px bg-foreground/20 flex-1"></div>
          </div>
          
          <div className="text-muted-foreground text-lg leading-relaxed text-justify">
            <div className="space-y-6">
              <p>
                I am a passionate web developer focused on building modern, responsive, and user-friendly web applications. I specialize in React and Next.js for frontend development and enjoy creating smooth and interactive user experiences. I also work with Node.js, Express, and MongoDB for backend development. I am continuously learning and improving my skills through hands-on projects and real-world practice. I love turning ideas into functional and visually appealing web solutions. Problem-solving and writing clean code are my key strengths. My goal is to grow as a full-stack developer and contribute to impactful digital products. I am always open to learning new technologies and improving my development workflow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
