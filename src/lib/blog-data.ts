
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
    image: 'https://placehold.co/600x400.png',
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
    image: 'https://placehold.co/600x400.png',
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
    image: 'https://placehold.co/600x400.png',
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
    image: 'https://placehold.co/600x400.png',
    aiHint: 'online webinar presentation',
    date: '10 Juni 2024',
    excerpt: 'Bergabunglah dengan para ahli kami dalam sesi webinar interaktif untuk membahas inovasi terkini dalam material dan teknik perawatan infrastruktur. Daftar sekarang, tempat terbatas!',
    author: 'Tim Marketing',
    category: 'Event',
  },
  {
    id: 'post_005',
    slug: 'teknologi-sami-waterproofing-solusi-jembatan',
    title: 'Teknologi S.A.M.I Waterproofing: Solusi Jitu Atasi Retak Reflektif pada Jembatan',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'bridge waterproofing work',
    date: '28 Mei 2024',
    excerpt: 'Pelajari bagaimana membran interlayer S.A.M.I kami memberikan perlindungan superior terhadap infiltrasi air dan memperpanjang umur layan struktur jembatan.',
    author: 'Rina Wijayanti',
    category: 'Teknologi',
  },
  {
    id: 'post_006',
    slug: 'cemerlang-group-perluas-distribusi-ke-kalimantan',
    title: 'Perluas Jangkauan, Cemerlang Group Buka Pusat Distribusi Baru di Kalimantan',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'warehouse distribution center',
    date: '15 Mei 2024',
    excerpt: 'Untuk mendukung pesatnya pembangunan infrastruktur di IKN dan sekitarnya, kami hadir lebih dekat untuk melayani kebutuhan proyek di Kalimantan.',
    author: 'Manajemen Cemerlang Group',
    category: 'Berita Perusahaan',
  },
  {
    id: 'post_007',
    slug: '5-kesalahan-umum-aplikasi-marka-jalan',
    title: 'Hindari 5 Kesalahan Umum dalam Aplikasi Cat Marka Jalan Termoplastik',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'road marking machine',
    date: '01 Mei 2024',
    excerpt: 'Aplikasi yang tepat adalah kunci durabilitas. Tim ahli kami membagikan tips untuk menghindari kesalahan umum agar marka jalan Anda tahan lama.',
    author: 'Tim Teknis Cemerlang',
    category: 'Tips & Trik',
  },
  {
    id: 'post_008',
    slug: 'laporan-keberlanjutan-2023',
    title: 'Laporan Keberlanjutan 2023: Komitmen Hijau dalam Setiap Lapis Aspal',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'green energy factory',
    date: '22 April 2024',
    excerpt: 'Kami mempublikasikan laporan tahunan tentang inisiatif lingkungan kami, mulai dari pengurangan jejak karbon hingga inovasi produk daur ulang.',
    author: 'Tim CSR Cemerlang',
    category: 'Lingkungan',
  },
  {
    id: 'post_009',
    slug: 'geone-solusi-stabilisasi-tanah-lunak',
    title: 'Studi Kasus: Geone sebagai Solusi Efektif Stabilisasi Tanah Lunak',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'geotextile road construction',
    date: '05 April 2024',
    excerpt: 'Tantangan tanah lunak pada proyek pesisir berhasil diatasi dengan material geotekstil Geone, mempercepat waktu konstruksi dan memastikan stabilitas.',
    author: 'Andi Pratama',
    category: 'Studi Kasus',
  },
  {
    id: 'post_010',
    slug: 'pelatihan-aplikator-bersertifikat-2024',
    title: 'Program Pelatihan Aplikator Bersertifikat 2024 Kembali Dibuka!',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'training class construction',
    date: '20 Maret 2024',
    excerpt: 'Kami mengundang para mitra kontraktor untuk mengikuti program pelatihan intensif agar menjadi aplikator bersertifikat produk-produk Cemerlang Group.',
    author: 'Tim Marketing',
    category: 'Event',
  },
];
