"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import {
  ArrowRight,
  Shield,
  Server,
  Network,
  Cloud,
  CheckCircle,
  ChevronRight,
  Download,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || !ref.current) return
    let current = 0
    const increment = target / 60
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      if (ref.current) {
        ref.current.textContent = Math.floor(current) + suffix
      }
    }, 25)
    return () => clearInterval(timer)
  }, [isInView, target, suffix])

  return <span ref={ref}>0</span>
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

function ExpertiseCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full hover:border-primary/30 transition-all duration-500">
        <CardContent className="p-6">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const expertises = [
  {
    icon: Server,
    title: "Infrastructure & Data Center",
    description: "Enterprise-grade infrastructure design, data center operations, and server management with 99.99% uptime.",
  },
  {
    icon: Network,
    title: "Network Architecture",
    description: "Multi-site LAN/WAN/VPN/MPLS network design with robust security and optimal performance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security frameworks, firewall management, and threat protection strategies.",
  },
  {
    icon: Cloud,
    title: "Cloud & SAP Solutions",
    description: "SAP B1/HANA administration, cloud migration, and digital transformation leadership.",
  },
]

export default function HomePage() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true })

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="default" className="mb-4 text-sm px-4 py-1.5">
                  <Shield className="h-3.5 w-3.5 mr-1.5" />
                  Enterprise IT Leadership
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-foreground">{portfolioData.name}</span>
                <br />
                <span className="gradient-text">{portfolioData.position}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                {portfolioData.headline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/experience">
                  <Button size="lg" variant="gradient" className="group">
                    View My Experience
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Let&apos;s Connect
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {["IT Infrastructure", "Cybersecurity", "SAP HANA", "Cloud", "Data Center"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/20 flex items-center justify-center animate-float">
                  <div className="relative">
                    <Shield className="w-32 h-32 text-primary/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 animate-network-pulse" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Network className="w-6 h-6 text-accent" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Server className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {portfolioData.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter target={parseInt(stat.value)} suffix={stat.value.includes("+") ? "+" : ""} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Areas of Expertise"
            subtitle="Comprehensive enterprise IT leadership across critical technology domains"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertises.map((exp, i) => (
              <ExpertiseCard key={exp.title} {...exp} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/skills">
              <Button variant="outline" className="group">
                View All Skills
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-16 lg:py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Enterprise Projects"
            subtitle="Proven track record of delivering complex IT initiatives"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full hover:border-primary/30 transition-all duration-500">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge
                        variant={project.status === "Completed" ? "success" : "warning"}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-[10px]">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="h-12 w-12 mx-auto mb-6 text-primary/30" />
            <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-6">
              Technology is best when it brings people together. Enterprise IT is not just about infrastructure — it&apos;s about enabling business excellence through strategic innovation.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">{portfolioData.name}</div>
                <div className="text-xs text-muted-foreground">{portfolioData.position}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 lg:p-12 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-purple-500/10" />
            <div className="absolute inset-0 hexagon-bg opacity-20" />
            <div className="relative">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Let&apos;s Build Your Enterprise IT Strategy
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Looking for an experienced IT leader to drive your digital transformation? Let&apos;s discuss how I can help your organization achieve technology excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" variant="gradient" className="group">
                    Get In Touch
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
