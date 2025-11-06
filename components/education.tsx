import { Calendar } from "lucide-react"
import { FaGraduationCap } from "react-icons/fa"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Focused on software development, algorithms, and data structures. GPA: 3.8/4.0",
      highlights: ["Full Stack Web Development", "Database Management", "Software Engineering"],
    },
    {
      degree: "Full Stack Developer Bootcamp",
      institution: "Code Academy",
      period: "2021 - 2021",
      description: "Intensive 12-week program covering modern web development practices and DevOps fundamentals.",
      highlights: ["MERN Stack", "Docker & Kubernetes", "AWS Deployment"],
    },
    {
      degree: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2023",
      description: "Professional certification demonstrating expertise in designing scalable AWS infrastructure.",
      highlights: ["Cloud Architecture", "Infrastructure as Code", "Best Practices"],
    },
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Education &{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Education List */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-effect p-6 sm:p-8 hover:border-secondary/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/10 text-secondary">
                        <FaGraduationCap size={24} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-secondary font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground sm:whitespace-nowrap">
                    <Calendar size={16} />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/30"
                    >
                      {highlight}
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
