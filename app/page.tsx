import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"
import { Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Azfar Danish</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#awards" className="text-sm font-medium hover:text-primary transition-colors">
              Awards
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 space-y-8 md:space-y-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex-1 space-y-4">
              <Badge className="mb-2">Portfolio</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Azfar Danish</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A multidisciplinary creative professional with expertise in design, 3D modeling, and productivity tools.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild variant="default">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 border-4 border-primary">
                <AvatarImage src="/placeholder.svg?height=192&width=192" alt="Azfar Danish" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I've developed expertise across various tools and technologies, categorized into the following areas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Skills */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Design Tools</CardTitle>
                <CardDescription>Creative software for visual design</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Adobe Photoshop</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Adobe Illustrator</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Canva</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3D Skills */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>3D Modeling</CardTitle>
                <CardDescription>Tools for creating three-dimensional designs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Blender</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                      <div className="w-2 h-2 rounded-full bg-muted" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">SketchUp</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Productivity Skills */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Productivity</CardTitle>
                <CardDescription>Office and productivity software</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Microsoft Word</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Microsoft Excel</span>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                      <div className="w-2 h-2 rounded-full bg-muted" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Microsoft PowerPoint</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-12 md:py-24 space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlighting some of the recognition I've received throughout my career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Award 1 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Design Excellence Award</CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Recognized for outstanding contributions in graphic design and visual communication for the project
                  "Creative Horizons."
                </p>
              </CardContent>
            </Card>

            {/* Award 2 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>3D Visualization Competition</CardTitle>
                <CardDescription>2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  First place in the national 3D modeling competition for architectural visualization using Blender and
                  SketchUp.
                </p>
              </CardContent>
            </Card>

            {/* Award 3 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Creative Innovation Prize</CardTitle>
                <CardDescription>2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Awarded for innovative approach to digital content creation and multimedia presentations using Adobe
                  Creative Suite.
                </p>
              </CardContent>
            </Card>

            {/* Award 4 */}
            <Card className="transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Digital Art Showcase</CardTitle>
                <CardDescription>2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Featured artist in the International Digital Art Exhibition for exceptional work combining 2D and 3D
                  elements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work across various disciplines and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Brand Identity Design</CardTitle>
                <CardDescription>Adobe Illustrator, Photoshop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complete brand identity design including logo, color palette, typography, and brand guidelines for a
                  tech startup.
                </p>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>3D Architectural Visualization</CardTitle>
                <CardDescription>Blender, SketchUp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed 3D visualization of a modern residential building with photorealistic rendering and
                  environmental integration.
                </p>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Digital Marketing Campaign</CardTitle>
                <CardDescription>Canva, Adobe Creative Suite</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive digital marketing assets including social media graphics, web banners, and email
                  templates.
                </p>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Corporate Presentation</CardTitle>
                <CardDescription>Microsoft PowerPoint, Illustrator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Professional presentation design with custom graphics, data visualization, and animated transitions
                  for a corporate client.
                </p>
              </CardContent>
            </Card>

            {/* Project 5 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Product Visualization</CardTitle>
                <CardDescription>Blender, Photoshop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  3D product visualization and packaging design for a consumer electronics brand with multiple product
                  variations.
                </p>
              </CardContent>
            </Card>

            {/* Project 6 */}
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Data Analysis Dashboard</CardTitle>
                <CardDescription>Microsoft Excel, PowerPoint</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Interactive data dashboard with advanced Excel formulas and visual representation of complex business
                  metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in working together? Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Ways to reach me directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>azfar.danish@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button asChild size="icon" variant="outline">
                    <Link href="https://github.com/azfardanish" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <Link href="https://linkedin.com/in/azfardanish" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="outline">
                    <Link href="https://facebook.com/azfardanish" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below to get in touch</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Azfar Danish. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
