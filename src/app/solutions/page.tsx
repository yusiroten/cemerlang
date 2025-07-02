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
    title: "Major Road Construction",
    description: "Building new highways and primary roads requires materials that can withstand heavy traffic and harsh conditions. Our solutions ensure a long-lasting and safe infrastructure from the ground up.",
    products: ["CG-Asphalt Premium Mix", "CG-Base Aggregate", "CG-Mark ThermoPaint"],
  },
  {
    title: "Pothole & Pavement Repair",
    description: "Quickly and effectively repair potholes and pavement damage to restore road safety and prevent further deterioration. Our products are designed for durability and ease of use.",
    products: ["CG-Pave Cold Patch", "CG-Seal Crack Filler"],
  },
  {
    title: "Preventative Maintenance & Crack Sealing",
    description: "Extend the life of your pavement with our preventative maintenance solutions. Sealing cracks and surfaces protects against water and environmental damage, saving costs in the long run.",
    products: ["CG-Seal Crack Filler", "CG-Coat Surface Sealant"],
  },
  {
    title: "Road Marking & Safety",
    description: "Ensure maximum visibility and safety with our high-quality road marking solutions. Our durable paints are designed for high-traffic areas and all-weather performance.",
    products: ["CG-Mark ThermoPaint"],
  },
  {
    title: "Residential & Commercial Paving",
    description: "From driveways to parking lots, our products provide a reliable and aesthetic finish for smaller-scale projects, offering the same industrial-grade quality.",
    products: ["CG-Asphalt Premium Mix", "CG-Coat Surface Sealant"],
  }
];

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Application Solutions</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Tailored solutions for every road maintenance and construction challenge.
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
                  <h4 className="font-semibold mb-2">Recommended Products:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {solution.products.map(prod => <li key={prod}>{prod}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-16">
              <h2 className="font-headline text-2xl font-bold text-primary">Explore Our Full Product Range</h2>
              <p className="mt-2 text-muted-foreground mb-4">Find the perfect material for your specific needs.</p>
              <Button asChild>
                  <Link href="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </div>
        </div>
      </section>
    </>
  )
}
