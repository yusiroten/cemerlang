
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Building, CheckCircle, FileText, Leaf, ShieldCheck } from 'lucide-react';
import { products } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { CtaSection } from '@/components/cta-section';

export default function Home() {

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1541301435424-63576135b62b?w=1920&h=1080&fit=crop&q=80"
          alt="Pekerja mengaplikasikan pelapisan jalan"
          data-ai-hint="road paving workers"
          fill
          priority
          className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-shadow-lg">
            Solusi Andal Material Jalan
          </h1>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Menyediakan material inovatif dan berkualitas tinggi untuk konstruksi dan pemeliharaan jalan yang tahan lama dan berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">
                Lihat Produk Kami <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">Hubungi Ahli Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Mengapa Memilih Cemerlang Group?
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Kami berkomitmen pada keunggulan di setiap lapis pekerjaan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Kualitas Teruji</h3>
              <p className="font-body text-muted-foreground">
                Produk kami memenuhi standar industri tertinggi untuk performa dan daya tahan maksimal.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Dukungan Ahli</h3>
              <p className="font-body text-muted-foreground">
                Tim teknis kami siap memberikan konsultasi untuk memastikan keberhasilan proyek Anda.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Ramah Lingkungan</h3>
              <p className="font-body text-muted-foreground">
                Inovasi produk yang berfokus pada efisiensi sumber daya dan dampak lingkungan minimal.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* All Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Produk Kami
            </h2>
            <p className="font-body text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Jelajahi solusi material inovatif kami yang direkayasa untuk performa, daya tahan, dan keberlanjutan infrastruktur jalan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                <div key={product.id} className="border rounded-lg overflow-hidden flex flex-col bg-card">
                   <div className="relative w-full aspect-square">
                        <Image src={product.image} alt={product.name} data-ai-hint={product.aiHint} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-headline text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                        <Button asChild variant="outline" className="mt-auto">
                            <Link href={`/products`}>
                                Pelajari Lebih Lanjut
                            </Link>
                        </Button>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* License Section */}
      <section id="lisensi" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary">Lisensi &amp; Sertifikasi Kami</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Komitmen kami terhadap kualitas dibuktikan dengan pengakuan dan standar yang kami penuhi.
              </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
                <Award className="h-10 w-10 mx-auto mb-4 text-primary"/>
                <h3 className="font-headline text-lg font-semibold">ISO 9001:2015</h3>
                <p className="text-sm text-muted-foreground mt-1">Manajemen Mutu</p>
            </Card>
             <Card className="text-center p-6">
                <Award className="h-10 w-10 mx-auto mb-4 text-primary"/>
                <h3 className="font-headline text-lg font-semibold">ISO 14001:2015</h3>
                <p className="text-sm text-muted-foreground mt-1">Manajemen Lingkungan</p>
            </Card>
             <Card className="text-center p-6">
                <FileText className="h-10 w-10 mx-auto mb-4 text-primary"/>
                <h3 className="font-headline text-lg font-semibold">TKDN</h3>
                <p className="text-sm text-muted-foreground mt-1">Tingkat Komponen Dalam Negeri</p>
            </Card>
             <Card className="text-center p-6">
                <Building className="h-10 w-10 mx-auto mb-4 text-primary"/>
                <h3 className="font-headline text-lg font-semibold">Anggota ASPA</h3>
                <p className="text-sm text-muted-foreground mt-1">Asosiasi Aspal Indonesia</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
