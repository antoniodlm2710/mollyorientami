import React, { useState } from 'react';
import { 
  GraduationCap, Copy, Check, ExternalLink, ChevronDown, ChevronUp, 
  Sparkles, BookOpen, Clock, Compass, Briefcase, Award 
} from 'lucide-react';
import { STUDY_PLANS, SCHOOL_INFO } from '../data/schoolData';

export const StudyPlansExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Licei' | 'Tecnici' | 'Filiera 4+2'>('all');
  const [expandedPlanId, setExpandedPlanId] = useState<string | null>('classico');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredPlans = selectedCategory === 'all'
    ? STUDY_PLANS
    : STUDY_PLANS.filter(p => p.category === selectedCategory);

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedPlanId(expandedPlanId === id ? null : id);
  };

  return (
    <section id="indirizzi" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wider uppercase mb-1">
            <span>Offerta Formativa Completa</span>
            <span aria-hidden="true">·</span>
            <span>Quadri Orari Ministeriali</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Indirizzi di Studio & Piani degli Studi
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Consulta il monte ore dettagliato per ciascuna disciplina, gli obiettivi educativi e gli sbocchi universitari e professionali di ogni percorso attivo all'<strong>I.I.S. Don Lorenzo Milani</strong> di Gragnano.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-100 rounded-xl max-w-fit border border-slate-200">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tutti i Corsi ({STUDY_PLANS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('Licei')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'Licei'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Licei (4 percorsi)
          </button>
          <button
            onClick={() => setSelectedCategory('Tecnici')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'Tecnici'
                ? 'bg-blue-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Istituti Tecnici (3 percorsi)
          </button>
          <button
            onClick={() => setSelectedCategory('Filiera 4+2')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'Filiera 4+2'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Filiera 4+2 (Novità MIM)
          </button>
        </div>

        {/* Course Cards List */}
        <div className="space-y-4">
          {filteredPlans.map((plan) => {
            const isExpanded = expandedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded 
                    ? 'border-blue-400/80 shadow-md bg-white' 
                    : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(plan.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        {plan.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
                      {plan.shortDesc}
                    </p>
                  </div>

                  {/* Actions & Code on card right */}
                  <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                    <div 
                      onClick={(e) => handleCopyCode(plan.code, e)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                      title="Copia codice meccanografico"
                    >
                      <span>{plan.code}</span>
                      {copiedCode === plan.code ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </div>

                    <button
                      className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                      aria-label="Espandi o comprimi piano di studi"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed View */}
                {isExpanded && (
                  <div className="border-t border-slate-200 p-5 sm:p-8 bg-slate-50/70 space-y-8 animate-fadeIn">
                    
                    {/* Deep dive description */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Profilo dell'Indirizzo
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
                        {plan.fullDesc}
                      </p>
                    </div>

                    {/* Educational Goals & Careers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-3 flex items-center gap-2">
                          <Compass className="w-4 h-4 text-blue-600" />
                          <span>Obiettivi Formativi & Competenze</span>
                        </h5>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {plan.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold">✓</span>
                              <span className="leading-relaxed">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-emerald-600" />
                          <span>Sbocchi Universitari & Professionali</span>
                        </h5>
                        <ul className="space-y-2 text-xs text-slate-700">
                          {plan.careers.map((car, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold">›</span>
                              <span className="leading-relaxed">{car}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Study Plan Table */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-bold text-slate-900 flex items-center gap-2 font-display">
                          <Clock className="w-4 h-4 text-amber-500" />
                          <span>Piano degli Studi & Quadro Orario Settimanale</span>
                        </h5>
                        <span className="text-xs text-slate-500">Ore settimanali per materia</span>
                      </div>

                      <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                              <th className="py-2.5 px-4">Disciplina / Insegnamento</th>
                              <th className="py-2.5 px-3 text-center w-16">I° Anno</th>
                              <th className="py-2.5 px-3 text-center w-16">II° Anno</th>
                              {plan.totalHours.length > 4 ? (
                                <>
                                  <th className="py-2.5 px-3 text-center w-16">III° Anno</th>
                                  <th className="py-2.5 px-3 text-center w-16">IV° Anno</th>
                                  <th className="py-2.5 px-3 text-center w-16">V° Anno</th>
                                </>
                              ) : (
                                <>
                                  <th className="py-2.5 px-3 text-center w-16">III° Anno</th>
                                  <th className="py-2.5 px-3 text-center w-16">IV° Anno</th>
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {plan.subjects.map((sub, sIdx) => (
                              <tr key={sIdx} className="hover:bg-slate-50/80 transition-colors">
                                <td className="py-2 px-4 font-medium text-slate-800">
                                  {sub.name}
                                </td>
                                {sub.hours.map((h, hIdx) => (
                                  <td key={hIdx} className="py-2 px-3 text-center font-mono text-slate-700">
                                    {h}
                                  </td>
                                ))}
                              </tr>
                            ))}
                            {/* Totals */}
                            <tr className="bg-blue-50/60 font-bold text-blue-900 border-t-2 border-blue-200">
                              <td className="py-2.5 px-4 uppercase text-[11px] tracking-wider">
                                Totale Ore Settimanali
                              </td>
                              {plan.totalHours.map((tot, tIdx) => (
                                <td key={tIdx} className="py-2.5 px-3 text-center font-mono text-sm font-bold">
                                  {tot}
                                </td>
                              ))}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Bottom CTA for this specific course */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                      <div className="text-xs text-slate-500">
                        Per iscriverti a <strong>{plan.name}</strong>, usa il codice <strong className="font-mono text-slate-800">{plan.code}</strong>.
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleCopyCode(plan.code, e)}
                          className="px-3 py-2 text-xs font-semibold bg-white border border-slate-300 hover:bg-slate-100 rounded-lg text-slate-800 flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedCode === plan.code ? 'Codice Copiato!' : 'Copia Codice'}</span>
                        </button>
                        
                        <a
                          href={SCHOOL_INFO.mimEnrollmentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-xs font-bold bg-blue-700 hover:bg-blue-800 text-white rounded-lg inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                          <span>Iscriviti Online a questo corso</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
