import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#005670] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações de Contato */}
          <div>
            <div className="mb-4">
              <span className="text-white font-bold text-2xl">KeyStra</span>
            </div>
            <p className="mb-4">
              Consultoria multidisciplinar focada em pequenas e médias empresas, oferecendo soluções integradas e orientadas a resultados.
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (11) 9999-9999
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@keystra.com.br
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                São Paulo, SP
              </p>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CCCCCC] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#CCCCCC] transition-colors">
                  Sobre a KeyStra
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="hover:text-[#CCCCCC] transition-colors">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-[#CCCCCC] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/casos" className="hover:text-[#CCCCCC] transition-colors">
                  Casos de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#CCCCCC] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#CCCCCC] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/financeira" className="hover:text-[#CCCCCC] transition-colors">
                  Consultoria Financeira
                </Link>
              </li>
              <li>
                <Link href="/servicos/operacional" className="hover:text-[#CCCCCC] transition-colors">
                  Consultoria Operacional
                </Link>
              </li>
              <li>
                <Link href="/servicos/comercial" className="hover:text-[#CCCCCC] transition-colors">
                  Consultoria Comercial
                </Link>
              </li>
              <li>
                <Link href="/servicos/rh" className="hover:text-[#CCCCCC] transition-colors">
                  Consultoria de RH
                </Link>
              </li>
              <li>
                <Link href="/servicos/tecnica" className="hover:text-[#CCCCCC] transition-colors">
                  Consultoria Técnica
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
            <p className="mb-4">Inscreva-se para receber novidades, artigos e dicas para o seu negócio.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 rounded text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#0078A0] hover:bg-[#005670] text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Inscrever-se
              </button>
            </form>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-white hover:text-[#CCCCCC]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#CCCCCC]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#CCCCCC]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-[#0078A0]" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} KeyStra. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="/privacidade" className="hover:text-[#CCCCCC] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-[#CCCCCC] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
