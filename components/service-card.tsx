import {
  Building,
  Megaphone,
  Package,
  Maximize,
  ShoppingBag,
  Palette,
  Printer,
  Layers,
  Zap,
  Sun,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = getIconComponent(icon)
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/services/${slug}`}>
      <div className="bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 h-full">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <IconComponent className="h-6 w-6 text-gray-900" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  )
}

function getIconComponent(iconName: string): LucideIcon {
  switch (iconName) {
    case "Building":
      return Building
    case "Megaphone":
      return Megaphone
    case "Package":
      return Package
    case "Maximize":
      return Maximize
    case "ShoppingBag":
      return ShoppingBag
    case "Palette":
      return Palette
    case "Printer":
      return Printer
    case "Layers":
      return Layers
    case "Zap":
      return Zap
    case "Sun":
      return Sun
    default:
      return Building
  }
}

