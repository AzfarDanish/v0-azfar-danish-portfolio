"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Next.js, Tailwind CSS, React",
    content: "A personal portfolio website showcasing my skills, projects, and experiences. Built with Next.js and Tailwind CSS for a modern, responsive design.", 
  },
  {
    title: "Hand Gesture Recognition System",
    description: "Python, OpenCV, TensorFlow",
    content: "A real-time hand gesture recognition system using computer vision and machine learning techniques to control applications.",
  },
  {
    title: "SketchUP House Model",
    description: "SketchUp, 3D Modeling",
    content: "A detailed 3D model of a house created using SketchUp, showcasing architectural design and interior layout.", 
  },
  {
    title: "Aquarium Controller System",
    description: "Arduino, Sensors, IoT",
    content: "An automated aquarium controller system using Arduino to monitor and control water parameters, lighting, and feeding schedules.",  
  },
  {
    title: "Portable Honey Collector System",
    description: "Arduino, Sensors, IoT",
    content: "A portable system designed to collect honey from beehives using Arduino and sensors for monitoring and control.",
  },
  {
    title: "IOT Automation Of Water Control For Aquariums, Fish Ponds, Aquaculture & Agro-Industries Projects",
    description: "Arduino, IoT, Sensors",
    content: "An IoT-based automation system for water control in aquariums, fish ponds, and agro-industries, utilizing Arduino and various sensors for real-time monitoring and control.",
  },
  {
    title: "Robotic Arm",
    description: "Arduino, Robotics, Control Systems",
    content: "A robotic arm project using Arduino for precise control and automation, suitable for various applications in robotics and automation.",
  },
  {
    title: "3D Model of a House's Roof Frame",
    description: "Blender, 3D Modeling",
    content: "A detailed 3D model of a house's roof frame created using Blender, showcasing structural design and architectural elements.",
  },
  {
    title: "3D Model of a House's Interior",
    description: "Blender, 3D Modeling",
    content: "A comprehensive 3D model of a house's interior created using Blender, highlighting furniture arrangement and spatial design.",
  },
  {
    title: "3D Model of a House's Exterior",
    description: "Blender, 3D Modeling",
    content: "An exterior 3D model of a house created using Blender, focusing on architectural aesthetics and landscaping.",
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="projects" className="py-16 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
            <p className="text-gray-600 text-sm">Selected work across various disciplines</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 }
              }
            }}
            className="space-y-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-blue-600 font-medium mb-2">
                        {project.description}
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {project.content}
                      </p>
                    </div>
                    <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
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