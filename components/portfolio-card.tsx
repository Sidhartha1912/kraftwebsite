import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface PortfolioCardProps {
  title: string
  category: string
  description: string
  imageSrc: string
}

export default function PortfolioCard({ title, category, description, imageSrc }: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/portfolio/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
        >
          View project <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

