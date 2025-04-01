import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import SectionAnimation from "@/components/section-animation"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params

  // This would typically come from a database or CMS
  const serviceData = getServiceData(slug)

  if (!serviceData) {
    return <div>Service not found</div>
  }

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">{serviceData.title}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">{serviceData.shortDescription}</p>
        </div>
      </section>

      {/* Service Overview */}
      <SectionAnimation>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">Overview</h2>
                <div className="space-y-4 text-gray-600">
                  {serviceData.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={serviceData.image || "/placeholder.svg"}
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Features */}
      <SectionAnimation delay={200}>
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Key Features</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                What makes our {serviceData.title.toLowerCase()} service stand out
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Applications */}
      <SectionAnimation delay={400}>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Applications</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Common uses for our {serviceData.title.toLowerCase()} service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceData.applications.map((application, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">{application.title}</h3>
                  <p className="text-gray-600 text-sm">{application.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* CTA Section */}
      <SectionAnimation delay={600}>
        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
              Ready to get started with {serviceData.title}?
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Contact us today to discuss your project and get a quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base">
                  Get a quote
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8 py-6 text-base">
                  View related projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </SectionAnimation>
    </main>
  )
}

function getServiceData(slug: string) {
  const services = {
    designing: {
      title: "Designing",
      shortDescription: "Professional graphic design services to bring your vision to life",
      description: [
        "Our design services are the foundation of exceptional print materials. We combine creativity with strategic thinking to create designs that not only look great but also effectively communicate your message and achieve your goals.",
        "Our team of experienced designers works closely with you to understand your brand, target audience, and objectives. We then translate these insights into visually compelling designs that stand out in today's competitive marketplace.",
        "Whether you need a complete brand identity, marketing materials, or packaging design, our design team has the expertise to deliver results that exceed your expectations.",
      ],
      image: "/placeholder.svg?height=600&width=800",
      features: [
        {
          title: "Brand Identity Design",
          description:
            "Logos, color palettes, typography, and brand guidelines that establish a cohesive visual identity.",
        },
        {
          title: "Print Design",
          description: "Brochures, flyers, business cards, and other marketing materials designed for maximum impact.",
        },
        {
          title: "Packaging Design",
          description: "Eye-catching packaging that protects your product and enhances your brand presence.",
        },
        {
          title: "Custom Illustration",
          description: "Unique illustrations and graphics that bring your ideas to life and differentiate your brand.",
        },
        {
          title: "Layout Design",
          description: "Effective arrangement of visual elements to guide the viewer's eye and enhance readability.",
        },
        {
          title: "Design Consultation",
          description: "Expert advice on design strategies to achieve your specific business objectives.",
        },
      ],
      applications: [
        {
          title: "Marketing Materials",
          description: "Brochures, flyers, posters, and promotional items.",
        },
        {
          title: "Corporate Identity",
          description: "Business cards, letterheads, envelopes, and stationery.",
        },
        {
          title: "Packaging",
          description: "Product boxes, labels, bags, and retail packaging.",
        },
        {
          title: "Publications",
          description: "Magazines, catalogs, books, and annual reports.",
        },
      ],
    },
    "digital-printing": {
      title: "Digital Printing",
      shortDescription: "Fast, high-quality printing ideal for short runs and variable data",
      description: [
        "Digital printing is a modern printing method that directly transfers digital files to a printing surface. Unlike traditional offset printing, digital printing doesn't require printing plates, making it ideal for quick turnaround times and cost-effective short runs.",
        "Our state-of-the-art digital printing equipment produces vibrant colors, sharp text, and detailed images with exceptional quality. We can print on a wide range of paper stocks and materials to suit your specific needs.",
        "Digital printing also enables variable data printing, allowing you to personalize each printed piece with unique information such as names, addresses, or custom messages—perfect for direct mail campaigns and personalized marketing materials.",
      ],
      image: "/placeholder.svg?height=600&width=800",
      features: [
        {
          title: "Quick Turnaround",
          description: "Fast production times for urgent projects and tight deadlines.",
        },
        {
          title: "Cost-Effective Short Runs",
          description: "Economical printing for small quantities without sacrificing quality.",
        },
        {
          title: "Variable Data Printing",
          description: "Personalize each printed piece with unique information for targeted marketing.",
        },
        {
          title: "Vibrant Colors",
          description: "Rich, consistent color reproduction for eye-catching materials.",
        },
        {
          title: "On-Demand Printing",
          description: "Print only what you need, when you need it, reducing waste and storage costs.",
        },
        {
          title: "Wide Material Selection",
          description: "Print on various paper stocks, cardstocks, and specialty materials.",
        },
      ],
      applications: [
        {
          title: "Marketing Collateral",
          description: "Brochures, flyers, postcards, and promotional materials.",
        },
        {
          title: "Business Stationery",
          description: "Business cards, letterheads, and envelopes.",
        },
        {
          title: "Direct Mail",
          description: "Personalized mailers, postcards, and targeted campaigns.",
        },
        {
          title: "Presentations",
          description: "Proposals, reports, and presentation materials.",
        },
      ],
    },
    "offset-printing": {
      title: "Offset Printing",
      shortDescription: "Superior quality and color consistency for larger print runs",
      description: [
        "Offset printing is a traditional printing technique that transfers ink from a plate to a rubber blanket, then onto the printing surface. This indirect method produces consistent, high-quality results that are ideal for large print runs.",
        "Our offset printing services deliver exceptional color accuracy, sharp details, and a professional finish. The process allows for printing on a wide variety of paper types and weights, including uncoated, coated, and specialty stocks.",
        "For projects requiring large quantities, offset printing offers cost-effective solutions with consistent quality throughout the entire run. It's the preferred method for premium marketing materials, publications, and corporate communications where quality is paramount.",
      ],
      image: "/placeholder.svg?height=600&width=800",
      features: [
        {
          title: "Superior Print Quality",
          description: "Exceptional detail, sharp text, and smooth gradients for professional results.",
        },
        {
          title: "Cost-Effective Large Runs",
          description: "Economical printing for high-volume projects with consistent quality.",
        },
        {
          title: "Pantone Color Matching",
          description: "Precise color matching for brand consistency and special inks.",
        },
        {
          title: "Wide Range of Paper Options",
          description: "Print on various paper types, weights, and finishes for different applications.",
        },
        {
          title: "Special Finishes",
          description: "Options for varnishes, coatings, and specialty techniques to enhance your materials.",
        },
        {
          title: "Consistent Results",
          description: "Reliable color and quality consistency throughout large print runs.",
        },
      ],
      applications: [
        {
          title: "Magazines & Catalogs",
          description: "High-quality publications with consistent color throughout.",
        },
        {
          title: "Marketing Materials",
          description: "Premium brochures, folders, and promotional items.",
        },
        {
          title: "Packaging",
          description: "Boxes, labels, and product packaging requiring precise colors.",
        },
        {
          title: "Corporate Communications",
          description: "Annual reports, company literature, and premium stationery.",
        },
      ],
    },
    "laser-printing": {
      title: "Laser Printing",
      shortDescription: "Precise and sharp text and graphics for professional documents",
      description: [
        "Laser printing uses electrostatic digital technology to produce high-quality text and graphics. A laser beam passes over a charged drum to define the image, which then attracts toner particles that are transferred to the paper and fused with heat.",
        "Our laser printing services deliver exceptional text clarity and line definition, making them ideal for documents where readability and professional appearance are essential. The process produces crisp, smudge-resistant prints that maintain their quality over time.",
        "Laser printing is particularly well-suited for business documents, forms, and materials with fine text or detailed line art. It offers fast turnaround times and consistent results for your day-to-day printing needs.",
      ],
      image: "/placeholder.svg?height=600&width=800",
      features: [
        {
          title: "Exceptional Text Clarity",
          description: "Crisp, sharp text that's easy to read even at small font sizes.",
        },
        {
          title: "Fast Production",
          description: "Quick printing for time-sensitive documents and business materials.",
        },
        {
          title: "Smudge-Resistant",
          description: "Durable prints that won't smear or fade with handling.",
        },
        {
          title: "Precise Line Art",
          description: "Accurate reproduction of detailed graphics and fine lines.",
        },
        {
          title: "Consistent Quality",
          description: "Reliable results page after page for multi-page documents.",
        },
        {
          title: "Cost-Effective",
          description: "Economical printing for everyday business documents and forms.",
        },
      ],
      applications: [
        {
          title: "Business Documents",
          description: "Contracts, proposals, reports, and presentations.",
        },
        {
          title: "Forms",
          description: "Invoices, order forms, applications, and questionnaires.",
        },
        {
          title: "Manuals",
          description: "Instruction manuals, employee handbooks, and technical documentation.",
        },
        {
          title: "Letters",
          description: "Professional correspondence, memos, and notifications.",
        },
      ],
    },
    "uv-printing": {
      title: "UV Printing",
      shortDescription: "Vibrant colors and durable finishes on various materials",
      description: [
        "UV printing is an advanced technique that uses ultraviolet light to dry or cure ink as it's printed. This innovative process allows for printing on a wide range of materials, including plastic, metal, glass, wood, and more.",
        "Our UV printing services produce vibrant colors with exceptional durability and scratch resistance. The UV-cured ink creates a raised effect that adds dimension and tactile interest to your printed materials, enhancing their visual and sensory appeal.",
        "The versatility of UV printing makes it ideal for specialty applications, promotional products, and premium marketing materials that need to stand out. It's also an environmentally friendly option, as UV inks contain no volatile organic compounds (VOCs).",
      ],
      image: "/placeholder.svg?height=600&width=800",
      features: [
        {
          title: "Material Versatility",
          description: "Print on non-porous surfaces like plastic, metal, glass, and more.",
        },
        {
          title: "Vibrant Colors",
          description: "Rich, saturated colors that pop with exceptional visual impact.",
        },
        {
          title: "Instant Drying",
          description: "No waiting for ink to dry, allowing for immediate handling and finishing.",
        },
        {
          title: "Raised Texture",
          description: "Create tactile effects with raised ink that adds dimension to your materials.",
        },
        {
          title: "Durability",
          description: "Scratch-resistant, fade-resistant prints that maintain their quality over time.",
        },
        {
          title: "Eco-Friendly",
          description: "UV inks contain no VOCs, making them a more environmentally responsible choice.",
        },
      ],
      applications: [
        {
          title: "Promotional Products",
          description: "Branded items, giveaways, and custom merchandise.",
        },
        {
          title: "Signage",
          description: "Indoor and outdoor signs, displays, and point-of-purchase materials.",
        },
        {
          title: "Packaging",
          description: "Premium product packaging, labels, and retail displays.",
        },
        {
          title: "Specialty Items",
          description: "Business cards, invitations, and premium marketing materials.",
        },
      ],
    },
  }

  return services[slug as keyof typeof services]
}

