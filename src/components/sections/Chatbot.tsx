"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  role: "user" | "bot"
  content: string
}

const initialMessages: Message[] = [
  {
    role: "bot",
    content: "Hello! I'm Bhim's virtual assistant. How can I help you today? You can ask about my experience, skills, projects, or anything else!",
  },
]

const responses: Record<string, string> = {
  experience: "Bhim Kafle has 6+ years of IT experience, currently serving as Head of IT. He has led enterprise infrastructure, SAP deployments, cybersecurity frameworks, and cloud migration initiatives.",
  skills: "Bhim's expertise spans IT Infrastructure, Networking, Cybersecurity, SAP B1/HANA, Cloud Migration, Virtualization, IT Governance, and Strategic IT Planning.",
  projects: "Bhim has delivered 50+ enterprise projects including Data Center Setup, SAP Deployment, Firewall Implementation, Disaster Recovery, Multi-site Network Architecture, and Cloud Migration.",
  contact: "You can reach Bhim via the Contact page or connect on LinkedIn. He's based in Nepal and open to enterprise consulting opportunities.",
  default: "I can help you learn more about Bhim's experience, skills, projects, or how to get in touch. What would you like to know?",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    const lower = input.toLowerCase()
    let botResponse = responses.default

    if (lower.includes("experience") || lower.includes("work") || lower.includes("career")) {
      botResponse = responses.experience
    } else if (lower.includes("skill") || lower.includes("expertise") || lower.includes("know")) {
      botResponse = responses.skills
    } else if (lower.includes("project") || lower.includes("delivered") || lower.includes("built")) {
      botResponse = responses.projects
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("connect")) {
      botResponse = responses.contact
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }])
    }, 600)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-primary to-accent text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="font-semibold text-sm">Virtual Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-2 max-w-[85%] ${
                      msg.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === "user"
                          ? "bg-primary/10"
                          : "bg-accent/10"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User className="h-4 w-4 text-primary" />
                      ) : (
                        <Bot className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user"
                          ? "bg-primary text-white"
                          : "bg-muted/50 text-foreground"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Bhim's expertise..."
                  className="flex-1 h-10 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button
                  size="icon"
                  variant="gradient"
                  onClick={handleSend}
                  className="h-10 w-10 shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
