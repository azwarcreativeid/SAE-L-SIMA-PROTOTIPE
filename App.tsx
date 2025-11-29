
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Profile from './components/Profile';
import Zones from './components/Zones';
import ZoneDetail from './components/ZoneDetail';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail'; // Import new component
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Pages from './components/Pages';
import { CartProvider } from './CartContext';

const { HashRouter: Router, Routes, Route } = ReactRouterDOM as any;

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="zones" element={<Zones />} />
            <Route path="zones/:id" element={<ZoneDetail />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ProductDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} /> {/* New Route */}
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="pages" element={<Pages />} />
            {/* 404 Fallback */}
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Halaman yang Anda cari tidak ditemukan.</p>
                <a href="/" className="px-6 py-2 bg-agro-green text-white rounded-lg hover:bg-agro-dark">Kembali ke Beranda</a>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
