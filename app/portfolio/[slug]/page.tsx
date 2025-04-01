import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import SectionAnimation from "@/components/section-animation"

interface PortfolioProjectPageProps {
  params: {
    slug: string
  }
}

export default function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const { slug } = params

  // This would typically come from a database or CMS
  const projectData = getProjectData(slug)

  if (!projectData) {
    return <div>Project not found</div>
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="text-sm text-gray-400 mb-4">{projectData.category}</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">{projectData.title}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">{projectData.shortDescription}</p>
        </div>
      </section>

      {/* Project Overview */}
      <SectionAnimation>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">Project Overview</h2>
                <div className="space-y-4 text-gray-600">
                  {projectData.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <h3 className="font-semibold">Client</h3>
                    <p className="text-gray-600">{projectData.client}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Services</h3>
                    <p className="text-gray-600">{projectData.services.join(", ")}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={projectData.mainImage || "/placeholder.svg"}
                  alt={projectData.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Project Gallery */}
      <SectionAnimation delay={200}>
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Project Gallery</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                See the details of our work on this project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.gallery.map((image, index) => (
                <div key={index} className="relative h-64 rounded-2xl overflow-hidden">
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Results */}
      <SectionAnimation delay={400}>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Results</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The impact of our work</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projectData.results.map((result, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{result.stat}</div>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Testimonial */}
      {projectData.testimonial && (
        <SectionAnimation delay={600}>
          <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-4xl font-serif text-gray-400 mb-6">"</div>
                <p className="text-xl md:text-2xl text-gray-800 italic mb-6">{projectData.testimonial.quote}</p>
                <div className="font-semibold">{projectData.testimonial.author}</div>
                <div className="text-gray-500">
                  {projectData.testimonial.position}, {projectData.testimonial.company}
                </div>
              </div>
            </div>
          </section>
        </SectionAnimation>
      )}

      {/* CTA Section */}
      <SectionAnimation delay={800}>
        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our printing expertise.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base">
                  Get in touch
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8 py-6 text-base">
                  View more projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </SectionAnimation>
    </main>
  )
}

function getProjectData(slug: string) {
  const projects = {
    "corporate-rebrand": {
      title: "Corporate Rebrand",
      category: "Branding",
      shortDescription:
        "Complete rebrand including logo design, business cards, and stationery for a financial services firm.",
      description: [
        "This financial services firm needed a complete rebrand to reflect their modern approach to wealth management. They wanted to maintain a sense of trust and stability while appearing more approachable to younger clients.",
        "We developed a comprehensive brand identity system including a new logo, color palette, typography, and visual elements. The rebrand extended across all touchpoints, from business cards and stationery to digital assets and signage.",
        "The result was a cohesive brand identity that positioned the firm as both established and forward-thinking, helping them attract new clients while maintaining their existing customer base.",
      ],
      client: "Meridian Financial Advisors",
      services: ["Brand Strategy", "Logo Design", "Print Design", "Stationery Design"],
      mainImage: "/placeholder.svg?height=800&width=1200",
      gallery: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Logo design variations" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Business card design" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Letterhead and envelope" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Brand guidelines" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Office signage" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Digital assets" },
      ],
      results: [
        { stat: "35%", description: "Increase in new client inquiries following rebrand" },
        { stat: "28%", description: "Growth in younger demographic clients (25-40)" },
        { stat: "98%", description: "Existing client retention during transition" },
      ],
      testimonial: {
        quote:
          "The KraftDaddy team delivered a rebrand that perfectly captured our vision. The quality of the printed materials exceeded our expectations, and our clients have responded extremely positively to our new look.",
        author: "Sarah Johnson",
        position: "Marketing Director",
        company: "Meridian Financial Advisors",
      },
    },
    "restaurant-menu-design": {
      title: "Restaurant Menu Design",
      category: "Design & Print",
      shortDescription: "Custom menu design and printing for an upscale restaurant chain with multiple locations.",
      description: [
        "This upscale restaurant chain with locations across the country needed a menu redesign that would elevate the dining experience while maintaining brand consistency across all locations.",
        "We created a sophisticated menu design that showcased their culinary offerings through elegant typography, strategic layout, and premium materials. The menus included special finishes like spot UV and foil stamping to create a tactile experience that reflected the quality of their food.",
        "We also developed a system for seasonal menu updates that could be implemented quickly and cost-effectively, ensuring that each location could maintain up-to-date offerings without sacrificing design quality.",
      ],
      client: "Sapphire Dining Group",
      services: ["Menu Design", "Premium Printing", "Specialty Finishes", "Print Management"],
      mainImage: "/placeholder.svg?height=800&width=1200",
      gallery: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Menu cover design" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Menu interior spread" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Wine list design" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Specialty finish detail" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Menu in restaurant setting" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Seasonal menu variations" },
      ],
      results: [
        { stat: "22%", description: "Increase in average order value after menu redesign" },
        { stat: "15%", description: "Growth in wine and specialty drink sales" },
        { stat: "40%", description: "Reduction in menu update turnaround time" },
      ],
      testimonial: {
        quote:
          "The menus KraftDaddy designed and produced for our restaurants have become an integral part of our dining experience. The quality and attention to detail are exceptional, and our customers frequently comment on how beautiful they are.",
        author: "Michael Chen",
        position: "Executive Chef",
        company: "Sapphire Dining Group",
      },
    },
    "event-promotion": {
      title: "Event Promotion",
      category: "Marketing Materials",
      shortDescription: "Comprehensive event materials including banners, programs, and badges for a major conference.",
      description: [
        "This annual technology conference needed a complete suite of promotional and event materials to create a cohesive experience for attendees. The materials needed to be both visually striking and highly functional.",
        "We developed a comprehensive package including save-the-date cards, invitations, programs, badges, signage, banners, and promotional items. All materials featured a consistent design language while being optimized for their specific purposes.",
        "Special attention was paid to the production timeline to ensure all materials were delivered on schedule, with on-site support provided during the event for last-minute printing needs.",
      ],
      client: "TechForward Conference",
      services: ["Event Branding", "Print Design", "Large Format Printing", "Rush Production"],
      mainImage: "/placeholder.svg?height=800&width=1200",
      gallery: [
        { src: "/placeholder.svg?height=600&width=800", alt: "Conference branding" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Event program" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Attendee badges" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Stage backdrop" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Directional signage" },
        { src: "/placeholder.svg?height=600&width=800", alt: "Promotional items" },
      ],
      results: [
        { stat: "3,500+", description: "Attendees successfully registered and badged" },
        { stat: "100%", description: "On-time delivery of all materials" },
        { stat: "92%", description: "Attendee satisfaction with event materials" },
      ],
      testimonial: {
        quote:
          "Working with KraftDaddy for our conference materials was a game-changer. Their attention to detail, quality of production, and ability to meet tight deadlines made our event run smoothly. We'll definitely be using them again next year.",
        author: "David Rodriguez",
        position: "Event Director",
        company: "TechForward Conference",
      },
    },
  }

  return projects[slug as keyof typeof projects]
}

