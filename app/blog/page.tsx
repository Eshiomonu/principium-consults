import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "5 Leadership Trends to Watch in 2025",
    excerpt: "Discover the emerging leadership trends that will shape how organizations operate in the coming year.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 1, 2025",
    category: "Leadership",
    author: "Sarah Williams",
  },
  {
    id: 2,
    title: "How Digital Marketing is Evolving in the AI Era",
    excerpt:
      "Explore how artificial intelligence is transforming digital marketing strategies and customer engagement.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 25, 2025",
    category: "Marketing",
    author: "Mark Johnson",
  },
  {
    id: 3,
    title: "The Future of Remote Work: Challenges and Opportunities",
    excerpt: "An in-depth look at how remote work continues to evolve and what it means for businesses and employees.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 18, 2025",
    category: "Workplace",
    author: "Jennifer Adams",
  },
  {
    id: 4,
    title: "Building Resilient Teams in Uncertain Times",
    excerpt:
      "Strategies for developing team resilience and maintaining productivity during periods of change and uncertainty.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 10, 2025",
    category: "Team Building",
    author: "Robert Chen",
  },
  {
    id: 5,
    title: "Data-Driven Decision Making: A Practical Guide",
    excerpt: "Learn how to effectively use data to inform business decisions and drive better outcomes.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 3, 2025",
    category: "Analytics",
    author: "Lisa Zhang",
  },
  {
    id: 6,
    title: "Customer Experience Trends for 2025 and Beyond",
    excerpt: "Discover the latest trends in customer experience and how they're shaping business strategies.",
    image: "/placeholder.svg?height=600&width=800",
    date: "February 25, 2025",
    category: "Customer Relations",
    author: "Michael Torres",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, trends, and expert perspectives on business, leadership, and professional development
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>By {post.author}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/10 py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Stay updated with our latest articles, insights, and training opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="sm:w-auto">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

