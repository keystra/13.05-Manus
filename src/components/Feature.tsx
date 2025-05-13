import React from 'react';
import Link from 'next/link';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  link
}) => {
  const content = (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 text-[#0078A0] text-3xl" dangerouslySetInnerHTML={{ __html: icon }} />
      <div>
        <h3 className="text-xl font-bold mb-2 text-[#005670]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block">
        {content}
      </Link>
    );
  }

  return content;
};

export default Feature;
