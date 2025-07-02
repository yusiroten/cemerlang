
'use client';

import { useCart, useCartDispatch } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormState, useFormStatus } from 'react-dom';
import { submitOrder, type OrderFormState } from './actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

const initialState: OrderFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Buat Pesanan
    </Button>
  );
}

export default function CheckoutPage() {
  const { state: cartState } = useCart();
  const cartDispatch = useCartDispatch();
  const { toast } = useToast();
  const router = useRouter();
  const [formState, formAction] = useFormState(submitOrder, initialState);

  const totalPrice = cartState.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  useEffect(() => {
    if (formState.success) {
      toast({
        title: 'Pesanan Berhasil!',
        description: formState.message,
      });
      cartDispatch({ type: 'CLEAR_CART' });
      router.push('/');
    } else if (formState.message) {
      toast({
        title: 'Error',
        description: formState.message,
        variant: 'destructive',
      });
    }
  }, [formState, toast, router, cartDispatch]);

  if (cartState.items.length === 0 && !formState.success) {
    return (
        <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-2xl font-bold">Keranjang Anda Kosong</h1>
            <p className="text-muted-foreground mt-2">Anda tidak memiliki item untuk di-checkout.</p>
            <Button asChild className="mt-6">
                <a href="/toko">Kembali ke Toko</a>
            </Button>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary text-center mb-12">Checkout</h1>
      <form action={formAction}>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Pengiriman</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input id="phone" name="phone" required />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Alamat Lengkap</Label>
                  <Input id="address" name="address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Kota</Label>
                  <Input id="city" name="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal_code">Kode Pos</Label>
                  <Input id="postal_code" name="postal_code" required />
                </div>
              </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Metode Pembayaran</CardTitle>
                    <CardDescription>Pilih metode pembayaran yang Anda inginkan.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup name="payment_method" defaultValue="bank_transfer" className="space-y-4">
                        <div className="flex items-center space-x-3 rounded-md border p-4">
                            <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                            <Label htmlFor="bank_transfer" className="font-semibold">
                            Transfer Bank (BCA/Mandiri/BRI)
                            </Label>
                        </div>
                        <div className="flex items-center space-x-3 rounded-md border p-4">
                           <RadioGroupItem value="e_wallet" id="e_wallet" />
                           <Label htmlFor="e_wallet" className="font-semibold">
                            E-Wallet (DANA/OVO/GoPay)
                           </Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartState.items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Image src={product.image} alt={product.name} width={48} height={48} className="rounded-md" />
                        <div>
                            <p className="font-semibold text-sm">{product.name}</p>
                            <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                        </div>
                    </div>
                    <p className="text-sm">{formatPrice(product.price * quantity)}</p>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4 space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                        <p>Subtotal</p>
                        <p>{formatPrice(totalPrice)}</p>
                    </div>
                     <div className="flex justify-between text-muted-foreground">
                        <p>Pengiriman</p>
                        <p>Rp 0</p>
                    </div>
                     <div className="flex justify-between font-bold text-lg">
                        <p>Total</p>
                        <p>{formatPrice(totalPrice)}</p>
                    </div>
                </div>
              </CardContent>
              <input type="hidden" name="cart_items" value={JSON.stringify(cartState.items)} />
              <input type="hidden" name="total_price" value={totalPrice} />
              <CardContent>
                 <SubmitButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
