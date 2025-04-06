import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Lightbulb, BookOpen, Users, BarChart, Code, Headphones } from "lucide-react"

// Service data
const services = [
  {
    id: "business-consulting",
    title: "Business Consulting",
    description:
      "Our business consulting services provide expert guidance to help you optimize operations, increase efficiency, and drive sustainable growth. We work closely with you to understand your unique challenges and develop tailored solutions.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=800&width=1200",
    benefits: [
      "Strategic planning and implementation",
      "Process optimization and efficiency improvements",
      "Growth strategy development",
      "Change management support",
      "Performance measurement and KPI development",
    ],
    features: [
      {
        title: "Initial Assessment",
        description: "Comprehensive evaluation of your current business operations, challenges, and opportunities.",
      },
      {
        title: "Strategy Development",
        description: "Collaborative creation of tailored strategies to address your specific business needs.",
      },
      {
        title: "Implementation Support",
        description: "Hands-on guidance throughout the implementation process to ensure successful execution.",
      },
      {
        title: "Performance Monitoring",
        description: "Ongoing tracking and analysis of key metrics to measure progress and make adjustments.",
      },
    ],
  },
  {
    id: "professional-training",
    title: "Professional Training",
    description:
      "Our professional training programs are designed to equip your team with the skills they need to excel in today's rapidly evolving workplace. From leadership development to technical skills, we offer comprehensive training solutions.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=800&width=1200",
    benefits: [
      "Enhanced employee skills and capabilities",
      "Improved productivity and performance",
      "Increased employee engagement and retention",
      "Standardized knowledge across teams",
      "Adaptability to industry changes and trends",
    ],
    features: [
      {
        title: "Needs Assessment",
        description: "Thorough analysis of your team's current skills and the gaps that need to be addressed.",
      },
      {
        title: "Customized Curriculum",
        description: "Tailored training programs designed to meet your specific organizational needs.",
      },
      {
        title: "Expert Instructors",
        description: "Training delivered by industry professionals with extensive experience and expertise.",
      },
      {
        title: "Progress Tracking",
        description: "Comprehensive assessment tools to measure learning outcomes and program effectiveness.",
      },
    ],
  },
  {
    id: "team-building",
    title: "Team Building",
    description:
      "Our team building programs are designed to foster collaboration, improve communication, and build trust among team members. Through engaging activities and workshops, we help create stronger, more cohesive teams.",
    icon: <Users className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=800&width=1200",
    benefits: [
      "Improved team communication and collaboration",
      "Enhanced problem-solving capabilities",
      "Stronger interpersonal relationships",
      "Increased team morale and motivation",
      "Better conflict resolution skills",
    ],
    features: [
      {
        title: "Team Assessment",
        description: "Evaluation of team dynamics, strengths, and areas for improvement.",
      },
      {
        title: "Customized Activities",
        description: "Engaging exercises designed to address specific team challenges and goals.",
      },
      {
        title: "Facilitated Workshops",
        description: "Interactive sessions led by experienced facilitators to maximize learning.",
      },
      {
        title: "Follow-up Support",
        description: "Ongoing guidance to help teams apply new skills in the workplace.",
      },
    ],
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    description:
      "Our market analysis services provide you with comprehensive insights into market trends, competitor landscapes, and customer behaviors. We help you make data-driven decisions to stay ahea  competitor landscapes, and customer behaviors. We help you make data-driven decisions to stay ahead of the competition.",
    icon: <BarChart className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=800&width=1200",
    benefits: [
      "Data-driven strategic decision making",
      "Competitive advantage through market insights",
      "Identification of new opportunities",
      "Risk mitigation through trend analysis",
      "Enhanced customer targeting and segmentation",
    ],
    features: [
      {
        title: "Market Research",
        description: "Comprehensive data collection and analysis of market conditions and trends.",
      },
      {
        title: "Competitor Analysis",
        description: "Detailed evaluation of competitor strategies, strengths, and weaknesses.",
      },
      {
        title: "Customer Insights",
        description: "In-depth understanding of customer preferences, behaviors, and needs.",
      },
      {
        title: "Opportunity Identification",
        description: "Strategic recommendations based on market gaps and emerging trends.",
      },
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description:
      "Our digital transformation services help businesses adopt and implement new technologies to improve efficiency, enhance customer experiences, and stay competitive in the digital age.",
    icon: <Code className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=800&width=1200",
    benefits: [
      "Improved operational efficiency",
      "Enhanced customer experience",
      "Data-driven decision making",
      "Increased agility and innovation",
      "Competitive advantage in the digital marketplace",
    ],
    features: [
      {
        title: "Digital Assessment",
        description: "Evaluation of current digital capabilities and identification of transformation opportunities.",
      },
      {
        title: "Technology Strategy",
        description: "Development of a comprehensive roadmap for digital adoption and implementation.",
      },
      {
        title: "Implementation Support",
        description: "Expert guidance throughout the technology implementation process.",
      },
      {
        title: "Change Management",
        description: "Support for organizational adaptation to new digital processes and tools.",
      },
    ],
  },
  {
    id: "customer-support",
    title: "Customer Support Solutions",
    description:
      "Our customer support solutions help you build and maintain excellent customer relationships through effective support systems, training, and strategies that prioritize customer satisfaction.",
    icon: <Headphones className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=800&width=1200",
    benefits: [
      "Improved customer satisfaction and loyalty",
      "Reduced response times and resolution rates",
      "Consistent customer experience across channels",
      "Valuable customer feedback and insights",
      "Enhanced brand reputation and trust",
    ],
    features: [
      {
        title: "Support Assessment",
        description: "Evaluation of current customer support processes and identification of improvement areas.",
      },
      {
        title: "System Design",
        description: "Development of efficient support workflows and technology solutions.",
      },
      {
        title: "Staff Training",
        description: "Comprehensive training programs for support teams to enhance service quality.",
      },
      {
        title: "Performance Metrics",
        description: "Implementation of KPIs and reporting systems to monitor support effectiveness.",
      },
    ],
  },
]

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                </Link>
              </Button>
              <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl mb-6">{service.description}</p>
              <Button asChild size="lg">
                <Link href="/contact?service=${service.id}">Request This Service</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today to discuss how our {service.title.toLowerCase()} can help your business achieve its goals
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/learning">Explore Our Training Programs</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

