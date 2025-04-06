import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Clock, Users, Briefcase } from "lucide-react"

const stats = [
  {
    id: 1,
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "5,000+",
    label: "Clients Served",
  },
  {
    id: 2,
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "50+",
    label: "Industry Awards",
  },
  {
    id: 3,
    icon: <Clock className="h-8 w-8 text-primary" />,
    value: "15+",
    label: "Years Experience",
  },
  {
    id: 4,
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: "200+",
    label: "Projects Completed",
  },
]

const team = [
  {
    id: 1,
    name: "Jane Smith",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 20 years of industry experience, Jane leads our company with vision and expertise.",
  },
  {
    id: 2,
    name: "John Davis",
    role: "Training Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "John oversees all training programs, ensuring they meet the highest standards of quality and relevance.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Service Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah ensures our services consistently exceed client expectations and deliver measurable results.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">About TrainServe</h1>
              <p className="text-xl mb-6">
                We are a leading provider of professional training and business services, dedicated to helping
                individuals and organizations reach their full potential.
              </p>
              <p className="text-muted-foreground">
                Founded in 2008, we've grown from a small consultancy to a comprehensive service provider trusted by
                businesses across multiple industries.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="About TrainServe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto">{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower individuals and organizations through high-quality training and services that drive
                  measurable growth and success. We are committed to delivering exceptional value and fostering
                  long-term relationships with our clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the leading provider of transformative training and business services, recognized globally for
                  our innovation, expertise, and commitment to client success. We aim to set new standards of excellence
                  in everything we do.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals who guide our company and ensure we deliver excellence in everything we
            do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

