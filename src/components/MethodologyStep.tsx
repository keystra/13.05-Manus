import React from 'react';
import Image from 'next/image';

interface MethodologyStepProps {
  number: number;
  title: string;
  description: string;
  duration?: string;
  isActive?: boolean;
}

const MethodologyStep: React.FC<MethodologyStepProps> = ({
  number,
  title,
  description,
  duration,
  isActive = false
}) => {
  return (
    <div className={`relative p-6 rounded-lg ${isActive ? 'bg-[#005670] text-white' : 'bg-white shadow-md'}`}>
      <div className={`absolute -top-5 -left-5 w-10 h-10 rounded-full flex items-center justify-center ${isActive ? 'bg-[#0078A0]' : 'bg-[#005670]'} text-white font-bold text-lg`}>
        {number}
      </div>
      <h3 className={`text-xl font-bold mb-2 mt-2 ${isActive ? 'text-white' : 'text-[#005670]'}`}>{title}</h3>
      {duration && (
        <div className={`text-sm mb-3 ${isActive ? 'text-white/80' : 'text-[#0078A0]'}`}>
          {duration}
        </div>
      )}
      <p className={isActive ? 'text-white/90' : 'text-gray-700'}>
        {description}
      </p>
    </div>
  );
};

export default MethodologyStep;
