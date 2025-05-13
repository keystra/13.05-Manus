import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MethodologyCycleProps {
  steps: {
    number: number;
    title: string;
    description: string;
    duration?: string;
  }[];
  activeStep?: number;
}

const MethodologyCycle: React.FC<MethodologyCycleProps> = ({
  steps,
  activeStep = 1
}) => {
  return (
    <div className="relative py-8">
      {/* Círculo central */}
      <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#005670] text-white flex items-center justify-center z-10">
        <div className="text-center">
          <div className="font-bold text-xl">Ciclo</div>
          <div className="font-bold text-xl">KeyStra</div>
        </div>
      </div>
      
      {/* Círculo central para mobile */}
      <div className="md:hidden w-32 h-32 rounded-full bg-[#005670] text-white flex items-center justify-center mx-auto mb-8">
        <div className="text-center">
          <div className="font-bold text-xl">Ciclo</div>
          <div className="font-bold text-xl">KeyStra</div>
        </div>
      </div>
      
      {/* Etapas do ciclo - versão desktop */}
      <div className="hidden md:grid grid-cols-5 gap-6 relative">
        {steps.map((step, index) => (
          <div key={step.number} className={`${index === 2 ? 'col-start-4' : ''}`}>
            <div className={`p-5 rounded-lg ${step.number === activeStep ? 'bg-[#0078A0] text-white' : 'bg-white shadow-md'}`}>
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step.number === activeStep ? 'bg-white text-[#0078A0]' : 'bg-[#005670] text-white'} font-bold`}>
                  {step.number}
                </div>
                <h3 className={`font-bold ${step.number === activeStep ? 'text-white' : 'text-[#005670]'}`}>{step.title}</h3>
              </div>
              {step.duration && (
                <div className={`text-sm mb-2 ${step.number === activeStep ? 'text-white/80' : 'text-[#0078A0]'}`}>
                  {step.duration}
                </div>
              )}
              <p className={`text-sm ${step.number === activeStep ? 'text-white/90' : 'text-gray-700'}`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Etapas do ciclo - versão mobile */}
      <div className="md:hidden space-y-4">
        {steps.map((step) => (
          <div 
            key={step.number} 
            className={`p-5 rounded-lg ${step.number === activeStep ? 'bg-[#0078A0] text-white' : 'bg-white shadow-md'}`}
          >
            <div className="flex items-center mb-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step.number === activeStep ? 'bg-white text-[#0078A0]' : 'bg-[#005670] text-white'} font-bold`}>
                {step.number}
              </div>
              <h3 className={`font-bold ${step.number === activeStep ? 'text-white' : 'text-[#005670]'}`}>{step.title}</h3>
            </div>
            {step.duration && (
              <div className={`text-sm mb-2 ${step.number === activeStep ? 'text-white/80' : 'text-[#0078A0]'}`}>
                {step.duration}
              </div>
            )}
            <p className={`text-sm ${step.number === activeStep ? 'text-white/90' : 'text-gray-700'}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link href="/metodologia" className="btn btn-primary">
          Conheça Nossa Metodologia
        </Link>
      </div>
    </div>
  );
};

export default MethodologyCycle;
