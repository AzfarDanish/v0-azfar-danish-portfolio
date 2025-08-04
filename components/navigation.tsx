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
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit">
      <div className="bg-background/90 backdrop-blur-xl border border-border/50 shadow-lg rounded-2xl flex items-center justify-between h-14 px-6 relative">
        <div className="font-semibold text-lg text-foreground">AD</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 ml-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                activeSection === section.id 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden ml-4 h-8 w-8 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-64 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-2xl overflow-hidden">
          <nav className="p-3 space-y-1">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200",
                  activeSection === section.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
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