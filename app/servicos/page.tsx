'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SectionTitle from '../../components/SectionTitle';
import Link from 'next/link';

export default function Services() {
  // Dados dos serviços
  const services = [
    {
      title: "Consultoria Financeira",
      description: "Análise e planejamento financeiro, gestão de custos, precificação, captação de recursos.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      iconAlt: "Ícone Financeiro",
      features: [
        "Análise e planejamento financeiro",
        "Gestão de custos e despesas",
        "Precificação estratégica",
        "Captação de recursos e financiamentos",
        "Reestruturação financeira",
        "Análise de viabilidade de projetos",
        "Gestão de fluxo de caixa"
      ]
    },
    {
      title: "Consultoria Operacional",
      description: "Otimização de processos, gestão da cadeia de suprimentos, implementação de sistemas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>',
      iconAlt: "Ícone Operacional",
      features: [
        "Mapeamento e otimização de processos",
        "Gestão da cadeia de suprimentos",
        "Implementação de sistemas de gestão",
        "Planejamento e controle da produção",
        "Gestão de estoques e logística",
        "Lean Manufacturing e Six Sigma",
        "Automação de processos"
      ]
    },
    {
      title: "Consultoria Comercial",
      description: "Estratégias de vendas, marketing digital, desenvolvimento de canais.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>',
      iconAlt: "Ícone Comercial",
      features: [
        "Estratégias de vendas e go-to-market",
        "Marketing digital e inbound marketing",
        "Desenvolvimento de canais de distribuição",
        "Gestão de relacionamento com clientes (CRM)",
        "Estruturação de equipes comerciais",
        "Análise de mercado e concorrência",
        "Branding e posicionamento"
      ]
    },
    {
      title: "Consultoria de RH",
      description: "Estruturação de departamento pessoal, desenvolvimento de lideranças, cultura organizacional.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
      iconAlt: "Ícone RH",
      features: [
        "Estruturação de departamento pessoal",
        "Desenvolvimento de lideranças",
        "Gestão de cultura organizacional",
        "Recrutamento e seleção estratégicos",
        "Avaliação de desempenho e feedback",
        "Planos de cargos e salários",
        "Programas de engajamento e retenção"
      ]
    },
    {
      title: "Consultoria Técnica",
      description: "Laudos de imóveis, vistorias técnicas, adequação a normas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>',
      iconAlt: "Ícone Técnico",
      features: [
        "Laudos técnicos de imóveis",
        "Vistorias e inspeções técnicas",
        "Adequação a normas regulatórias",
        "Avaliação de conformidade",
        "Gestão de projetos de engenharia",
        "Análise de riscos técnicos",
        "Consultoria em segurança do trabalho"
      ]
    }
  ];

  // Dados dos diferenciais
  const differentials = [
    {
      title: "Abordagem Multidisciplinar",
      description: "Integramos conhecimentos de diferentes áreas para oferecer soluções completas que consideram todos os aspectos do seu negócio.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Implementação Assistida",
      description: "Não apenas recomendamos, mas trabalhamos lado a lado com sua equipe para implementar as soluções propostas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>'
    },
    {
      title: "Resultados Mensuráveis",
      description: "Estabelecemos métricas claras desde o início e monitoramos rigorosamente os resultados para garantir o retorno sobre o investimento.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Transferência de Conhecimento",
      description: "Capacitamos sua equipe durante todo o processo, garantindo autonomia para manter e evoluir as melhorias implementadas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Nossos Serviços"
          subtitle="Soluções integradas e orientadas a resultados para transformar os desafios do seu negócio em oportunidades de crescimento."
          ctaText="Fale Conosco"
          ctaLink="/contato"
        />
        
        {/* Visão Geral */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Consultoria Multidisciplinar"
              subtitle="Oferecemos uma ampla gama de serviços de consultoria para atender às necessidades específicas do seu negócio."
            />
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="mb-6">
                A KeyStra é uma consultoria multidisciplinar que oferece serviços nas áreas Financeira, Operacional, Comercial, Recursos Humanos e Engenharia. Nossa abordagem integrada permite identificar e resolver problemas complexos que frequentemente envolvem múltiplas áreas da empresa.
              </p>
              <p>
                Todos os nossos serviços são implementados seguindo a Metodologia KeyStra, que garante a implementação efetiva das soluções e o acompanhamento rigoroso dos resultados, transformando a consultoria de um centro de custo para um investimento com retorno claramente demonstrável.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentials.map((differential, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-[#005670] mb-4" dangerouslySetInnerHTML={{ __html: differential.icon }} />
                  <h3 className="text-xl font-bold text-[#005670] mb-2">{differential.title}</h3>
                  <p className="text-gray-600">{differential.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Serviços Detalhados */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Nossos Serviços"
              subtitle="Conheça em detalhes cada uma das nossas áreas de atuação."
            />
            
            {services.map((service, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className={`p-6 ${index % 2 === 0 ? 'bg-[#005670]' : 'bg-[#0078A0]'} text-white`}>
                    <div className="flex items-center">
                      <div className="mr-4 text-white text-4xl" dangerouslySetInnerHTML={{ __html: service.icon }} />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="mb-6 text-lg">{service.description}</p>
                    
                    <h4 className="text-xl font-bold text-[#005670] mb-4">O que oferecemos:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <Link href="/contato" className="btn btn-primary">
                        Solicitar Proposta
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Como Trabalhamos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Como Trabalhamos"
              subtitle="Nosso processo de consultoria segue a Metodologia KeyStra, garantindo resultados consistentes e mensuráveis."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#005670] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#005670] mb-2">Diagnóstico Integrado</h3>
                      <p>Realizamos uma análise aprofundada da sua empresa, identificando desafios, oportunidades e interdependências entre diferentes áreas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#005670] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#005670] mb-2">Planejamento Estratégico</h3>
                      <p>Desenvolvemos um plano de intervenção detalhado, com objetivos claros, métricas de sucesso e cronograma de implementação.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#005670] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#005670] mb-2">Implementação Assistida</h3>
                      <p>Trabalhamos lado a lado com as equipes do cliente para implementar as soluções planejadas, garantindo a execução eficaz.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#005670] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#005670] mb-2">Mensuração e Otimização</h3>
                      <p>Monitoramos rigorosamente os resultados, identificando oportunidades de otimização e garantindo que as metas sejam alcançadas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#005670] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#005670] mb-2">Consolidação e Expansão</h3>
                      <p>Consolidamos as mudanças implementadas, garantindo sua sustentabilidade e identificando novas oportunidades de melhoria.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/metodologia" className="btn btn-primary">
                    Saiba Mais Sobre Nossa Metodologia
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#005670] mb-6">Benefícios da Nossa Abordagem</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h4 className="font-bold text-[#005670]">Resultados Acelerados</h4>
                    </div>
                    <p className="text-sm">Redução do tempo entre diagnóstico e resultados concretos, implementação mais rápida de mudanças críticas.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h4 className="font-bold text-[#005670]">Maior Taxa de Sucesso</h4>
                    </div>
                    <p className="text-sm">Redução significativa de projetos abandonados ou incompletos, maior aderência a cronogramas e orçamentos.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <h4 className="font-bold text-[#005670]">Transformação Sustentável</h4>
                    </div>
                    <p className="text-sm">Mudanças que se mantêm após o término da consultoria, desenvolvimento de capacidades internas para melhoria contínua.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <h4 className="font-bold text-[#005670]">Visão Integrada</h4>
                    </div>
                    <p className="text-sm">Soluções que consideram impactos em múltiplas áreas, eliminação de otimizações locais que prejudicam o resultado global.</p>
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
              Entre em contato conosco para uma primeira conversa sem compromisso sobre como podemos ajudar a superar os desafios do seu negócio.
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
