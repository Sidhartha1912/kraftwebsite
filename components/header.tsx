"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : pathname === "/"
            ? "bg-black/80 backdrop-blur-md"
            : "bg-white/90 backdrop-blur-md shadow-sm",
        pathname === "/" && !isScrolled && !isMobileMenuOpen ? "text-white" : "text-gray-900",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl">
            KraftDaddy
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-500",
                  pathname === link.href ? "underline underline-offset-4" : "",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant={pathname === "/" && !isScrolled ? "outline" : "default"}
                className={cn(
                  "rounded-full",
                  pathname === "/" && !isScrolled
                    ? "border-white text-white hover:bg-white/20 hover:text-white"
                    : "hover:bg-gray-800 hover:text-white",
                )}
              >
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-500 py-2",
                  pathname === link.href ? "underline underline-offset-4" : "",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-full hover:bg-gray-800 hover:text-white">Get a Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

