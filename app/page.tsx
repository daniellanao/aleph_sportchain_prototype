import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-xl">NextJS App</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Built with Next.js 15
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Welcome to Your New <span className="text-primary">Next.js</span> Project
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            A modern, fast, and scalable web application built with Next.js, Tailwind CSS, and shadcn/ui components.
            Ready to be customized for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Built with Modern Tools</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your project comes pre-configured with the best tools for modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">▲</span>
                </div>
                Next.js 15
              </CardTitle>
              <CardDescription>
                The React framework for production with App Router and Server Components
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">T</span>
                </div>
                Tailwind CSS v4
              </CardTitle>
              <CardDescription>Utility-first CSS framework with the latest features and improvements</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">UI</span>
                </div>
                shadcn/ui
              </CardTitle>
              <CardDescription>Beautiful, accessible components built with Radix UI and Tailwind CSS</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">TS</span>
                </div>
                TypeScript
              </CardTitle>
              <CardDescription>Full type safety and excellent developer experience out of the box</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">⚡</span>
                </div>
                Performance
              </CardTitle>
              <CardDescription>
                Optimized for speed with automatic code splitting and image optimization
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">📱</span>
                </div>
                Responsive
              </CardTitle>
              <CardDescription>
                Mobile-first design that works perfectly on all devices and screen sizes
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Your Next.js project is set up and ready to go. Start customizing it to build something amazing.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 NextJS App. Built with ❤️ using Next.js and v0.</p>
        </div>
      </footer>
    </div>
  )
}
