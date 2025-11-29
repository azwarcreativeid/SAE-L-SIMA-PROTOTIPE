
import { ProductItem, ZoneItem, NewsItem, EventItem, GalleryItem, FaqItem, PricingItem } from './types';
import { Leaf, Wheat, Fish, Palette, Bike, Sprout, ShoppingBag } from 'lucide-react';

// --- SHOP PRODUCTS DATA ---
// Optimized images: w=500, q=60
export const products: ProductItem[] = [
  {
    id: 1,
    name: "Batik Tulis Motif Kawi",
    category: "Batik",
    price: 250000,
    image: "https://images.unsplash.com/photo-1598556776374-0a374665cc6c?auto=format&fit=crop&w=500&q=60",
    description: "Kain batik tulis karya warga binaan dengan motif khas pegunungan Kawi. Bahan katun primisima yang nyaman dipakai.",
    gallery: [
      "https://images.unsplash.com/photo-1598556776374-0a374665cc6c?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523798724321-364e1951f643?auto=format&fit=crop&w=500&q=60"
    ]
  },
  {
    id: 2,
    name: "Lukisan Alam (Kanvas)",
    category: "Lukisan",
    price: 500000,
    image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=500&q=60",
    description: "Lukisan pemandangan alam media cat minyak di atas kanvas ukuran 60x80cm. Hasil karya tangan-tangan terampil WBP.",
    gallery: [
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579783902614-a3fb39279c23?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?auto=format&fit=crop&w=500&q=60"
    ]
  },
  {
    id: 3,
    name: "Anggrek Bulan Dewasa",
    category: "Pertanian",
    price: 125000,
    image: "https://images.unsplash.com/photo-1566634583713-33e1eb30897f?auto=format&fit=crop&w=500&q=60",
    description: "Tanaman Anggrek Bulan yang sudah berbunga, hasil budidaya Green House SAE L'SIMA. Tersedia berbagai varian warna."
  },
  {
    id: 4,
    name: "Jamur Tiram Segar (1kg)",
    category: "Pertanian",
    price: 20000,
    image: "https://images.unsplash.com/photo-1629832207907-74431525cb11?auto=format&fit=crop&w=500&q=60",
    description: "Jamur tiram putih segar hasil panen harian rumah jamur kami. Bebas pestisida dan sangat bergizi."
  },
  {
    id: 5,
    name: "Tas Anyaman Plastik",
    category: "Kerajinan",
    price: 45000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=60",
    description: "Tas belanja ramah lingkungan dari bahan daur ulang yang kuat dan modis. Cocok untuk belanja ke pasar atau supermarket."
  },
  {
    id: 6,
    name: "Edamame Beku (500g)",
    category: "Pertanian",
    price: 15000,
    image: "https://images.unsplash.com/photo-1558230623-6bb306263339?auto=format&fit=crop&w=500&q=60",
    description: "Edamame kualitas ekspor yang telah dibersihkan dan dibekukan. Siap rebus untuk camilan sehat keluarga."
  },
  {
    id: 7,
    name: "Miniatur Kapal Pinisi",
    category: "Kerajinan",
    price: 350000,
    image: "https://images.unsplash.com/photo-1516934557257-814d23580556?auto=format&fit=crop&w=500&q=60",
    description: "Miniatur kapal detail tinggi dari limbah kayu. Sangat cocok untuk hiasan ruang tamu atau meja kerja."
  },
  {
    id: 8,
    name: "Kaos Sablon SAE L'SIMA",
    category: "Lainnya",
    price: 85000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60",
    description: "Kaos katun combed 30s dengan desain sablon logo SAE L'SIMA. Oleh-oleh khas setelah berkunjung."
  }
];

// --- ZONES DATA ---
// Main Zone: w=800, q=70 (for detail Hero)
// Gallery/Items: w=500, q=60
export const zonesData: ZoneItem[] = [
  {
    id: 1,
    title: "Ekonomi Hijau (Green Economy)",
    description: "Zona pelestarian lingkungan dengan pengolahan limbah terpadu dan pertanian modern berkelanjutan.",
    longDescription: "Di Zona Ekonomi Hijau, SAE L'SIMA menerapkan prinsip 'Zero Waste'. Kami mengedukasi pengunjung tentang bagaimana sampah organik diubah menjadi sumber daya yang bernilai melalui budidaya Maggot BSF dan pembuatan pupuk kompos. Selain itu, area ini dilengkapi dengan Green House modern yang menampilkan teknik pertanian hidroponik hemat lahan.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=70",
    items: ["Pengelolaan Sampah", "Pupuk Organik", "Green House"],
    contact: {
      locationLabel: "Kantor Unit Lingkungan & Kompos",
      email: "lingkungan@saelsima.com"
    },
    gallery: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "Rumah Maggot BSF",
        description: "Pusat penguraian sampah organik menggunakan lalat tentara hitam (Black Soldier Fly). Larva maggot yang dihasilkan kemudian digunakan sebagai pakan ikan berprotein tinggi.",
        image: "https://images.unsplash.com/photo-1557342796-5c991295f9e2?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Produksi Pupuk Kompos",
        description: "Unit pengolahan limbah ternak dan sisa pertanian menjadi pupuk organik padat dan cair yang menyuburkan lahan pertanian di seluruh kawasan SAE.",
        image: "https://images.unsplash.com/photo-1591195853828-111165a2d743?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Smart Green House",
        description: "Bangunan pelindung tanaman yang dilengkapi teknologi irigasi tetes untuk budidaya melon golden dan sayuran eksotis bebas hama.",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    id: 2,
    title: "Ketahanan Pangan: Pertanian",
    description: "Lahan pertanian produktif yang menghasilkan komoditas unggulan kualitas ekspor.",
    longDescription: "Zona Pertanian adalah jantung dari ketahanan pangan di SAE L'SIMA. Di sini, lahan tidur disulap menjadi hamparan hijau produktif. Pengunjung dapat melihat langsung proses bercocok tanam mulai dari pembibitan hingga panen. Komoditas utama kami adalah Edamame (kedelai Jepang) yang telah menembus pasar ekspor, membuktikan kualitas hasil kerja warga binaan.",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=70",
    items: ["Kebun Edamame", "Ladang Kobis", "Sawah Padi"],
    contact: {
      locationLabel: "Pos Pertanian Blok A",
      phone: "+62 812-3456-7890"
    },
    gallery: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1625246333195-5512a125dc83?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "Sentra Edamame Ekspor",
        description: "Lahan seluas 2 hektar yang dikhususkan untuk budidaya Edamame. Pengunjung dapat mengikuti paket 'Petik Sendiri' saat musim panen tiba.",
        image: "https://images.unsplash.com/photo-1591465001581-d42f5c222f79?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Hortikultura Sayur",
        description: "Area tanam tumpang sari yang berisi kobis manis, terong, dan cabai. Menggunakan pupuk organik hasil produksi sendiri.",
        image: "https://images.unsplash.com/photo-1597362925123-778f31384462?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Demplot Padi & Jagung",
        description: "Lahan percontohan untuk tanaman pangan pokok, tempat belajar teknik tanam jajar legowo yang efektif.",
        image: "https://images.unsplash.com/photo-1535242208474-9a2793260ca8?auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    id: 3,
    title: "Ketahanan Pangan: Perikanan",
    description: "Budidaya ikan air tawar dengan sistem bioflok dan kolam alami pegunungan.",
    longDescription: "Memanfaatkan sumber mata air alami pegunungan yang jernih, Zona Perikanan SAE L'SIMA mengembangkan berbagai metode budidaya. Mulai dari sistem Bioflok yang hemat air dan padat tebar, hingga kolam tanah konvensional. Zona ini menjadi tempat favorit bagi penghobi ikan hias dan konsumsi.",
    icon: Fish,
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=70",
    items: ["Lele Bioflok", "Nila Merah", "Koi Kontes"],
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1516684669134-de6d7c47743b?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "Kolam Bioflok Lele",
        description: "Deretan kolam bundar berteknologi bioflok yang mampu memproduksi lele dalam jumlah besar dengan lahan terbatas. Higienis dan tidak berbau.",
        image: "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Sentra Ikan Nila",
        description: "Kolam air deras untuk pembesaran Nila. Ikan yang dihasilkan memiliki daging yang kesat dan gurih karena kualitas air yang baik.",
        image: "https://images.unsplash.com/photo-1580687774725-4e23db308efc?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Galeri Koi",
        description: "Kolam khusus pemijahan dan pembesaran Koi berbagai jenis (Kohaku, Showa, Sanke). Kualitas grade A yang siap kontes.",
        image: "https://images.unsplash.com/photo-1516684669134-de6d7c47743b?auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    id: 4,
    title: "Peternakan Terpadu",
    description: "Kawasan edukasi interaktif dunia peternakan sapi, domba, dan unggas.",
    longDescription: "Zona Peternakan didesain ramah pengunjung, terutama anak-anak. Di sini, pengunjung tidak hanya melihat, tetapi bisa berinteraksi langsung seperti memberi makan (feeding) dan memerah susu sapi (pada jam tertentu). Kesehatan hewan dijaga ketat oleh tim dokter hewan dan warga binaan terlatih.",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=70",
    items: ["Domba Merino", "Sapi Perah", "Ayam Petelur"],
    contact: {
      locationLabel: "Klinik Hewan & Sekretariat",
      phone: "+62 813-5555-9999"
    },
    gallery: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "Kandang Domba Modern",
        description: "Rumah bagi puluhan Domba jenis Merino dan Ekor Gemuk. Kandang panggung yang bersih memudahkan pengelolaan limbah.",
        image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Penggemukan Sapi",
        description: "Unit usaha penggemukan sapi potong (Limousin & Simmental) yang diberi pakan fermentasi berkualitas.",
        image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Ayam Petelur Omega",
        description: "Peternakan ayam ras petelur yang menghasilkan telur segar setiap hari. Bebas residu antibiotik.",
        image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    id: 5,
    title: "Wahana Edukasi & Rekreasi",
    description: "Pacu adrenalin Anda dengan ATV dan Downhill atau nikmati Outbound seru.",
    longDescription: "Menyeimbangkan edukasi dengan rekreasi, zona ini menawarkan pengalaman tak terlupakan di alam terbuka. Dengan kontur tanah berbukit khas lereng gunung, kami menyediakan lintasan yang menantang untuk pecinta olahraga ekstrem, serta area lapang untuk kegiatan gathering komunitas atau perusahaan.",
    icon: Bike,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=70",
    items: ["Sirkuit ATV", "Trek Downhill", "Camping Ground"],
    contact: {
      locationLabel: "Loket Tiket Wahana & Sewa ATV",
      phone: "+62 857-3080-9209"
    },
    gallery: [
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "ATV Adventure Track",
        description: "Lintasan off-road sepanjang 2km melintasi kebun kopi dan sungai kecil. Tersedia unit ATV 150cc hingga 250cc.",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Downhill Bike Park",
        description: "Trek sepeda gunung dengan berbagai rintangan alami dan buatan (drop, berm, table top) untuk pemula hingga profesional.",
        image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Outbound & Camping",
        description: "Area hijau luas yang dilengkapi fasilitas flying fox, jembatan tali, dan spot mendirikan tenda dengan pemandangan city light Malang.",
        image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    id: 6,
    title: "Industri Kreatif",
    description: "Pusat pelatihan keterampilan seni dan kriya warga binaan.",
    longDescription: "Di balik jeruji besi, kreativitas tidak pernah mati. Zona Industri Kreatif adalah buktinya. Ini adalah bengkel kerja (workshop) tempat WBP menyalurkan bakat seni mereka. Pengunjung dapat melihat proses pembuatan karya seni secara langsung dan bahkan memesan produk custom.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=70",
    items: ["Galeri Lukis", "Bengkel Las", "Kerajinan Kayu"],
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "Sanggar Lukis",
        description: "Studio seni rupa tempat lahirnya lukisan-lukisan beraliran realisme hingga abstrak. Menggunakan media kanvas, cat minyak, hingga limbah kopi.",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb39279c23?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Bimker Manufaktur",
        description: "Bengkel las dan konstruksi yang memproduksi pagar, tralis, hingga furnitur bergaya industrial.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Handycraft",
        description: "Unit pembuatan suvenir seperti gantungan kunci, miniatur, dan anyaman yang detail dan rapi.",
        image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=500&q=60"
      }
    ]
  },
  {
    id: 7,
    title: "E-Commerce & Produk Bimker",
    description: "Showroom produk unggulan hasil karya warga binaan.",
    longDescription: "Semua hasil produksi dari berbagai zona pertanian, peternakan, dan industri kreatif bermuara di sini. Toko fisik dan digital yang dikelola secara profesional untuk memasarkan produk WBP ke masyarakat luas. Membeli produk di sini berarti mendukung program pembinaan kemandirian.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=70",
    items: ["Showroom Batik", "Pusat Oleh-oleh", "Cafe SAE"],
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1523798724321-364e1951f643?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601598851547-4302969ca001?auto=format&fit=crop&w=500&q=60"
    ],
    detailItems: [
      {
        title: "Showroom Batik Tulis",
        description: "Menampilkan koleksi kain batik tulis, cap, dan printing motif eksklusif SAE L'SIMA. Pengunjung bisa mencoba membatik di sini.",
        image: "https://images.unsplash.com/photo-1605634685040-75390089d71c?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Cafe & Resto SAE",
        description: "Tempat bersantai menikmati kopi barista dan hidangan lezat yang bahan bakunya diambil segar dari kebun sendiri.",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=500&q=60"
      },
      {
        title: "Minimarket Bimker",
        description: "Menyediakan aneka camilan, sayur segar, dan kebutuhan pokok dengan harga terjangkau.",
        image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=500&q=60"
      }
    ]
  }
];

// --- NEWS & BLOG DATA ---
// News detail images: w=720, q=60
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Downhill di SAE L’SIMA: Memacu Adrenalin di Lereng Kawi",
    date: "12 Oktober 2023",
    excerpt: "Keseruan event sepeda gunung (Downhill) yang diadakan di lintasan ekstrem SAE L'SIMA menarik perhatian komunitas pesepeda dari berbagai daerah.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=720&q=60",
    category: "Sport",
    author: "Tim Humas Lapas",
    content: [
      "SAE L'SIMA kembali menjadi tuan rumah bagi para pecinta olahraga ekstrem. Akhir pekan lalu, lintasan downhill kebanggaan Lapas Siji Malang dipadati oleh ratusan peserta yang antusias mengikuti 'Kawi Downhill Challenge'. Jalur yang terbentang sepanjang 2,5 kilometer ini menawarkan rintangan alami yang menantang, mulai dari turunan curam berbatu, akar-akar pohon besar, hingga tikungan tajam yang menuntut teknik tinggi.",
      "Event ini tidak hanya sekadar ajang kompetisi, tetapi juga sarana untuk memperkenalkan potensi wisata alam yang dimiliki oleh SAE L'SIMA. Kepala Lapas Kelas I Malang menyampaikan apresiasinya kepada seluruh panitia dan peserta yang telah menjaga sportivitas dan kebersihan lingkungan selama acara berlangsung. 'Ini membuktikan bahwa SAE L'SIMA adalah destinasi wisata yang inklusif, bisa dinikmati oleh keluarga maupun komunitas hobi,' ujarnya.",
      "Para peserta mengaku sangat terkesan dengan kondisi trek yang terawat dengan baik. 'Treknya sangat teknikal tapi juga flowy. Pemandangan di sekitar trek juga luar biasa indah, jadi rasa lelah saat mengayuh sepeda terbayar lunas,' ungkap Rian, salah satu peserta dari Surabaya. Selain balapan, acara juga dimeriahkan dengan bazaar produk UMKM hasil karya Warga Binaan Pemasyarakatan (WBP), mulai dari kerajinan tangan hingga kuliner khas.",
      "Ke depannya, SAE L'SIMA berencana untuk mengembangkan fasilitas trek sepeda ini agar bisa menggelar event berskala nasional. Hal ini diharapkan dapat meningkatkan kunjungan wisatawan dan pada akhirnya memberikan dampak positif bagi program pembinaan kemandirian WBP."
    ]
  },
  {
    id: 2,
    title: "Panen Raya Edamame Kualitas Ekspor",
    date: "05 Oktober 2023",
    excerpt: "SAE L'SIMA berhasil melakukan panen raya Edamame kualitas ekspor. Kegiatan ini melibatkan warga binaan pemasyarakatan sebagai bentuk pembinaan kemandirian.",
    image: "https://images.unsplash.com/photo-1599522316675-9c5132d207d5?auto=format&fit=crop&w=720&q=60",
    category: "Pertanian",
    author: "Koordinator Pertanian",
    content: [
      "Hamparan hijau tanaman edamame di SAE L'SIMA akhirnya siap dipanen. Panen raya kali ini menjadi momen yang sangat dinantikan, mengingat hasil panen diproyeksikan untuk memenuhi permintaan pasar ekspor ke Jepang dan Eropa. Kualitas edamame yang dihasilkan dinilai sangat baik, dengan polong yang besar, warna hijau cerah, dan rasa yang manis gurih.",
      "Keberhasilan ini tidak lepas dari kerja keras para Warga Binaan Pemasyarakatan (WBP) yang tergabung dalam program asimilasi pertanian. Di bawah bimbingan instruktur ahli, mereka belajar teknik budidaya edamame mulai dari pengolahan tanah, pemilihan benih unggul, pemupukan organik, hingga pengendalian hama terpadu. 'Kami sangat bangga bisa menghasilkan produk pertanian yang bisa bersaing di pasar internasional,' ujar salah satu WBP yang bertugas.",
      "Hasil panen edamame ini sebagian langsung dikirim ke pabrik pengolahan untuk proses pembekuan (frozen food), dan sebagian lagi dijual segar di Minimarket SAE L'SIMA serta pasar lokal Malang Raya. Program pertanian ini menjadi bukti nyata bahwa tembok penjara bukanlah penghalang untuk berkarya dan berkontribusi bagi ketahanan pangan nasional.",
      "Selain edamame, SAE L'SIMA juga tengah mengembangkan komoditas lain seperti melon golden dan cabai rawit. Diharapkan dengan adanya kegiatan produktif seperti ini, para WBP memiliki bekal keterampilan yang mumpuni saat mereka kembali ke masyarakat nanti."
    ]
  },
  {
    id: 3,
    title: "Kunjungan Edukasi Siswa SD: Belajar dari Alam",
    date: "28 September 2023",
    excerpt: "Ratusan siswa sekolah dasar mengunjungi wahana edukasi peternakan. Mereka belajar memberi makan domba dan sapi serta melihat proses pembuatan pupuk organik.",
    image: "https://images.unsplash.com/photo-1503919545885-d74981279d94?auto=format&fit=crop&w=720&q=60",
    category: "Edukasi",
    author: "Admin Eduwisata",
    content: [
      "Suara tawa dan keceriaan memenuhi area peternakan SAE L'SIMA pagi ini. Sebanyak 150 siswa dari SD Negeri Ngajum 01 melakukan kunjungan belajar (outing class) untuk mengenal dunia pertanian dan peternakan secara langsung. Kegiatan ini bertujuan untuk menanamkan rasa cinta alam dan menghargai profesi petani sejak dini.",
      "Para siswa diajak berkeliling ke berbagai zona edukasi. Di zona peternakan, mereka berkesempatan memberi makan domba Merino dan melihat proses pemerahan susu sapi. Antusiasme terlihat jelas saat mereka mencoba memegang anak kelinci di taman kelinci. Edukator dari SAE L'SIMA menjelaskan dengan bahasa yang mudah dimengerti tentang siklus hidup hewan dan manfaatnya bagi manusia.",
      "Selain berinteraksi dengan hewan, para siswa juga diajarkan cara menanam sayuran di polybag dan melihat proses pembuatan pupuk kompos dari limbah organik. 'Saya senang sekali bisa memegang domba, bulunya halus. Nanti di rumah mau coba tanam cabai,' kata Siti, siswa kelas 3 dengan wajah berseri-seri.",
      "Kepala Sekolah SD Negeri Ngajum 01 menyambut positif kegiatan ini. Menurutnya, pembelajaran di luar kelas seperti ini sangat efektif untuk membangun karakter dan pengetahuan siswa. SAE L'SIMA berkomitmen untuk terus menyediakan sarana edukasi yang berkualitas bagi pelajar di wilayah Malang dan sekitarnya."
    ]
  },
  {
    id: 4,
    title: "Pelatihan Membatik Tulis untuk WBP",
    date: "15 September 2023",
    excerpt: "Dalam rangka meningkatkan keterampilan industri kreatif, diadakan pelatihan membatik tulis bagi warga binaan. Hasil karya mereka kini dipajang di Art Galeri.",
    image: "https://images.unsplash.com/photo-1605634685040-75390089d71c?auto=format&fit=crop&w=720&q=60",
    category: "Industri Kreatif",
    author: "Seksi Bimbingan Kerja",
    content: [
      "Aroma malam (lilin batik) yang khas tercium dari sanggar seni SAE L'SIMA. Puluhan Warga Binaan Pemasyarakatan (WBP) tampak tekun menggoreskan canting di atas kain mori. Mereka sedang mengikuti pelatihan intensif membatik tulis yang diselenggarakan oleh Seksi Kegiatan Kerja bekerjasama dengan instruktur batik profesional dari Yogyakarta.",
      "Pelatihan ini bertujuan untuk melestarikan budaya bangsa sekaligus membekali WBP dengan keterampilan bernilai ekonomi tinggi. Motif yang diajarkan kali ini adalah 'Motif Kawi', sebuah kreasi orisinal yang terinspirasi dari flora dan fauna di sekitar Gunung Kawi. Ketelatenan dan kesabaran sangat diuji dalam proses ini, yang juga menjadi bagian dari terapi mental bagi para WBP.",
      "Salah satu peserta, Budi (nama samaran), mengaku baru pertama kali memegang canting. 'Awalnya gemetar dan lilinnya menetes kemana-mana, tapi setelah diajari tekniknya, ternyata sangat asyik. Rasanya tenang saat membatik,' tuturnya. Hasil karya batik tulis WBP ini memiliki nilai seni yang tinggi dan telah menarik minat beberapa kolektor batik.",
      "Kain-kain batik yang telah jadi kini dipajang dan dijual di Galeri SAE L'SIMA. Sebagian hasil penjualan akan ditabungan sebagai premi bagi WBP dan sebagian lagi diputar kembali untuk modal bahan baku. Dengan adanya pelatihan ini, diharapkan WBP memiliki bekal wirausaha yang kuat saat bebas nanti."
    ]
  }
];

export const upcomingEvents: EventItem[] = [
  { title: "Festival Kuliner & Produk WBP", date: "20 Nov 2023", location: "Lapangan Utama SAE" },
  { title: "Lomba Sepeda Gunung Regional", date: "05 Des 2023", location: "Sirkuit Downhill" },
  { title: "Hari Bakti Pemasyarakatan", date: "27 Apr 2024", location: "Aula Serbaguna" },
];

// --- GALLERY DATA ---
// Gallery items: w=500, q=60
export const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=500&q=60", alt: "Pemandangan Hutan", category: "Nature" },
  { id: 2, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=60", alt: "Pegunungan", category: "Nature" },
  { id: 3, src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=500&q=60", alt: "Aktivitas Outdoor", category: "Activities" },
  { id: 4, src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=60", alt: "Buah Buahan", category: "Products" },
  { id: 5, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=60", alt: "Jalan Setapak", category: "Nature" },
  { id: 6, src: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=500&q=60", alt: "Seni Lukis", category: "Products" },
  { id: 7, src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=500&q=60", alt: "Kunjungan Tamu", category: "Visits" },
  { id: 8, src: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=500&q=60", alt: "Sayuran Segar", category: "Products" },
  { id: 9, src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=500&q=60", alt: "Sepeda Gunung", category: "Activities" },
];

// --- PRICING & FAQ DATA ---
export const faqs: FaqItem[] = [
  {
    question: "Apakah lokasi ini terbuka untuk umum?",
    answer: "Ya, SAEL L'SIMA terbuka untuk masyarakat luas sebagai sarana edukasi dan wisata. Namun, ada aturan tertentu yang harus dipatuhi karena berada di bawah pengelolaan Lembaga Pemasyarakatan."
  },
  {
    question: "Berapa harga tiket masuk?",
    answer: "Harga tiket masuk bervariasi tergantung paket yang dipilih (hanya kunjungan atau paket edukasi). Silakan cek tabel harga di bawah atau hubungi kami untuk informasi terbaru."
  },
  {
    question: "Apakah aman membawa anak-anak?",
    answer: "Sangat aman. Tempat ini didesain ramah keluarga dan sangat edukatif untuk anak-anak mengenal alam dan hewan ternak."
  },
  {
    question: "Bagaimana cara reservasi untuk rombongan sekolah?",
    answer: "Untuk rombongan sekolah, sebaiknya melakukan reservasi minimal 1 minggu sebelumnya melalui kontak WhatsApp atau email yang tersedia."
  }
];

export const pricingPlans: PricingItem[] = [
  {
    title: "Tiket Masuk Reguler",
    price: 10000,
    unit: "Per orang",
    features: ["Akses ke area taman", "Spot foto selfie", "Akses ke Cafeteria"],
    isPopular: false
  },
  {
    title: "Paket Edukasi",
    price: 35000,
    unit: "Per siswa (Min. 20 pax)",
    features: ["Tiket Masuk", "Pemandu Wisata", "Praktek menanam/memberi makan ternak", "Snack Box"],
    isPopular: true
  },
  {
    title: "Wahana ATV",
    price: 50000,
    unit: "Per 3 putaran",
    features: ["Sewa Unit ATV", "Helm Pengaman", "Instruktur"],
    isPopular: false
  }
];
