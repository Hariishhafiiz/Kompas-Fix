"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Mountain, Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/jalur-pendakian", label: "Jalur Pendakian" },
  { href: "/info-penting", label: "Info Penting" },
  { href: "/kontak", label: "Kontak" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-14 md:h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Mountain className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
          <span className="font-bold text-sm md:text-base text-gray-800">KOMPAS Bansari</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                pathname === item.href ? "text-green-600" : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="p-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Mountain className="h-5 w-5 text-green-600" />
                <span className="font-bold text-gray-800">KOMPAS Bansari</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-2">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base font-medium transition-colors hover:text-green-600 py-2 px-3 rounded-md ${
                    pathname === item.href ? "text-green-600 bg-green-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
