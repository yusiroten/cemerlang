import Link from 'next/link';
import { Road } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Road className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-primary">
        CemerlangGroup
      </span>
    </Link>
  );
}
