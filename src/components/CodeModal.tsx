import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, School, FileText, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { AppLogo } from './AppLogo';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AppLogo size="sm" />
            <div>
              <h3 className="font-bold text-base font-display">
                Codici Meccanografici Iscrizioni 2026/2027
              </h3>
              <p className="text-xs text-slate-300">
                I.I.S. Don Lorenzo Milani · Gragnano (NA)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-xs text-slate-600 leading-relaxed">
            Per iscrivere tua figlia o tuo figlio tramite il portale del Ministero dell'Istruzione e del Merito (MIM), copia il codice corrispondente all'indirizzo prescelto e incollalo nel campo di ricerca scuola.
          </p>

          <div className="space-y-3">
            {SCHOOL_INFO.mechanographicCodes.map((item) => (
              <div 
                key={item.code}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 transition-all"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {item.sector}
                    </span>
                    <div className="text-2xl font-black font-mono tracking-wider text-blue-700 mt-0.5">
                      {item.code}
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(item.code)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                      copiedCode === item.code
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300'
                    }`}
                  >
                    {copiedCode === item.code ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copiato!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copia Codice</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-2.5 pt-2.5 border-t border-slate-200/80 text-xs">
                  <div className="font-semibold text-slate-700 mb-1">Corsi inclusi in questo codice:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.courses.map((c, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white text-slate-700 text-[11px] border border-slate-200 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Suggerimento:</strong> Una volta copiato il codice, clicca sul pulsante in basso per aprire la pagina del Ministero ed effettuare l'accesso con SPID o CIE.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Chiudi
          </button>

          <a
            href={SCHOOL_INFO.mimEnrollmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-lg inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <span>Apri mim.gov.it/iscrizioni-online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
