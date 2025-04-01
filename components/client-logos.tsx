"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // In a real implementation, this would be populated from a data source
  const logos = [
    { id: 1, name: "Company 1", src: "/placeholder.svg?height=80&width=160" },
    { id: 2, name: "Company 2", src: "/placeholder.svg?height=80&width=160" },
    { id: 3, name: "Company 3", src: "/placeholder.svg?height=80&width=160" },
    { id: 4, name: "Company 4", src: "/placeholder.svg?height=80&width=160" },
    { id: 5, name: "Company 5", src: "/placeholder.svg?height=80&width=160" },
    { id: 6, name: "Company 6", src: "/placeholder.svg?height=80&width=160" },
    { id: 7, name: "Company 7", src: "/placeholder.svg?height=80&width=160" },
    { id: 8, name: "Company 8", src: "/placeholder.svg?height=80&width=160" },
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5
    const containerWidth = scrollContainer.scrollWidth

    const scroll = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled through half the logos
      if (scrollPosition >= containerWidth / 2) {
        scrollPosition = 0
      }

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
      }

      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex items-center gap-8 md:gap-12 lg:gap-16 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Double the logos for continuous scrolling effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={160}
              height={80}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

