import Link from "next/link"
import Image from "next/image"

import SectionAnimation from "@/components/section-animation"

export default function ProductsPage() {
  // This would typically come from a database or CMS
  const products = [
    {
      title: "T-shirts",
      description: "Custom printed t-shirts perfect for events, promotions, and team uniforms.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "t-shirts",
    },
    {
      title: "Pamphlets",
      description: "Informative and eye-catching pamphlets to communicate your message effectively.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "pamphlets",
    },
    {
      title: "Menus",
      description: "Stylish and durable menus for restaurants, cafes, and food service businesses.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "menus",
    },
    {
      title: "Badges",
      description: "Professional ID badges and name tags for events, conferences, and businesses.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "badges",
    },
    {
      title: "Brochures",
      description: "High-quality brochures that showcase your products and services in the best light.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "brochures",
    },
    {
      title: "Booklets",
      description: "Professionally bound booklets for catalogs, programs, and detailed information.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "booklets",
    },
    {
      title: "Trophies",
      description: "Custom engraved trophies and awards to recognize achievements and milestones.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "trophies",
    },
    {
      title: "Pens",
      description: "Branded pens that serve as practical promotional items for your business.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "pens",
    },
    {
      title: "Premium Business Cards",
      description:
        "Make a lasting first impression with our premium business cards featuring high-quality paper and finishes.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "premium-business-cards",
    },
    {
      title: "Custom Packaging",
      description: "Elevate your product presentation with custom packaging solutions designed to impress.",
      image: "/placeholder.svg?height=600&width=800",
      slug: "custom-packaging",
    },
  ]

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">Our Products</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our range of high-quality printed products designed to elevate your brand
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <SectionAnimation key={product.slug} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg group h-full">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <Link
                      href={`/contact?product=${product.slug}`}
                      className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
                    >
                      Request a quote
                    </Link>
                  </div>
                </div>
              </SectionAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            Don't see what you're looking for?
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We offer a wide range of custom printing solutions. Contact us to discuss your specific needs.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-base font-medium">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

