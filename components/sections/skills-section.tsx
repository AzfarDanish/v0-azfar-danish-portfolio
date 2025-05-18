"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="container px-4 py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-12"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've developed expertise across various tools and technologies, categorized into the following areas:
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Card className="h-full transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.5 + index * 0.1 + i * 0.1 }}
                                  className={`w-2 h-2 rounded-full ${i < skill.level ? "bg-primary" : "bg-muted"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(skill.level / 5) * 100}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              className="bg-primary h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
