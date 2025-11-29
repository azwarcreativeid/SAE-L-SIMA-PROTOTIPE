
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Instagram, Youtube, Video, ShoppingCart, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../CartContext';

const { Link, Outlet, useLocation } = ReactRouterDOM as any;

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal, totalItems } = useCart();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Profile', path: '/profile' },
    { label: 'Zona & Wahana', path: '/zones' },
    { label: 'Shop', path: '/shop' },
    { label: 'Berita', path: '/blog' },
    { label: 'Galeri', path: '/gallery' },
    { label: 'Tiket', path: '/pages' },
    { label: 'Kontak', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Format Rupiah Helper
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // WhatsApp Checkout Generator
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const phone = "6285730809209";
    let message = `Halo Admin SAE L'SIMA, saya ingin memesan produk berikut:\n\n`;
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatRupiah(item.price * item.quantity)}\n`;
    });

    message += `\n*Total Tagihan: ${formatRupiah(cartTotal)}*`;
    message += `\n\nMohon info ketersediaan dan ongkos kirim. Terima kasih.`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <div className="w-10 h-10 bg-agro-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <h1 className="text-xl font-bold text-agro-dark">SAEL L'SIMA</h1>
                  <p className="text-xs text-gray-500">Agro Eduwisata Lapas Siji Malang</p>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    isActive(link.path)
                      ? 'text-agro-green border-b-2 border-agro-green'
                      : 'text-gray-600 hover:text-agro-green'
                  } px-1 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Cart Icon Desktop */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-600 hover:text-agro-green transition-colors p-2"
                aria-label="Open cart"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button & Cart */}
            <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative text-gray-600 hover:text-agro-green transition-colors"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-agro-green focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(link.path)
                      ? 'bg-agro-green text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-agro-green'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Cart Drawer (Global) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full animate-slide-in-right">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="text-agro-green" />
                  <h2 className="text-lg font-bold text-gray-900">Keranjang Belanja</h2>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full font-medium">
                    {totalItems} item
                  </span>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                    <div className="bg-gray-100 p-6 rounded-full">
                      <ShoppingBag size={48} className="text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Keranjang Kosong</h3>
                      <p className="text-gray-500 text-sm">Belum ada produk yang ditambahkan.</p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2 bg-agro-green text-white rounded-lg hover:bg-agro-dark transition"
                    >
                      Mulai Belanja
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 line-clamp-2">{item.name}</h3>
                            <p className="text-xs text-gray-500">{item.category}</p>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="font-bold text-agro-green text-sm">
                              {formatRupiah(item.price)}
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 transition self-start p-1"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Subtotal</span>
                      <span>{formatRupiah(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-gray-900 pt-3 border-t border-gray-200">
                      <span>Total</span>
                      <span className="text-agro-green">{formatRupiah(cartTotal)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-bold hover:bg-green-700 transition shadow-lg transform active:scale-95"
                  >
                    <Phone size={20} />
                    Checkout via WhatsApp
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-3">
                    Anda akan diarahkan ke WhatsApp Admin untuk konfirmasi pesanan.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-agro-light">SAEL L'SIMA</h3>
              <p className="text-gray-400 text-sm mb-4">
                Sarana Asimilasi dan Edukasi Lapas Siji Malang. Agro Eduwisata berbasis Lembaga Pemasyarakatan yang menyajikan keindahan alam dan edukasi pertanian, peternakan, serta industri kreatif.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-agro-light">Hubungi Kami</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Ubalan, Maguan, Ngajum, Malang, Jawa Timur, 65164</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>+62 857-3080-9209</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} />
                  <span>info@saelsima.com</span>
                </li>
              </ul>
            </div>

            {/* Social & Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-agro-light">Ikuti Kami</h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-agro-green transition">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-agro-green transition">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-agro-green transition">
                  <Video size={20} /> {/* Using Video as placeholder for TikTok */}
                </a>
              </div>
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} SAEL L'SIMA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
