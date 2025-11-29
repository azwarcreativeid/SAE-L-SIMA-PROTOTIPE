
import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowLeft, MapPin, Info, Phone, Mail } from 'lucide-react';
import { zonesData } from '../data';

const { useParams, Link, useNavigate } = ReactRouterDOM as any;

const ZoneDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the zone data based on ID
  const zone = zonesData.find(z => z.id === Number(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!zone) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Zona tidak ditemukan</h2>
        <Link to="/zones" className="px-6 py-2 bg-agro-green text-white rounded-lg hover:bg-agro-dark">
          Kembali ke Daftar Zona
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <img 
          src={zone.image} 
          alt={zone.title} 
          className="w-full h-full object-cover"
          // Keep hero image eager loading for LCP
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/zones" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft size={20} /> Kembali ke Zona
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-agro-green rounded-lg text-white">
                <zone.icon size={28} />
              </div>
              <span className="uppercase tracking-wider font-semibold text-agro-light text-sm">Detail Wahana</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{zone.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* Main Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Info className="text-agro-green" />
            Tentang Zona Ini
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {zone.longDescription}
          </p>

          {/* Contact Info (If available) */}
          {zone.contact && (
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-agro-dark mb-4">Informasi Kontak Zona</h3>
              <div className="flex flex-wrap gap-6">
                {zone.contact.locationLabel && (
                  <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                    <MapPin size={20} className="text-agro-green" />
                    <span className="font-medium">{zone.contact.locationLabel}</span>
                  </div>
                )}
                {zone.contact.phone && (
                  <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                    <Phone size={20} className="text-agro-green" />
                    <span className="font-medium">{zone.contact.phone}</span>
                  </div>
                )}
                {zone.contact.email && (
                  <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg">
                    <Mail size={20} className="text-agro-green" />
                    <span className="font-medium">{zone.contact.email}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Facilities & Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-agro-green pl-4">
            Fasilitas & Produk Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zone.detailItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-agro-green pl-4">
            Galeri Foto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {zone.gallery.map((imgSrc, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden aspect-video shadow-sm">
                <img 
                  src={imgSrc} 
                  alt={`${zone.title} gallery ${idx + 1}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
          <button 
            onClick={() => navigate('/zones')}
            className="flex items-center gap-2 text-gray-600 hover:text-agro-green font-medium transition"
          >
            <ArrowLeft size={20} />
            Lihat Zona Lainnya
          </button>
          
          <Link 
            to="/contact"
            className="px-6 py-3 bg-agro-dark text-white rounded-lg font-bold hover:bg-agro-green transition shadow-md"
          >
            Reservasi Kunjungan
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ZoneDetail;