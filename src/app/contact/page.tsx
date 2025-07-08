
'use client'

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import Image from 'next/image';

const initialState: FormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Kirim Pesan
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Sukses!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
            src="/images/hero-contact.jpg"
            alt="Jabat tangan antara klien dan staf layanan pelanggan"
            data-ai-hint="customer service handshake"
            fill
            priority
            className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Hubungi Kami</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Kami siap membantu. Baik untuk pertanyaan produk, permintaan penawaran, maupun konsultasi teknis, tim kami siap melayani Anda.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Kirimkan Pesan</CardTitle>
                  <CardDescription>Isi formulir di bawah ini dan tim kami akan segera merespons.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Anda</Label>
                        <Input id="name" name="name" placeholder="Nama Lengkap" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Anda</Label>
                        <Input id="email" name="email" type="email" placeholder="email@perusahaan.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek</Label>
                      <Input id="subject" name="subject" placeholder="Contoh: Permintaan Penawaran Microsurfacing" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea id="message" name="message" placeholder="Jelaskan kebutuhan Anda di sini..." rows={6} required />
                    </div>
                    <SubmitButton />
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
                <h2 className="font-headline text-2xl font-bold text-primary mb-6">Informasi Kontak</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                           <Phone className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">WhatsApp (WA)</h3>
                            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">+62 812-3456-7890</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                           <Mail className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <a href="mailto:kontak@cemerlang.group" className="text-muted-foreground hover:text-primary">kontak@cemerlang.group</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                           <MapPin className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Alamat Kantor</h3>
                            <p className="text-muted-foreground">Kawasan Industri Cemerlang, Jl. Raya Aspal No. 123, Jakarta, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
