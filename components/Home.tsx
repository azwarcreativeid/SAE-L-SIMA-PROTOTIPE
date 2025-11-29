
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Leaf, Users, Bike, ShoppingBag } from 'lucide-react';

const { Link } = ReactRouterDOM as any;

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1080&q=60" 
          alt="Pemandangan Alam SAE L'SIMA"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-agro-green/90 text-white text-sm font-semibold mb-4 tracking-wide animate-fade-in-up">
            WELCOME TO MALANG
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Selamat Datang di <span className="text-agro-light">SAE L'SIMA</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl drop-shadow-md">
            Sarana Asimilasi dan Edukasi Lapas Siji Malang. Agro Eduwisata berbasis Lembaga Pemasyarakatan yang menonjolkan keindahan alam pegunungan dan edukasi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/zones" 
              className="px-8 py-3 bg-agro-green hover:bg-agro-dark text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Jelajahi Zona
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-agro-dark rounded-lg font-semibold transition-all shadow-lg"
            >
              Kunjungi Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Stats/Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Ekonomi Hijau</h3>
              <p className="text-gray-600 text-sm">Pengelolaan sampah & Pupuk Organik untuk kelestarian lingkungan.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Edukasi</h3>
              <p className="text-gray-600 text-sm">Wahana belajar pertanian, peternakan, dan perikanan.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Bike size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Rekreasi</h3>
              <p className="text-gray-600 text-sm">Outbound, ATV, dan Sepeda Gunung (Downhill).</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Produk Kreatif</h3>
              <p className="text-gray-600 text-sm">Batik lukis, Anggrek, dan kerajinan tangan karya WBP.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-agro-green font-semibold uppercase tracking-wider text-sm">Berita Terkini</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">Update dari SAE L'SIMA</h2>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center text-agro-green font-medium hover:text-agro-dark">
              Lihat Semua Berita <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=500&q=60" 
                  alt="Downhill" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-medium">Sport</span>
                  <span className="mx-2">•</span>
                  <span>12 Oktober 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-agro-green transition-colors">
                  <Link to="/blog">Downhill di SAE L’SIMA: Memacu Adrenalin</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Keseruan event sepeda gunung (Downhill) yang diadakan di lintasan ekstrem SAE L'SIMA menarik perhatian komunitas pesepeda.
                </p>
                <Link to="/blog" className="inline-flex items-center text-agro-green font-semibold text-sm">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-5512a125dc83?auto=format&fit=crop&w=500&q=60" 
                  alt="Panen Edamame" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Pertanian</span>
                  <span className="mx-2">•</span>
                  <span>05 Oktober 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-agro-green transition-colors">
                  <Link to="/blog">Panen Raya Edamame Kualitas Ekspor</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  Hasil panen edamame dari lahan pertanian SAE L'SIMA menunjukkan kualitas unggul dan siap dipasarkan untuk kebutuhan masyarakat luas.
                </p>
                <Link to="/blog" className="inline-flex items-center text-agro-green font-semibold text-sm">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-agro-dark py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tertarik Mengunjungi SAE L'SIMA?</h2>
          <p className="text-agro-light text-lg mb-8">
            Dapatkan pengalaman edukasi wisata yang unik, mulai dari belajar bercocok tanam hingga menikmati keindahan alam Gunung Kawi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-white text-agro-dark rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
              Hubungi Kami
            </Link>
            <Link to="/pages" className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition">
              Lihat Harga & Paket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
