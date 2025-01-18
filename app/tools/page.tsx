import { Card } from "@/components/ui/card"
import { Bot, Brain, Code, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ToolsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">AI Tools & Solutions</h1>
        <p className="text-lg text-gray-400 max-w-[800px]">
          Explore our collection of cutting-edge AI tools designed to transform your business operations
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 bg-card/50 backdrop-blur flex flex-col">
          <Bot className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">AI Chatbot Builder</h3>
          <p className="text-gray-400 mb-4 flex-1">
            Create custom chatbots powered by advanced language models.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Try Now</Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur flex flex-col">
          <Brain className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Content Generator</h3>
          <p className="text-gray-400 mb-4 flex-1">
            Generate high-quality content with AI-powered assistance.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Try Now</Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur flex flex-col">
          <Code className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Code Assistant</h3>
          <p className="text-gray-400 mb-4 flex-1">
            AI-powered coding assistant for faster development.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Try Now</Button>
        </Card>

        <Card className="p-6 bg-card/50 backdrop-blur flex flex-col">
          <Cpu className="h-12 w-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Process Automation</h3>
          <p className="text-gray-400 mb-4 flex-1">
            Automate repetitive tasks with intelligent workflows.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Try Now</Button>
        </Card>
      </div>
    </div>
  )
}