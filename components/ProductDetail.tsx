import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Plus, Minus, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data';
import { useCart } from '../CartContext';

const { useParams, Link, useNavigate } = ReactRouterDOM as any;

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  // Cart Context
  const { addToCart, setIsCartOpen, totalItems } = useCart();

  const [wishlist, setWishlist] = useState<number[]>(() => {
    const savedWishlist = localStorage.getItem('sael_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Zoom State
  const [zoomState, setZoomState] = useState({ x: 0, y: 0, isZoomed: false });
  
  // Combine main image and gallery into a single array, deduplicating if necessary
  const productImages = product 
    ? [product.image, ...(product.gallery || [])].filter((v, i, a) => a.indexOf(v) === i) 
    : [];

  useEffect(() => {
    localStorage.setItem('sael_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
    setQuantity(1);
    setZoomState({ x: 0, y: 0, isZoomed: false });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan</h2>
        <Link to="/shop" className="px-6 py-2 bg-agro-green text-white rounded-lg hover:bg-agro-dark">
          Kembali ke Toko
        </Link>
      </div>
    );
  }

  // --- HELPERS ---
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const isInWishlist = wishlist.includes(product.id);

  // --- ACTIONS ---
  const toggleWishlist = () => {
    setWishlist(prev => 
      prev.includes(product.id) ? prev.filter(itemId => itemId !== product.id) : [...prev, product.id]
    );
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // --- ZOOM HANDLERS ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomState({ x, y, isZoomed: true });
  };

  const handleMouseLeave = () => {
    setZoomState(prev => ({ ...prev, isZoomed: false }));
  };

  return (
    <div className="bg-white min-h-screen py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button 
          onClick={() => navigate('/shop')}
          className="flex items-center gap-2 text-gray-600 hover:text-agro-green font-medium mb-8 transition"
        >
          <ArrowLeft size={20} /> Kembali ke Toko
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images (Carousel) */}
          <div className="space-y-4">
            <div 
              className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm aspect-square relative group select-none cursor-zoom-in"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
               <img 
                 src={productImages[activeImageIndex]} 
                 alt={product.name} 
                 className={`w-full h-full object-cover transition-transform duration-200 ease-out ${
                   zoomState.isZoomed ? 'scale-[2]' : 'scale-100'
                 }`}
                 style={{
                   transformOrigin: `${zoomState.x}% ${zoomState.y}%`
                 }}
               />
               
               {/* Navigation Arrows (Hidden when zooming to avoid obstruction, usually good UX) */}
               {productImages.length > 1 && !zoomState.isZoomed && (
                 <>
                   <button 
                     onClick={(e) => { e.stopPropagation(); prevImage(); }}
                     className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-colors z-10"
                     aria-label="Previous image"
                   >
                     <ChevronLeft size={24} />
                   </button>
                   <button 
                     onClick={(e) => { e.stopPropagation(); nextImage(); }}
                     className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-colors z-10"
                     aria-label="Next image"
                   >
                     <ChevronRight size={24} />
                   </button>
                 </>
               )}

               <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleWishlist(); }}
                    className="p-3 bg-white/90 backdrop-blur rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart 
                      size={24} 
                      className={isInWishlist ? "text-red-500 fill-red-500" : "text-gray-400"} 
                    />
                  </button>
               </div>
            </div>

            {/* Thumbnails */}
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx 
                        ? 'border-agro-green ring-1 ring-agro-green' 
                        : 'border-transparent opacity-70 hover:opacity-100 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
             <span className="inline-block px-3 py-1 bg-agro-green/10 text-agro-green text-sm font-bold rounded-full w-fit mb-4">
               {product.category}
             </span>
             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
             <div className="text-3xl font-bold text-agro-dark mb-6">
               {formatRupiah(product.price)}
             </div>
             
             <div className="prose prose-gray mb-8">
               <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 mb-8 border-t border-b border-gray-100 py-8">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between sm:justify-start border border-gray-200 rounded-xl w-full sm:w-auto">
                    <button 
                      onClick={handleDecrement}
                      className="p-4 hover:bg-gray-50 text-gray-600 rounded-l-xl transition disabled:opacity-50"
                      disabled={quantity <= 1}
                      aria-label="Kurangi jumlah"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="font-bold text-lg w-12 text-center">{quantity}</span>
                    <button 
                      onClick={handleIncrement}
                      className="p-4 hover:bg-gray-50 text-gray-600 rounded-r-xl transition"
                      aria-label="Tambah jumlah"
                    >
                      <Plus size={20} />
                    </button>
                </div>

                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 flex items-center justify-center gap-2 bg-agro-green text-white px-8 py-4 rounded-xl font-bold hover:bg-agro-dark transition shadow-lg hover:shadow-xl transform active:scale-95"
                >
                  <ShoppingCart size={20} />
                  Tambah ke Keranjang
                </button>
                <button 
                  onClick={toggleWishlist}
                  className={`px-6 py-4 rounded-xl font-bold border-2 transition flex items-center justify-center gap-2 ${
                    isInWishlist 
                      ? 'border-red-200 bg-red-50 text-red-500' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Heart size={20} className={isInWishlist ? "fill-red-500" : ""} />
                  {isInWishlist ? 'Disimpan' : 'Simpan'}
                </button>
             </div>

             <div className="bg-blue-50 p-4 rounded-xl flex gap-3 text-blue-800 text-sm">
                <InfoIcon />
                <p>
                  Hasil penjualan produk ini sebagian besar akan dikembalikan kepada Warga Binaan Pemasyarakatan (WBP) sebagai premi upah kerja dan tabungan mereka.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* --- Floating Cart Button (Shared UI) --- */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-agro-green text-white p-4 rounded-full shadow-2xl hover:bg-agro-dark transition-all transform hover:scale-110 flex items-center justify-center"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
            {totalItems}
          </span>
        )}
      </button>

    </div>
  );
};

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
);

export default ProductDetail;