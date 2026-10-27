import React from 'react';
import { ExternalLink, Heart, BookOpen, Phone, Mail, Globe, MapPin, School } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AppLogo } from './AppLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCodeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCodeModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AppLogo size="sm" className="ring-1 ring-slate-700" />
              <span className="text-lg font-black text-white font-display">
                Molly
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Portale orientamento e guida alle iscrizioni dell'<strong>Istituto d'Istruzione Superiore "don Lorenzo Milani"</strong> di Gragnano (NA).
            </p>
            <div className="italic font-serif-quote text-slate-300">
              "Accogliere, formare e orientare tra esperienza ed innovazione"
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigazione Rapida
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('iscrizioni-mim')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Iscrizioni Online MIM (mim.gov.it)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('indirizzi')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Piani degli Studi & Quadri Orari
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('brochure')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Brochure Digitale PDF (16 Pagine)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('filiera')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Filiera Formativa 4+2 (D.M. 256/2024)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('don-milani')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Identità & Chi è Don Milani
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('quiz')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Quiz di Orientamento
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Codici & Sportello */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Codici Meccanografici
            </h4>
            <div className="space-y-2 text-[11px]">
              <div>
                <span className="text-slate-500 block">Licei (tutti i percorsi):</span>
                <span className="font-mono text-amber-400 font-bold text-xs">NAPS01301N</span>
              </div>
              <div>
                <span className="text-slate-500 block">Tecnico AFM & Filiera 4+2:</span>
                <span className="font-mono text-emerald-400 font-bold text-xs">NATD01301D</span>
              </div>
              <div>
                <span className="text-slate-500 block">Tecnico SIA & Turismo:</span>
                <span className="font-mono text-blue-400 font-bold text-xs">NATN01301B</span>
              </div>
            </div>

            <button
              onClick={onOpenCodeModal}
              className="text-xs text-amber-300 hover:text-amber-200 underline font-semibold cursor-pointer pt-1"
            >
              Apri finestra codici copia-incolla
            </button>
          </div>

          {/* Col 4: Sedi & Segreteria */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sedi & Contatti
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>Via Quarantola, 6 - Gragnano (NA)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>Via Castellammare, 191 - Gragnano (NA)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  081 8700000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white font-mono">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SCHOOL_INFO.mimEnrollmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                <span>mim.gov.it/iscrizioni-online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div>
            © {new Date().getFullYear()} I.I.S. Don Lorenzo Milani · Gragnano (NA) — App Molly
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Motto: "I CARE"</span>
            <span>·</span>
            <a href={SCHOOL_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400">
              Sito Ufficiale
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
