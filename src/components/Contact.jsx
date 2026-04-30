import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="pt-24 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
            <div className="h-px bg-foreground/20 flex-1"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Let's talk about your next project.</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently available to take on new projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                  <div className="p-4 rounded-full glass group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">md.mehedi9945@gmail.com</p>
                  </div>
                </a>
                
                <a href="tel:+1234567890" className="flex items-center gap-4 group">
                  <div className="p-4 rounded-full glass group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Phone</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">01918968363</p>
                  </div>
                </a>

                <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="p-4 rounded-full glass group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-colors">
                    <MessageCircle className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">WhatsApp</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-green-500 transition-colors">01918968363</p>
                  </div>
                </a>
              </div>
            </div>

            <form className="flex flex-col gap-4 p-8 rounded-3xl glass border border-foreground/10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                  placeholder="Message Here?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 mt-2 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
