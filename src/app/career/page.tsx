
import Image from 'next/image';
import { CtaSection } from '@/components/cta-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const jobOpenings = [
    {
        title: 'Sales Engineer (Wilayah Jabodetabek)',
        department: 'Penjualan',
        location: 'Jakarta',
        type: 'Penuh Waktu',
        description: 'Membangun hubungan dengan klien baru dan yang sudah ada, memberikan presentasi teknis produk, dan mencapai target penjualan di wilayah Jabodetabek.',
        posted: '2 hari yang lalu'
    },
    {
        title: 'Staf Laboratorium & Quality Control',
        department: 'Teknis',
        location: 'Tangerang',
        type: 'Penuh Waktu',
        description: 'Melakukan pengujian kualitas bahan baku dan produk jadi sesuai dengan standar yang berlaku untuk memastikan kualitas produk Cemerlang Group.',
        posted: '5 hari yang lalu'
    },
    {
        title: 'Digital Marketing Specialist',
        department: 'Pemasaran',
        location: 'Jakarta (Hybrid)',
        type: 'Penuh Waktu',
        description: 'Mengelola kampanye pemasaran digital di berbagai platform, termasuk media sosial, SEO/SEM, dan email marketing untuk meningkatkan brand awareness.',
        posted: '1 minggu yang lalu'
    },
    {
        title: 'Supervisor Lapangan',
        department: 'Operasional',
        location: 'Proyek Luar Kota',
        type: 'Kontrak',
        description: 'Mengawasi dan mengkoordinasikan pelaksanaan aplikasi produk di lokasi proyek, memastikan pekerjaan sesuai dengan spesifikasi teknis dan jadwal.',
        posted: '2 minggu yang lalu'
    }
]

export default function CareerPage() {
  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=500&fit=crop&q=80"
            alt="Tim yang berkolaborasi di kantor"
            data-ai-hint="team collaborating office"
            fill
            priority
            className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Bergabung dengan Tim Kami</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Jadilah bagian dari perusahaan yang berinovasi untuk membangun masa depan infrastruktur Indonesia.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold text-primary">Lowongan Tersedia</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Kami selalu mencari individu berbakat untuk bergabung dengan Cemerlang Group.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {jobOpenings.map((job, index) => (
                    <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{job.title}</CardTitle>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
                                <div className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{job.department}</div>
                                <div className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{job.location}</div>
                                <div className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{job.type}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <CardDescription>{job.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                            <Badge variant="secondary">Diposting {job.posted}</Badge>
                            <Button asChild>
                                <Link href="/contact">
                                    Lamar Sekarang <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center bg-card p-8 rounded-lg max-w-3xl mx-auto">
                <h3 className="font-headline text-2xl font-bold text-primary">Tidak Menemukan Posisi yang Tepat?</h3>
                <p className="mt-2 text-muted-foreground mb-6">Kami tetap ingin mendengar dari Anda. Kirimkan CV dan surat lamaran Anda, dan kami akan menghubungi Anda jika ada posisi yang sesuai di masa mendatang.</p>
                <Button variant="outline" asChild>
                     <Link href="mailto:karir@cemerlang.pro">Kirim Lamaran Terbuka</Link>
                </Button>
            </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
