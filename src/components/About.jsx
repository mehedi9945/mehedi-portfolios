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
          
          <div className="grid md:grid-cols-2 gap-12 text-muted-foreground text-lg leading-relaxed">
            <div className="space-y-6">
              <p>
                My programming journey started back in high school when I first discovered the magic of turning lines of code into interactive web pages. Since then, I've been completely hooked on web development.
              </p>
              <p>
                I enjoy creating software that bridges the gap between complex backend logic and intuitive, beautiful user interfaces. My goal is always to build applications that are scalable, accessible, and deliver exceptional user experiences.
              </p>
            </div>
            
            <div className="space-y-6">
              <p>
                When I'm not in front of a computer screen, you can usually find me out exploring nature, painting, or trying out new coffee shops in the city. I believe that having hobbies outside of tech helps keep my mind fresh and creative.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
