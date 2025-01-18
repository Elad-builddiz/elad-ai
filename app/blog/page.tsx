import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of AI in Business",
      excerpt: "Exploring how artificial intelligence is transforming modern business operations...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      date: "March 15, 2024"
    },
    {
      title: "Building Effective Chatbots",
      excerpt: "Best practices for developing chatbots that enhance customer experience...",
      image: "https://images.unsplash.com/photo-1676277791608-ac54525aa94d",
      date: "March 10, 2024"
    },
    {
      title: "Automation Strategies for 2024",
      excerpt: "Key automation trends and strategies for business growth...",
      image: "https://images.unsplash.com/photo-1675426513824-77870b16e4fd",
      date: "March 5, 2024"
    }
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">Blog & Insights</h1>
        <p className="text-lg text-gray-400 max-w-[800px]">
          Latest thoughts, insights, and updates from the world of AI and automation
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden bg-card/50 backdrop-blur">
            <div className="aspect-video relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-purple-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <Button variant="link" className="text-purple-500 p-0">
                Read More →
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}