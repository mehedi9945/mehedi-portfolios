import { motion } from 'framer-motion'

const timeline = [
  {
    title: "Bachelor of Business Administration",
    college: "Siddheswari College",
    period: "2018 - 2022",
    description: "Graduated with honors."
  },
  {
    title: "Higher Secondary Certificate",
    college: "Khilgaon Govt. Colony Higher Secondary School",
    period: "2015 - 2017",
    description: "Completed with HSC."
  }
]

export default function Experience() {
  return (
    <section id="experience" className="pt-24 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
            <div className="h-px bg-foreground/20 flex-1"></div>
          </div>

          <div className="relative border-l border-foreground/10 ml-4 md:ml-6 space-y-12">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-1.5 shadow-[0_0_10px_rgba(139,92,246,0.5)] border-2 border-background"></div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {item.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-muted-foreground mb-4">{item.college}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
