"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Brand Identity Design",
    description: "Adobe Illustrator, Photoshop",
    content:
      "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
  },
  {
    title: "3D Architectural Visualization",
    description: "Blender, SketchUp",
    content:
      "Detailed 3D visualization of a modern residential building with photorealistic rendering and environmental integration.",
  },
  {
    title: "Digital Marketing Campaign",
    description: "Canva, Adobe Creative Suite",
    content:
      "Comprehensive digital marketing assets including social media graphics, web banners, and email templates.",
  },
  {
    title: "Corporate Presentation",
    description: "Microsoft PowerPoint, Illustrator",
    content:
      "Professional presentation design with custom graphics, data visualization, and animated transitions for a corporate client.",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work across various disciplines and tools.
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Card className="h-full max-w-xs mx-auto overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{project.content}</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      View Details <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex justify-center pt-8"
          >
            <Button size="lg">View All Projects</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
