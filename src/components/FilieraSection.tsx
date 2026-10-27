import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ArrowRight, Zap, Building2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FilieraSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('NATD01301D');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="filiera" className="py-16 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white relative overflow-hidden border-b border-emerald-900/50">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Decreto Ministeriale 256 del 16/12/2024 · Riforma MIM 2025/26</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Info (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              La Nuova Filiera Formativa Tecnologico-Professionale <span className="text-emerald-400">"4+2"</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Con il <strong>Decreto Ministeriale 256 del 16 dicembre 2024</strong>, il Ministero dell’Istruzione e del Merito (MIM) ha definito le linee guida per l’attivazione dei percorsi per l’anno scolastico 2025/26.
              All'I.I.S. Don Lorenzo Milani di Gragnano gli studenti possono diplomarsi in soli <strong>4 anni</strong> e accedere direttamente al biennio specialistico degli <strong>ITS Academy</strong>.
            </p>

            {/* Formula visual banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-center px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40">
                  <div className="text-2xl font-black text-emerald-300 font-display">4 Anni</div>
                  <div className="text-[11px] text-slate-300 uppercase font-semibold">Superiori</div>
                </div>
                <div className="text-2xl font-black text-emerald-400">+</div>
                <div className="text-center px-4 py-2 rounded-xl bg-teal-500/20 border border-teal-500/40">
                  <div className="text-2xl font-black text-teal-300 font-display">2 Anni</div>
                  <div className="text-[11px] text-slate-300 uppercase font-semibold">ITS Academy</div>
                </div>
                <div className="text-2xl font-black text-emerald-400">=</div>
                <div className="text-center px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40">
                  <div className="text-2xl font-black text-amber-300 font-display">6 Anni</div>
                  <div className="text-[11px] text-slate-300 uppercase font-semibold">Alta Qualifica EQF 6</div>
                </div>
              </div>

              <div className="text-xs text-slate-300 font-medium">
                Accesso sia al mondo del lavoro che all'università.
              </div>
            </div>

            {/* Core benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">Rete di partenariato con scuole, ITS Academy e imprese</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">Formazione on the job, stage immersivi e laboratori</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">Stesso valore legale del diploma quinquennale</span>
              </div>
              <div className="flex items-start gap-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200">Sinergia continua con le aziende leader del territorio</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Codice Copiato!' : 'Copia Codice: NATD01301D'}</span>
              </button>

              <a
                href={SCHOOL_INFO.mimEnrollmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>Iscriviti alla Filiera su Iscrizioni Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Feature Highlights Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-emerald-500/30 shadow-xl space-y-5">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>Perché scegliere la Filiera 4+2?</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-emerald-300 text-sm">Alta Occupabilità Immediata</div>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  Gli ITS Academy registrano oltre l'85% di occupazione coerente entro un anno dal conseguimento del titolo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-teal-300 text-sm">Didattica Pratica & Formazione sul Campo</div>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  I docenti provengono anche dal mondo delle imprese; il percorso combina teoria solida e tirocinio sul campo.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="font-bold text-amber-300 text-sm">Flessibilità per il Futuro</div>
                <p className="text-slate-300 mt-1 leading-relaxed">
                  Al termine dei 4 anni puoi comunque scegliere di iscriverti a qualsiasi facoltà universitaria classica o proseguire nel 2° step ITS Academy.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              * Per iscriversi al percorso quadriennale, su <em>Iscrizioni Online MIM</em> seleziona l'indirizzo con codice meccanografico <strong className="font-mono text-emerald-300">NATD01301D</strong>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
