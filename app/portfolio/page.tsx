"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import SectionAnimation from "@/components/section-animation"

export default function PortfolioPage() {
  // This would typically come from a database or CMS
  const categories = ["All", "Branding", "T-shirts", "Jerseys", "Packaging", "Badges", "Brochures", "Posters"]
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Corporate Rebrand",
      category: "Branding",
      description:
        "Complete rebrand including logo design, business cards, and stationery for a financial services firm.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "corporate-rebrand",
    },
    {
      id: 2,
      title: "Restaurant Menu Design",
      category: "Branding",
      description: "Custom menu design and printing for an upscale restaurant chain with multiple locations.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "restaurant-menu-design",
    },
    {
      id: 3,
      title: "Event Promotion",
      category: "Brochures",
      description: "Comprehensive event materials including banners, programs, and badges for a major conference.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "event-promotion",
    },
    {
      id: 4,
      title: "Product Packaging",
      category: "Packaging",
      description: "Custom packaging design and production for a premium skincare brand's product line.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "product-packaging",
    },
    {
      id: 5,
      title: "Retail Signage",
      category: "Posters",
      description: "Large format printing for a retail chain's nationwide rebranding initiative.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "retail-signage",
    },
    {
      id: 6,
      title: "Annual Report",
      category: "Brochures",
      description: "Design and printing of an annual report for a publicly traded company.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "annual-report",
    },
    {
      id: 7,
      title: "Team Jerseys",
      category: "Jerseys",
      description: "Custom printed jerseys for a local sports league with team logos and player names.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "team-jerseys",
    },
    {
      id: 8,
      title: "Conference Badges",
      category: "Badges",
      description: "Professional ID badges and lanyards for a major technology conference.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "conference-badges",
    },
    {
      id: 9,
      title: "Company T-shirts",
      category: "T-shirts",
      description: "Custom designed and printed t-shirts for a tech company's team building event.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "company-t-shirts",
    },
    {
      id: 10,
      title: "Wine Label Design",
      category: "Packaging",
      description: "Custom label design and printing for a boutique winery's new product line.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "wine-label-design",
    },
    {
      id: 11,
      title: "Sports Team Branding",
      category: "Branding",
      description: "Complete brand identity for a professional sports team including logo and marketing materials.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "sports-team-branding",
    },
    {
      id: 12,
      title: "Product Brochures",
      category: "Brochures",
      description: "Detailed product brochures for a manufacturing company's new product line.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "product-brochures",
    },
    {
      id: 13,
      title: "Event T-shirts",
      category: "T-shirts",
      description: "Custom t-shirts for a music festival with unique designs for each day of the event.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "event-t-shirts",
    },
    {
      id: 14,
      title: "Employee Badges",
      category: "Badges",
      description: "Secure ID badges with RFID technology for a corporate headquarters.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "employee-badges",
    },
    {
      id: 15,
      title: "Movie Posters",
      category: "Posters",
      description: "Large format movie posters for an independent film festival.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "movie-posters",
    },
    {
      id: 16,
      title: "Basketball Jerseys",
      category: "Jerseys",
      description: "Custom basketball jerseys for a college tournament with team logos and player numbers.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "basketball-jerseys",
    },
    {
      id: 17,
      title: "Food Packaging",
      category: "Packaging",
      description: "Eco-friendly packaging design for an organic food company.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "food-packaging",
    },
    {
      id: 18,
      title: "Concert Posters",
      category: "Posters",
      description: "Series of promotional posters for a summer concert series.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "concert-posters",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">Our Portfolio</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses elevate their brand through exceptional
            printing
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                  activeCategory === category ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <SectionAnimation key={project.id} delay={index * 100}>
                <Link href={`/portfolio/${project.slug}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg group">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </Link>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-black text-white">
        <div className="w-full text-center">
          <div className="max-w-2xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to start your project?</h2>
            <p className="mt-6 text-lg text-gray-300">
              Let's discuss how we can help bring your vision to life with our printing expertise.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 hover:text-black rounded-full px-8 py-6 text-base">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

