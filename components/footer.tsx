import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * Footer Component
 * 
 * Design Philosophy:
 * - Uses warm dark background instead of pure black
 * - Copy is conversational, not corporate
 * - Newsletter signup is honest about what you'll receive
 * - Contact info feels accessible, not intimidating
 */

export function Footer() {
  // Using current year dynamically - standard practice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-semibold">Weekly Market Digest</h3>
              {/* Honest description - not "exclusive tips" or "insider secrets" */}
              <p className="text-primary-foreground/60 text-sm max-w-md">
                New listings, price changes, and neighborhood updates.
                One email per week, unsubscribe anytime.
              </p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground 
                  placeholder:text-primary-foreground/40 md:w-64 focus:border-primary"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground 
                  transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">HAVEN</span>
            </Link>
            {/* Removed cheesy tagline, kept it simple */}
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Real estate for people who don&apos;t enjoy real estate.
              We handle the complicated parts.
            </p>
            {/* Business hours - feels more human */}
            <p className="text-primary-foreground/40 text-xs">
              Mon–Fri: 9am–6pm • Sat: 10am–4pm
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-primary-foreground/80">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/properties", label: "All Properties" },
                { href: "/properties?type=sale", label: "Buy" },
                { href: "/properties?type=rent", label: "Rent" },
                { href: "/list-property", label: "Sell Your Home" },
                { href: "/agents", label: "Our Team" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/50 hover:text-primary-foreground 
                      transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 
                      group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-primary-foreground/80">
              Property Types
            </h4>
            <ul className="space-y-2.5">
              {["Houses", "Apartments", "Condos", "Townhouses", "Commercial"].map((type) => (
                <li key={type}>
                  <Link
                    href={`/properties?type=${type.toLowerCase()}`}
                    className="text-primary-foreground/50 hover:text-primary-foreground 
                      transition-colors text-sm"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - accessible and friendly */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm text-primary-foreground/80">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/50 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  123 Real Estate Ave, Suite 100
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground 
                    text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>(555) 123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@havenrealty.com"
                  className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground 
                    text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  <span>hello@havenrealty.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 
          flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 
          text-xs text-primary-foreground/40">
          <p>© {currentYear} Haven Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms
            </Link>
            <Link href="/accessibility" className="hover:text-primary-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
