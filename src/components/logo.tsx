import Link from 'next/link';

const Road = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 19.5l4-15" />
    <path d="M16 4.5l4 15" />
    <path d="M12 19.5v-2" />
    <path d="M12 14.5v-2" />
    <path d="M12 9.5v-2" />
  </svg>
);

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
