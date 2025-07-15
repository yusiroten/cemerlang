
'use server';
/**
 * @fileOverview Alur Genkit untuk menghasilkan konten artikel blog.
 *
 * - generateBlogPost - Fungsi untuk menghasilkan konten artikel blog berdasarkan judul.
 * - GenerateBlogPostInput - Tipe input untuk fungsi generateBlogPost.
 * - GenerateBlogPostOutput - Tipe output untuk fungsi generateBlogPost.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const GenerateBlogPostInputSchema = z.object({
  title: z.string().describe('Judul artikel blog yang akan dibuat.'),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;

export const GenerateBlogPostOutputSchema = z.object({
  content: z.string().describe('Konten artikel blog yang dihasilkan dalam format HTML.'),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;


const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
        prompt: `Anda adalah seorang penulis konten profesional untuk Cemerlang Group, sebuah perusahaan material konstruksi jalan.
        Tugas Anda adalah menulis artikel blog yang informatif dan menarik dalam Bahasa Indonesia.

        Buatkan konten artikel blog yang mendalam dan terstruktur dengan baik untuk judul berikut: "${input.title}".

        Struktur artikel harus mencakup:
        1.  Paragraf pembuka yang menarik (gunakan tag <p class="lead">).
        2.  Beberapa paragraf isi yang menjelaskan topik secara detail. Gunakan tag <h2> untuk sub-judul jika diperlukan.
        3.  Gunakan tag <p> untuk paragraf biasa.
        4.  Jika relevan, sertakan daftar (menggunakan <ul> dan <li>) atau kutipan (menggunakan <blockquote>).
        5.  Paragraf penutup yang merangkum poin-poin penting.

        Pastikan seluruh output adalah string HTML yang valid. Jangan sertakan tag <html>, <head>, atau <body>.
        `,
        output: { schema: GenerateBlogPostOutputSchema },
        model: 'googleai/gemini-2.0-flash'
    });
    return output!;
  }
);


export async function generateBlogPost(
  input: GenerateBlogPostInput
): Promise<GenerateBlogPostOutput> {
    return await generateBlogPostFlow(input);
}
