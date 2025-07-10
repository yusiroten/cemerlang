
import { Logo } from '@/components/logo';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Cemerlang Group adalah pemasok terkemuka untuk material konstruksi dan pemeliharaan jalan di Indonesia. Kami berdedikasi untuk menyediakan produk inovatif, dukungan teknis ahli, dan solusi berkelanjutan untuk membangun infrastruktur yang lebih kuat dan tahan lama.
            </p>
          </div>
           <div className="md:col-span-3">
            <h3 className="font-headline font-semibold text-primary">Hubungi Kami</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@cemerlang.pro" className="hover:text-primary">info@cemerlang.pro</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="tel:02138805294" className="hover:text-primary">021-38805294</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>
                  Plaza Mebel #31-35<br />
                  Jl. RS Fatmawati Kav. 5<br />
                  Cipete Utara, Kebayoran Baru<br />
                  Jakarta 12420
                </span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold text-primary">Ikuti Kami</h3>
             <p className="mt-4 text-sm text-muted-foreground">
              Terhubung dengan kami di media sosial.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors">
                <TikTokIcon className="h-6 w-6" />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
           <div className="md:col-span-4">
            <h3 className="font-headline font-semibold text-primary">Lokasi Kami</h3>
            <div className="mt-4 rounded-lg overflow-hidden h-56">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.338692795129!2d106.79793267587802!3d-6.219013093769188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1687f18a221%3A0x28a15752179a41e!2sPlaza%20Mebel!5e0!3m2!1sen!2sid!4v1721896792620!5m2!1sen!2sid"
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Cemerlang Group di Peta Google"
                ></iframe>
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

    