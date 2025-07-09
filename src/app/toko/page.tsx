
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { products, type Product } from '@/lib/data';
import Image from 'next/image';
import { useCartDispatch } from '@/hooks/use-cart';
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from 'lucide-react';
import { CtaSection } from '@/components/cta-section';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function TokoPage() {
  const dispatch = useCartDispatch();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
    toast({
      title: "Sukses!",
      description: `${product.name} telah ditambahkan ke keranjang.`,
    });
  };

  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
            src="https://images.unsplash.com/photo-1583316174966-d812f25a0735?w=1200&h=500&fit=crop&q=80"
            alt="Keranjang belanja online di layar laptop"
            data-ai-hint="online shopping cart"
            fill
            priority
            className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Toko Online</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Dapatkan produk perawatan jalan kualitas terbaik langsung dari kami.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  <CardDescription className="font-bold text-primary/90 text-lg">{formatPrice(product.price)}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Tambah ke Keranjang
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
