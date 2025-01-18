import { Brain } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-purple-500" />
          <span className="text-lg font-bold">Elad AI</span>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <a href="#" className="transition-colors hover:text-purple-500">Twitter</a>
          <a href="#" className="transition-colors hover:text-purple-500">LinkedIn</a>
          <a href="#" className="transition-colors hover:text-purple-500">GitHub</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elad AI. All rights reserved.
        </p>
      </div>
    </footer>
  )
}