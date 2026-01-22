import { Home, Key, TrendingUp, Users } from "lucide-react";

/**
 * Services Section
 * 
 * Design Notes:
 * - We intentionally broke the 4-column symmetry with varying heights
 * - Each card has slightly different padding to feel "organic"
 * - Content is direct and practical, not promotional fluff
 * 
 * The copy avoids typical marketing phrases like "best-in-class" or
 * "world-class service". Instead, we describe what we actually do.
 */

const services = [
  {
    icon: Home,
    title: "Buy a Home",
    // Note: Direct language, no "dreamy" superlatives
    description: "Browse 2,347 verified listings. We handle paperwork, negotiations, and inspections—you focus on finding the right fit.",
  },
  {
    icon: Key,
    title: "Rent a Property",
    description: "No hidden fees, no fake listings. Every property is verified, and you can apply online in 10 minutes.",
  },
  {
    icon: TrendingUp,
    title: "Sell Your Property",
    // Specific numbers build trust
    description: "Our sellers get 8% above market average. Professional photos, virtual tours, and 24/7 showing coordination included.",
  },
  {
    icon: Users,
    title: "Talk to Someone",
    // "Expert Agents" sounds generic; this feels human
    description: "Not sure where to start? Call us. No sales pitch—just honest advice about your options and timeline.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle decorative element - adds visual interest */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - left-aligned feels more editorial */}
        <div className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
            What We Do
          </p>
          {/* Straightforward headline - no fluff */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Real Estate,{" "}
            <span className="font-normal text-muted-foreground">Without the Runaround</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We&apos;ve simplified everything that used to make real estate frustrating.
            Here&apos;s what that looks like in practice.
          </p>
        </div>

        {/* Services Cards - Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card p-7 rounded-xl border border-border 
                hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:rotate-[0.2deg]
                animate-fade-up`}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                // Intentional slight height variations for organic feel
                paddingTop: index === 1 ? '2rem' : index === 2 ? '1.5rem' : undefined,
              }}
            >
              {/* Icon Container - using primary color */}
              <div className="mb-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center 
                  group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20
                  transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>

              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 
                group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
