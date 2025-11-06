import type React from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiVercel,
  SiRedux,
  SiVite,
  SiMongoose,
  SiCloudinary,
  SiStripe,
  SiRazorpay,
  SiAmazonec2,
  SiSocketdotio,
} from "react-icons/si"
import { FaHtml5, FaCss3Alt, FaKey, FaCubes } from "react-icons/fa"

export const skillIconMap: Record<string, React.ReactNode> = {
  // Frontend
  HTML: <FaHtml5 className="w-6 h-6 text-[#E34C26]" />,
  CSS: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" />,
  JavaScript: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
  "React.js": <SiReact className="w-6 h-6 text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="w-6 h-6 text-white" />,
  Vite: <SiVite className="w-6 h-6 text-[#646CFF]" />,
  Redux: <SiRedux className="w-6 h-6 text-[#764ABC]" />,
  "Tailwind CSS": <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
  "Material UI": <div className="w-6 h-6 text-[#007FFF]">MUI</div>,
  Bootstrap: <div className="w-6 h-6 text-[#7952B3]">BS</div>,

  // Backend
  "Node.js": <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
  "Express.js": <SiExpress className="w-6 h-6 text-white" />,
  MongoDB: <SiMongodb className="w-6 h-6 text-[#13AA52]" />,
  Mongoose: <SiMongoose className="w-6 h-6 text-[#880000]" />,
  SQL: <div className="w-6 h-6 text-[#336791]">SQL</div>,
  JWT: <FaKey className="w-6 h-6 text-[#FF6B6B]" />,
  "RESTful APIs": <div className="w-6 h-6 text-[#61DAFB]">API</div>,
  "Socket.IO": <SiSocketdotio className="w-6 h-6 text-white" />,
  "OpenAI API": <div className="w-6 h-6 text-white">OAI</div>,
  "Gemini API": <div className="w-6 h-6 text-[#4285F4]">GM</div>,
  Stripe: <SiStripe className="w-6 h-6 text-[#626EFF]" />,
  Razorpay: <SiRazorpay className="w-6 h-6 text-[#02A8FB]" />,

  // DevOps & Deployment
  Docker: <SiDocker className="w-6 h-6 text-[#2496ED]" />,
  Kubernetes: <SiKubernetes className="w-6 h-6 text-[#326CE5]" />,
  "CI/CD": <div className="w-6 h-6 text-[#FF6B6B]">CI</div>,
  "GitHub Actions": <SiGithub className="w-6 h-6 text-white" />,

  // Cloud & VCS
  "AWS EC2": <SiAmazonec2 className="w-6 h-6 text-[#FF9900]" />,
  Vercel: <SiVercel className="w-6 h-6 text-white" />,
  Render: <div className="w-6 h-6 text-[#46E3B7]">RN</div>,
  Git: <SiGit className="w-6 h-6 text-[#F1502F]" />,
  GitHub: <SiGithub className="w-6 h-6 text-white" />,
  Cloudinary: <SiCloudinary className="w-6 h-6 text-[#3448C5]" />,
  ImageKit: <div className="w-6 h-6 text-[#1A1A1A]">IK</div>,
  "MVC Architecture": <FaCubes className="w-6 h-6 text-[#FF9900]" />,
}
