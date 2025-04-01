import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import SectionAnimation from "@/components/section-animation"

export default function ServicesPage() {
  const services = [
    {
      title: "Designing",
      description:
        "Professional graphic design services to ensure your printed materials look exceptional and communicate your message effectively.",
      icon: "Palette",
      image: "/placeholder.svg?height=600&width=800",
      slug: "designing",
    },
    {
      title: "Digital Printing",
      description:
        "Fast, high-quality printing ideal for short runs and variable data with quick turnaround times and vibrant colors.",
      icon: "Printer",
      image: "/placeholder.svg?height=600&width=800",
      slug: "digital-printing",
    },
    {
      title: "Offset Printing",
      description:
        "Superior quality and color consistency for larger print runs with exceptional detail and professional finish.",
      icon: "Layers",
      image: "/placeholder.svg?height=600&width=800",
      slug: "offset-printing",
    },
    {
      title: "Laser Printing",
      description:
        "Precise and sharp text and graphics for professional documents and marketing materials with excellent clarity.",
      icon: "Zap",
      image: "/placeholder.svg?height=600&width=800",
      slug: "laser-printing",
    },
    {
      title: "UV Printing",
      description:
        "Vibrant colors and durable finishes that resist fading and can print on various materials including plastic and metal.",
      icon: "Sun",
      image: "/placeholder.svg?height=600&width=800",
      slug: "uv-printing",
    },
  ]

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">Our Services</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive printing and design solutions tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <SectionAnimation key={service.slug} delay={index * 200}>
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <h2 className="text-3xl font-semibold tracking-tight mb-6">{service.title}</h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div
                    className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

