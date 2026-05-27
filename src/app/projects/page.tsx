"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { portfolioData } from "@/data/portfolio"

const categories = Array.from(new Set(portfolioData.projects.map((p) => p.category)))

export default function ProjectsPage() {
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
            Enterprise <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering complex IT initiatives with measurable business impact
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.projects
                  .filter((p) => p.category === cat)
                  .map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolioData.projects)[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full hover:border-primary/30 transition-all duration-500 flex flex-col">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
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
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground flex-1 line-clamp-4 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px]">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
