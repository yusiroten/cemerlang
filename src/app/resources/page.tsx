import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Phone } from 'lucide-react';

const guides = [
  {
    title: 'Guide to Pothole Repair',
    description: 'A step-by-step guide on effectively repairing potholes using CG-Pave Cold Patch for long-lasting results.',
    file: 'pothole-repair-guide.pdf',
  },
  {
    title: 'Best Practices for Crack Sealing',
    description: 'Learn the proper techniques for sealing cracks in asphalt to prevent water damage and extend pavement life.',
    file: 'crack-sealing-guide.pdf',
  },
  {
    title: 'Sealcoating Application Manual',
    description: 'Maximize the protective benefits of CG-Coat Surface Sealant with our detailed application manual.',
    file: 'sealcoating-manual.pdf',
  },
  {
    title: 'Road Marking Standards & Techniques',
    description: 'An overview of industry standards and application techniques for durable and highly visible road markings.',
    file: 'road-marking-guide.pdf',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Resources & Guides</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Expert knowledge to help you succeed in your projects. Download our guides or contact us for a consultation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold text-primary mb-8">Downloadable Application Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guides.map((guide) => (
                  <Card key={guide.title} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow" />
                    <CardFooter>
                      <Button asChild className="w-full bg-accent hover:bg-accent/90">
                        <a href={`/guides/${guide.file}`} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-card sticky top-24">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">Need Expert Advice?</CardTitle>
                  <CardDescription>
                    Our specialists are here to help you choose the right products and solutions for your project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>We offer:
                    <ul className="list-disc list-inside mt-2 text-muted-foreground">
                      <li>Product recommendations</li>
                      <li>Technical support</li>
                      <li>Custom solution planning</li>
                    </ul>
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Request a Consultation
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
