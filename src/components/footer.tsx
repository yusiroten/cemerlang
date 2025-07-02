import { Logo } from '@/components/logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your trusted partner in road maintenance and construction solutions.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold text-primary">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@cemerlanggroup.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Industrial Park, Pavement City, 12345</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {['About Us', 'Products', 'Solutions', 'Contact'].map((item) => (
                 <li key={item}>
                   <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                     {item}
                   </Link>
                 </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline font-semibold text-primary">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.name}
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} CemerlangGroup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
