"use client"

import type React from "react"
import Image from "next/image"
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiStripe,
  SiSocketdotio,
  SiDocker,
  SiVercel, // Import SiVercel here
} from "react-icons/si"
import { FaAws, FaJsSquare } from "react-icons/fa"

const projects = [
  {
    title: "Buyora – Full-Stack E-Commerce Web Application",
    description:
      "A full-stack MERN e-commerce application featuring a customer-facing storefront and a separate admin panel. The platform includes JWT authentication, product search and filtering, a persistent shopping cart, and a full checkout process with Stripe, Razorpay, and COD payment integrations. The admin panel allows for product, order, and user management. Deployed on Vercel with a responsive design using Tailwind CSS.",
    tech: [
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "RESTful APIs",
      "MVC Architecture",
      "Vercel",
      "Cloudinary",
    ],
    demo: "https://buyora-buy.vercel.app",
    image: "/buyora.png",
  },
  {
    title: "SigmaGPT — Next Gen Multi-Model AI Chat Application",
    description:
      "Developed an advanced AI chat platform integrating both OpenAI (GPT) and Google (Gemini) APIs for dynamic, multi-model conversations. Engineered a MERN-stack backend with secure JWT authentication and a React/Vite frontend for a responsive user experience. Features AI-powered image generation via ImageKit and Stripe integration for subscription management.",
    tech: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "OpenAI API",
      "Gemini API",
      "ImageKit",
      "Stripe",
    ],
    demo: "https://asif-sigmagpt.vercel.app/",
    image: "/sigmagpt.png",
  },
  {
    title: "NoteNexus – Premium Study Marketplace",
    description:
      "A full-stack academic marketplace designed for students to buy, sell, and share university notes. Built with the MERN stack, it features a modern glassmorphism UI with dark mode support, secure authentication, and integrated payment gateways (Stripe/Razorpay) for monetization. Includes real-time download tracking, wishlist management, and a responsive design that provides a premium user experience across all devices.",
    tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB","Mongoose","Tailwind CSS","Gemini API","Stripe","Razorpay","Cloudinary", "JWT","Vite", "Vercel"],
    demo: "https://note-hive-blue.vercel.app/",
    image: "/notenexus.png",
  },
  {
    title: "Wanderlust – Hotel Booking Website",
    description:
      "A full-stack hotel booking app built using Node.js, Express.js, MongoDB (Mongoose), EJS, Bootstrap, and MVC architecture. Features include hotel browsing, booking, authentication (Passport.js), flash alerts, sessions, Map Features and method-override for RESTful operations. Deployed on Render, with dotenv for secure environment management.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Passport.js", "Render", "MVC Architecture", "JWT"],
    demo: "https://wanderlust-k5em.onrender.com/listings",
    image: "/wanderlust.png",
  },
  {
    title: "Apna Video Call – Real-Time Video Conferencing",
    description:
      "A real-time video conferencing web app built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for live communication. Includes secure authentication (bcrypt & crypto), instant meeting room creation, real-time chat, and a sleek Material-UI interface. Designed for low-latency, high-quality audio/video calls with a scalable backend architecture.",
    tech: ["JavaScript","React.js","Node.js", "Express.js", "Mongoose","Socket.IO", "WebRTC", "Tailwind CSS","JWT"],
    demo: "#",
    image: "/zoom1.png",
  },
  {
    title: "Stockyard – Zerodha Clone",
    description:
      "A trading dashboard clone featuring real-time data updates and interactive charts for stock analysis. Built with React on the frontend and Node.js/Express backend with MongoDB for data persistence.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS", "RESTful APIs"],
    demo: "#",
    image: "/zerodha.png",
  },
  {
    title: "Krisp – URL Shortener with Analytics",
    description:
      "A URL shortening service with advanced analytics tracking, click monitoring, and QR code generation capabilities. Built with Node.js/Express backend and MongoDB for storing shortened URLs with comprehensive analytics.",
    tech: ["Node.js", "Express.js", "MongoDB", "QR Code", "Analytics", "Tailwind CSS", "RESTful APIs"],
    demo: "https://link-shortening-application.onrender.com/",
    image: "/url.png",
  },
]

const techIconMap: Record<string, React.ReactNode> = {
  "React.js": <SiReact className="w-5 h-5 text-[#61DAFB]" />,
  React: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
  "Node.js": <SiNodedotjs className="w-5 h-5 text-[#339933]" />,
  Node: <SiNodedotjs className="w-5 h-5 text-[#339933]" />,
  "Express.js": <SiExpress className="w-5 h-5 text-white" />,
  Express: <SiExpress className="w-5 h-5 text-white" />,
  MongoDB: <SiMongodb className="w-5 h-5 text-[#13AA52]" />,
  Mongoose: <div className="w-5 h-5 text-[#880000] flex items-center justify-center font-bold">M</div>,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  Tailwind: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />,
  Stripe: <SiStripe className="w-5 h-5 text-[#626EFF]" />,
  Razorpay: <div className="w-5 h-5 text-[#02A8FB] flex items-center justify-center text-xs font-bold">RP</div>,
  AWS: <FaAws className="w-5 h-5 text-[#FF9900]" />,
  "AWS EC2": <FaAws className="w-5 h-5 text-[#FF9900]" />,
  Docker: <SiDocker className="w-5 h-5 text-[#2496ED]" />,
  "Next.js": <SiNextdotjs className="w-5 h-5 text-white" />,
  Vite: <SiVite className="w-5 h-5 text-[#646CFF]" />,
  JavaScript: <FaJsSquare className="w-5 h-5 text-[#F7DF1E]" />,
  "RESTful APIs": <div className="w-5 h-5 text-[#61DAFB] flex items-center justify-center text-xs font-bold">API</div>,
  "Socket.IO": <SiSocketdotio className="w-5 h-5 text-white" />,
  "OpenAI API": <div className="w-5 h-5 text-white flex items-center justify-center text-xs font-bold">OAI</div>,
  "Gemini API": <div className="w-5 h-5 text-[#4285F4] flex items-center justify-center text-xs font-bold">GM</div>,
  ImageKit: <div className="w-5 h-5 text-[#1A1A1A] flex items-center justify-center text-xs font-bold">IK</div>,
  EJS: <div className="w-5 h-5 text-[#90C53F] flex items-center justify-center text-xs font-bold">EJS</div>,
  Bootstrap: <div className="w-5 h-5 text-[#7952B3] flex items-center justify-center text-xs font-bold">BS</div>,
  "Passport.js": <div className="w-5 h-5 text-[#34E27A] flex items-center justify-center text-xs font-bold">PJS</div>,
  WebRTC: <div className="w-5 h-5 text-[#29B6F6] flex items-center justify-center text-xs font-bold">WR</div>,
  "Chart.js": <div className="w-5 h-5 text-[#FF6384] flex items-center justify-center text-xs font-bold">CJ</div>,
  "QR Code": <div className="w-5 h-5 text-[#000000] flex items-center justify-center text-xs font-bold">QR</div>,
  Analytics: <div className="w-5 h-5 text-[#34A853] flex items-center justify-center text-xs font-bold">AN</div>,
  "MVC Architecture": (
    <div className="w-5 h-5 text-[#FF9900] flex items-center justify-center text-xs font-bold">MVC</div>
  ),
  Render: <div className="w-5 h-5 text-[#46E3B7] flex items-center justify-center text-xs font-bold">RN</div>,
  Vercel: <SiVercel className="w-5 h-5 text-white" />,
  Cloudinary: <div className="w-5 h-5 text-[#3448C5] flex items-center justify-center text-xs font-bold">CD</div>,
  Git: <div className="w-5 h-5 text-[#F1502F] flex items-center justify-center text-xs font-bold">GIT</div>,
  GitHub: <div className="w-5 h-5 text-white flex items-center justify-center text-xs font-bold">GH</div>,
  JWT: <div className="w-5 h-5 text-[#FF6B6B] flex items-center justify-center text-xs font-bold">JWT</div>,
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-2 sm:px-4 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-accent to-secondary rounded-full" />
          </div>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="glass-effect p-4 hover:border-accent/50 transition-all duration-300 flex gap-4 sm:gap-6">
                {/* Project Image - Left Side */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-20 sm:w-48 sm:h-28 rounded-lg overflow-hidden border border-border/50">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Project Content - Right Side */}
                <div className="flex-1 space-y-3">
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Tech Stack with Icons */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded bg-accent/10 border border-accent/30 transition-colors whitespace-nowrap"
                      >
                        {techIconMap[tech as keyof typeof techIconMap] && (
                          <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            {techIconMap[tech as keyof typeof techIconMap]}
                          </span>
                        )}
                        <span className="text-xs font-medium text-accent">{tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <div>
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      View details
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
