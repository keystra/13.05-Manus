'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SectionTitle from '../../components/SectionTitle';
import Link from 'next/link';

export default function About() {
  // Dados dos diferenciais
  const features = [
    {
      title: "Abordagem Multidisciplinar",
      description: "Combinamos conhecimentos de diferentes áreas para oferecer soluções verdadeiramente integradas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Orientação a Resultados",
      description: "Nosso compromisso é com resultados tangíveis e mensuráveis para o seu negócio.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Implementação Assistida",
      description: "Não apenas recomendamos, mas acompanhamos ativamente a implementação das soluções.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>'
    },
    {
      title: "Soluções Personalizadas",
      description: "Desenvolvemos estratégias adaptadas às necessidades específicas de cada empresa.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Sobre a KeyStra"
          subtitle="Conheça nossa história, missão e como transformamos desafios empresariais em oportunidades de crescimento."
          ctaText="Conheça Nossa Metodologia"
          ctaLink="/metodologia"
        />
        
        {/* Quem Somos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Quem Somos"
              subtitle="A KeyStra é uma consultoria multidisciplinar oferecendo serviços nas áreas Financeira, Operacional, Comercial, Recursos Humanos e Engenharia."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-4">
                  Fundada com a missão de transformar a consultoria empresarial de um centro de custo para um investimento com retorno claramente demonstrável, a KeyStra nasceu da percepção de que as empresas brasileiras precisavam de uma abordagem diferenciada.
                </p>
                <p className="mb-4">
                  Nossa equipe multidisciplinar reúne profissionais com sólida formação acadêmica e vasta experiência prática em suas áreas de atuação, combinando conhecimento técnico com visão estratégica para oferecer soluções verdadeiramente eficazes.
                </p>
                <p className="mb-4">
                  O nome "KeyStra" foi escolhido como uma combinação de "Key" (chave) e "Stra" (estratégia), representando a consultoria como a chave para estratégias de sucesso. Este nome transmite a ideia de que a empresa é o elemento fundamental que permite o acesso a estratégias eficazes para o crescimento empresarial.
                </p>
              </div>
              <div className="bg-[#005670] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Nossa Missão</h3>
                <p className="mb-6">
                  Transformar desafios empresariais em oportunidades de crescimento através de soluções integradas e orientadas a resultados, contribuindo para o desenvolvimento sustentável das empresas brasileiras.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-white">Nossa Visão</h3>
                <p className="mb-6">
                  Ser reconhecida como a consultoria de referência no Brasil, destacando-se pela abordagem multidisciplinar e pelo compromisso com resultados mensuráveis.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-white">Nossos Valores</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Excelência técnica</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integridade e transparência</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compromisso com resultados</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Inovação e melhoria contínua</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Parceria com os clientes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diferenciais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nossos Diferenciais"
              subtitle="O que nos torna diferentes de outras consultorias e como isso beneficia o seu negócio."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-[#005670] mb-4" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                  <h3 className="text-xl font-bold text-[#005670] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Setores de Atuação */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Setores de Atuação"
              subtitle="Atendemos empresas de diversos portes e segmentos, com soluções adaptadas para cada realidade."
            />
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-[#005670] text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#005670]">Diversidade</h3>
                  <p>Atendemos empresas de diferentes portes e estágios de desenvolvimento</p>
                </div>
                
                <div className="text-center p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-[#005670] text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#005670]">Experiência</h3>
                  <p>Trabalhamos com empresas estabelecidas e também com negócios em fase de expansão</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="text-[#005670] text-4xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#005670]">Localização</h3>
                  <p>São Paulo capital e cidades num raio de 100km (presencial); todo Brasil (online)</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#005670]">Perfil</h3>
                    <p>Empresas em fase de crescimento ou enfrentando desafios específicos que exigem expertise externa, como:</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Necessidade de estruturação para crescimento</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Queda de rentabilidade ou margens apertadas</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Problemas operacionais recorrentes</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Dificuldades na gestão de pessoas</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-[#005670]">Setores</h3>
                    <p>Atuamos de forma multissetorial, com ênfase inicial em:</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comércio (varejo e atacado)</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Serviços B2B e B2C</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Indústria leve</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tecnologia e startups em fase de crescimento</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
              <Link href="/contato" className="btn bg-white text-[#005670] hover:bg-gray-100 hover:text-[#005670]">
                Fale Conosco
              </Link>
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
