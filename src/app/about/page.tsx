import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Target, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Tentang CemerlangGroup</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Membangun fondasi untuk masa depan yang terhubung dan berkelanjutan melalui keunggulan dalam rekayasa jalan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Kisah Kami</h2>
              <p className="mb-4 text-muted-foreground">
                Didirikan pada tahun 2001, CemerlangGroup dimulai dengan tim kecil insinyur yang bersemangat dan satu visi yang kuat: merevolusi industri konstruksi jalan. Kami melihat kebutuhan akan bahan dan solusi yang lebih tahan lama, berkelanjutan, dan hemat biaya.
              </p>
              <p className="text-muted-foreground">
                Selama dua dekade terakhir, kami telah berkembang menjadi penyedia produk perawatan jalan terkemuka, yang dipercaya oleh sektor publik dan swasta. Perjalanan kami adalah salah satu inovasi berkelanjutan, komitmen yang tak tergoyahkan terhadap kualitas, dan keinginan mendalam untuk membangun infrastruktur yang bertahan selama beberapa generasi.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Sejarah Perusahaan"
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
            <h2 className="font-headline text-3xl font-bold text-primary">Misi & Nilai Kami</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip kami memandu setiap keputusan yang kami buat dan setiap proyek yang kami jalankan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Menyediakan solusi konstruksi dan pemeliharaan jalan yang unggul yang meningkatkan keselamatan, konektivitas, dan kualitas hidup masyarakat.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Kualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kami berkomitmen pada standar kualitas tertinggi dalam produk, layanan, dan operasi kami.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Integritas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kami beroperasi dengan kejujuran, transparansi, dan etika yang kuat dalam semua urusan bisnis kami.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent text-accent-foreground rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline">Keberlanjutan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Kami memprioritaskan praktik yang bertanggung jawab terhadap lingkungan dan pengembangan bahan yang berkelanjutan.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Klien & Mitra Kami</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Kami bangga telah bekerja dengan berbagai klien yang mempercayai kami untuk memberikan hasil.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-muted-foreground">
            <span className="font-headline text-xl">Logo Klien 1</span>
            <span className="font-headline text-xl">Logo Klien 2</span>
            <span className="font-headline text-xl">Logo Klien 3</span>
            <span className="font-headline text-xl">Logo Klien 4</span>
            <span className="font-headline text-xl">Logo Klien 5</span>
          </div>
        </div>
      </section>
    </>
  );
}
