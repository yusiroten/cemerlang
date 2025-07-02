
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CartSheet } from './cart-sheet';

const aboutLinks = [
  { href: '/about', label: 'Sekilas Kami' },
  { href: '/about#lisensi', label: 'Lisensi Kami' },
  { href: '/about#proyek', label: 'Proyek Kami' },
  { href: '/about#klien', label: 'Klien Kami' },
  { href: '/about#lingkungan', label: 'Manfaat Lingkungan' },
];

const navLinks = [
  { href: '/', label: 'Beranda' },
  // "Tentang Kami" is now a dropdown
  { href: '/products', label: 'Produk' },
  { href: '/solutions', label: 'Solusi' },
  { href: '/resources', label: 'Dukungan Teknis' },
  { href: '/toko', label: 'Toko' },
  { href: '/contact', label: 'Kontak' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link
      href={href}
      className={cn(
        "font-medium text-sm transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        className
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/" label="Beranda" />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn(
                  "font-medium text-sm transition-colors hover:text-primary gap-1",
                  pathname.startsWith('/about') ? "text-primary" : "text-muted-foreground"
                )}>
                Tentang Kami
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {aboutLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => ( // Slicing to skip 'Beranda' which is already there
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <CartSheet />
            <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Buka menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                <div className="p-4">
                    <div className="mb-8">
                    <Logo />
                    </div>
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} {...link} />
                        ))}
                        <p className="font-medium text-sm text-primary pt-4 border-t">Tentang Kami</p>
                        {aboutLinks.map((link) => (
                           <NavLink key={link.href} href={link.href} label={link.label} className="pl-4" />
                        ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
