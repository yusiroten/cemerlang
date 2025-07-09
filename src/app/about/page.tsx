
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Target, Heart, Leaf, FileText, Users, Award } from 'lucide-react';
import { CtaSection } from '@/components/cta-section';

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=500&fit=crop&q=80"
          alt="Kantor Cemerlang Group"
          data-ai-hint="company office interior"
          fill
          priority
          className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Tentang Cemerlang Group</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Membangun fondasi infrastruktur Indonesia yang lebih kuat, lebih aman, dan berkelanjutan.
          </p>
        </div>
      </section>

      <section id="sekilas" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-headline text-3xl font-bold text-primary mb-4">Sekilas Kami</h2>
              <p className="mb-4 text-muted-foreground">
                Cemerlang Group lahir dari visi untuk mentransformasi industri material konstruksi jalan di Indonesia. Sejak didirikan, kami berdedikasi untuk menyediakan produk inovatif yang tidak hanya memenuhi, tetapi melampaui ekspektasi dalam hal kualitas, daya tahan, dan kinerja.
              </p>
              <p className="text-muted-foreground">
                Perjalanan kami didorong oleh penelitian dan pengembangan berkelanjutan, kemitraan strategis dengan para pemimpin teknologi global, dan pemahaman mendalam tentang tantangan infrastruktur lokal. Kami bangga menjadi mitra tepercaya bagi kontraktor, konsultan, dan pemerintah dalam membangun jalan menuju masa depan.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80"
                alt="Tim Cemerlang Group"
                data-ai-hint="engineering team meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="lisensi" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary">Lisensi & Sertifikasi Kami</h2>
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

      <section id="proyek" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary">Proyek Kami</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Portofolio kami mencakup berbagai proyek infrastruktur vital di seluruh Indonesia.
              </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Image src="https://images.unsplash.com/photo-1589552140134-48287c89b387?w=600&h=400&fit=crop&q=80" data-ai-hint="highway construction" alt="Proyek Tol Trans-Jawa" width={600} height={400} className="rounded-lg object-cover" />
                <Image src="https://images.unsplash.com/photo-1610403337219-95a676453713?w=600&h=400&fit=crop&q=80" data-ai-hint="airport runway" alt="Proyek Landasan Pacu Bandara" width={600} height={400} className="rounded-lg object-cover" />
                <Image src="https://images.unsplash.com/photo-1528659856947-a6a79a614742?w=600&h=400&fit=crop&q=80" data-ai-hint="city road repair" alt="Proyek Jalan Perkotaan" width={600} height={400} className="rounded-lg object-cover" />
           </div>
        </div>
      </section>

      <section id="klien" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary mb-4">Dipercaya oleh Klien Terkemuka</h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Kami bangga dapat bekerja sama dengan para pemimpin di industri konstruksi dan pemerintahan.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-muted-foreground grayscale opacity-75">
            <span className="font-headline text-2xl">Kementerian PUPR</span>
            <span className="font-headline text-2xl">Waskita Karya</span>
            <span className="font-headline text-2xl">Adhi Karya</span>
            <span className="font-headline text-2xl">Hutama Karya</span>
            <span className="font-headline text-2xl">Jasa Marga</span>
          </div>
        </div>
      </section>

       <section id="lingkungan" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
              <h2 className="font-headline text-3xl font-bold text-primary">Manfaat Lingkungan</h2>
              <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                Membangun masa depan yang lebih hijau, satu jalan pada satu waktu.
              </p>
          </div>
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d54?w=600&h=400&fit=crop&q=80"
                alt="Jalan Hijau"
                data-ai-hint="green road nature"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Leaf className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                  <div>
                    <h3 className="font-semibold text-lg">Pengurangan Emisi Karbon</h3>
                    <p className="text-muted-foreground">Produk seperti Coldmix dan Microsurfacing diproduksi dan diaplikasikan pada suhu lebih rendah, secara signifikan mengurangi jejak karbon dibandingkan aspal konvensional.</p>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                  <div>
                    <h3 className="font-semibold text-lg">Memperpanjang Umur Jalan</h3>
                    <p className="text-muted-foreground">Solusi pemeliharaan preventif kami memperpanjang siklus hidup perkerasan, menunda kebutuhan akan rekonstruksi besar yang padat sumber daya.</p>
                  </div>
                </li>
                 <li className="flex gap-4">
                  <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1"/>
                  <div>
                    <h3 className="font-semibold text-lg">Penggunaan Material Daur Ulang</h3>
                    <p className="text-muted-foreground">Kami terus berinovasi untuk mengintegrasikan material daur ulang dalam produk kami tanpa mengorbankan kualitas dan performa.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
