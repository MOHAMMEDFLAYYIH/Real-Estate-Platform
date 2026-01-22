import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Building2, Heart, Shield, Users } from "lucide-react";
import Image from "next/image";

const values = [
    {
        icon: Heart,
        title: "Client-Centered",
        description: "Your dream home is our priority. We listen, understand, and deliver personalized solutions.",
    },
    {
        icon: Shield,
        title: "Trust & Integrity",
        description: "Transparent dealings and honest advice form the foundation of every relationship.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Our seasoned professionals bring deep market knowledge and negotiation skills.",
    },
    {
        icon: Building2,
        title: "Premium Properties",
        description: "Access to exclusive listings and off-market opportunities you won't find elsewhere.",
    },
];

const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "2,500+", label: "Properties Sold" },
    { value: "1,800+", label: "Happy Clients" },
    { value: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="relative py-20 bg-muted">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4 mb-12">
                            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                                About Us
                            </p>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                                Your Trusted Partner in <span className="italic">Real Estate</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                For over 15 years, Haven has been helping families find their perfect homes
                                and investors build their portfolios.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                                    alt="Haven Real Estate Office"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="font-serif text-3xl font-bold text-foreground">
                                    Our Story
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        Founded in 2009, Haven Real Estate began with a simple mission: to transform
                                        the home buying experience from stressful to seamless. What started as a
                                        small team of passionate real estate professionals has grown into one of
                                        the most trusted names in the industry.
                                    </p>
                                    <p>
                                        Today, we continue to uphold the values that made us who we are—integrity,
                                        expertise, and an unwavering commitment to our clients. Whether you're
                                        buying your first home, selling a cherished property, or investing in your
                                        future, Haven is here to guide you every step of the way.
                                    </p>
                                    <p>
                                        Our team of expert agents combines deep local market knowledge with
                                        cutting-edge technology to deliver exceptional results. We believe that
                                        everyone deserves a place to call home, and we're dedicated to making
                                        that dream a reality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-primary">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground">
                                        {stat.value}
                                    </p>
                                    <p className="text-primary-foreground/80 text-sm uppercase tracking-wide mt-2">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-muted">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4 mb-12">
                            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                                Our Values
                            </p>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                                What Sets Us <span className="italic">Apart</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="bg-card p-8 rounded-lg border border-border text-center"
                                >
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
