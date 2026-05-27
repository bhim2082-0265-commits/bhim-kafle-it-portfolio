"use client"

import { motion } from "framer-motion"
import { Shield, Lock } from "lucide-react"
import { AdminDashboard } from "@/components/sections/AdminDashboard"

export default function AdminPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-2xl lg:text-3xl font-bold">
              Admin <span className="gradient-text">Dashboard</span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            Portfolio analytics and management overview
          </p>
        </motion.div>

        <AdminDashboard />
      </div>
    </div>
  )
}
