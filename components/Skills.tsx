"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skills = [
  { name: "PHP", level: 90 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "VTiger CRM", level: 85 },
  { name: "MySQL", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "Adaptability", level: 95 },
  { name: "Problem-solving", level: 90 },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <motion.div
                className="bg-gray-700 h-4 rounded-full overflow-hidden"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="bg-blue-500 h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </motion.div>
              {hoveredSkill === skill.name && (
                <></>
                // <motion.p className="text-sm mt-2 text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                //   {skill.name} is one of my core skills. I&apos;ve used it extensively in various projects.
                // </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

