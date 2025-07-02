import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    title: "Konstruksi Jalan Utama",
    description: "Membangun jalan raya dan jalan utama baru membutuhkan bahan yang tahan terhadap lalu lintas padat dan kondisi ekstrem. Solusi kami memastikan infrastruktur yang tahan lama dan aman dari awal.",
    products: ["CG-Asphalt Premium Mix", "CG-Base Aggregate", "CG-Mark ThermoPaint"],
  },
  {
    title: "Perbaikan Lubang & Perkerasan",
    description: "Perbaiki lubang dan kerusakan perkerasan dengan cepat dan efektif untuk mengembalikan keselamatan jalan dan mencegah kerusakan lebih lanjut. Produk kami dirancang untuk daya tahan dan kemudahan penggunaan.",
    products: ["CG-Pave Cold Patch", "CG-Seal Crack Filler"],
  },
  {
    title: "Pemeliharaan Preventif & Penambalan Retak",
    description: "Perpanjang umur perkerasan Anda dengan solusi pemeliharaan preventif kami. Menutup retakan dan permukaan melindungi dari kerusakan air dan lingkungan, menghemat biaya dalam jangka panjang.",
    products: ["CG-Seal Crack Filler", "CG-Coat Surface Sealant"],
  },
  {
    title: "Marka Jalan & Keselamatan",
    description: "Pastikan visibilitas dan keselamatan maksimum dengan solusi marka jalan berkualitas tinggi kami. Cat kami yang tahan lama dirancang untuk area lalu lintas padat dan kinerja segala cuaca.",
    products: ["CG-Mark ThermoPaint"],
  },
  {
    title: "Pengaspalan Perumahan & Komersial",
    description: "Dari jalan masuk hingga tempat parkir, produk kami memberikan hasil akhir yang andal dan estetis untuk proyek skala kecil, menawarkan kualitas tingkat industri yang sama.",
    products: ["CG-Asphalt Premium Mix", "CG-Coat Surface Sealant"],
  }
];

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Solusi Aplikasi</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Solusi yang disesuaikan untuk setiap tantangan pemeliharaan dan konstruksi jalan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            {solutions.map((solution, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-headline text-xl hover:no-underline">
                  {solution.title}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4 text-muted-foreground">{solution.description}</p>
                  <h4 className="font-semibold mb-2">Produk yang Direkomendasikan:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {solution.products.map(prod => <li key={prod}>{prod}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-16">
              <h2 className="font-headline text-2xl font-bold text-primary">Jelajahi Jajaran Produk Lengkap Kami</h2>
              <p className="mt-2 text-muted-foreground mb-4">Temukan bahan yang sempurna untuk kebutuhan spesifik Anda.</p>
              <Button asChild>
                  <Link href="/products">Lihat Semua Produk <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </div>
        </div>
      </section>
    </>
  )
}
