
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { posts } from '@/lib/blog-data';
import { CtaSection } from '@/components/cta-section';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  return (
    <>
      <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
            src="/images/hero-blog.jpg"
            alt="Seseorang menulis di buku catatan"
            data-ai-hint="person writing notes"
            fill
            priority
            className="object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Blog & Berita</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Dapatkan informasi terbaru, studi kasus, dan berita seputar inovasi material dan kegiatan Cemerlang Group.
            </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                 <div className="relative h-64 w-full">
                    <Image
                        src={post.image}
                        alt={post.title}
                        data-ai-hint={post.aiHint}
                        fill
                        className="object-cover"
                    />
                    <Badge className="absolute top-4 right-4">{post.category}</Badge>
                 </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl h-20">{post.title}</CardTitle>
                   <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardContent>
                 <CardFooter>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={`/blog/${post.slug}`}>
                      Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
