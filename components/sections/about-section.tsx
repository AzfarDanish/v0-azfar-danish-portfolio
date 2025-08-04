"use client"

import { useEffect, useRef } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useAnimation, useInView } from "framer-motion"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            {/* Profile */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32 border-2 border-primary/20">
                <AvatarImage src="profile_picture.jpg" alt="Azfar Danish" />
                <AvatarFallback className="text-xl font-semibold">AD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Azfar Danish</h3>
                <p className="text-sm text-muted-foreground">Design Student</p>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Currently a student at <span className="font-medium text-foreground">Kolej Professional Mara Beranang</span> with a strong passion for design, 3D modeling, and digital content creation. I leverage tools like Adobe Creative Suite, Canva, Blender, and SketchUp to create visually compelling and effective designs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of visual communication and approach each project with creativity and attention to detail, whether it's brand identity, 3D visualization, or digital marketing assets.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-muted">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">2</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Years Experience</p>
                  </div>
                  <div className="space-y-1 border-x border-muted px-4">
                    <p className="text-2xl font-bold text-primary">5+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Projects</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-primary">5+</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Awards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            }}
            className="text-center"
          >
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {[
                "Adobe Creative Suite",
                "Canva",
                "Blender",
                "SketchUp",
                "Microsoft Office",
                "3D Modeling",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-muted/60 text-muted-foreground rounded-full border border-muted hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}