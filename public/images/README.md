# Direktori Gambar

Letakkan semua file gambar statis Anda di sini.

Gambar-gambar yang ada di dalam direktori `public` ini dapat direferensikan di dalam kode Anda mulai dari direktori root (`/`).

Sebagai contoh, jika Anda menempatkan file `logo.png` di sini, Anda dapat menggunakannya dalam komponen React seperti ini:

```jsx
import Image from 'next/image';

function MyComponent() {
  return <Image src="/images/logo.png" alt="Logo Perusahaan" width={200} height={100} />;
}
```

Pastikan Anda memberikan nama file yang deskriptif.
