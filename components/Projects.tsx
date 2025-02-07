"use client"

import { useState } from "react"
import { motion } from "framer-motion"
// import Image from "next/image"

const projects = [
  {
    title: "This Portfolio (2025)",
    description: "This portfolio is built using Next.js, Tailwind CSS, and TypeScript. It showcases my skills, projects, and contact information.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://ozy-portfolio.vercel.app/",
  },
  {
    title: "Simple Link In Bio (2023)",
    description: "An application inspired by Linktree that consolidates all the social media links of a person or group into a single URL.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://linkinbio-app-ni-ozy.vercel.app/",
  },
  {
    title: "Work Log System (2019)",
    description: "A personal one-liner diary that logs daily work activities for historical reference and productivity tracking.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/ozyhale/ozylogs",
  },
  {
    title: "Mobile Teacher (2014)",
    description: "Composed both Android and Web applications The Web application allows teachers to enroll students to a subject and manages learning resources such as lecture materials and quizzes. It also allows creation and publication of lecture slides.",
    image: "/public/mobile-teacher.png",
    link: "https://github.com/ozyhale/mobile-teacher",
  },
  {
    title: "Davao City Brgy Directory (2013)",
    description: "A portal of websites from different barangays of the Davao City, Philippines using PHP with Codeigniter.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/ozyhale/davao-city-brgy-directory",
  },
  {
    title: "MVC Project (2012)",
    description: "An attempt to create a simple MVC framework using PHP.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/ozyhale/mvc-project",
  },
]

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Project
                </a>
              </div>
              {hoveredProject === project.title && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-center px-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      View Project
                    </a>
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

