"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lightbulb, BookOpen, Users, BarChart, Code, Headphones } from "lucide-react"

// Service data
const services = [
  {
    id: "business-consulting",
    title: "Business Consulting",
    shortDescription: "Strategic guidance to optimize your business operations and growth",
    description:
      "Our business consulting services provide expert guidance to help you optimize operations, increase efficiency, and drive sustainable growth. We work closely with you to understand your unique challenges and develop tailored solutions.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "professional-training",
    title: "Professional Training",
    shortDescription: "Skill development programs designed for modern workplace needs",
    description:
      "Our professional training programs are designed to equip your team with the skills they need to excel in today's rapidly evolving workplace. From leadership development to technical skills, we offer comprehensive training solutions.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "team-building",
    title: "Team Building",
    shortDescription: "Activities and workshops to strengthen team cohesion and productivity",
    description:
      "Our team building programs are designed to foster collaboration, improve communication, and build trust among team members. Through engaging activities and workshops, we help create stronger, more cohesive teams.",
    icon: <Users className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "market-analysis",
    title: "Market Analysis",
    shortDescription: "In-depth research and insights to inform your business strategy",
    description:
      "Our market analysis services provide you with comprehensive insights into market trends, competitor landscapes, and customer behaviors. We help you make data-driven decisions to stay ahead of the competition.",
    icon: <BarChart className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Guidance on leveraging technology to modernize your business",
    description:
      "Our digital transformation services help businesses adopt and implement new technologies to improve efficiency, enhance customer experiences, and stay competitive in the digital age.",
    icon: <Code className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "customer-support",
    title: "Customer Support Solutions",
    shortDescription: "Strategies to enhance your customer service and support systems",
    description:
      "Our customer support solutions help you build and maintain excellent customer relationships through effective support systems, training, and strategies that prioritize customer satisfaction.",
    icon: <Headphones className="h-10 w-10 text-primary" />,
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of professional services designed to help your business thrive and grow
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCard === service.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white">{service.icon}</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/services/${service.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss how our services can be tailored to meet your specific needs and goals
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

