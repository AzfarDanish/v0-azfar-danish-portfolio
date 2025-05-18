"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Award, Medal } from "lucide-react"

const awards = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />, // You can swap icons
    title: "Best Designer Award",
    year: "2023",
    description: "Recognized for outstanding creativity and innovation in digital design at the National Creative Summit.",
  },
  {
    icon: <Star className="w-8 h-8 text-blue-500" />,
    title: "Top 3D Artist",
    year: "2022",
    description: "Awarded for excellence in 3D modeling and visualization at the International 3D Expo.",
  },
  {
    icon: <Award className="w-8 h-8 text-green-500" />,
    title: "Innovation in Branding",
    year: "2021",
    description: "Honored for creative brand identity solutions at the Branding Excellence Awards.",
  },
  {
    icon: <Medal className="w-8 h-8 text-red-500" />,
    title: "Client Choice Award",
    year: "2020",
    description: "Voted favorite designer by clients for exceptional service and project delivery.",
  },
]

export function AwardsSection() {
  return (
    <section id="awards" className="min-h-[60vh] flex items-center justify-center py-20 bg-muted/30">
      <div className="container px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Awards</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my achievements and recognitions in the creative industry.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, idx) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{award.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{award.title}</h3>
              <span className="text-xs text-muted-foreground mb-2">{award.year}</span>
              <p className="text-sm text-center text-muted-foreground">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
