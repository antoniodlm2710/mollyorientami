import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, RotateCcw, ArrowRight, ExternalLink, 
  Copy, Check, HelpCircle, MessageSquare, BookOpen, Clock, MapPin 
} from 'lucide-react';
import { ORIENTATION_QUESTIONS, STUDY_PLANS, SCHOOL_INFO, StudyPlan } from '../data/schoolData';

export const OrientationAssistant: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [resultPlan, setResultPlan] = useState<StudyPlan | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Quick FAQ Assistant states
  const [selectedQuickQuestion, setSelectedQuickQuestion] = useState<string | null>(null);

  const handleSelectOption = (questionId: number, target: string) => {
    const updated = { ...answers, [questionId]: target };
    setAnswers(updated);

    if (currentStep < ORIENTATION_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate best match
      const counts: Record<string, number> = {};
      Object.values(updated).forEach(id => {
        counts[id] = (counts[id] || 0) + 1;
      });

      let bestId = 'classico';
      let maxCount = -1;
      Object.entries(counts).forEach(([id, count]) => {
        if (count > maxCount) {
          maxCount = count;
          bestId = id;
        }
      });

      const plan = STUDY_PLANS.find(p => p.id === bestId) || STUDY_PLANS[0];
      setResultPlan(plan);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResultPlan(null);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const quickAssistantAnswers: Record<string, { title: string; answer: string; tag: string }> = {
    'orari-segreteria': {
      title: 'Quali sono gli orari di apertura della Segreteria?',
      answer: 'Tutti gli uffici di segreteria sono aperti al pubblico: Lunedì, Mercoledì e Sabato dalle 08:30 alle 11:30; Martedì e Giovedì dalle 14:30 alle 17:00.',
      tag: 'Segreteria'
    },
    'codici-iscrizione': {
      title: 'Quali sono i codici meccanografici per la domanda su Iscrizioni Online?',
      answer: '• NAPS01301N per i Licei (Classico, Scientifico, Scienze Applicate, Scienze Umane)\n• NATD01301D per Tecnico AFM e Filiera 4+2\n• NATN01301B per Tecnico SIA e Turismo.',
      tag: 'Codici MIM'
    },
    'differenza-scientifico-applicate': {
      title: 'Che differenza c’è tra Liceo Scientifico e Scienze Applicate?',
      answer: 'Il Liceo Scientifico tradizionale prevede lo studio della lingua e cultura latina per 5 anni (3 ore a settimana). Le Scienze Applicate non hanno il latino e introducono l’Informatica come materia specifica (2 ore a settimana per 5 anni) con un monte ore potenziato di laboratori scientifici e biologia-chimica nel triennio.',
      tag: 'Confronto'
    },
    'certificazioni': {
      title: 'Quali certificazioni linguistiche si possono conseguire in sede?',
      answer: 'Presso l’Istituto si conseguono: Cambridge English (Gold Preparation Centre per l’inglese), DELF Scolaire (Ministero dell’Istruzione Francese), Goethe-Institut (tedesco) e la Certificazione del Latino riconosciuta dall’USR Campania.',
      tag: 'Certificazioni'
    },
    'filiera-4-2': {
      title: 'Come funziona la nuova Filiera 4+2?',
      answer: 'È la riforma ministeriale (D.M. 256/2024) che consente agli studenti dell’indirizzo tecnico di diplomarsi in 4 anni e accedere direttamente agli ITS Academy per conseguire il titolo di alta specializzazione tecnica in soli 6 anni complessivi.',
      tag: 'Riforma MIM'
    }
  };

  return (
    <section id="quiz" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Molly Orientamento Interattivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Guida alla Scelta: Qual è l'Indirizzo Giusto per Te?
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Rispondi a 3 semplici domande oppure consulta le risposte immediate dell'assistente scolastico Molly basate sui documenti ufficiali dell'<strong>I.I.S. Don Lorenzo Milani</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Quiz (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            
            {!resultPlan ? (
              <div>
                {/* Progress bar */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold uppercase tracking-wider">
                    Domanda {currentStep + 1} di {ORIENTATION_QUESTIONS.length}
                  </span>
                  <span className="font-mono font-bold text-blue-700">
                    {Math.round(((currentStep + 1) / ORIENTATION_QUESTIONS.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mb-6">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / ORIENTATION_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <h3 className="text-xl font-bold text-slate-900 font-display mb-5">
                  {ORIENTATION_QUESTIONS[currentStep].question}
                </h3>

                {/* Options */}
                <div className="space-y-2.5">
                  {ORIENTATION_QUESTIONS[currentStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(ORIENTATION_QUESTIONS[currentStep].id, opt.target)}
                      className="w-full text-left p-3.5 sm:p-4 rounded-xl bg-white hover:bg-blue-50/70 border border-slate-200 hover:border-blue-400 text-xs sm:text-sm font-medium text-slate-800 transition-all flex items-start gap-3 cursor-pointer group shadow-xs"
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-600 font-bold text-xs flex items-center justify-center shrink-0 transition-colors mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div className="flex-1">
                        <div className="leading-snug">{opt.text}</div>
                        {opt.hint && (
                          <div className="text-[11px] text-slate-400 group-hover:text-blue-600 mt-1 font-normal">
                            {opt.hint}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="mt-5 text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
                  >
                    ← Torna alla domanda precedente
                  </button>
                )}
              </div>
            ) : (
              /* Quiz Result */
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Profilo Consigliato dall'Assistente Molly</span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold">
                      {resultPlan.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {resultPlan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                    {resultPlan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {resultPlan.shortDesc}
                  </p>
                </div>

                {/* Key highlights of this plan */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Punti di Forza dell'Indirizzo:
                  </div>
                  <ul className="text-xs text-slate-700 space-y-1.5">
                    {resultPlan.objectives.slice(0, 3).map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Code & Direct Enrollment Action */}
                <div className="bg-blue-900 text-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-blue-200 uppercase font-semibold">
                      Codice Meccanografico Ministeriale:
                    </span>
                    <div className="text-xl font-mono font-black text-amber-300">
                      {resultPlan.code}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => handleCopy(resultPlan.code)}
                      className="px-3 py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg flex items-center gap-1.5 cursor-pointer text-white"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copiato!' : 'Copia Codice'}</span>
                    </button>
                    
                    <a
                      href={SCHOOL_INFO.mimEnrollmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Iscriviti Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={resetQuiz}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Rifai il quiz</span>
                  </button>

                  <a
                    href="#indirizzi"
                    className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
                  >
                    <span>Vedi piano orario completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Molly Quick FAQ & Immediate Answers (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                M
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 font-display">
                  Chiedi a Molly (Domande Frequenti)
                </h3>
                <p className="text-xs text-slate-500">Risposte verificate dai documenti ufficiali</p>
              </div>
            </div>

            <div className="space-y-2">
              {Object.entries(quickAssistantAnswers).map(([key, item]) => {
                const isSelected = selectedQuickQuestion === key;
                return (
                  <div
                    key={key}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isSelected 
                        ? 'border-blue-400 bg-blue-50/40' 
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setSelectedQuickQuestion(isSelected ? null : key)}
                      className="w-full text-left p-3 flex items-center justify-between gap-2 cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-slate-800">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                        {item.tag}
                      </span>
                    </button>

                    {isSelected && (
                      <div className="px-3 pb-3 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-100 whitespace-pre-line animate-fadeIn">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Assistance Secretary Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Hai un dubbio specifico?</span>
              </div>
              <p className="text-[11px] text-amber-900 leading-normal">
                Puoi contattare direttamente la segreteria dell'Istituto al numero <strong>081 8700000</strong> o via email a <strong>nais013007@istruzione.it</strong>.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
