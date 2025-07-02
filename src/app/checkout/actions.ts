
"use server";

import { z } from "zod";

const orderSchema = z.object({
  name: z.string().min(2, "Nama lengkap diperlukan"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  address: z.string().min(10, "Alamat lengkap diperlukan"),
  city: z.string().min(3, "Kota diperlukan"),
  postal_code: z.string().min(5, "Kode pos tidak valid"),
  payment_method: z.string(),
  cart_items: z.string(),
  total_price: z.string(),
});

export type OrderFormState = {
  message: string;
  success: boolean;
};

export async function submitOrder(
  prevState: OrderFormState,
  formData: FormData
): Promise<OrderFormState> {

  const validatedFields = orderSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    city: formData.get("city"),
    postal_code: formData.get("postal_code"),
    payment_method: formData.get("payment_method"),
    cart_items: formData.get("cart_items"),
    total_price: formData.get("total_price"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: "Data yang Anda masukkan tidak valid. Silakan periksa kembali.",
      success: false,
    };
  }

  try {
    // Simulasi pengiriman pesanan ke backend/database
    console.log("New Order Received:", validatedFields.data);
    
    // Di aplikasi nyata, Anda akan menyimpan data ini ke database
    // dan memproses pembayaran dengan payment gateway.

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulasi network delay

    return {
      message: "Pesanan Anda telah kami terima dan akan segera diproses. Terima kasih!",
      success: true,
    };
  } catch (error) {
    console.error("Failed to process order:", error);
    return {
      message: "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.",
      success: false,
    };
  }
}
