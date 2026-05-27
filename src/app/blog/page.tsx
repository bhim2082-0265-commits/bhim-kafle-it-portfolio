"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolio"

export default function BlogPage() {
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
            Insights & <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on enterprise IT, cybersecurity, and technology leadership
          </p>
        </motion.div>

        {portfolioData.blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              Blog posts and insights are being prepared. Stay tuned for expert perspectives on enterprise IT.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full hover:border-primary/30 transition-all duration-500 flex flex-col cursor-pointer">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge variant="default" className="w-fit mb-3 text-xs">
                      {post.category}
                    </Badge>
                    <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex-1 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
