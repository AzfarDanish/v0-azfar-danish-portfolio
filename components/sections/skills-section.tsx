"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const skillCategories = [
  {
    title: "Design Tools",
    description: "Creative software for visual design",
    skills: [
      { name: "Adobe Photoshop", level: 3 },
      { name: "Adobe Illustrator", level: 3 },
      { name: "Canva", level: 5 },
    ],
  },
  {
    title: "3D Modeling",
    description: "Tools for creating three-dimensional designs",
    skills: [
      { name: "Blender", level: 5 },
      { name: "SketchUp", level: 5 },
      { name: "Tinkercad", level: 4 }, 
      { name: "Fusion 360", level: 4 },
      { name: "Solidworks", level: 2 },
    ],
  },
  {
    title: "Productivity",
    description: "Office and productivity software",
    skills: [
      { name: "Microsoft Word", level: 5 },
      { name: "Microsoft Excel", level: 4 },
      { name: "Microsoft PowerPoint", level: 4 },
    ],
  },
  {
    title: "Web Development",
    description: "Technologies for building web applications",
    skills: [
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
      { name: "GitHub", level: 3 },
      { name: "Figma", level: 3 },
      { name: "Tailwind CSS", level: 2 },
      { name: "Next.js", level: 2 },
      { name: "JavaScript", level: 1 },
      { name: "TypeScript", level: 1 },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Arduino", level: 3 },
      { name: "3D Printing", level: 5 },
      { name: "Ultimaker Cura", level: 4 },
    ],
  }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
            <p className="text-gray-600 text-sm">Tools and technologies I work with</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{category.title}</h3>
                    {category.description && (
                      <p className="text-xs text-gray-600">{category.description}</p>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ 
                                  delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 + i * 0.02 
                                }}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  i < skill.level ? "bg-blue-500" : "bg-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ 
                              duration: 0.8, 
                              delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                            className="bg-blue-500 h-1 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}