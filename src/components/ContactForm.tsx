'use client';

import React from 'react';
import Link from 'next/link';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Entre em Contato",
  subtitle = "Preencha o formulário abaixo para falar com nossa equipe."
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em um ambiente real, aqui seria implementada a lógica de envio do formulário
    alert('Formulário enviado com sucesso! Em um ambiente de produção, este formulário enviaria os dados para um servidor.');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {title && <h3 className="text-2xl font-bold text-[#005670] mb-2">{title}</h3>}
      {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
              placeholder="Seu nome"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
              placeholder="seu.email@exemplo.com"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
              placeholder="Nome da sua empresa"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
            placeholder="Assunto da mensagem"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
            placeholder="Como podemos ajudar?"
            required
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            className="h-4 w-4 text-[#0078A0] focus:ring-[#0078A0] border-gray-300 rounded"
            required
          />
          <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
            Concordo com a <Link href="/privacidade" className="text-[#0078A0] hover:underline">Política de Privacidade</Link>
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#005670] hover:bg-[#004560] text-white font-medium py-3 px-4 rounded-md transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
