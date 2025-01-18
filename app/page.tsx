import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Bot, Cpu, LineChart } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900/20 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transforming Ideas into
                  <span className="text-purple-500"> Intelligent Solutions</span>
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Specializing in AI tools, chatbots, and automation solutions that drive innovation and efficiency.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[400px] items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="AI Visualization"
                width={400}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Expertise</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl">
              Delivering cutting-edge AI solutions across multiple domains
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <Brain className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">AI Development</h3>
              <p className="text-sm text-gray-400">Custom AI solutions tailored to your business needs</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur">
              <Bot className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Chatbots</h3>
              <p className="text-sm text-gray-400">Intelligent conversational agents for enhanced customer engagement</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur">
              <Cpu className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Automation</h3>
              <p className="text-sm text-gray-400">Streamline processes with intelligent automation solutions</p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur">
              <LineChart className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Consulting</h3>
              <p className="text-sm text-gray-400">Expert guidance on AI implementation and strategy</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Projects</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl">
              Explore our recent AI implementations and success stories
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden bg-card/50 backdrop-blur">
                <div className="aspect-video relative">
                  <Image
                    src={`https://images.unsplash.com/photo-167744213601${i}-21780ecad995`}
                    alt={`Project ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">AI Project {i}</h3>
                  <p className="text-sm text-gray-400">
                    Innovative AI solution delivering measurable business results
                  </p>
                  <Button variant="link" className="mt-4 text-purple-500 p-0">
                    Learn More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}