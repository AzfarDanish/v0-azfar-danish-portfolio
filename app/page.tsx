import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Facebook, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FullScreenPortfolio } from "@/components/full-screen-portfolio"

export default function Home() {
  return (
    <div className="min-h-screen">
      <FullScreenPortfolio />
    </div>
  )
}
