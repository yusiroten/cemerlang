
export type Post = {
  id: string;
  slug: string;
  title: string;
  image: string;
  aiHint: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
};

export const posts: Post[] = [
  {
    id: 'post_001',
    slug: 'penerapan-microsurfacing-proyek-tol-trans-sumatera',
    title: 'Studi Kasus: Penerapan Microsurfacing CH di Proyek Tol Trans-Sumatera',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'highway construction aerial',
    date: '15 Juli 2024',
    excerpt: 'Bagaimana teknologi Microsurfacing CH kami berhasil memperpanjang umur layanan perkerasan jalan tol dan meningkatkan keselamatan pengendara di salah satu infrastruktur vital Indonesia.',
    author: 'Tim Teknis Cemerlang',
    category: 'Studi Kasus',
  },
  {
    id: 'post_002',
    slug: 'keunggulan-coldmix-untuk-penambalan-cepat',
    title: 'Keunggulan Coldmix untuk Penambalan Jalan Cepat dan Efektif di Musim Hujan',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'road pothole repair',
    date: '02 Juli 2024',
    excerpt: 'Cuaca tidak lagi menjadi halangan. Temukan bagaimana produk Coldmix kami memberikan solusi penambalan lubang yang praktis, tahan lama, dan dapat diaplikasikan dalam kondisi basah sekalipun.',
    author: 'Andi Pratama',
    category: 'Tips & Trik',
  },
  {
    id: 'post_003',
    slug: 'cemerlang-group-raih-sertifikasi-iso-14001',
    title: 'Cemerlang Group Raih Sertifikasi ISO 14001:2015, Perkuat Komitmen Lingkungan',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'award certificate presentation',
    date: '20 Juni 2024',
    excerpt: 'Sebagai bukti komitmen kami terhadap pembangunan berkelanjutan, Cemerlang Group dengan bangga mengumumkan pencapaian sertifikasi standar internasional untuk manajemen lingkungan.',
    author: 'Manajemen Cemerlang Group',
    category: 'Berita Perusahaan',
  },
  {
    id: 'post_004',
    slug: 'webinar-teknologi-perawatan-jalan-modern',
    title: 'Event: Ikuti Webinar Gratis "Teknologi Modern Perawatan Jalan & Jembatan"',
    image: 'https://placehold.co/800x600.png',
    aiHint: 'online webinar presentation',
    date: '10 Juni 2024',
    excerpt: 'Bergabunglah dengan para ahli kami dalam sesi webinar interaktif untuk membahas inovasi terkini dalam material dan teknik perawatan infrastruktur. Daftar sekarang, tempat terbatas!',
    author: 'Tim Marketing',
    category: 'Event',
  },
];
