import { Printer, Layers, Maximize2, Sparkles, Palette, Zap, Sun, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface TechnologyCardProps {
  title: string
  description: string
  icon: string
}

export default function TechnologyCard({ title, description, icon }: TechnologyCardProps) {
  const IconComponent = getIconComponent(icon)
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 text-center h-full">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="h-6 w-6 text-gray-900" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  )
}

function getIconComponent(iconName: string): LucideIcon {
  switch (iconName) {
    case "Printer":
      return Printer
    case "Layers":
      return Layers
    case "Maximize2":
      return Maximize2
    case "Sparkles":
      return Sparkles
    case "Palette":
      return Palette
    case "Zap":
      return Zap
    case "Sun":
      return Sun
    default:
      return Printer
  }
}

