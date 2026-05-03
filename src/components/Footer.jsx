import { Github, Linkedin, Twitter } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/50 py-12 mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter text-gradient">
            Md Mehedi Hasan.
          </span>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/mehedi9945" target="_blank" rel="noreferrer" className="p-2 rounded-full glass hover:bg-foreground/10 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/mehedi9945/" target="_blank" rel="noreferrer" className="p-2 rounded-full glass hover:bg-foreground/10 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
