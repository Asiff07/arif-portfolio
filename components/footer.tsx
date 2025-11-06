import { Mail, Heart } from "lucide-react"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/20 py-12 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sk Arif Ahmed</h3>
            <p className="text-muted-foreground text-sm">Full-Stack Developer & DevOps Enthusiast</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              
              <a
                href="mailto:skarifaahmed@gmail.com"
                className="text-red-500 hover:text-red-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              © {currentYear} Sk Arif Ahmed. Built with <Heart size={16} className="text-accent" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
