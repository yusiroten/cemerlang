
import Link from 'next/link';
import { Road } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
         <Road className="h-6 w-6" />
      </div>
      <span className="text-xl font-bold font-headline text-primary">
        Cemerlang Group
      </span>
    </Link>
  );
}
