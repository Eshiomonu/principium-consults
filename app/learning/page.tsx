import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, Users, ArrowRight } from "lucide-react"

// Training data
const trainings = [
  {
    id: "leadership-development",
    title: "Leadership Development",
    description: "Develop essential leadership skills to effectively manage teams and drive organizational success",
    image: "/placeholder.svg?height=600&width=800",
    duration: "3 days",
    price: "$1,200",
    category: "Management",
    startDate: "June 15, 2025",
    participants: "10-15",
    highlights: [
      "Strategic decision making",
      "Team motivation techniques",
      "Effective communication",
      "Conflict resolution",
      "Performance management",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Masterclass",
    description:
      "Master the latest digital marketing strategies to grow your online presence and drive customer engagement",
    image: "/placeholder.svg?height=600&width=800",
    duration: "2 days",
    price: "$950",
    category: "Marketing",
    startDate: "July 10, 2025",
    participants: "15-20",
    highlights: [
      "SEO optimization",
      "Social media marketing",
      "Content strategy",
      "Email marketing",
      "Analytics and reporting",
    ],
  },
  {
    id: "project-management",
    title: "Project Management Essentials",
    description:
      "Learn proven methodologies and tools to successfully plan, execute, and complete projects on time and within budget",
    image: "/placeholder.svg?height=600&width=800",
    duration: "4 days",
    price: "$1,500",
    category: "Management",
    startDate: "August 5, 2025",
    participants: "12-18",
    highlights: [
      "Project planning and scheduling",
      "Resource allocation",
      "Risk management",
      "Stakeholder communication",
      "Project tracking and reporting",
    ],
  },
  {
    id: "data-analysis",
    title: "Data Analysis Fundamentals",
    description:
      "Develop essential skills to collect, analyze, and interpret data for informed business decision making",
    image: "/placeholder.svg?height=600&width=800",
    duration: "3 days",
    price: "$1,100",
    category: "Analytics",
    startDate: "September 12, 2025",
    participants: "10-15",
    highlights: [
      "Data collection methods",
      "Statistical analysis",
      "Data visualization",
      "Reporting techniques",
      "Decision making with data",
    ],
  },
  {
    id: "customer-service",
    title: "Customer Service Excellence",
    description:
      "Enhance your customer service skills to deliver exceptional experiences that build loyalty and drive business growth",
    image: "/placeholder.svg?height=600&width=800",
    duration: "2 days",
    price: "$850",
    category: "Customer Relations",
    startDate: "October 8, 2025",
    participants: "15-20",
    highlights: [
      "Communication skills",
      "Problem-solving techniques",
      "Handling difficult situations",
      "Customer needs assessment",
      "Building customer loyalty",
    ],
  },
  {
    id: "agile-methodology",
    title: "Agile Methodology Workshop",
    description:
      "Learn how to implement Agile practices to improve team collaboration and deliver projects more efficiently",
    image: "/placeholder.svg?height=600&width=800",
    duration: "3 days",
    price: "$1,300",
    category: "Development",
    startDate: "November 15, 2025",
    participants: "12-16",
    highlights: ["Scrum framework", "Sprint planning", "Daily stand-ups", "Retrospectives", "Continuous improvement"],
  },
]

export default function LearningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Enhance your skills and advance your career with our professional training programs
          </p>
        </div>
      </section>

      {/* Training Grid */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((training) => (
            <Card
              key={training.id}
              className="h-full flex flex-col transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={training.image || "/placeholder.svg"}
                  alt={training.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-white/90 text-primary">
                    {training.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{training.title}</CardTitle>
                <CardDescription>{training.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Duration: {training.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Starts: {training.startDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Group Size: {training.participants}</span>
                </div>
                <div className="flex items-center font-bold text-lg">
                  <span>Price: {training.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/learning/${training.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-primary/10 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Skills?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Register for one of our training programs today and take the next step in your professional development
          </p>
          <Button asChild size="lg">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

