
'use server';
/**
 * @fileOverview Alur Genkit untuk menganalisis dan mengkategorikan pertanyaan dari formulir kontak.
 *
 * - categorizeInquiry - Fungsi yang menangani proses kategorisasi.
 * - CategorizeInquiryInput - Tipe input untuk fungsi categorizeInquiry.
 * - CategorizeInquiryOutput - Tipe output untuk fungsi categorizeInquiry.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const CategorizeInquiryInputSchema = z.object({
  name: z.string().describe('Nama lengkap pengirim.'),
  email: z.string().describe('Alamat email pengirim.'),
  subject: z.string().describe('Subjek pesan.'),
  message: z.string().describe('Isi pesan dari pengirim.'),
});
export type CategorizeInquiryInput = z.infer<typeof CategorizeInquiryInputSchema>;

export const CategorizeInquiryOutputSchema = z.object({
  category: z
    .enum([
      'Sales Inquiry',
      'Technical Support',
      'Partnership',
      'General Question',
      'Other',
    ])
    .describe('Kategori pertanyaan berdasarkan kontennya.'),
  urgency: z
    .enum(['High', 'Medium', 'Low'])
    .describe('Tingkat urgensi yang disimpulkan dari pesan.'),
  summary: z.string().describe('Ringkasan singkat dari pertanyaan pengguna.'),
});
export type CategorizeInquiryOutput = z.infer<typeof CategorizeInquiryOutputSchema>;

const categorizeInquiryFlow = ai.defineFlow(
  {
    name: 'categorizeInquiryFlow',
    inputSchema: CategorizeInquiryInputSchema,
    outputSchema: CategorizeInquiryOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
        prompt: `Anda adalah asisten AI yang bertugas menganalisis pertanyaan yang masuk untuk Cemerlang Group, sebuah perusahaan material konstruksi jalan.
        Analisis pesan berikut dan klasifikasikan.

        Subjek: ${input.subject}
        Pesan: ${input.message}

        Tentukan kategori yang paling sesuai dari daftar ini: Sales Inquiry (terkait pembelian, penawaran harga), Technical Support (pertanyaan teknis produk, cara aplikasi), Partnership (ajakan kerja sama), General Question (pertanyaan umum). Jika tidak ada yang cocok, gunakan "Other".
        
        Tentukan tingkat urgensinya: High (jika terkait proyek mendesak, masalah besar), Medium (pertanyaan detail produk, permintaan penawaran), Low (pertanyaan umum).

        Buat ringkasan singkat dari pesan tersebut dalam satu kalimat.
        `,
        output: { schema: CategorizeInquiryOutputSchema },
        model: 'googleai/gemini-2.0-flash'
    });
    return output!;
  }
);


export async function categorizeInquiry(
  input: CategorizeInquiryInput
): Promise<CategorizeInquiryOutput> {
    return await categorizeInquiryFlow(input);
}
