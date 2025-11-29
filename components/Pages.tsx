
import React from 'react';
import { HelpCircle, DollarSign } from 'lucide-react';
import { faqs, pricingPlans } from '../data';

const Pages: React.FC = () => {
  // Format Rupiah Helper
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Informasi Tiket & Paket Wisata</h1>
          <p className="text-gray-600">
            Daftar harga tiket masuk, paket edukasi, dan pertanyaan umum (FAQ).
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-agro-dark">
            <DollarSign className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Daftar Harga (Pricing Table)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`border rounded-xl p-6 transition text-center relative ${
                  plan.isPopular 
                    ? 'border-2 border-agro-green bg-green-50 shadow-md' 
                    : 'border-gray-200 hover:shadow-lg'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-agro-green text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
                    Terpopuler
                  </span>
                )}
                <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-agro-green mb-4">{formatRupiah(plan.price)}</div>
                <p className="text-sm text-gray-500 mb-6">{plan.unit}</p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">*Harga dapat berubah sewaktu-waktu.</p>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-agro-dark">
            <HelpCircle className="w-6 h-6" />
            <h2 className="text-2xl font-bold">FAQ (Tanya Jawab)</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pages;
