"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

const roles = [
  "Full-Stack Developer",
  "DevOps & Cloud Enthusiast",
  "Problem Solver",
  "Backend Engineer",
  "Frontend Architect",
  "System Design Learner",
  "Scalable App Builder",
  "Passionate Tech Explorer",
]

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseTime = 2000

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.substring(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.substring(0, displayedText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0">
            <div className="glass-effect p-4 w-48 h-48 sm:w-64 sm:h-64">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/Arif.jpg"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Right Side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">Welcome to my portfolio</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pretty">Hi, I&apos;m Sk Arif Ahmed</h1>
              <p className="text-lg sm:text-xl text-accent font-semibold min-h-8">
                {displayedText}
                {displayedText.length > 0 && displayedText.length < roles[currentRoleIndex].length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-2xl">
                Specializing in MERN stack, DevOps, and Cloud solutions. I build scalable web applications and
                infrastructure for modern businesses.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start pt-4">
              <Link
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-secondary text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 flex items-center gap-2 group"
              >
                Get in Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/resume.pdf"
                className="px-8 py-3 rounded-lg bg-card/50 border border-border/50 text-foreground font-semibold hover:bg-card hover:border-border transition-all duration-300 flex items-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://github.com/Arif1258"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/30 border border-border/30 text-[#ffffff] hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/skarifahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card/30 border border-border/30 text-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href="mailto:arifahmedma490@gmail.com"
                className="p-3 rounded-lg bg-card/30 border border-border/30 text-[#EA4335] hover:text-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.3)] transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-center animate-bounce">
          <div className="p-2 rounded-full border border-accent/30">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
