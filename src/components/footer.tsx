
import { Logo } from '@/components/logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Solusi inovatif dan material berkualitas untuk infrastruktur jalan yang berkelanjutan.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-primary">Tautan Cepat</h3>
            <ul className="mt-4 space-y-3 text-sm">
                 <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Tentang Kami</Link></li>
                 <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Produk</Link></li>
                 <li><Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">Solusi</Link></li>
                 <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">Dukungan Teknis</Link></li>
                 <li><Link href="/toko" className="text-muted-foreground hover:text-primary transition-colors">Toko</Link></li>
                 <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Kontak</Link></li>
            </ul>
          </div>
           <div>
            <h3 className="font-headline font-semibold text-primary">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:kontak@cemerlang.group" className="hover:text-primary">kontak@cemerlang.group</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+62 812-3456-7890</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Kawasan Industri Cemerlang, Jl. Raya Aspal No. 123, Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-primary">Ikuti Kami</h3>
             <p className="mt-4 text-sm text-muted-foreground">
              Terhubung dengan kami di media sosial.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Cemerlang Group. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
