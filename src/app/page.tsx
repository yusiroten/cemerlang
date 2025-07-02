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
          alt="Proyek perawatan jalan"
          data-ai-hint="road construction"
          fill
          className="object-cover -z-10"
        />
        <div className="container mx-auto px-4 z-10">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg">
            Membangun Jalan Menuju Masa Depan yang Lebih Baik
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Memimpin inovasi dalam perawatan jalan dengan solusi yang tahan lama, berkelanjutan, dan hemat biaya.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">
                Produk Kami <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Komitmen Kami pada Keunggulan
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Kami menyediakan solusi komprehensif yang disesuaikan untuk memenuhi standar kualitas dan kinerja tertinggi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                <Construction className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Bahan Tahan Lama</h3>
              <p className="font-body text-muted-foreground">
                Aspal dan pelapis berkualitas tinggi yang dirancang untuk umur panjang dan ketahanan terhadap cuaca ekstrem.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Solusi Canggih</h3>
              <p className="font-body text-muted-foreground">
                Teknik aplikasi inovatif untuk penambalan retak, perbaikan lubang, dan perawatan permukaan.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-foreground mb-4">
                <Wind className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Pendekatan Ramah Lingkungan</h3>
              <p className="font-body text-muted-foreground">
                Komitmen terhadap praktik dan bahan berkelanjutan yang meminimalkan dampak lingkungan.
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
                alt="Tim CemerlangGroup"
                data-ai-hint="team meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
                Keahlian Puluhan Tahun di bidang Infrastruktur
              </h2>
              <p className="font-body text-lg mb-6 text-muted-foreground">
                CemerlangGroup telah menjadi mitra terpercaya dalam industri konstruksi jalan selama lebih dari 20 tahun. Misi kami adalah memberikan kualitas luar biasa dan solusi inovatif yang menghubungkan masyarakat dan mendorong kemajuan.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-5 w-5" />
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
            Siap Membangun Hari Esok yang Lebih Baik?
          </h2>
          <p className="font-body text-lg max-w-3xl mx-auto mb-8">
            Mari diskusikan bagaimana CemerlangGroup dapat mendukung proyek Anda berikutnya. Para ahli kami siap memberikan konsultasi dan rekomendasi produk.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Hubungi Kami</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
