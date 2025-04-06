"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Lightbulb, BookOpen, Users } from "lucide-react"

// Carousel images
const carouselItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Professional Training Programs",
    description: "Enhance your skills with our expert-led training courses",
    cta: "Explore Courses",
    link: "/learning",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Premium Business Services",
    description: "Comprehensive solutions to help your business grow",
    cta: "View Services",
    link: "/services",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Expert Consultation",
    description: "Get personalized advice from industry professionals",
    cta: "Contact Us",
    link: "/contact",
  },
]

// Featured services
const featuredServices = [
  {
    id: 1,
    title: "Business Consulting",
    description: "Strategic guidance to optimize your business operations and growth",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    link: "/services/business-consulting",
  },
  {
    id: 2,
    title: "Professional Training",
    description: "Skill development programs designed for modern workplace needs",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    link: "/services/professional-training",
  },
  {
    id: 3,
    title: "Team Building",
    description: "Activities and workshops to strengthen team cohesion and productivity",
    icon: <Users className="h-10 w-10 text-primary" />,
    link: "/services/team-building",
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="min-w-full h-full relative">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-6 max-w-3xl">
                  <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                  <p className="text-xl mb-6">{item.description}</p>
                  <Button asChild size="lg">
                    <Link href={item.link}>{item.cta}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Featured Services Section */}
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Featured Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our premium services can help you achieve your goals and transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <Card key={service.id} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href={service.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of satisfied clients who have transformed their businesses with our services and training
            programs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/learning">Explore Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

