
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ShoppingBag, Search, Filter, Plus, Heart, ShoppingCart } from 'lucide-react';
import { ProductItem } from '../types';
import { products } from '../data'; // Import shared data
import AddProductModal from './AddProductModal';
import { useCart } from '../CartContext';

const { Link } = ReactRouterDOM as any;

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Local Product State (combining static data with any newly added ones)
  const [allProducts, setAllProducts] = useState<ProductItem[]>(products);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Cart Context
  const { addToCart, setIsCartOpen, totalItems } = useCart();

  // State untuk Wishlist
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const savedWishlist = localStorage.getItem('sael_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Simpan ke localStorage setiap ada perubahan wishlist
  useEffect(() => {
    localStorage.setItem('sael_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const categories = ['Semua', 'Batik', 'Lukisan', 'Pertanian', 'Kerajinan', 'Lainnya'];

  // Filter Logic
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === 'Semua' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesWishlist = showWishlistOnly ? wishlist.includes(product.id) : true;
    
    return matchesCategory && matchesSearch && matchesWishlist;
  });

  // Format Rupiah
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  // --- WISHLIST LOGIC ---
  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const isInWishlist = (id: number) => wishlist.includes(id);

  const handleAddProduct = (newProduct: ProductItem) => {
    setAllProducts(prev => [newProduct, ...prev]);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-agro-green/10 text-agro-green rounded-full mb-4">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Giatja Store & Produk Bimker</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dukung kemandirian Warga Binaan Pemasyarakatan dengan membeli produk-produk berkualitas hasil karya tangan mereka.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Categories - Desktop */}
            <div className="hidden lg:flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-agro-green text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Categories - Mobile Dropdown */}
            <div className="lg:hidden w-full flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-700 outline-none focus:ring-2 focus:ring-agro-green"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 w-full lg:w-auto">
               {/* Search Input */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agro-green focus:border-transparent outline-none"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                {/* Wishlist Filter Toggle */}
                <button
                  onClick={() => setShowWishlistOnly(!showWishlistOnly)}
                  className={`relative p-2 rounded-lg border transition-all flex-shrink-0 ${
                    showWishlistOnly 
                      ? 'bg-red-50 border-red-200 text-red-500' 
                      : 'bg-white border-gray-300 text-gray-400 hover:text-red-400'
                  }`}
                  title={showWishlistOnly ? "Tampilkan Semua" : "Tampilkan Wishlist"}
                >
                  <Heart size={20} fill={showWishlistOnly ? "currentColor" : "none"} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm border border-white">
                      {wishlist.length}
                    </span>
                  )}
                </button>

                {/* Add Product Button */}
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-agro-green text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-agro-dark transition flex-shrink-0 w-full md:w-auto"
                >
                  <Plus size={18} /> Tambah Produk
                </button>
              </div>
            </div>
           
          </div>
          
          {showWishlistOnly && (
             <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
               <Heart size={16} fill="currentColor" />
               Menampilkan produk yang Anda simpan di Wishlist ({filteredProducts.length} item)
             </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col overflow-hidden group relative">
                
                {/* Image */}
                <Link to={`/shop/${product.id}`} className="block h-48 overflow-hidden relative bg-gray-200 cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading="lazy"
                    decoding="async" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold text-agro-dark rounded">
                    {product.category}
                  </span>
                  
                  {/* Wishlist Button on Card */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full shadow-md hover:scale-110 transition-all z-10 ${
                        isInWishlist(product.id) 
                        ? "bg-red-50 text-red-500 ring-1 ring-red-200" 
                        : "bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-400"
                    }`}
                    title={isInWishlist(product.id) ? "Hapus dari Wishlist" : "Simpan ke Wishlist"}
                  >
                    <Heart 
                      size={18} 
                      fill={isInWishlist(product.id) ? "currentColor" : "none"} 
                    />
                  </button>
                </Link>

                {/* Details */}
                <div className="p-4 flex flex-col flex-grow">
                  <Link to={`/shop/${product.id}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 hover:text-agro-green transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-agro-green font-bold text-lg mb-2">{formatRupiah(product.price)}</p>
                  <p className="text-gray-500 text-xs mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="flex gap-2">
                    <Link 
                      to={`/shop/${product.id}`}
                      className="flex-1 flex items-center justify-center bg-gray-100 text-gray-700 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition"
                    >
                       Detail
                    </Link>
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-1 flex items-center justify-center gap-2 bg-agro-green text-white py-2 rounded-lg font-bold text-sm hover:bg-agro-dark transition"
                    >
                      <Plus size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            {showWishlistOnly ? (
               <>
                <Heart size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-900">Wishlist Kosong</h3>
                <p className="text-gray-500">Anda belum menyimpan produk apapun ke wishlist.</p>
                <button 
                  onClick={() => setShowWishlistOnly(false)}
                  className="mt-4 text-agro-green font-semibold hover:underline"
                >
                  Lihat Semua Produk
                </button>
               </>
            ) : (
              <>
                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-900">Produk tidak ditemukan</h3>
                <p className="text-gray-500">Coba cari dengan kata kunci lain atau ganti kategori.</p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Floating Cart Button (kept for convenience, also in header) */}
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

      {/* Add Product Modal */}
      <AddProductModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default Shop;
