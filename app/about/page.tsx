import { Button } from "@/components/ui/button";
import { Award, Brain, Cpu, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Pioneering the Future of
            <span className="text-purple-500"> AI Solutions</span>
          </h1>
          <p className="text-lg text-gray-400">
            With years of experience in AI development and automation, we're
            dedicated to transforming businesses through innovative technology
            solutions.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Contact Us
          </Button>
        </div>
        <div className="flex-1 relative h-[400px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="About Elad AI"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 elad">
        <div className="text-center">
          <Brain className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-400">AI Projects</p>
        </div>
        <div className="text-center">
          <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-400">Clients</p>
        </div>
        <div className="text-center">
          <Award className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold">15+</h3>
          <p className="text-gray-400">Awards</p>
        </div>
        <div className="text-center">
          <Cpu className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <h3 className="text-3xl font-bold">1M+</h3>
          <p className="text-gray-400">API Calls</p>
        </div>
      </div>

      {/* Mission */}
      <div className="text-center max-w-[800px] mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-400">
          To empower businesses with cutting-edge AI solutions that drive
          innovation, efficiency, and growth. We're committed to making advanced
          technology accessible and practical for organizations of all sizes.
        </p>
      </div>
    </div>
  );
}
