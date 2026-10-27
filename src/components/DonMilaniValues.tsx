import React from 'react';
import { Heart, BookOpen, Quote, Shield, Users, Compass, History } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AppLogo } from './AppLogo';

export const DonMilaniValues: React.FC = () => {
  return (
    <section id="don-milani" className="py-16 bg-amber-50/40 border-b border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 tracking-wider uppercase mb-1">
            <span>Identità, Storia e Valori</span>
            <span aria-hidden="true">·</span>
            <span>Il Patto Educativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Chi è Don Lorenzo Milani e la Vision d'Istituto
          </h2>
          <p className="mt-3 text-slate-700 text-sm leading-relaxed">
            Ispirata alla lezione di Barbiana e al motto universale <em>"I CARE"</em>, la nostra scuola si impegna ogni giorno ad accogliere, formare e orientare studenti liberi, critici e responsabili.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Don Milani Portrait & Quote (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <AppLogo size="lg" className="ring-2 ring-amber-200 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Don Lorenzo Milani (1923 – 1967)
                </h3>
                <p className="text-xs text-amber-900/80 font-medium">
                  Presbitero, scrittore, docente ed educatore di Barbiana
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Don Lorenzo Milani è stato un prete rivoluzionario, ma anche ritenuto scomodo dalla Chiesa e da alcuni rappresentanti della società italiana degli anni '50.
              Il suo anticonformismo, portato avanti con rigore evangelico, fu la causa del suo trasferimento a <strong>Barbiana</strong>, un borgo sperduto sui pendii dell'Appennino toscano.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Nella piccola parrocchia fondò una scuola gratuita e sempre aperta; diremmo oggi <strong>INCLUSIVA</strong>, per formare cittadini <strong>LIBERI</strong> e <strong>RESPONSABILI</strong>.
            </p>

            {/* Pullquote Box */}
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 relative">
              <Quote className="w-8 h-8 text-amber-300 absolute top-2 right-2 -z-0" />
              <div className="relative z-10 font-serif-quote italic text-slate-900 text-sm sm:text-base leading-relaxed">
                "Su una parete della nostra scuola c'è scritto grande: <strong>I CARE</strong>. È il motto intraducibile dei giovani americani migliori: <em>'Me ne importa, mi sta a cuore'</em>. Il contrario esatto del fascista 'Me ne frego'."
              </div>
              <div className="mt-3 text-xs font-sans font-semibold text-amber-900">
                — Tratto dalla <em>Lettera ai Giudici</em>
              </div>
            </div>

            <div className="text-xs text-slate-600 italic border-l-2 border-amber-400 pl-3">
              "La scuola è l'arte delicata di condurre i ragazzi su un filo di rasoio: da un lato formare il senso della legalità, dall'altro la volontà di leggi migliori."
            </div>
          </div>

          {/* School Vision & History (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Vision Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Compass className="w-4 h-4" />
                <span>La Vision d'Istituto (dal PTOF)</span>
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                "Fare dell'Istituto un luogo di crescita e formazione innovativo, nonché un centro culturale e relazionale per le famiglie e il territorio."
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                <Heart className="w-4 h-4" />
                <span>La Mission Ufficiale</span>
              </div>
              <div className="text-base font-bold text-slate-900 font-display">
                "{SCHOOL_INFO.motto}"
              </div>
              <ul className="mt-4 space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">1.</span>
                  <span>Valorizzare le eccellenze e non lasciare indietro nessuno.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">2.</span>
                  <span>Didattica di laboratorio, compiti di realtà e cooperazione.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">3.</span>
                  <span>Accoglienza sincera delle famiglie e patto educativo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">4.</span>
                  <span>Raccordo tra scuola media inferiore e università/lavoro.</span>
                </li>
              </ul>
            </div>

            {/* Brief History */}
            <div className="bg-white/80 rounded-2xl p-5 border border-slate-200 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <History className="w-4 h-4 text-blue-600" />
                <span>Cenni Storici</span>
              </div>
              <p className="leading-relaxed">
                Autonomia ottenuta nel 1990; dimensionamento scolastico unitario nel 2000 col preside Catello Maresca. Nuova sede di <strong>Via Quarantola</strong> nel 2003, Auditorium moderno nel 2018 e seconda sede di <strong>Via Castellammare 191</strong> dall'a.s. 2023/24 con il Dirigente Francesco Fuschillo.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
