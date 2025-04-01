"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">Get in Touch</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as
            soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="rounded-lg border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-100"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="rounded-lg border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-100"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="purpose">Purpose</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-100">
                      <SelectValue placeholder="Select a purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request a quote</SelectItem>
                      <SelectItem value="information">General information</SelectItem>
                      <SelectItem value="support">Customer support</SelectItem>
                      <SelectItem value="partnership">Partnership opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    required
                    className="rounded-lg border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-100"
                  />
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry"
                    rows={5}
                    className="rounded-lg border-gray-200 focus:border-gray-300 focus:ring focus:ring-gray-100"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-6 text-base mt-4"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@kraftdaddy.com</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-600">123 Print Street, Design City, 12345</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

