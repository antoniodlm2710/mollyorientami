import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Menu, X, BookOpen, School, Phone } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AppLogo } from './AppLogo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenCodeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection, onOpenCodeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'iscrizioni-mim', label: 'Iscrizioni MIM' },
    { id: 'indirizzi', label: 'Piani di Studio' },
    { id: 'brochure', label: 'Brochure PDF' },
    { id: 'filiera', label: 'Filiera 4+2' },
    { id: 'don-milani', label: 'Chi è Don Milani' },
    { id: 'quiz', label: 'Guida alla Scelta' },
    { id: 'sedi', label: 'Sedi & Contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-notification bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-white">I.I.S. Don Lorenzo Milani · Gragnano (NA)</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300 italic">"Accogliere, formare e orientare"</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 text-[11px] sm:text-xs">
            <button
              onClick={onOpenCodeModal}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-mono cursor-pointer"
            >
              <span>Codici MIM:</span>
              <span className="text-amber-300 font-bold underline decoration-dotted">NAPS01301N / NATD01301D / NATN01301B</span>
            </button>
            <span className="text-slate-600 hidden sm:inline">·</span>
            <a
              href="tel:0818700000"
              className="hover:text-white transition-colors hidden sm:flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-slate-400" />
              <span>081 8700000</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Wordmark Brand with official App Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onNavigate('hero');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center gap-3 text-left cursor-pointer"
            >
              <div className="group-hover:scale-105 transition-transform">
                <AppLogo size="md" className="ring-2 ring-slate-200 group-hover:ring-blue-400 transition-all" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-display flex items-center gap-1.5">
                  Molly
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                    App Orientamento
                  </span>
                </span>
                <span className="text-[11px] text-slate-500 font-medium -mt-1 hidden sm:block">
                  I.I.S. Don Lorenzo Milani - Gragnano
                </span>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? 'text-blue-700 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                    : 'hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenCodeModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer border border-slate-200"
              title="Visualizza i codici meccanografici per l'iscrizione"
            >
              <Copy className="w-3.5 h-3.5 text-slate-500" />
              <span>Codici Scuola</span>
            </button>

            <a
              href={SCHOOL_INFO.mimEnrollmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Iscrizioni Online MIM</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 pt-2">
            Sezioni dell'App Molly
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenCodeModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copia Codici Meccanografici</span>
            </button>
            <a
              href={SCHOOL_INFO.mimEnrollmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold bg-blue-700 text-white rounded-lg"
            >
              <span>Accedi a mim.gov.it/iscrizioni-online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
