import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Construction, Layers, Wind } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white bg-black/50">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Road maintenance project"
          data-ai-hint="road construction"
          fill
          className="object-cover -z-10"
        />
        <div className="container mx-auto px-4 z-10">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg">
            Paving the Way to a Better Future
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Leading innovation in road maintenance with durable, sustainable, and cost-effective solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">
                Our Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Our Commitment to Excellence
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              We provide comprehensive solutions tailored to meet the highest standards of quality and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                <Construction className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Durable Materials</h3>
              <p className="font-body text-muted-foreground">
                High-quality asphalt and sealants designed for longevity and resilience against extreme weather.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Advanced Solutions</h3>
              <p className="font-body text-muted-foreground">
                Innovative application techniques for crack sealing, pothole repair, and surface treatment.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                <Wind className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Eco-Friendly Approach</h3>
              <p className="font-body text-muted-foreground">
                Commitment to sustainable practices and materials that minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="CemerlangGroup Team"
                data-ai-hint="team meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
                Decades of Expertise in Infrastructure
              </h2>
              <p className="font-body text-lg mb-6 text-muted-foreground">
                CemerlangGroup has been a trusted partner in the road construction industry for over 20 years. Our mission is to deliver exceptional quality and innovative solutions that connect communities and drive progress.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            Ready to Build a Better Tomorrow?
          </h2>
          <p className="font-body text-lg max-w-3xl mx-auto mb-8">
            Let's discuss how CemerlangGroup can support your next project. Our experts are ready to provide consultations and product recommendations.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
