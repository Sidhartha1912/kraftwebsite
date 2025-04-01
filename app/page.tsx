import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ClientLogos from "@/components/client-logos"
import ServiceCard from "@/components/service-card"
import ProductCard from "@/components/product-card"
import TechnologyCard from "@/components/technology-card"
import FeatureCard from "@/components/feature-card"
import PortfolioCard from "@/components/portfolio-card"
import SectionAnimation from "@/components/section-animation"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mx-auto">
            Exceptional printing solutions for your brand
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Elevate your brand with premium printing services that deliver precision, quality, and impact.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base">
                Explore our services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-white hover:bg-white/10 rounded-full px-8 py-6 text-base">
                Contact us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Premium printing materials"
          fill
          className="object-cover object-center opacity-50 z-[-1]"
          priority
        />
      </section>

      {/* Services Section */}
      <SectionAnimation>
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Services</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive printing and design solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Designing"
                description="Professional graphic design services to ensure your printed materials look exceptional."
                icon="Palette"
              />
              <ServiceCard
                title="Digital Printing"
                description="Fast, high-quality printing ideal for short runs and variable data with quick turnaround times."
                icon="Printer"
              />
              <ServiceCard
                title="Offset Printing"
                description="Superior quality and color consistency for larger print runs with exceptional detail."
                icon="Layers"
              />
              <ServiceCard
                title="Laser Printing"
                description="Precise and sharp text and graphics for professional documents and marketing materials."
                icon="Zap"
              />
              <ServiceCard
                title="UV Printing"
                description="Vibrant colors and durable finishes that resist fading and can print on various materials."
                icon="Sun"
              />
              <ServiceCard
                title="Large Format Printing"
                description="Banners, signage, and displays for events, retail spaces, and outdoor advertising."
                icon="Maximize"
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
              >
                View all services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Products Section */}
      <SectionAnimation delay={200}>
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Featured Products</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our most popular printing solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="T-shirts"
                description="Custom printed t-shirts perfect for events, promotions, and team uniforms."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Pamphlets"
                description="Informative and eye-catching pamphlets to communicate your message effectively."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Menus"
                description="Stylish and durable menus for restaurants, cafes, and food service businesses."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Badges"
                description="Professional ID badges and name tags for events, conferences, and businesses."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Brochures"
                description="High-quality brochures that showcase your products and services in the best light."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Booklets"
                description="Professionally bound booklets for catalogs, programs, and detailed information."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Trophies"
                description="Custom engraved trophies and awards to recognize achievements and milestones."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Pens"
                description="Branded pens that serve as practical promotional items for your business."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
              <ProductCard
                title="Custom Packaging"
                description="Elevate your product presentation with custom packaging solutions designed to impress."
                imageSrc="/placeholder.svg?height=400&width=600"
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Explore all products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Printing Technologies Section */}
      <SectionAnimation delay={400}>
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Printing Technologies</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                State-of-the-art equipment for exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <TechnologyCard
                title="Designing"
                description="Professional graphic design for print-ready materials."
                icon="Palette"
              />
              <TechnologyCard
                title="Digital Printing"
                description="Fast, high-quality printing ideal for short runs."
                icon="Printer"
              />
              <TechnologyCard
                title="Offset Printing"
                description="Superior quality for larger print runs."
                icon="Layers"
              />
              <TechnologyCard
                title="Laser Printing"
                description="Precise text and graphics for professional documents."
                icon="Zap"
              />
              <TechnologyCard
                title="UV Printing"
                description="Vibrant colors and durable finishes on various materials."
                icon="Sun"
              />
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Portfolio Section */}
      <SectionAnimation delay={600}>
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Portfolio</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore some of our recent projects and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <PortfolioCard
                title="Corporate Rebrand"
                category="Branding"
                description="Complete rebrand including logo design, business cards, and stationery for a financial services firm."
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <PortfolioCard
                title="Restaurant Menu Design"
                category="Design & Print"
                description="Custom menu design and printing for an upscale restaurant chain with multiple locations."
                imageSrc="/placeholder.svg?height=600&width=800"
              />
              <PortfolioCard
                title="Event Promotion"
                category="Marketing Materials"
                description="Comprehensive event materials including banners, programs, and badges for a major conference."
                imageSrc="/placeholder.svg?height=600&width=800"
              />
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
              >
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Clients Section */}
      <SectionAnimation delay={800}>
        <section className="w-full py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Trusted by Leading Brands</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We're proud to work with companies that demand excellence
              </p>
            </div>

            <ClientLogos />
          </div>
        </section>
      </SectionAnimation>

      {/* Why Choose Us Section */}
      <SectionAnimation delay={1000}>
        <section className="w-full py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why Choose KraftDaddy</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">What sets us apart from the competition</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                title="Exceptional Quality"
                description="We use premium materials and state-of-the-art technology to deliver outstanding results."
                icon="Award"
              />
              <FeatureCard
                title="Expert Team"
                description="Our team of experienced designers and print specialists ensure your project exceeds expectations."
                icon="Users"
              />
              <FeatureCard
                title="Fast Turnaround"
                description="Meet tight deadlines without compromising on quality with our efficient production process."
                icon="Clock"
              />
              <FeatureCard
                title="Personalized Service"
                description="We work closely with you to understand your needs and deliver tailored solutions."
                icon="HeartHandshake"
              />
              <FeatureCard
                title="Sustainable Practices"
                description="Environmentally responsible printing options that reduce your ecological footprint."
                icon="Leaf"
              />
              <FeatureCard
                title="Competitive Pricing"
                description="Premium quality at fair prices, with transparent quotes and no hidden fees."
                icon="DollarSign"
              />
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* CTA Section */}
      <SectionAnimation delay={1200}>
        <section className="w-full py-20 md:py-28 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
              Ready to elevate your brand with premium printing?
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
              Contact us today to discuss your project and discover how we can bring your vision to life.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-gray-200 hover:text-black rounded-full px-8 py-6 text-base">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </SectionAnimation>
    </main>
  )
}

