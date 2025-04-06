"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react"

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  service: z.string().optional(),
})

// Service options
const serviceOptions = [
  { value: "business-consulting", label: "Business Consulting" },
  { value: "professional-training", label: "Professional Training" },
  { value: "team-building", label: "Team Building" },
  { value: "market-analysis", label: "Market Analysis" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "customer-support", label: "Customer Support Solutions" },
]

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      service: "",
    },
  })

  // Pre-select service if provided in URL
  useState(() => {
    const service = searchParams.get("service")
    if (service) {
      form.setValue("service", service)
    }
  })

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would send the data to a server
    console.log(values)

    // Show success message
    setIsSubmitted(true)

    // Show toast notification
    // toast({
    //   title: "Message sent",
    //   description: "We've received your message and will get back to you shortly.",
    // })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/10">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or need more information? We're here to help. Reach out to our team using the form below.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Our team is ready to assist you with any questions or inquiries</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@trainserve.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Business Avenue
                      <br />
                      Suite 456
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">Business Hours: Monday-Friday, 9am-5pm EST</p>
              </CardFooter>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {!isSubmitted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="john.doe@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service of Interest</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {serviceOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="Subject of your inquiry" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="How can we help you?" className="min-h-[150px]" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Message Sent!</CardTitle>
                  <CardDescription className="text-lg">Thank you for contacting us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We've received your message and will get back to you as soon as possible, usually within 24-48
                    business hours.
                  </p>
                  <p>In the meantime, feel free to explore our services and training programs.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located in the heart of the business district
            </p>
          </div>
          <div className="h-[400px] w-full bg-muted rounded-lg overflow-hidden relative">
            {/* In a real application, this would be a Google Maps or similar embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">
                Map Placeholder - In a real application, this would be an interactive map
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

