import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
  titleColor = 'primary'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const titleColorClasses = {
    primary: 'text-[#005670]',
    secondary: 'text-[#0078A0]',
    white: 'text-white',
    dark: 'text-[#333333]'
  };

  return (
    <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColorClasses[titleColor as keyof typeof titleColorClasses] || titleColorClasses.primary}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-[#0078A0] mt-4 ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
