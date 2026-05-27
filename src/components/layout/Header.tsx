"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/data/portfolio"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight">Bhim Kafle</span>
              <span className="block text-xs text-muted-foreground">Head of IT</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {portfolioData.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                )}
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden h-10 w-10 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-b border-border/50 bg-background/95 backdrop-blur-xl"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {portfolioData.navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
