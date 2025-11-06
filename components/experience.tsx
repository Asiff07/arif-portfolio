import { Calendar } from "lucide-react"
import { MdWork } from "react-icons/md"

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using MERN stack. Architecting microservices and implementing CI/CD pipelines.",
      technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple production applications. Implemented automated testing and improved code quality metrics by 40%.",
      technologies: ["React", "Express", "PostgreSQL", "Jest", "Vercel"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description:
        "Built responsive web applications and contributed to backend API development. Collaborated with cross-functional teams.",
      technologies: ["JavaScript", "HTML/CSS", "Node.js", "Git", "Agile"],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Work{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-effect p-6 sm:p-8 hover:border-accent/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 text-accent">
                        <MdWork size={24} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground sm:whitespace-nowrap">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
