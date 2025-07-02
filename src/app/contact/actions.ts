"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Nama harus terdiri dari minimal 2 karakter." }),
  email: z.string().email({ message: "Silakan masukkan email yang valid." }),
  subject: z.string().min(5, { message: "Subjek harus terdiri dari minimal 5 karakter." }),
  message: z.string().min(10, { message: "Pesan harus terdiri dari minimal 10 karakter." }),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Terjadi kesalahan dengan kiriman Anda. Silakan periksa kembali isiannya.",
      success: false,
    };
  }

  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log the data to the console.
    console.log("New contact form submission:");
    console.log(validatedFields.data);

    return {
      message: "Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return {
      message: "Terjadi kesalahan tak terduga. Silakan coba lagi nanti.",
      success: false,
    };
  }
}
