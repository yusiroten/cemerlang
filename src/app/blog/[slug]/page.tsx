
import Image from 'next/image';
import { CtaSection } from '@/components/cta-section';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// In a real application, you would fetch this data based on the slug
// For this example, we'll use static data.
const post = {
  slug: 'penerapan-microsurfacing-proyek-tol-trans-sumatera',
  title: 'Studi Kasus: Penerapan Microsurfacing CH di Proyek Tol Trans-Sumatera',
  image: 'https://images.unsplash.com/photo-1523351221683-3c05be3c0f65?q=80&w=1200&h=600&auto=format&fit=crop',
  aiHint: 'highway construction aerial',
  date: '15 Juli 2024',
  author: 'Tim Teknis Cemerlang',
  category: 'Studi Kasus',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // You can use the `params.slug` to fetch the correct post data
  // from a CMS or database in a real-world scenario.

  return (
    <>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <Badge>{post.category}</Badge>
            <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary mt-4">{post.title}</h1>
            <div className="mt-6 flex justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </header>

          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.aiHint}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none text-foreground">
            <p className="lead text-xl text-muted-foreground">
              Proyek pembangunan infrastruktur strategis nasional seperti Tol Trans-Sumatera menuntut penggunaan material yang tidak hanya berkualitas tinggi tetapi juga efisien dalam aplikasinya. Cemerlang Group bangga telah menjadi bagian dari proyek ini dengan menyuplai Microsurfacing CH, solusi pelapisan ulang yang inovatif untuk menjaga kondisi jalan tol tetap prima.
            </p>
            <p>
              Microsurfacing adalah lapisan tipis (thin overlay) yang terdiri dari campuran agregat, aspal emulsi polimer, air, dan aditif. Aplikasinya yang cepat dan kemampuannya untuk kering dalam waktu singkat menjadikannya solusi ideal untuk proyek dengan lalu lintas padat seperti jalan tol, di mana penutupan lajur harus diminimalkan.
            </p>
            
            <h2 className="text-primary">Tantangan di Lapangan</h2>
            <p>
              Salah satu ruas Tol Trans-Sumatera menunjukkan tanda-tanda keausan dini akibat volume lalu lintas yang tinggi dan paparan cuaca ekstrem. Tantangan utamanya adalah melakukan perbaikan tanpa mengganggu arus lalu lintas secara signifikan. Diperlukan solusi yang dapat diaplikasikan dengan cepat, memiliki daya tahan tinggi, dan meningkatkan tingkat kekesatan permukaan jalan untuk keselamatan.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Kami membutuhkan solusi yang bisa mengembalikan performa jalan dalam waktu singkat. Microsurfacing CH dari Cemerlang Group menjawab kebutuhan tersebut dengan sempurna," ujar Manajer Proyek Lapangan.
            </blockquote>
            
            <h2 className="text-primary">Solusi dan Implementasi</h2>
            <p>
              Tim teknis Cemerlang Group bekerja sama dengan kontraktor untuk merencanakan aplikasi Microsurfacing CH. Prosesnya meliputi:
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Persiapan Permukaan:</strong> Pembersihan permukaan jalan dari debu, kotoran, dan material lepas.</li>
                <li><strong>Aplikasi Tack Coat:</strong> Penggunaan lapisan tipis aspal emulsi untuk memastikan ikatan yang kuat antara lapisan lama dan baru.</li>
                <li><strong>Aplikasi Microsurfacing:</strong> Menggunakan mesin khusus, campuran Microsurfacing CH diaplikasikan secara merata di seluruh permukaan jalan dengan ketebalan rata-rata 10-15 mm.</li>
            </ul>
            <p>
              Seluruh pekerjaan dilakukan pada malam hari untuk meminimalkan dampak terhadap lalu lintas. Berkat formula quick-setting, lajur jalan sudah dapat dibuka kembali untuk lalu lintas ringan dalam waktu kurang dari dua jam setelah aplikasi.
            </p>

            <h2 className="text-primary">Hasil yang Dicapai</h2>
            <p>
              Hasilnya sangat memuaskan. Permukaan jalan kembali halus, tingkat kekesatan (skid resistance) meningkat secara signifikan, dan retak-retak rambut tertutup sempurna, mencegah infiltrasi air yang dapat merusak struktur perkerasan lebih dalam. Proyek ini menunjukkan bahwa perawatan preventif dengan material yang tepat seperti Microsurfacing CH dapat secara signifikan memperpanjang umur infrastruktur jalan dan menunda kebutuhan rekonstruksi total yang mahal.
            </p>
            
            <div className="mt-12 text-center not-prose">
              <Button asChild>
                <Link href="/contact">Diskusikan Proyek Anda dengan Ahli Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
