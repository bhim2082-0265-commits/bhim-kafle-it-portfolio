"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-lg border border-border bg-card" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative h-10 w-10 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun className="absolute inset-0 m-auto h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute inset-0 m-auto h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-400" />
    </button>
  )
}
