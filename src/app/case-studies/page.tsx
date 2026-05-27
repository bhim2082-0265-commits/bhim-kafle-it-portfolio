"use client"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world IT transformation stories with measurable business outcomes
          </p>
        </motion.div>

        {portfolioData.caseStudies.length === 0 ? (
          <div className="text-center py-20">
            <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              Detailed case studies are being compiled. Check back for in-depth IT transformation stories.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {portfolioData.caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2">
                      <div className="p-6 lg:p-8">
                        <Badge variant="default" className="mb-4">
                          {study.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-6">{study.title}</h3>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-red-500 mb-2">The Challenge</h4>
                            <p className="text-sm text-muted-foreground">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">The Solution</h4>
                            <p className="text-sm text-muted-foreground">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-emerald-500 mb-3">Results</h4>
                            <div className="space-y-2">
                              {study.results.map((result, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span>{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 p-8">
                        <div className="text-center">
                          <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="h-10 w-10 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground max-w-xs">
                            Enterprise IT transformation delivering measurable business impact
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
