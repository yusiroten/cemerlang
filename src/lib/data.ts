
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  aiHint: string;
  price: number;
  tags: string[];
};

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Microsurfacing CH',
    description: 'Lapisan tipis aspal emulsi yang dimodifikasi polimer untuk pemeliharaan jalan dengan lalu lintas padat. Cepat kering dan meningkatkan umur jalan.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'road resurfacing',
    price: 1500000,
    tags: ['Perawatan Jalan'],
  },
  {
    id: 'prod_002',
    name: 'Sealant Danoes',
    description: 'Bahan penutup celah elastis untuk sambungan beton dan aspal. Mencegah infiltrasi air dan kerusakan struktur.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'road sealant',
    price: 550000,
    tags: ['Perawatan Jalan', 'Waterproofing'],
  },
  {
    id: 'prod_003',
    name: 'Ecobeton',
    description: 'Beton ramah lingkungan dengan permeabilitas tinggi untuk area resapan air. Mengurangi genangan dan beban drainase.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'permeable concrete',
    price: 2200000,
    tags: ['Penguatan Struktur'],
  },
  {
    id: 'prod_004',
    name: 'Coldmix',
    description: 'Aspal dingin siap pakai untuk penambalan lubang yang cepat dan efisien. Dapat diaplikasikan dalam berbagai kondisi cuaca.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'asphalt patch',
    price: 350000,
    tags: ['Perawatan Jalan'],
  },
  {
    id: 'prod_005',
    name: 'Geone',
    description: 'Material geotekstil untuk stabilisasi tanah dan perkuatan dasar jalan. Meningkatkan daya dukung dan mencegah penurunan.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'geotextile fabric',
    price: 850000,
    tags: ['Penguatan Struktur'],
  },
  {
    id: 'prod_006',
    name: 'Atomized Microseal',
    description: 'Lapisan pelindung ultra-tipis untuk meremajakan permukaan aspal dan melindunginya dari oksidasi dan cuaca.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'asphalt sealing',
    price: 1250000,
    tags: ['Perawatan Jalan', 'Waterproofing'],
  },
  {
    id: 'prod_007',
    name: 'S.A.M.I Waterproofing',
    description: 'Membran interlayer penyerap tegangan dan anti air untuk mencegah retak reflektif dan kerusakan akibat air.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'waterproofing membrane',
    price: 1800000,
    tags: ['Waterproofing'],
  },
  {
    id: 'prod_008',
    name: 'McLeod Cat Marka Jalan',
    description: 'Cat termoplastik berperforma tinggi untuk marka jalan yang jelas dan tahan lama. Visibilitas tinggi di siang dan malam hari.',
    image: 'https://placehold.co/600x600.png',
    aiHint: 'road marking paint',
    price: 750000,
    tags: ['Marka Jalan'],
  },
];
