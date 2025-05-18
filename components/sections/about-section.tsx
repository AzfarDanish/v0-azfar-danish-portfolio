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
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
      <div className="container px-6 md:px-12 py-16">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col items-center lg:items-start"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">About Me</h2>
            <div className="prose max-w-none space-y-4">
              <p>
                I'm Azfar Danish, currently a student at Kolej Professional Mara Beranang with a strong passion for design, 3D modeling, and digital content creation. My academic journey has equipped me with a diverse skill set and a drive to excel in creative fields.
              </p>
              <p>
                I have hands-on experience with tools such as Adobe Creative Suite, Canva, Blender, and SketchUp, and I leverage productivity tools like Microsoft Office to manage projects efficiently and deliver quality results.
              </p>
              <p>
                I believe in the power of visual communication and strive to create designs that are both visually appealing and effective in conveying messages. Whether it's brand identity, 3D visualization, or digital marketing assets, I approach each project with creativity and attention to detail.
              </p>
              <p>
                Outside of academics, I enjoy exploring new design trends, learning new tools, and collaborating with peers to push creative boundaries.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col items-center space-y-8"
          >
            <Avatar className="w-48 h-48 border-4 border-primary">
              <AvatarImage src="/placeholder.svg?height=192&width=192" alt="Azfar Danish" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>

            <Card className="w-full max-w-md">
              <CardContent className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-muted-foreground">Experience</h3>
                    <p className="font-bold text-xl">5+ Years</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-muted-foreground">Projects</h3>
                    <p className="font-bold text-xl">100+</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-muted-foreground">Clients</h3>
                    <p className="font-bold text-xl">50+</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-muted-foreground">Awards</h3>
                    <p className="font-bold text-xl">10+</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
