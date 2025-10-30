import {
  Facebook,
  Twitter,
  Instagram,
  Calendar,
  Phone,
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BookingHeader() {
  return (
    <header className="border-b border-border">
      {/* Top bar - Hide on mobile, show on md and up */}
      <div className="hidden md:block bg-[#f4f4f4] border-b border-border">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Calendar className="w-4 h-4" />
              <span>2025 CALENDAR</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 78270-33601</span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              BLOGS
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              JOIN POCKETCLUB
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              OFFERS
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              FAQS
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition-colors">
              CONTACT
            </Link>
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              EN <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-[#1c8ca7]">travel</span>
              <span className="text-foreground">pocket</span>
            </div>
            <div className="text-xs text-muted-foreground hidden md:block">keep your adventure alive</div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              KAILASH MANSAROVAR <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              ADI KAILASH <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              ALL DESTINATIONS <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm lg:text-base">
              WHO WE ARE <ChevronDown className="w-4 h-4" />
            </button>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
