import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    name: 'CG-Asphalt Premium Mix',
    description: 'A superior hot-mix asphalt designed for high-traffic motorways and primary roads. Offers exceptional durability, resistance to rutting, and a smooth finish for enhanced driver safety.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'asphalt texture'
  },
  {
    name: 'CG-Seal Crack Filler',
    description: 'A flexible, polymer-modified sealant for filling cracks in asphalt and concrete surfaces. Prevents water ingress and extends pavement life. Suitable for all climates.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'road crack'
  },
  {
    name: 'CG-Pave Cold Patch',
    description: 'A high-performance, ready-to-use cold patch material for instant pothole repairs. Can be applied in all weather conditions, ensuring immediate and long-lasting results.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'pothole road'
  },
  {
    name: 'CG-Coat Surface Sealant',
    description: 'A protective sealcoating that rejuvenates and protects asphalt surfaces. Shields against UV radiation, water, and chemical spills, giving pavements a fresh, black finish.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'wet asphalt'
  },
  {
    name: 'CG-Mark ThermoPaint',
    description: 'A thermoplastic road marking paint with high retroreflectivity for superior visibility day and night. Quick-drying and extremely durable, ideal for highways and city streets.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'road markings'
  },
  {
    name: 'CG-Base Aggregate',
    description: 'A high-quality, crushed stone aggregate that forms a stable and reliable base for all types of pavement structures. Engineered for optimal compaction and load distribution.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'gravel pile'
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Products</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Engineered for performance, durability, and sustainability.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="relative h-56 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
