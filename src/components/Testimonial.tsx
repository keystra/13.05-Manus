import React from 'react';
import Link from 'next/link';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageUrl?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      {/* Quote icon */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#0078A0] text-white flex items-center justify-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </div>
      
      {/* Quote content */}
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      
      {/* Author info */}
      <div className="flex items-center">
        {imageUrl && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
            <img src={imageUrl} alt={author} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-bold text-[#005670]">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
