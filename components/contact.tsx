"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast.error(data.message || "Oops! There was a problem submitting your form")
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out. I respond to all messages within 24
            hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-effect p-8 space-y-6 mb-12">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-input border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-input border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
              placeholder="your-email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-input border border-border/50 rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 disabled:opacity-50 text-accent-foreground font-semibold py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="space-y-8 text-center">
          <div>
            <p className="text-muted-foreground mb-6">Connect with me on social platforms</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Arif1258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:text-white transition-colors duration-200"
              >
                <FaGithub size={24} className="hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/skarifahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:text-white transition-colors duration-200"
              >
                <FaLinkedin size={24} className="text-[#0A66C2] hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.6)]" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:arifahmedma490@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:text-white transition-colors duration-200"
              >
                <Mail size={24} className="text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                <span className="text-sm font-medium">Email</span>
              </a>
              {/* Twitter link removed as per user request (no link provided) */}
            </div>
          </div>

          <div className="pt-6 border-t border-border/20">
            <p className="text-muted-foreground">
              Email:{" "}
              <a href="mailto:arifahmedma490@gmail.com" className="text-accent font-medium hover:underline">
                arifahmedma490@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
