
import React from 'react';
import { MapPin, Target } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profil SAE L'SIMA</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mengenal lebih dekat Sarana Asimilasi dan Edukasi Lapas Siji Malang sebagai pusat edukasi dan wisata berbasis pemasyarakatan.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Visi Misi */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-agro-green/10 rounded-lg text-agro-green">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Visi & Misi</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Visi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi pusat agro eduwisata unggulan yang memberdayakan warga binaan pemasyarakatan (WBP) untuk menjadi insan mandiri, produktif, dan diterima kembali oleh masyarakat.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Misi</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan sarana asimilasi yang berkualitas bagi WBP.</li>
                  <li>Mengembangkan potensi pertanian, peternakan, dan industri kreatif.</li>
                  <li>Memberikan edukasi wisata kepada masyarakat luas tentang sistem pemasyarakatan produktif.</li>
                  <li>Menjaga kelestarian lingkungan melalui konsep ekonomi hijau.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                <MapPin size={28} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Lokasi & Geografis</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Terletak di kawasan Ubalan, Maguan, Ngajum, SAE L'SIMA menawarkan pemandangan alam yang asri di kaki Gunung Kawi. Udara yang sejuk dan tanah yang subur menjadikan lokasi ini sangat ideal untuk berbagai aktivitas pertanian dan pariwisata.
            </p>
            <a 
              href="https://maps.app.goo.gl/RAY9y6Kw5b8bu3yj6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative group cursor-pointer"
            >
              {/* Map Image */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=60" 
                alt="Pemandangan Lokasi" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors text-white">
                <MapPin className="mb-2 opacity-80" size={32} />
                <span className="font-bold text-lg">Lihat di Google Maps</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
