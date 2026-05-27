"use client"

import { motion } from "framer-motion"
import { Shield, Target, Eye, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic IT Leader with a passion for enterprise technology excellence
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/20 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary/30" />
                <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-accent/20 animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h2 className="text-2xl font-bold">{portfolioData.name}</h2>
                <p className="text-primary font-medium">{portfolioData.position}</p>
                <p className="text-sm text-muted-foreground">{portfolioData.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {portfolioData.about.biography.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/experience">
                <Button variant="gradient" className="group">
                  View My Experience
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:border-primary/30 group">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">My Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {portfolioData.about.mission}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:border-accent/30 group">
              <CardContent className="p-8">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">My Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {portfolioData.about.vision}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioData.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-card border border-border/50"
              >
                <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl lg:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Excellence", desc: "Delivering the highest standards in IT service and infrastructure" },
              { title: "Innovation", desc: "Embracing emerging technologies to drive business transformation" },
              { title: "Integrity", desc: "Building trust through transparent and ethical technology leadership" },
              { title: "Resilience", desc: "Creating robust systems that ensure business continuity" },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:border-primary/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
