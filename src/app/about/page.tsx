import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Target, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">About CemerlangGroup</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Building the foundations for a connected and sustainable future through excellence in road engineering.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 2001, CemerlangGroup began with a small team of passionate engineers and a single, powerful vision: to revolutionize the road construction industry. We saw a need for more durable, sustainable, and cost-effective materials and solutions.
              </p>
              <p className="text-muted-foreground">
                Over the past two decades, we've grown into a leading provider of road maintenance products, trusted by public and private sectors alike. Our journey has been one of continuous innovation, unwavering commitment to quality, and a deep-seated desire to build infrastructure that lasts for generations.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Company History"
                data-ai-hint="old photo construction"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Mission & Values</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our principles guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To provide superior road construction and maintenance solutions that enhance safety, connectivity, and quality of life for communities.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We are committed to the highest standards of quality in our products, services, and operations.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We operate with honesty, transparency, and a strong sense of ethics in all our business dealings.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We prioritize environmentally responsible practices and the development of sustainable materials.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Our Clients & Partners</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            We are proud to have worked with a diverse range of clients who trust us to deliver.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-muted-foreground">
            <span className="font-headline text-xl">Client Logo 1</span>
            <span className="font-headline text-xl">Client Logo 2</span>
            <span className="font-headline text-xl">Client Logo 3</span>
            <span className="font-headline text-xl">Client Logo 4</span>
            <span className="font-headline text-xl">Client Logo 5</span>
          </div>
        </div>
      </section>
    </>
  );
}
