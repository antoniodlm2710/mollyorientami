import React, { useState } from 'react';
import { Compass, Sparkles, CheckCircle, ArrowRight, RotateCcw, Copy, ExternalLink, BookOpen } from 'lucide-react';
import { ORIENTATION_QUESTIONS, STUDY_PLANS, SCHOOL_INFO } from '../data/schoolData';

export const OrientationQuiz: React.FC<{ onSelectPlan?: (planId: string) => void }> = ({ onSelectPlan }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const currentQ = ORIENTATION_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (target: string) => {
    const newAnswers = { ...answers, [currentQ.id]: target };
    setAnswers(newAnswers);

    if (currentQuestionIndex < ORIENTATION_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsCompleted(false);
  };

  // Compute recommendation
  const computeResults = () => {
    const scores: Record<string, number> = {};
    STUDY_PLANS.forEach(p => { scores[p.id] = 1; });

    Object.values(answers).forEach(target => {
      if (scores[target] !== undefined) {
        scores[target] += 4;
      }
      // Related affinities
      if (target === 'scientifico') scores['scienze-applicate'] += 2;
      if (target === 'scienze-applicate') scores['scientifico'] += 2;
      if (target === 'afm') scores['sia'] += 2;
      if (target === 'sia') scores['afm'] += 2;
      if (target === 'classico') scores['scienze-umane'] += 2;
      if (target === 'filiera-4-2') scores['afm'] += 2;
    });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topPlanId = sorted[0][0];
    const secondaryPlanId = sorted[1][0];

    const topPlan = STUDY_PLANS.find(p => p.id === topPlanId) || STUDY_PLANS[0];
    const secondaryPlan = STUDY_PLANS.find(p => p.id === secondaryPlanId) || STUDY_PLANS[1];

    return { topPlan, secondaryPlan };
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const { topPlan, secondaryPlan } = computeResults();

  return (
    <section id="quiz" className="py-16 bg-gradient-to-b from-slate-50 to-blue-50/40 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Orientamento Vocazionale Interattivo</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Trova il tuo indirizzo ideale con Molly
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Sei in terza media o stai supportando tuo figlio nella scelta? Rispondi a 3 veloci domande per scoprire il percorso più adatto alle tue passioni e potenzialità.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-10">
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                  <span>Domanda {currentQuestionIndex + 1} di {ORIENTATION_QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestionIndex + 1) / ORIENTATION_QUESTIONS.length) * 100)}% Completato</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentQuestionIndex + 1) / ORIENTATION_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option.target)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-600 hover:bg-blue-50/50 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm font-medium text-slate-800 group-hover:text-blue-900 transition-colors">
                        {option.text}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>

              {/* Back button if past question 0 */}
              {currentQuestionIndex > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-start">
                  <button
                    onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
                  >
                    ← Torna alla domanda precedente
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  Il tuo profilo orientativo con Molly
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  In base alle tue risposte, ecco i percorsi dell'I.I.S. Don Lorenzo Milani più affini alle tue inclinazioni:
                </p>
              </div>

              {/* Primary Recommended Plan */}
              <div className="bg-gradient-to-br from-blue-50 to-amber-50/50 rounded-2xl p-6 border-2 border-blue-600/40 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
                    ★ Consigliato per Te (Alta Affinità)
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    Codice: {topPlan.code}
                  </span>
                </div>

                <h4 className="text-2xl font-extrabold text-slate-900 font-display">
                  {topPlan.name}
                </h4>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                  {topPlan.shortDesc}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold text-slate-700 uppercase">Perché fa per te:</span>
                    <ul className="text-xs text-slate-600 mt-1 space-y-1">
                      {topPlan.objectives.slice(0, 2).map((obj, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-700 uppercase">Prospettive future:</span>
                    <ul className="text-xs text-slate-600 mt-1 space-y-1">
                      {topPlan.careers.slice(0, 2).map((car, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">›</span>
                          <span>{car}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action for this result */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => handleCopy(topPlan.code)}
                    className="px-3 py-2 text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedCode === topPlan.code ? 'Copiato!' : `Copia Codice (${topPlan.code})`}</span>
                  </button>

                  <a
                    href={SCHOOL_INFO.mimEnrollmentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <span>Iscriviti Online con questo corso</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Secondary Recommended Plan */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Seconda Opzione Consigliata
                  </span>
                  <span className="text-xs font-mono text-slate-600">
                    Codice: {secondaryPlan.code}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 font-display">
                  {secondaryPlan.name}
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {secondaryPlan.shortDesc}
                </p>
              </div>

              {/* Reset Action */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ripeti il Questionario</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
