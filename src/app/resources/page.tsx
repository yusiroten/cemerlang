import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Phone } from 'lucide-react';

const guides = [
  {
    title: 'Panduan Perbaikan Lubang',
    description: 'Panduan langkah demi langkah tentang cara memperbaiki lubang secara efektif menggunakan CG-Pave Cold Patch untuk hasil yang tahan lama.',
    file: 'pothole-repair-guide.pdf',
  },
  {
    title: 'Praktik Terbaik Penambalan Retak',
    description: 'Pelajari teknik yang tepat untuk menutup retakan pada aspal untuk mencegah kerusakan akibat air dan memperpanjang umur perkerasan.',
    file: 'crack-sealing-guide.pdf',
  },
  {
    title: 'Manual Aplikasi Pelapisan Pelindung',
    description: 'Maksimalkan manfaat perlindungan dari CG-Coat Surface Sealant dengan manual aplikasi terperinci kami.',
    file: 'sealcoating-manual.pdf',
  },
  {
    title: 'Standar & Teknik Marka Jalan',
    description: 'Tinjauan standar industri dan teknik aplikasi untuk marka jalan yang tahan lama dan sangat terlihat.',
    file: 'road-marking-guide.pdf',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Sumber Daya & Panduan</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Pengetahuan ahli untuk membantu Anda sukses dalam proyek Anda. Unduh panduan kami atau hubungi kami untuk konsultasi.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-headline text-3xl font-bold text-primary mb-8">Panduan Aplikasi yang Dapat Diunduh</h2>
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
                  <CardTitle className="font-headline text-2xl text-primary">Butuh Saran Ahli?</CardTitle>
                  <CardDescription>
                    Spesialis kami siap membantu Anda memilih produk dan solusi yang tepat untuk proyek Anda.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Kami menawarkan:
                    <ul className="list-disc list-inside mt-2 text-muted-foreground">
                      <li>Rekomendasi produk</li>
                      <li>Dukungan teknis</li>
                      <li>Perencanaan solusi khusus</li>
                    </ul>
                  </p>
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
    </>
  );
}
