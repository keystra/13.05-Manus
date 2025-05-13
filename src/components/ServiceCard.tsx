import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  color?: 'primary' | 'secondary';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  iconAlt,
  color = 'primary'
}) => {
  const bgColor = color === 'primary' ? 'bg-[#005670]' : 'bg-[#0078A0]';
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className={`${bgColor} p-4 flex justify-center items-center h-20`}>
        {icon.startsWith('/') ? (
          <div className="relative w-12 h-12">
            <Image 
              src={icon} 
              alt={iconAlt} 
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="text-white text-4xl" dangerouslySetInnerHTML={{ __html: icon }} />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-[#005670]">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
