import Link from "next/link"
import { Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 border-t border-border/50">
      <div className="container mx-auto flex justify-end gap-4 items-center">
        <Link
          href="https://www.instagram.com/fl0rally__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="h-6 w-6" />
        </Link>
        <Link
          href="https://github.com/Mikuru1031"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-6 w-6" />
        </Link>
      </div>
    </footer>
  )
}

