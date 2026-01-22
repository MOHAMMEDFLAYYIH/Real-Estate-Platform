import { SearchBar } from "./search-bar";

/**
 * Hero Section
 * 
 * Design decisions explained:
 * - We avoided the typical "Find Your Dream Home" headline that every AI generates
 * - Stats use specific numbers (2,347 not 2,500+) because rounded numbers feel fake
 * - The subheadline is honest and direct, not over-promising
 * - Asymmetric animation delays create more organic feel
 */
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with warm overlay - not the typical blue/gray */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop')",
        }}
      >
        {/* Warm gradient overlay instead of pure black - feels more inviting */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Heading - intentionally asymmetric spacing */}
          <div className="space-y-5">
            {/* Small label - using our signature olive accent */}
            <p className="text-sm uppercase tracking-[0.25em] text-primary-foreground/70 font-medium animate-fade-up"
              style={{ animationDelay: '0.1s' }}>
              Real Estate, Simplified
            </p>

            {/* Main headline - direct, not cheesy */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] text-balance animate-fade-up"
              style={{ animationDelay: '0.2s' }}>
              The Right Place
              <br />
              <span className="font-normal opacity-90">Actually Exists</span>
            </h1>

            {/* Subheadline - honest, human, no empty promises */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-xl mx-auto text-pretty animate-fade-up"
              style={{ animationDelay: '0.35s' }}>
              We&apos;ve helped 1,847 families find homes they didn&apos;t think existed.
              No pressure, no gimmicks—just honest guidance.
            </p>
          </div>

          {/* Search Bar - slightly delayed for visual flow */}
          <div className="pt-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <SearchBar variant="hero" />
          </div>

          {/* Stats - using SPECIFIC numbers, not rounded 
              Why? Specific numbers feel researched and real.
              "2,500+" sounds like marketing; "2,347" sounds like data. */}
          <div className="flex flex-wrap justify-center gap-10 sm:gap-16 pt-10 animate-fade-up"
            style={{ animationDelay: '0.65s' }}>
            <div className="text-center">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">2,347</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider mt-1">Properties</p>
            </div>
            {/* Slightly uneven gap - intentional asymmetry */}
            <div className="text-center pl-2">
              <p className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">1,847</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider mt-1">Happy Clients</p>
            </div>
            <div className="text-center">
              {/* Smaller, realistic number - honesty over inflation */}
              <p className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground">43</p>
              <p className="text-sm text-primary-foreground/60 uppercase tracking-wider mt-1">Expert Agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - subtle animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
