
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Construction, Droplets, Paintbrush, Network } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";

const solutions = [
  {
    value: "item-1",
    title: "Perawatan Jalan Raya",
    icon: Construction,
    description: "Solusi komprehensif untuk pemeliharaan rutin dan perbaikan jalan guna memastikan keamanan dan kenyamanan pengguna. Meliputi penambalan lubang, peremajaan permukaan, dan penutupan retak untuk memperpanjang umur jalan.",
    products: ["Microsurfacing CH", "Coldmix", "Sealant Danoes", "Atomized Microseal"],
  },
  {
    value: "item-2",
    title: "Waterproofing & Perlindungan Struktur",
    icon: Droplets,
    description: "Melindungi struktur jembatan, viaduk, dan beton dari kerusakan akibat infiltrasi air. Sistem waterproofing kami menciptakan lapisan kedap air yang fleksibel dan tahan lama, mencegah korosi dan degradasi material.",
    products: ["S.A.M.I Waterproofing", "Sealant Danoes", "Ecobeton"],
  },
  {
    value: "item-3",
    title: "Marka Jalan & Keselamatan",
    icon: Paintbrush,
    description: "Menyediakan marka jalan yang jelas, reflektif, dan tahan lama untuk meningkatkan keselamatan lalu lintas di segala kondisi. Solusi kami cepat kering dan tahan terhadap abrasi dari lalu lintas padat.",
    products: ["McLeod Cat Marka Jalan"],
  },
  {
    value: "item-4",
    title: "Penguatan Struktur Tanah & Jalan",
    icon: Network,
    description: "Meningkatkan daya dukung tanah dasar dan struktur perkerasan jalan. Solusi geotekstil kami mendistribusikan beban secara merata, mencegah penurunan, dan meningkatkan stabilitas jangka panjang.",
    products: ["Geone", "Ecobeton"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Solusi Aplikasi Kami</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Solusi terintegrasi yang dirancang untuk menjawab setiap tantangan dalam siklus hidup infrastruktur jalan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {solutions.map((solution) => (
              <AccordionItem key={solution.value} value={solution.value}>
                <AccordionTrigger className="font-headline text-xl hover:no-underline">
                  <div className="flex items-center gap-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                    <span>{solution.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14">
                  <p className="mb-4 text-muted-foreground">{solution.description}</p>
                  <h4 className="font-semibold mb-2">Produk Terkait:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {solution.products.map(prod => <li key={prod}>{prod}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-16">
              <h2 className="font-headline text-2xl font-bold text-primary">Jelajahi Katalog Produk Lengkap Kami</h2>
              <p className="mt-2 text-muted-foreground mb-4">Temukan material yang tepat untuk keberhasilan proyek Anda.</p>
              <Button asChild>
                  <Link href="/products">Lihat Semua Produk <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  )
}
