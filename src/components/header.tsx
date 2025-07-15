
'use client';

import { useState, ReactNode } from 'react';
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

const navLinks: { href?: string; label: string; subLinks?: { href: string; label: string }[] }[] = [
  { href: '/', label: 'Beranda' },
  { label: 'Tentang Kami', subLinks: aboutLinks },
  { href: '/products', label: 'Produk' },
  { href: '/solutions', label: 'Solusi' },
  { href: '/resources', label: 'Dukungan Teknis' },
  { href: '/toko', label: 'Toko' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Kontak' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavItem = ({ item }: { item: typeof navLinks[0] }) => {
    if (item.subLinks) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn(
                "font-medium text-sm transition-colors hover:text-primary gap-1 px-3",
                pathname.startsWith('/about') ? "text-primary" : "text-muted-foreground"
              )}>
              {item.label}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.subLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link href={link.href}>{link.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        href={item.href!}
        className={cn(
          "font-medium text-sm transition-colors hover:text-primary px-3 py-2",
          pathname === item.href ? "text-primary" : "text-muted-foreground"
        )}
      >
        {item.label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label, children }: { href?: string, label: string, children?: ReactNode }) => {
    const isParent = !!children;
    const commonClasses = "flex items-center justify-between w-full text-left rounded-md px-3 py-2 font-medium";
    
    if (isParent) {
      return <div className={commonClasses}>{label}</div>
    }

    return (
      <Link
        href={href!}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(commonClasses, pathname === href ? "bg-accent text-accent-foreground" : "hover:bg-accent/50")}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => <NavItem key={index} item={link} />)}
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
                <SheetContent side="right" className="w-full">
                <div className="p-4 mt-6">
                    <div className="mb-6">
                      <Logo />
                    </div>
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link, index) => (
                          <div key={index}>
                            <MobileNavLink href={link.href} label={link.label}>
                               {link.subLinks}
                            </MobileNavLink>
                            {link.subLinks && (
                              <div className="flex flex-col gap-1 pl-6 pt-1">
                                {link.subLinks.map(sub => (
                                   <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={cn("block rounded-md px-3 py-2 font-medium", pathname === sub.href ? "bg-accent text-accent-foreground" : "hover:bg-accent/50")}
                                    >
                                      {sub.label}
                                    </Link>
                                ))}
                              </div>
                            )}
                          </div>
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
