"use client"

import { skillIconMap } from "@/lib/skill-icons"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Vite",
        "Redux",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "SQL",
        "JWT",
        "RESTful APIs",
        "Socket.IO",
        "OpenAI API",
        "Gemini API",
        "Stripe",
        "Razorpay",
      ],
    },
    {
      name: "DevOps & Deployment",
      skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    },
    {
      name: "Cloud & VCS",
      skills: ["AWS EC2", "Vercel", "Render", "Git", "GitHub", "Cloudinary", "ImageKit", "MVC Architecture"],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Technical{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="glass-effect p-6 sm:p-8 transition-all duration-300">
                {/* Category Header */}
                <h3 className="text-xl font-bold text-foreground mb-6">{category.name}</h3>

                {/* Skills Grid with Icons */}
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg transition-opacity duration-200"
                    >
                      <div className="flex items-center justify-center">
                        {skillIconMap[skill] || <div className="w-6 h-6 text-accent">•</div>}
                      </div>
                      <span className="text-xs text-center text-muted-foreground font-medium line-clamp-2">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="glass-effect p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Proficiency Summary</h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Languages", count: "8+" },
                { label: "Frameworks", count: "12+" },
                { label: "Databases", count: "6+" },
                { label: "Tools & Platforms", count: "15+" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">{item.count}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm constantly learning and staying updated with the latest technologies and best practices in web
              development and cloud infrastructure. My diverse skill set enables me to tackle complex projects from
              concept to production deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
