"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Users,
  FileText,
  MessageSquare,
  TrendingUp,
  Activity,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  { label: "Page Views", value: "12,345", icon: BarChart3, change: "+12%" },
  { label: "Visitors", value: "4,567", icon: Users, change: "+8%" },
  { label: "Inquiries", value: "89", icon: MessageSquare, change: "+23%" },
  { label: "CV Downloads", value: "234", icon: FileText, change: "+15%" },
]

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-4 lg:p-6">
                <div className="flex items-start justify-between mb-2">
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Traffic Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center text-muted-foreground text-sm">
              Analytics chart will appear here
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { action: "CV downloaded", time: "2 min ago" },
                { action: "Contact form inquiry", time: "15 min ago" },
                { action: "New visitor from LinkedIn", time: "1 hr ago" },
                { action: "Blog post viewed", time: "3 hrs ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.action}</span>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
