"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio"
import { cn } from "@/lib/utils"

function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card
              className={cn(
                "relative ml-0 md:ml-20 hover:border-primary/30 transition-all duration-500 cursor-pointer",
                expandedId === exp.id && "border-primary/30"
              )}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <div className="absolute -left-4 md:-left-16 top-8 hidden md:flex">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
              </div>

              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {expandedId === exp.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  <span>{expandedId === exp.id ? "Hide" : "Show"} responsibilities</span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedId === exp.id ? "auto" : 0,
                    opacity: expandedId === exp.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <h4 className="text-sm font-semibold mb-4">Key Responsibilities:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.about.stats[0].value} of enterprise IT leadership and infrastructure management
          </p>
        </motion.div>

        <ExperienceTimeline />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 border border-border/50 text-center"
        >
          <h3 className="text-xl font-bold mb-3">Comprehensive IT Leadership</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From strategic IT planning to hands-on infrastructure management, my experience spans the full spectrum of enterprise technology operations.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
