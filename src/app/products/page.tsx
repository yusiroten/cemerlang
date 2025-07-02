import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  {
    name: 'CG-Asphalt Premium Mix',
    description: 'Aspal hot-mix superior yang dirancang untuk jalan raya dengan lalu lintas padat dan jalan utama. Menawarkan daya tahan luar biasa, ketahanan terhadap bekas roda, dan hasil akhir yang halus untuk meningkatkan keselamatan pengemudi.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'asphalt texture'
  },
  {
    name: 'CG-Seal Crack Filler',
    description: 'Bahan penutup retak fleksibel yang dimodifikasi polimer untuk mengisi retakan pada permukaan aspal dan beton. Mencegah masuknya air dan memperpanjang umur perkerasan. Cocok untuk semua iklim.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'road crack'
  },
  {
    name: 'CG-Pave Cold Patch',
    description: 'Bahan tambalan dingin siap pakai berkinerja tinggi untuk perbaikan lubang instan. Dapat diaplikasikan dalam segala kondisi cuaca, memastikan hasil yang segera dan tahan lama.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'pothole road'
  },
  {
    name: 'CG-Coat Surface Sealant',
    description: 'Lapisan pelindung yang meremajakan dan melindungi permukaan aspal. Melindungi dari radiasi UV, air, dan tumpahan bahan kimia, memberikan hasil akhir hitam yang baru pada perkerasan.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'wet asphalt'
  },
  {
    name: 'CG-Mark ThermoPaint',
    description: 'Cat marka jalan termoplastik dengan retroreflektivitas tinggi untuk visibilitas superior siang dan malam. Cepat kering dan sangat tahan lama, ideal untuk jalan raya dan jalan kota.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'road markings'
  },
  {
    name: 'CG-Base Aggregate',
    description: 'Agregat batu pecah berkualitas tinggi yang membentuk dasar yang stabil dan andal untuk semua jenis struktur perkerasan. Direkayasa untuk pemadatan dan distribusi beban yang optimal.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'gravel pile'
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Produk Kami</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Direkayasa untuk kinerja, daya tahan, dan keberlanjutan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
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
                  <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
