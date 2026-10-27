import React, { useState } from 'react';
import { ExternalLink, Copy, Check, FileText, ShieldCheck, Clock, Phone, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const MimBanner: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="iscrizioni-mim" className="relative py-12 bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Background architectural pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#93c5fd_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 mb-2">
            <span>Piattaforma Ufficiale Ministeriale</span>
            <span aria-hidden="true">·</span>
            <span>Anno Scolastico 2026/2027</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Iscrizioni Online al Ministero dell'Istruzione e del Merito (MIM)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Le iscrizioni alle classi prime si effettuano esclusivamente online. 
            Inserisci il codice meccanografico dell'indirizzo scelto dell'<strong>I.I.S. Don Lorenzo Milani di Gragnano</strong> per completare la domanda.
          </p>
        </div>

        {/* Primary CTA and Official Link Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 mb-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Collegamento Diretto Attivo
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                Portale Iscrizioni Online MIM
              </h3>
              <p className="text-sm text-slate-200">
                Accedi con le credenziali SPID, CIE (Carta d'Identità Elettronica), CNS o eIDAS per inoltrare la domanda per l'a.s. 2026/2027.
              </p>
              <div className="text-xs text-slate-400 font-mono break-all pt-1">
                Link ufficiale: <span className="text-amber-300 font-sans">{SCHOOL_INFO.mimEnrollmentUrl}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href={SCHOOL_INFO.mimEnrollmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl transition-all shadow-lg hover:shadow-amber-400/25 cursor-pointer"
              >
                <span>Accedi a Iscrizioni Online MIM</span>
                <ExternalLink className="w-4 h-4 text-slate-900" />
              </a>
            </div>
          </div>
        </div>

        {/* The 3 School Mechanographic Codes Cards */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-1">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>I Codici Meccanografici da Inserire nella Domanda</span>
            </h3>
            <span className="text-xs text-slate-400">Clicca sul codice per copiarlo subito</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SCHOOL_INFO.mechanographicCodes.map((item) => (
              <div
                key={item.code}
                className="bg-slate-900/90 rounded-xl p-5 border border-slate-700/80 hover:border-amber-400/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.sector}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item.code)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer font-medium ${
                        copiedCode === item.code
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-white/5 text-slate-300 hover:bg-white/15 border border-white/10'
                      }`}
                    >
                      {copiedCode === item.code ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copiato!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copia</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div 
                    onClick={() => copyToClipboard(item.code)}
                    className="text-2xl font-black font-mono tracking-wider text-amber-400 cursor-pointer group-hover:text-amber-300 transition-colors py-1"
                    title="Clicca per copiare il codice"
                  >
                    {item.code}
                  </div>

                  <div className="mt-3 space-y-1.5 border-t border-slate-800 pt-3">
                    <p className="text-xs font-semibold text-slate-300">Indirizzi associati a questo codice:</p>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {item.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">›</span>
                          <span className="text-slate-200">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Guide & Help Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Step by step guide */}
          <div className="lg:col-span-2 bg-slate-900/70 rounded-xl p-6 border border-slate-800">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Come inoltrare la domanda di iscrizione in 4 passi</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-300 font-bold text-sm flex items-center justify-center shrink-0 border border-blue-500/30">
                  1
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Accesso con SPID o CIE</h5>
                  <p className="text-xs text-slate-300 mt-1">
                    Collegati a <span className="text-amber-300 font-medium">mim.gov.it/iscrizioni-online</span> con la tua identità digitale.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-300 font-bold text-sm flex items-center justify-center shrink-0 border border-blue-500/30">
                  2
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Digita il Codice Scuola</h5>
                  <p className="text-xs text-slate-300 mt-1">
                    Inserisci <span className="font-mono text-amber-300 font-semibold">NAPS01301N</span> per i Licei, oppure <span className="font-mono text-amber-300 font-semibold">NATD01301D</span> o <span className="font-mono text-amber-300 font-semibold">NATN01301B</span> per i Tecnici.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-300 font-bold text-sm flex items-center justify-center shrink-0 border border-blue-500/30">
                  3
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Compilazione Modulo</h5>
                  <p className="text-xs text-slate-300 mt-1">
                    Compila i dati dello studente e della famiglia, selezionando le preferenze e i servizi desiderati.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-300 font-bold text-sm flex items-center justify-center shrink-0 border border-blue-500/30">
                  4
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white">Inoltro & Conferma</h5>
                  <p className="text-xs text-slate-300 mt-1">
                    Invia la domanda; riceverai una ricevuta telematica via email con il codice identificativo della domanda.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secretary Support Widget */}
          <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Sportello Assistenza Famiglie</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Supporto alla Compilazione
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                La segreteria dell'I.I.S. Don Lorenzo Milani supporta le famiglie prive di strumenti informatici o che necessitano di chiarimenti.
              </p>

              <div className="space-y-2 text-xs bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <div className="font-semibold text-slate-200">Orari Sportello al Pubblico:</div>
                <div className="text-slate-300">
                  <span className="text-amber-300 font-medium">Lun, Mer e Sab:</span> 08:30 – 11:30
                </div>
                <div className="text-slate-300">
                  <span className="text-amber-300 font-medium">Mar e Gio:</span> 14:30 – 17:00
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
              <a
                href="tel:0818700000"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Tel: 081 8700000</span>
              </a>
              <span className="text-[11px] text-slate-400">Sede Via Quarantola, 6</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
