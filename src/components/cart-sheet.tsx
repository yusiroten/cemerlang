
'use client';

import { useCart, useCartDispatch } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export function CartSheet() {
  const { state } = useCart();
  const dispatch = useCartDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center rounded-full p-0">{itemCount}</Badge>
          )}
          <span className="sr-only">Buka Keranjang</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Keranjang Belanja ({itemCount})</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
            <ScrollArea className="h-full">
            <div className="flex flex-col gap-6 p-6 pr-8">
            {state.items.length === 0 ? (
                <div className="text-center text-muted-foreground">
                    <p>Keranjang Anda masih kosong.</p>
                    <Button variant="link" asChild className="mt-2">
                        <Link href="/toko" onClick={() => setIsOpen(false)}>Mulai Belanja</Link>
                    </Button>
                </div>
            ) : (
                state.items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        data-ai-hint={product.aiHint}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                        <h4 className="font-semibold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId: product.id, quantity: quantity - 1 } })}>
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-6 text-center">{quantity}</span>
                            <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { productId: product.id } })}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                </div>
                ))
            )}
            </div>
            </ScrollArea>
        </div>
        {state.items.length > 0 && (
          <SheetFooter className="bg-background border-t p-6 mt-auto">
            <div className="w-full space-y-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href="/checkout" onClick={() => setIsOpen(false)}>Lanjutkan ke Checkout</Link>
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
