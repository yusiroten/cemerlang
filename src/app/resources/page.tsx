
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Phone, Wrench, FileText, MessageSquare } from 'lucide-react';
import { CtaSection } from '@/components/cta-section';
import Image from 'next/image';

const guides = [
  {
    title: 'Panduan Aplikasi Microsurfacing',
    description: 'Prosedur standar untuk aplikasi Microsurfacing CH untuk hasil yang optimal dan merata.',
    file: 'microsurfacing-guide.pdf',
  },
  {
    title: 'Teknik Penambalan Cepat dengan Coldmix',
    description: 'Langkah demi langkah memperbaiki lubang jalan secara efisien menggunakan Coldmix.',
    file: 'coldmix-patching-guide.pdf',
  },
  {
    title: 'Manual Aplikasi Waterproofing S.A.M.I',
    description: 'Praktik terbaik untuk instalasi membran S.A.M.I guna memastikan perlindungan maksimal.',
    file: 'sami-waterproofing-manual.pdf',
  },
  {
    title: 'Standar Aplikasi Marka Jalan McLeod',
    description: 'Panduan untuk aplikasi cat termoplastik McLeod untuk daya tahan dan reflektivitas tinggi.',
    file: 'mcleod-marking-guide.pdf',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
            src="https://images.unsplash.com/photo-1553775282-20af80779274?w=1200&h=500&fit=crop&q=80"
            alt="Tim dukungan teknis sedang berdiskusi"
            data-ai-hint="technical support call"
            fill
            priority
            className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Dukungan Teknis</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Kami bukan hanya pemasok material, kami adalah mitra teknis Anda di lapangan.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold text-primary mb-8">Panduan Aplikasi & Brosur</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guides.map((guide) => (
                  <Card key={guide.title} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-headline">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow" />
                    <CardFooter>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <a href={`/guides/${guide.file}`} download>
                          <Download className="mr-2 h-4 w-4" />
                          Unduh PDF
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
                  <CardTitle className="font-headline text-2xl text-primary">Butuh Bantuan Ahli?</CardTitle>
                  <CardDescription>
                    Tim spesialis kami siap membantu Anda dari perencanaan hingga pelaksanaan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Konsultasi Produk</h4>
                      <p className="text-sm text-muted-foreground">Rekomendasi produk paling sesuai untuk kondisi proyek Anda.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Dukungan Teknis Lapangan</h4>
                      <p className="text-sm text-muted-foreground">Bantuan teknis langsung di lokasi proyek Anda.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Perencanaan Solusi</h4>
                      <p className="text-sm text-muted-foreground">Pengembangan metode kerja dan solusi kustom.</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Minta Konsultasi
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
