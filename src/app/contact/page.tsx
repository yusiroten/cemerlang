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
      Send Message
    </Button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <>
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80">
            We're here to help. Whether you have a question about our products or need a consultation, please reach out.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
                  <CardDescription>Our team will respond to your inquiry within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action={formAction} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Question about CG-Asphalt" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Please type your message here..." rows={6} required />
                    </div>
                    <SubmitButton />
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
                <h2 className="font-headline text-2xl font-bold text-primary mb-6">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                           <Phone className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-muted-foreground">+1 234 567 890</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                           <Mail className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-muted-foreground">contact@cemerlanggroup.com</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                           <MapPin className="w-5 h-5"/>
                        </div>
                        <div>
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-muted-foreground">123 Industrial Park, Pavement City, 12345</p>
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
