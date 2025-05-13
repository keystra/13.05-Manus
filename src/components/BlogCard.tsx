import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  imageUrl?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  author,
  category,
  slug,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      {/* Imagem do post */}
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-sm text-[#0078A0] font-medium">{category}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-[#005670]">
          <Link href={`/blog/${slug}`} className="hover:text-[#0078A0] transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Por {author}</span>
          <Link href={`/blog/${slug}`} className="text-[#0078A0] font-medium hover:underline">
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
