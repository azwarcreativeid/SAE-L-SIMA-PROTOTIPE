
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';
import { zonesData } from '../data';

const { Link } = ReactRouterDOM as any;

const Zones: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zona & Wahana</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Jelajahi integrasi harmonis antara alam, edukasi, dan pemberdayaan manusia di SAE L'SIMA. Setiap zona dirancang untuk memberikan pengalaman wisata yang mendidik dan menghibur.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zonesData.map((zone) => (
            <Link 
              to={`/zones/${zone.id}`} 
              key={zone.id} 
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={zone.image} 
                  alt={zone.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-md text-agro-green z-10">
                  <zone.icon size={24} />
                </div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10 drop-shadow-md pr-4">{zone.title}</h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">{zone.description}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <h4 className="text-xs font-bold text-agro-dark uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-agro-green"></span>
                    Fasilitas & Produk
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {zone.items.map((item, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:border-agro-green hover:text-agro-green transition-colors cursor-default shadow-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-agro-green font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    Lihat Detail <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA for Facilities */}
        <div className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center border border-green-100 shadow-sm">
          <Building2 className="mx-auto text-agro-green mb-4" size={48} />
          <h2 className="text-2xl md:text-3xl font-bold text-agro-dark mb-4">Fasilitas Pendukung Lengkap</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Demi kenyamanan pengunjung, SAE L'SIMA dilengkapi dengan area parkir bus & kendaraan pribadi yang luas, toilet bersih berstandar, Mushola yang nyaman, serta Cafeteria yang menyajikan hidangan lokal.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-agro-green text-white rounded-lg font-bold hover:bg-agro-dark transition">
            Info Kunjungan
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Zones;
