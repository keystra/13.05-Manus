'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import SectionTitle from '../../components/SectionTitle';
import Feature from '../../components/Feature';
import Link from 'next/link';

export default function Methodology() {
  // Dados do ciclo da metodologia KeyStra
  const methodologySteps = [
    {
      number: 1,
      title: "Diagnóstico Integrado",
      description: "Análise aprofundada da empresa, identificando desafios, oportunidades e interdependências entre diferentes áreas.",
      duration: "2-4 semanas"
    },
    {
      number: 2,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de um plano de intervenção detalhado, com objetivos claros, métricas de sucesso e cronograma.",
      duration: "1-2 semanas"
    },
    {
      number: 3,
      title: "Implementação Assistida",
      description: "Trabalho lado a lado com as equipes do cliente para implementar as soluções planejadas.",
      duration: "8-16 semanas"
    },
    {
      number: 4,
      title: "Mensuração e Otimização",
      description: "Monitoramento rigoroso dos resultados, identificando oportunidades de otimização.",
      duration: "Contínuo"
    },
    {
      number: 5,
      title: "Consolidação e Expansão",
      description: "Consolidação das mudanças implementadas, garantindo sua sustentabilidade.",
      duration: "4-6 semanas"
    }
  ];

  // Dados dos pilares da metodologia
  const pillars = [
    {
      title: "Integração Multidisciplinar",
      description: "Combinamos conhecimentos de diferentes áreas para desenvolver soluções verdadeiramente eficazes. Nossa abordagem considera a empresa como um sistema integrado, onde cada área impacta as demais.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Abordagem Baseada em Dados",
      description: "Todas as decisões e recomendações são fundamentadas em dados concretos, substituindo 'achismos' por evidências mensuráveis. Utilizamos técnicas avançadas de análise para identificar padrões e oportunidades.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
    {
      title: "Implementação Assistida",
      description: "Diferentemente de consultorias tradicionais que entregam apenas relatórios, acompanhamos ativamente a implementação das soluções propostas, garantindo a execução eficaz e a superação de obstáculos.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>'
    },
    {
      title: "Mensuração de Resultados",
      description: "O compromisso com resultados tangíveis é o coração da nossa metodologia, com métricas claras estabelecidas desde o início do projeto. Monitoramos rigorosamente os indicadores para garantir o alcance das metas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>'
    },
    {
      title: "Melhoria Contínua",
      description: "Nossa metodologia incorpora ciclos de feedback e aprendizado para garantir evolução constante. Realizamos retrospectivas estruturadas e incorporamos novas técnicas conforme sua eficácia é comprovada.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>'
    }
  ];

  // Dados dos benefícios
  const benefits = [
    {
      title: "Resultados Acelerados",
      description: "Redução do tempo entre diagnóstico e resultados concretos, implementação mais rápida de mudanças críticas e antecipação do retorno sobre investimento.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      title: "Maior Taxa de Sucesso",
      description: "Redução significativa de projetos abandonados ou incompletos, maior aderência a cronogramas e orçamentos, e alcance consistente das metas estabelecidas.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      title: "Transformação Sustentável",
      description: "Mudanças que se mantêm após o término da consultoria, desenvolvimento de capacidades internas para melhoria contínua e cultura orientada a dados e resultados.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>'
    },
    {
      title: "Visão Integrada",
      description: "Soluções que consideram impactos em múltiplas áreas, eliminação de otimizações locais que prejudicam o resultado global e alinhamento entre diferentes departamentos e funções.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Metodologia KeyStra"
          subtitle="Nossa abordagem proprietária orientada a resultados, que transforma desafios empresariais em oportunidades de crescimento."
          ctaText="Conheça Nossos Serviços"
          ctaLink="/servicos"
        />
        
        {/* Visão Geral */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Visão Geral"
              subtitle="A Metodologia KeyStra é um sistema integrado que coloca os resultados mensuráveis no centro de todas as intervenções."
            />
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <p className="mb-6">
                Diferentemente de abordagens tradicionais que muitas vezes se concentram apenas em diagnósticos e recomendações, a Metodologia KeyStra garante a implementação efetiva das soluções e o acompanhamento rigoroso dos resultados.
              </p>
              <p className="mb-6">
                Esta metodologia representa um diferencial competitivo significativo, pois estabelece um compromisso claro com a geração de valor para os clientes, transformando desafios empresariais em oportunidades de crescimento através de um processo estruturado e comprovado.
              </p>
              <div className="bg-[#005670] text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-white">Por que a Metodologia KeyStra é diferente?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Foco em implementação, não apenas diagnóstico</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Abordagem multidisciplinar integrada</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Decisões baseadas em dados, não em "achismos"</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mensuração rigorosa de resultados</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Transferência de conhecimento para autonomia</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ciclos de melhoria contínua incorporados</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#005670] mb-4">Transformando Consultoria em Investimento</h3>
                <p className="mb-4">
                  A Metodologia KeyStra transforma a consultoria de um centro de custo para um investimento com retorno claramente demonstrável. Ao estabelecer métricas claras desde o início e acompanhar rigorosamente os resultados, garantimos que cada intervenção gere valor tangível para o negócio.
                </p>
                <p>
                  Nossa abordagem estruturada e comprovada permite que empresas de todos os portes acessem expertise estratégica de alto nível, com um modelo adaptado às necessidades específicas e objetivos de cada organização.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-[#005670] mb-4">Aplicações da Metodologia</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Reestruturação Organizacional:</strong> Redesenho de processos e estruturas para maior eficiência.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Otimização Financeira:</strong> Melhoria de margens, redução de custos e precificação estratégica.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Aceleração de Crescimento:</strong> Estratégias para expansão sustentável e conquista de mercado.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Transformação Digital:</strong> Implementação de tecnologias e processos digitais.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Gestão de Crises:</strong> Intervenções rápidas para reverter situações críticas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pilares da Metodologia */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Pilares da Metodologia"
              subtitle="Nossa metodologia se baseia em cinco pilares fundamentais que garantem resultados consistentes e sustentáveis."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-[#005670] mb-4" dangerouslySetInnerHTML={{ __html: pillar.icon }} />
                  <h3 className="text-xl font-bold text-[#005670] mb-2">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Ciclo da Metodologia */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Ciclo da Metodologia KeyStra"
              subtitle="Um processo estruturado em cinco etapas que garante resultados consistentes e sustentáveis."
            />
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {methodologySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`${index === 2 ? 'bg-[#0078A0]' : 'bg-[#005670]'} text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#005670] mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm mb-2">{step.description}</p>
                    <p className="text-[#0078A0] text-center text-sm font-medium">{step.duration}</p>
                    
                    {index < methodologySteps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-[#0078A0] transform -translate-x-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#005670] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Adaptação às Necessidades</h3>
                <p className="mb-4">
                  Embora o ciclo da Metodologia KeyStra siga uma estrutura definida, sua aplicação é altamente flexível e adaptável às necessidades específicas de cada empresa.
                </p>
                <p>
                  Dependendo do contexto, podemos enfatizar determinadas etapas, ajustar o cronograma ou incorporar ferramentas e técnicas específicas para maximizar os resultados.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-[#005670] mb-4">Resultados Típicos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aumento de 15-30% na produtividade operacional</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Redução de 10-20% nos custos operacionais</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Melhoria de 2-5 pontos percentuais nas margens</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Aceleração de 20-40% no ciclo de vendas</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0 text-[#0078A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Redução de 30-50% em problemas recorrentes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefícios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Benefícios da Metodologia KeyStra"
              subtitle="Vantagens concretas que sua empresa obtém ao adotar nossa abordagem orientada a resultados."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-[#005670] mb-4" dangerouslySetInnerHTML={{ __html: benefit.icon }} />
                  <h3 className="text-xl font-bold text-[#005670] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-[#005670] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Pronto para transformar sua empresa?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Entre em contato conosco para uma primeira conversa sem compromisso sobre como a Metodologia KeyStra pode ajudar a superar os desafios do seu negócio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contato" className="btn bg-white text-[#005670] hover:bg-gray-100 hover:text-[#005670]">
                Fale Conosco
              </Link>
              <Link href="/servicos" className="btn btn-outline text-white border-white hover:bg-white hover:text-[#005670]">
                Conheça Nossos Serviços
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
