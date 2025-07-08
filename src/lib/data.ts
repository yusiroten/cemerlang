
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
    image: 'https://images.unsplash.com/photo-1588796601449-3e5f39e6d0b3?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'road resurfacing',
    price: 1500000,
    tags: ['Perawatan Jalan'],
  },
  {
    id: 'prod_002',
    name: 'Sealant Danoes',
    description: 'Bahan penutup celah elastis untuk sambungan beton dan aspal. Mencegah infiltrasi air dan kerusakan struktur.',
    image: 'https://images.unsplash.com/photo-1582737330588-49b821437194?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'road sealant',
    price: 550000,
    tags: ['Perawatan Jalan', 'Waterproofing'],
  },
  {
    id: 'prod_003',
    name: 'Ecobeton',
    description: 'Beton ramah lingkungan dengan permeabilitas tinggi untuk area resapan air. Mengurangi genangan dan beban drainase.',
    image: 'https://images.unsplash.com/photo-1616035905059-869be1451f5e?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'permeable concrete',
    price: 2200000,
    tags: ['Penguatan Struktur'],
  },
  {
    id: 'prod_004',
    name: 'Coldmix',
    description: 'Aspal dingin siap pakai untuk penambalan lubang yang cepat dan efisien. Dapat diaplikasikan dalam berbagai kondisi cuaca.',
    image: 'https://images.unsplash.com/photo-1619451158399-f4c2f6de5a1b?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'asphalt patch',
    price: 350000,
    tags: ['Perawatan Jalan'],
  },
  {
    id: 'prod_005',
    name: 'Geone',
    description: 'Material geotekstil untuk stabilisasi tanah dan perkuatan dasar jalan. Meningkatkan daya dukung dan mencegah penurunan.',
    image: 'https://images.unsplash.com/photo-1605899180749-51f67451a943?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'geotextile fabric',
    price: 850000,
    tags: ['Penguatan Struktur'],
  },
  {
    id: 'prod_006',
    name: 'Atomized Microseal',
    description: 'Lapisan pelindung ultra-tipis untuk meremajakan permukaan aspal dan melindunginya dari oksidasi dan cuaca.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'asphalt sealing',
    price: 1250000,
    tags: ['Perawatan Jalan', 'Waterproofing'],
  },
  {
    id: 'prod_007',
    name: 'S.A.M.I Waterproofing',
    description: 'Membran interlayer penyerap tegangan dan anti air untuk mencegah retak reflektif dan kerusakan akibat air.',
    image: 'https://images.unsplash.com/photo-1621358992301-443b7c894a8f?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'waterproofing membrane',
    price: 1800000,
    tags: ['Waterproofing'],
  },
  {
    id: 'prod_008',
    name: 'McLeod Cat Marka Jalan',
    description: 'Cat termoplastik berperforma tinggi untuk marka jalan yang jelas dan tahan lama. Visibilitas tinggi di siang dan malam hari.',
    image: 'https://images.unsplash.com/photo-1610484724838-5393439c6565?q=80&w=600&h=600&auto=format&fit=crop',
    aiHint: 'road marking paint',
    price: 750000,
    tags: ['Marka Jalan'],
  },
];
