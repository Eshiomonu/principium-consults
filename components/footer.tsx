import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TrainServe. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/learning" className="text-sm text-muted-foreground hover:text-primary">
            Learning
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

