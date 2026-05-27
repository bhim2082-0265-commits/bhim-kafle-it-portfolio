"use client"

import { motion } from "framer-motion"
import {
  Server,
  Network,
  Shield,
  Cloud,
  Database,
  Monitor,
  Users,
  CheckCircle,
  LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { portfolioData } from "@/data/portfolio"

const iconMap: Record<string, LucideIcon> = {
  Server,
  Network,
  Shield,
  Cloud,
  Database,
  Monitor,
  Users,
  CheckCircle,
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </motion.div>
  )
}

function SkillCategoryCard({ category, index }: { category: typeof portfolioData.skills[0]; index: number }) {
  const Icon = iconMap[category.icon] || Server

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:border-primary/30 transition-all duration-500 group">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{category.category}</h3>
            </div>
          </div>
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SkillsPage() {
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
            Technical <span className="gradient-text">Expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skills across enterprise IT domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {portfolioData.skills.map((category, i) => (
            <SkillCategoryCard key={category.category} category={category} index={i} />
          ))}
        </div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Technologies & <span className="gradient-text">Tools</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SAP B1", "SAP HANA", "VMware vSphere", "Microsoft Hyper-V",
              "Fortinet", "Cisco", "Palo Alto", "AWS", "Azure",
              "Linux", "Windows Server", "SQL Server", "Active Directory",
              "MPLS", "VPN", "VLAN", "SD-WAN", "SIEM", "ITIL",
              "Python", "PowerShell", "Docker", "Kubernetes",
            ].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
