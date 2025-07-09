
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
    image: 'https://images.unsplash.com/photo-1519757997941-769b7da7f5a8?w=600&h=600&fit=crop&q=80',
    aiHint: 'road resurfacing',
    price: 1500000,
    tags: ['Perawatan Jalan'],
  },
  {
    id: 'prod_002',
    name: 'Sealant Danoes',
    description: 'Bahan penutup celah elastis untuk sambungan beton dan aspal. Mencegah infiltrasi air dan kerusakan struktur.',
    image: 'https://images.unsplash.com/photo-1614838663442-992383187c9f?w=600&h=600&fit=crop&q=80',
    aiHint: 'road sealant',
    price: 550000,
    tags: ['Perawatan Jalan', 'Waterproofing'],
  },
  {
    id: 'prod_003',
    name: 'Ecobeton',
    description: 'Beton ramah lingkungan dengan permeabilitas tinggi untuk area resapan air. Mengurangi genangan dan beban drainase.',
    image: 'https://images.unsplash.com/photo-1618258601679-6238b15e4782?w=600&h=600&fit=crop&q=80',
    aiHint: 'permeable concrete',
    price: 2200000,
    tags: ['Penguatan Struktur'],
  },
  {
    id: 'prod_004',
    name: 'Coldmix',
    description: 'Aspal dingin siap pakai untuk penambalan lubang yang cepat dan efisien. Dapat diaplikasikan dalam berbagai kondisi cuaca.',
    image: 'https://images.unsplash.com/photo-1594103194539-75e326af548a?w=600&h=600&fit=crop&q=80',
    aiHint: 'asphalt patch',
    price: 350000,
    tags: ['Perawatan Jalan'],
  },
  {
    id: 'prod_005',
    name: 'Geone',
    description: 'Material geotekstil untuk stabilisasi tanah dan perkuatan dasar jalan. Meningkatkan daya dukung dan mencegah penurunan.',
    image: 'https://images.unsplash.com/photo-1606303254341-a59e99557b6f?w=600&h=600&fit=crop&q=80',
    aiHint: 'geotextile fabric',
    price: 850000,
    tags: ['Penguatan Struktur'],
  },
  {
    id: 'prod_006',
    name: 'Atomized Microseal',
    description: 'Lapisan pelindung ultra-tipis untuk meremajakan permukaan aspal dan melindunginya dari oksidasi dan cuaca.',
    image: 'https://images.unsplash.com/photo-1579493933751-4f11e8f23735?w=600&h=600&fit=crop&q=80',
    aiHint: 'asphalt sealing',
    price: 1250000,
    tags: ['Perawatan Jalan', 'Waterproofing'],
  },
  {
    id: 'prod_007',
    name: 'S.A.M.I Waterproofing',
    description: 'Membran interlayer penyerap tegangan dan anti air untuk mencegah retak reflektif dan kerusakan akibat air.',
    image: 'https://images.unsplash.com/photo-1573985959695-1215de595b30?w=600&h=600&fit=crop&q=80',
    aiHint: 'waterproofing membrane',
    price: 1800000,
    tags: ['Waterproofing'],
  },
  {
    id: 'prod_008',
    name: 'McLeod Cat Marka Jalan',
    description: 'Cat termoplastik berperforma tinggi untuk marka jalan yang jelas dan tahan lama. Visibilitas tinggi di siang dan malam hari.',
    image: 'https://images.unsplash.com/photo-1564883500293-8756311e74a1?w=600&h=600&fit=crop&q=80',
    aiHint: 'road marking paint',
    price: 750000,
    tags: ['Marka Jalan'],
  },
];
