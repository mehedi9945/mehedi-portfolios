import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Github, Linkedin, Twitter } from './Icons'
import { Typewriter } from 'react-simple-typewriter'
import profilePhoto from '../../image/photo.png'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-2">
            Available for Work
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Md Mehedi Hasan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground min-h-[40px]">
            I am a&nbsp;
            <Typewriter
              words={['MERN Stack Developer' , 'Frontend Developer']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mt-2">
            I build exceptional and accessible digital experiences for the web. Let's create something amazing together.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="/public/resume/Mehedi-Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
            <div className="flex items-center gap-3 ml-4">
              <a href="https://github.com/mehedi9945" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mehedi9945/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-fuchsia-500 blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={profilePhoto}
              alt="Profile"
              className="relative w-full h-full object-cover rounded-full border-2 border-foreground/10 z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
