import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h1>
          <p className="text-gray-600">
            Punya pertanyaan seputar paket wisata, pelatihan, atau kunjungan? Kami siap membantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm overflow-hidden">
          
          {/* Contact Info */}
          <div className="bg-agro-dark text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <p className="text-agro-light mb-8">
                Jangan ragu untuk menghubungi kami melalui saluran di bawah ini atau kunjungi langsung lokasi kami.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="text-agro-light flex-shrink-0" />
                  <span>
                    SAE L'SIMA<br/>
                    Ubalan, Maguan, Ngajum,<br/>
                    Malang, Jawa Timur, 65164
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="text-agro-light flex-shrink-0" />
                  <span>+62 857-3080-9209</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="text-agro-light flex-shrink-0" />
                  <span>info@saelsima.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="text-agro-light flex-shrink-0" />
                  <span>
                    Senin - Minggu<br/>
                    08.00 - 16.00 WIB
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-4">Ikuti Media Sosial Kami:</h3>
              <div className="flex gap-4">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-green transition cursor-pointer">IG</span>
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-green transition cursor-pointer">YT</span>
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-agro-green transition cursor-pointer">TT</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agro-green focus:border-transparent outline-none transition"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agro-green focus:border-transparent outline-none transition"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agro-green focus:border-transparent outline-none transition"
                >
                  <option>Pertanyaan Umum</option>
                  <option>Reservasi Wisata</option>
                  <option>Paket Pelatihan</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agro-green focus:border-transparent outline-none transition"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full px-6 py-3 bg-agro-green text-white font-bold rounded-lg hover:bg-agro-dark transition transform active:scale-95"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;