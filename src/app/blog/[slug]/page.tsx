
import Image from 'next/image';
import { CtaSection } from '@/components/cta-section';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { posts } from '@/lib/blog-data';
import { generateBlogPost } from '@/ai/flows/generateBlogPost-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

// Fungsi untuk mendapatkan data post berdasarkan slug
const getPostBySlug = (slug: string) => {
  return posts.find(p => p.slug === slug);
}

// Komponen untuk mengambil dan menampilkan konten blog dari AI
async function BlogPostContent({ title }: { title: string }) {
  const blogPost = await generateBlogPost({ title });
  return <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />;
}

// Komponen fallback untuk ditampilkan selama konten dimuat
function ContentSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <br />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
        </div>
    )
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
      return (
        <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-2xl font-bold">Postingan tidak ditemukan</h1>
            <p className="text-muted-foreground mt-2">Maaf, kami tidak dapat menemukan artikel yang Anda cari.</p>
            <Button asChild className="mt-6">
                <Link href="/blog">Kembali ke Blog</Link>
            </Button>
        </div>
      )
  }

  return (
    <>
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12 text-center">
            <Badge>{post.category}</Badge>
            <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary mt-4">{post.title}</h1>
            <div className="mt-6 flex justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </div>
          </header>

          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              data-ai-hint={post.aiHint}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none text-foreground">
             <Suspense fallback={<ContentSkeleton />}>
                <BlogPostContent title={post.title} />
             </Suspense>
            <div className="mt-12 text-center not-prose">
              <Button asChild>
                <Link href="/contact">Diskusikan Proyek Anda dengan Ahli Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
