"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-2 px-6 border-b border-border/50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif">         
          <Image 
            src="/icon.png"
            alt="Mikuru's Portfolio"
            width={54}
            height={54}
          />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/works" className="text-foreground/80 hover:text-primary transition-colors">
            Works
          </Link>
          <Link href="/blogs" className="text-foreground/80 hover:text-primary transition-colors">
            Blogs
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border/50 z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="/about"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/works"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Works
              </Link>
              <Link
                href="/blogs"
                className="text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

