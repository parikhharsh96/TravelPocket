import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export function BreadcrumbNav() {
  return (
    <div className="bg-[#f4f4f4] border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/kailash-mansarovar-yatra" className="hover:text-primary transition-colors">
            Kailash Mansarovar Yatra
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">Book Package</span>
        </div>
      </div>
    </div>
  )
}
