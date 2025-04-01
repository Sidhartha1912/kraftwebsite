import { Award, Users, Clock, HeartHandshake, Leaf, DollarSign, type LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = getIconComponent(icon)

  return (
    <div className="bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <IconComponent className="h-6 w-6 text-gray-900" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function getIconComponent(iconName: string): LucideIcon {
  switch (iconName) {
    case "Award":
      return Award
    case "Users":
      return Users
    case "Clock":
      return Clock
    case "HeartHandshake":
      return HeartHandshake
    case "Leaf":
      return Leaf
    case "DollarSign":
      return DollarSign
    default:
      return Award
  }
}

