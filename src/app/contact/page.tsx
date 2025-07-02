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
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Hubungi Kami</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            Kami di sini untuk membantu. Apakah Anda memiliki pertanyaan tentang produk kami atau memerlukan konsultasi, jangan ragu untuk menghubungi.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Kirimkan kami pesan</CardTitle>
                  <CardDescription>Tim kami akan menanggapi pertanyaan Anda dalam waktu 24 jam.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Anda</Label>
                        <Input id="name" name="name" placeholder="Budi" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Anda</Label>
                        <Input id="email" name="email" type="email" placeholder="budi@contoh.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek</Label>
                      <Input id="subject" name="subject" placeholder="Pertanyaan tentang CG-Asphalt" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea id="message" name="message" placeholder="Silakan ketik pesan Anda di sini..." rows={6} required />
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
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                           <Phone className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Telepon</h3>
                            <p className="text-muted-foreground">+62 123 4567 890</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                           <Mail className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-muted-foreground">kontak@cemerlanggroup.com</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                           <MapPin className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Alamat</h3>
                            <p className="text-muted-foreground">Kawasan Industri 123, Kota Aspal, 12345</p>
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
