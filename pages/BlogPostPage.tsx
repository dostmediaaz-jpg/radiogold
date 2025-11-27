import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Button from '../components/Button';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title={`${post.title} | RadioGold Блог`} 
        description={post.excerpt}
      />
      
      <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-primary-600 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Назад к статьям
      </Link>

      <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-4xl mx-auto">
        <div className="h-64 md:h-96 relative">
          <img 
            src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&random=${post.id}`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
            <span className="inline-block px-3 py-1 bg-primary-600 rounded-full text-xs font-bold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-gray-300">
               <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime} чтения</span>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-12">
          <div 
            className="prose prose-lg prose-amber max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-gray-200 text-center">
            <h3 className="text-2xl font-bold mb-2">Есть такие детали?</h3>
            <p className="text-gray-600 mb-6">Оцените их стоимость прямо сейчас и получите деньги.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/calculator">
                  <Button size="lg">Рассчитать стоимость</Button>
               </Link>
               <Button variant="outline" size="lg">Написать в WhatsApp</Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;