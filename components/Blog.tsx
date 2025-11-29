
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { newsItems, upcomingEvents } from '../data';

const { Link } = ReactRouterDOM as any;

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content: News List */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
              Berita & Artikel Terkini
            </h1>

            <div className="space-y-12">
              {newsItems.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row gap-6 group">
                  <Link to={`/blog/${item.id}`} className="md:w-1/3 h-52 rounded-xl overflow-hidden cursor-pointer">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      loading="lazy"
                      decoding="async" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </Link>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {item.date}
                      </span>
                      <span className="px-2 py-0.5 bg-gray-100 rounded-full font-medium text-gray-600">
                        {item.category}
                      </span>
                    </div>
                    <Link to={`/blog/${item.id}`}>
                      <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-agro-green transition-colors cursor-pointer">
                        {item.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link to={`/blog/${item.id}`} className="flex items-center text-agro-green font-semibold hover:underline w-fit">
                      Baca Selengkapnya <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Agenda / Events */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Agenda (Event)</h3>
              <ul className="space-y-4">
                {upcomingEvents.map((event, idx) => (
                  <li key={idx} className="flex gap-4 items-start border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                    <div className="bg-agro-green text-white text-center rounded-lg p-2 min-w-[60px]">
                      <span className="block text-xs font-bold uppercase">{event.date.split(' ')[1]}</span>
                      <span className="block text-xl font-bold">{event.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 hover:text-agro-green cursor-pointer">{event.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">Lokasi: {event.location || 'Lapangan Utama SAE'}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kategori</h3>
              <div className="flex flex-wrap gap-2">
                {["Kemenimipas", "Entertainment", "Sport", "Festival", "Pertanian", "Edukasi"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 hover:bg-agro-green hover:text-white rounded-full text-sm text-gray-600 transition cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
