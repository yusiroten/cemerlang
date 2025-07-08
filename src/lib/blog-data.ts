
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
    image: 'https://images.unsplash.com/photo-1523351221683-3c05be3c0f65?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1619451158399-f4c2f6de5a1b?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1563242201-02633a2e7655?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1621358992301-443b7c894a8f?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb122c293?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1550969512-3211115392b4?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1605899180749-51f67451a943?q=80&w=800&h=600&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=600&auto=format&fit=crop',
    aiHint: 'training class construction',
    date: '20 Maret 2024',
    excerpt: 'Kami mengundang para mitra kontraktor untuk mengikuti program pelatihan intensif agar menjadi aplikator bersertifikat produk-produk Cemerlang Group.',
    author: 'Tim Marketing',
    category: 'Event',
  },
];
