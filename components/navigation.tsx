"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sections } from "@/components/full-screen-portfolio"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-4xl">
      <div className="bg-background/80 backdrop-blur-md border shadow-lg rounded-full flex items-center justify-between h-16 px-6 relative">
        <div className="font-bold text-xl absolute left-8 top-1/2 -translate-y-1/2">Azfar Danish</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 mx-auto">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={cn(
                "relative py-2 text-sm font-medium transition-colors",
                activeSection === section.id ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {section.label}
              {activeSection === section.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
          <nav className="container mx-auto py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
