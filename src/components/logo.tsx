import Link from 'next/link';
import { Construction } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Construction className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-primary">
        CemerlangGroup
      </span>
    </Link>
  );
}
