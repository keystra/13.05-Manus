import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre a KeyStra', href: '/sobre' },
  { 
    label: 'Metodologia', 
    href: '/metodologia',
  },
  { 
    label: 'Serviços', 
    href: '/servicos',
  },
  { label: 'Contato', href: '/contato' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-40 h-10 relative">
            {/* Placeholder for logo - will be replaced with actual logo */}
            <div className="absolute inset-0 flex items-center">
              <span className="text-[#005670] font-bold text-2xl">KeyStra</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link 
                href={item.href}
                className="text-gray-800 hover:text-[#0078A0] font-medium"
              >
                {item.label}
              </Link>
            </div>
          ))}
          <Link 
            href="/contato"
            className="btn btn-primary ml-4"
          >
            Fale Conosco
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-inner">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.href}
                  className="block py-2 text-gray-800"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/contato"
                className="btn btn-primary block text-center mt-4"
                onClick={toggleMenu}
              >
                Fale Conosco
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
