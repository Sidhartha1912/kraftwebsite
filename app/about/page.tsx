import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import SectionAnimation from "@/components/section-animation"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">About KraftDaddy</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            We're passionate about delivering exceptional printing solutions that help brands stand out.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <SectionAnimation>
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2010, KraftDaddy began with a simple mission: to provide businesses with exceptional
                    printing services that elevate their brand presence. What started as a small print shop has grown
                    into a comprehensive design and printing solution provider trusted by businesses of all sizes.
                  </p>
                  <p>
                    Our journey has been defined by a commitment to quality, innovation, and customer satisfaction.
                    We've continuously invested in state-of-the-art technology and talented professionals to ensure we
                    deliver the best possible results for our clients.
                  </p>
                  <p>
                    Today, KraftDaddy is recognized as a leader in the printing industry, known for our attention to
                    detail, creative solutions, and reliable service. We're proud of our growth but remain committed to
                    the personalized approach that has been the foundation of our success.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="KraftDaddy team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* Our Mission & Values Section */}
      <SectionAnimation delay={200}>
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Mission & Values</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with exceptional printing solutions that enhance their brand identity,
                  communicate their message effectively, and help them stand out in a competitive marketplace. We strive
                  to be more than just a printing service—we aim to be a trusted partner in our clients' success.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm h-full">
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Quality Excellence:</span> We never compromise on quality, from
                    materials to execution.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Innovation:</span> We continuously explore new technologies and
                    techniques to deliver the best results.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Integrity:</span> We operate with honesty, transparency, and
                    ethical business practices.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Customer Focus:</span> We put our clients' needs first and
                    strive to exceed their expectations.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Sustainability:</span> We're committed to environmentally
                    responsible printing practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>

      {/* CTA Section */}
      <SectionAnimation delay={400}>
        <section className="w-full py-16 md:py-24 bg-black text-white">
          <div className="w-full text-center">
            <div className="max-w-2xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ready to work with us?</h2>
              <p className="mt-6 text-lg text-gray-300">
                Let's discuss how we can help bring your printing vision to life.
              </p>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="bg-white text-black hover:bg-gray-200 hover:text-black rounded-full px-8 py-6 text-base">
                    Contact us today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionAnimation>
    </main>
  )
}

