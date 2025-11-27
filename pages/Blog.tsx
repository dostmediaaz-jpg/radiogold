import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title="Блог о драгметаллах и радиодеталях | RadioGold"
        description="Полезные статьи, инструкции и советы по поиску и продаже радиодеталей. Узнайте, где искать золото в технике и как не продешевить."
      />

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Блог о драгметаллах</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Экспертные статьи о том, как заработать на радиоэлектронике,
          аналитика рынка и обучающие материалы для начинающих.
        </p>
      </div>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {BLOG_POSTS.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow group">
             <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
                <img 
                    src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=500&h=500&random=${post.id}`} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                </div>
             </div>
             <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} чтения</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                </p>
                <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-2 transition-transform cursor-pointer">
                    Читать статью <ArrowRight className="w-4 h-4 ml-1" />
                </div>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;