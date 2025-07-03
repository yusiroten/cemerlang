
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          Siap Meningkatkan Kualitas Proyek Anda?
        </h2>
        <p className="font-body text-lg max-w-3xl mx-auto mb-8">
          Diskusikan kebutuhan proyek Anda bersama kami. Tim Cemerlang Group siap memberikan solusi material terbaik untuk hasil yang optimal dan tahan lama.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
          <Link href="/contact">Dapatkan Konsultasi Gratis</Link>
        </Button>
      </div>
    </section>
  );
}
