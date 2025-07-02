
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { products } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Katalog Produk</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Solusi material inovatif yang direkayasa untuk performa, daya tahan, dan keberlanjutan infrastruktur jalan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
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
                  <CardTitle className="font-headline text-xl h-14">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                 <CardFooter>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/toko">
                      Beli Sekarang
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary">Tidak Menemukan yang Anda Cari?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground mb-8">
            Tim ahli kami siap membantu Anda menemukan atau bahkan mengembangkan solusi khusus untuk kebutuhan unik proyek Anda.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Hubungi Tim Teknis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
