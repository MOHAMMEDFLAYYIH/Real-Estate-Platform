import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturedListings } from "@/components/featured-listings";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedListings />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
