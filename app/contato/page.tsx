'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SectionTitle from '../../components/SectionTitle';
import Link from 'next/link';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em um ambiente real, aqui seria implementada a lógica de envio do formulário
    alert('Formulário enviado com sucesso! Em um ambiente de produção, este formulário enviaria os dados para um servidor.');
  };

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Entre em Contato"
          subtitle="Estamos prontos para ajudar sua empresa a alcançar o próximo nível."
          ctaText="Agendar Consulta Gratuita"
          ctaLink="#formulario"
        />
        
        {/* Informações de Contato */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Como Podemos Ajudar?"
              subtitle="Seja para uma consultoria completa ou para discutir um desafio específico do seu negócio, nossa equipe está pronta para encontrar a solução ideal para você."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-[#005670] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#005670] mb-2">Telefone</h3>
                <p className="text-gray-700">(11) 9999-9999</p>
                <p className="text-gray-700">Segunda a Sexta, 9h às 18h</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-[#005670] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#005670] mb-2">E-mail</h3>
                <p className="text-gray-700">contato@keystra.com.br</p>
                <p className="text-gray-700">Respondemos em até 24 horas</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-[#005670] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#005670] mb-2">Endereço</h3>
                <p className="text-gray-700">São Paulo, SP</p>
                <p className="text-gray-700">Atendemos presencialmente e online</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#005670] mb-4">Primeira Consulta Gratuita</h3>
                <p className="mb-6">
                  Oferecemos uma primeira reunião sem compromisso para entender os desafios do seu negócio e discutir como podemos ajudar. Durante esta consulta, você terá a oportunidade de:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Apresentar os desafios específicos do seu negócio</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conhecer nossa abordagem e metodologia</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receber insights iniciais sobre possíveis soluções</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Discutir próximos passos sem qualquer compromisso</span>
                  </li>
                </ul>
                <p>
                  Esta consulta pode ser realizada presencialmente em nosso escritório em São Paulo ou remotamente via videoconferência, de acordo com sua preferência.
                </p>
              </div>
              
              <div className="bg-[#005670] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Áreas de Atuação</h3>
                <p className="mb-6">
                  Nossa equipe multidisciplinar está preparada para atender às necessidades específicas do seu negócio nas seguintes áreas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Consultoria Financeira</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span>Consultoria Operacional</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Consultoria Comercial</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Consultoria de RH</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>Consultoria Técnica</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/servicos" className="btn bg-white text-[#005670] hover:bg-gray-100">
                    Conheça Nossos Serviços
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Formulário de Contato */}
        <section id="formulario" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Envie sua Mensagem"
              subtitle="Preencha o formulário abaixo e entraremos em contato o mais breve possível."
            />
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#005670] mb-2">Formulário de Contato</h3>
                <p className="text-gray-600 mb-6">Todos os campos marcados com * são obrigatórios.</p>
                
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
            </div>
          </div>
        </section>
        
        {/* Mapa e Localização */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nossa Localização"
              subtitle="Estamos localizados em São Paulo, com atendimento presencial e remoto para todo o Brasil."
            />
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#005670] mb-4">Escritório São Paulo</h3>
                    <p className="mb-4">
                      Nosso escritório está localizado em São Paulo, com fácil acesso e estacionamento. Atendemos presencialmente empresas da capital e num raio de até 100km.
                    </p>
                    <p className="mb-6">
                      Para empresas de outras localidades, oferecemos atendimento remoto via videoconferência, com a mesma qualidade e eficácia da consultoria presencial.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>São Paulo, SP</span>
                      </div>
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Segunda a Sexta, 9h às 18h</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#005670] mb-4">Agende uma Visita</h3>
                    <p className="mb-4">
                      Para visitar nosso escritório, recomendamos agendar previamente para garantirmos o melhor atendimento. Você pode agendar por telefone, e-mail ou pelo formulário de contato.
                    </p>
                    <p className="mb-6">
                      Durante a visita, você conhecerá nossa equipe e poderemos discutir em detalhes como podemos ajudar seu negócio a alcançar o próximo nível.
                    </p>
                    <a href="#formulario" className="btn btn-primary">
                      Agendar Visita
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-600">Mapa de localização</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Redes Sociais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <SectionTitle 
              title="Conecte-se Conosco"
              subtitle="Siga-nos nas redes sociais para acompanhar novidades, artigos e dicas para o seu negócio."
            />
            
            <div className="flex justify-center space-x-8 mt-8">
              <a href="#" className="bg-[#005670] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#0078A0] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-[#005670] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#0078A0] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="bg-[#005670] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#0078A0] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-[#005670] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#0078A0] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="bg-[#005670] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#0078A0] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#005670] mb-4">Inscreva-se em Nossa Newsletter</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Receba novidades, artigos e dicas para o seu negócio diretamente no seu e-mail.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0078A0] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#005670] hover:bg-[#004560] text-white font-medium py-2 px-4 rounded-r-md transition-colors"
                >
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-[#005670] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para transformar sua empresa?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato conosco para uma primeira conversa sem compromisso sobre os desafios do seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#formulario" className="btn bg-white text-[#005670] hover:bg-gray-100 hover:text-[#005670]">
                Fale Conosco
              </a>
              <Link href="/metodologia" className="btn btn-outline text-white border-white hover:bg-white hover:text-[#005670]">
                Conheça Nossa Metodologia
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
