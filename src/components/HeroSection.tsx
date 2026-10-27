import React, { useState } from 'react';
import { 
  ExternalLink, BookOpen, Copy, Check, Sparkles, ArrowRight, 
  GraduationCap, Award, Compass, School, CheckCircle2 
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AppLogo } from './AppLogo';

interface HeroSectionProps {
  onOpenBrochure: () => void;
  onOpenQuiz: () => void;
  onOpenCodeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenBrochure, 
  onOpenQuiz, 
  onOpenCodeModal 
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white pt-10 pb-16 sm:pt-16 sm:pb-20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Iscrizioni Aperte Anno Scolastico 2026/2027</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-medium border border-blue-400/20">
            <span>Accreditamento Erasmus+ 2021-2027</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <AppLogo size="xl" className="ring-4 ring-white/20 shadow-2xl shrink-0" />
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-white leading-tight">
                  Molly <span className="text-amber-400">·</span> Orientamento
                </h1>
                <p className="text-lg sm:text-xl font-medium text-blue-200 font-display mt-1">
                  I.I.S. Don Lorenzo Milani — Gragnano (NA)
                </p>
              </div>
            </div>

            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-sm text-slate-300 font-serif-quote">
              "{SCHOOL_INFO.motto}"
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Esplora la guida digitale completa, scopri i quadri orari di tutti i nostri percorsi liceali e tecnici, consulta la brochure ufficiale in 16 pagine e accedi direttamente alla piattaforma ministeriale per l'iscrizione.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={SCHOOL_INFO.mimEnrollmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-extrabold text-sm inline-flex items-center gap-2 shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
              >
                <span>Iscrizioni Online MIM</span>
                <ExternalLink className="w-4 h-4 text-slate-900" />
              </a>

              <button
                onClick={onOpenBrochure}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-bold text-sm inline-flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-blue-300" />
                <span>Sfoglia Brochure (PDF)</span>
              </button>

              <button
                onClick={onOpenQuiz}
                className="px-4 py-3.5 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-blue-100 font-semibold text-sm inline-flex items-center gap-2 border border-blue-700 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Aiutami a Scegliere</span>
              </button>
            </div>

            {/* Quick Mechanographic Chips Bar */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                <span>Codici Scuola per la domanda:</span>
                <button 
                  onClick={onOpenCodeModal}
                  className="text-amber-300 hover:underline cursor-pointer lowercase"
                >
                  (visualizza dettagli)
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => copyCode('NAPS01301N')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-blue-300 flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Copia codice Licei"
                >
                  <span>Licei: NAPS01301N</span>
                  {copiedCode === 'NAPS01301N' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>

                <button
                  onClick={() => copyCode('NATD01301D')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Copia codice AFM & Filiera 4+2"
                >
                  <span>AFM & Filiera 4+2: NATD01301D</span>
                  {copiedCode === 'NATD01301D' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>

                <button
                  onClick={() => copyCode('NATN01301B')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5 cursor-pointer transition-colors"
                  title="Copia codice SIA & Turismo"
                >
                  <span>SIA & Turismo: NATN01301B</span>
                  {copiedCode === 'NATN01301B' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Key Pillars Card (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/10 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Punti di Forza d'Istituto
              </span>
              <span className="text-xs font-mono text-slate-400">PTOF 2022-2025</span>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/20 font-bold text-xs">
                  4L
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">4 Percorsi Liceali</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Classico, Scientifico, Scienze Applicate e Scienze Umane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/20 font-bold text-xs">
                  3T
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">3 Indirizzi Tecnici Economici</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Amministrazione Finanza e Marketing, Sistemi Informativi Aziendali e Turismo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/20 font-bold text-xs">
                  4+2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Riforma Filiera Formativa "4+2"</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    D.M. 256/2024: 4 anni di superiori + 2 anni ITS Academy per una qualifica di alto profilo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/20 font-bold text-xs">
                  EU
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Certificazioni Internazionali</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Cambridge Gold Centre, DELF Francese, Goethe Tedesco e Certificazione del Latino.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Due sedi a Gragnano (NA)</span>
              <a 
                href="#sedi" 
                className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Guarda dove siamo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
