
import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { newsItems } from '../data';

const { useParams, Link, useNavigate } = ReactRouterDOM as any;

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const news = newsItems.find(item => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Berita tidak ditemukan</h2>
        <Link to="/blog" className="px-6 py-2 bg-agro-green text-white rounded-lg hover:bg-agro-dark">
          Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
             <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} /> Kembali ke Berita
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base mb-3 opacity-90">
              <span className="bg-agro-green px-3 py-1 rounded-full font-semibold">{news.category}</span>
              <span className="flex items-center gap-1"><Calendar size={16}/> {news.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{news.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-8 border-b border-gray-100 pb-4">
          <User size={16} />
          <span>Ditulis oleh <span className="font-semibold text-gray-800">{news.author || 'Admin'}</span></span>
        </div>

        <article className="prose prose-lg prose-green max-w-none text-gray-700">
          {news.content.map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags / Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600 mb-6">
            <Tag size={18} />
            <span className="font-semibold">Tags:</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">{news.category}</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">SAE L'SIMA</span>
            <span className="bg-gray-100 px-3 py-1 rounded text-sm">Lapas Malang</span>
          </div>

          <div className="flex justify-between items-center">
             <button 
                onClick={() => navigate('/blog')}
                className="text-agro-green font-bold hover:underline flex items-center gap-2"
             >
               <ArrowLeft size={20} /> Lihat Berita Lainnya
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
