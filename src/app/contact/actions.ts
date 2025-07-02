"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
      message: "There was an error with your submission. Please check the fields.",
      success: false,
    };
  }

  try {
    // Here you would typically send an email, e.g., using a service like Resend or Nodemailer.
    // For this example, we'll just log the data to the console.
    console.log("New contact form submission:");
    console.log(validatedFields.data);

    return {
      message: "Thank you for your message! We will get back to you shortly.",
      success: true,
    };
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
