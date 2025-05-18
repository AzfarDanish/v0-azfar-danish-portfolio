"use client"

import { useEffect, useRef, useState } from "react"
import { HomeSection } from "@/components/sections/home-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function FullScreenPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const observerRefs = useRef<IntersectionObserver[]>([])

  useEffect(() => {
    // Set up intersection observers for each section
    const sectionElements = sections.map((section) => document.getElementById(section.id))

    // Disconnect any existing observers
    observerRefs.current.forEach((observer) => observer.disconnect())
    observerRefs.current = []

    // Create new observers
    sectionElements.forEach((element) => {
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(entry.target.id)
              history.replaceState(null, "", `#${entry.target.id}`)
            }
          })
        },
        { threshold: [0.3] }, // Trigger when 30% of the section is visible
      )

      observer.observe(element)
      observerRefs.current.push(observer)
    })

    // Set initial active section based on URL hash
    const hash = window.location.hash.replace("#", "")
    if (hash && sections.some((section) => section.id === hash)) {
      setActiveSection(hash)
      // Scroll to the section after a short delay to ensure the page is loaded
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      // Clean up observers
      observerRefs.current.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  )
}
