"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolio"

const certCategories = Array.from(new Set(portfolioData.certifications.map((c) => c.category)))

export default function CertificationsPage() {
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
            Professional <span className="gradient-text">Certifications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise across IT domains
          </p>
        </motion.div>

        <div className="space-y-12">
          {certCategories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                {category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {portfolioData.certifications
                  .filter((c) => c.category === category)
                  .map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group h-full hover:border-primary/30 transition-all duration-500">
                        <CardContent className="p-6">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-3">
                            {cert.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-[10px]">
                              {cert.issuer}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
