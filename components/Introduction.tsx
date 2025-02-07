import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Introduction() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Ozy Hale Manipis</h1>
        <h2 className="text-2xl text-blue-400 mb-6">Web Developer</h2>
        <p className="max-w-2xl mx-auto mb-8">Experienced Web Developer with 10+ years of expertise in building, maintaining, and optimizing dynamic web applications. Skilled in CRM customizations, full-stack development, basic Linux administration, and performance optimization, ensuring high-quality user experiences and scalable solutions.</p>
        <div className="flex justify-center space-x-4">
          <Link
            href="https://github.com/ozyhale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <GitHub className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/ozyhale"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:ozyhale@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}

