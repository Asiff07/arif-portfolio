import { CheckCircle } from "lucide-react"

export default function About() {
  const highlights = [
    "Full Stack Developer with 5+ years of experience",
    "Expertise in MERN Stack (MongoDB, Express, React, Node.js)",
    "DevOps and Cloud Infrastructure (AWS, Docker, Kubernetes)",
    "Passionate about building scalable and performant applications",
    "Open source contributor and tech community enthusiast",
    "Strong problem-solving and communication skills",
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              About <span className="bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-12 h-1 bg-linear-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-1 gap-12">
            {/* Right Column - About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a dedicated full-stack developer with a passion for creating innovative solutions that solve
                real-world problems. With expertise across the entire development stack, from frontend UI/UX to backend
                infrastructure and DevOps, I deliver comprehensive solutions that are scalable, maintainable, and
                performant.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things work, which evolved into a career focused
                on building robust applications and infrastructure. I believe in continuous learning, clean code
                practices, and the power of collaboration.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-3 pt-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block px-6 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent font-semibold hover:bg-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  Let&apos;s connect
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100+", label: "Happy Clients" },
              { number: "30+", label: "Tech Skills" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect p-6 text-center space-y-2 hover:border-accent/50 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
