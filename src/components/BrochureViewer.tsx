import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, BookOpen, Layers, Printer, Share2, 
  Check, Calendar, MapPin, Award, GraduationCap, Clock
} from 'lucide-react';
import { BROCHURE_PAGES, SCHOOL_INFO } from '../data/schoolData';
import { AppLogo } from './AppLogo';

export const BrochureViewer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'reader' | 'grid'>('reader');
  const [copiedLink, setCopiedLink] = useState(false);

  const totalPages = BROCHURE_PAGES.length;
  const currentBrochurePage = BROCHURE_PAGES[currentPage - 1];

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="brochure" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wider uppercase mb-1">
              <span>Brochure d'Istituto & Orientamento</span>
              <span aria-hidden="true">·</span>
              <span>16 Pagine Integrali</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Brochure Digitale PTOF & Piani di Studio
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Sfoglia il documento completo dell'<strong>I.I.S. Don Lorenzo Milani</strong> di Gragnano con tutti i quadri orari, le certificazioni linguistiche, la filiera 4+2 e la storia.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-white p-1 rounded-lg border border-slate-300 flex items-center shadow-xs">
              <button
                onClick={() => setViewMode('reader')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'reader'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Modalità Lettore</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Tutte le 16 Pagine</span>
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              title="Stampa questa pagina"
            >
              <Printer className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleShare}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors cursor-pointer relative"
              title="Condividi pagina"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* View Mode: Reader */}
        {viewMode === 'reader' ? (
          <div className="max-w-4xl mx-auto">
            
            {/* Top Navigation Bar */}
            <div className="bg-white rounded-t-2xl p-4 border border-b-0 border-slate-300 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Pagina <strong className="text-slate-900 font-mono text-sm">{currentPage}</strong> di {totalPages}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                  {currentBrochurePage.category}
                </span>
              </div>

              {/* Page Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  aria-label="Pagina precedente"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <select
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Number(e.target.value))}
                  className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-md py-1 px-2 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                >
                  {BROCHURE_PAGES.map((p) => (
                    <option key={p.pageNumber} value={p.pageNumber}>
                      Pag. {p.pageNumber}: {p.title}
                    </option>
                  ))}
                </select>

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  aria-label="Pagina successiva"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Page Canvas / Reader Display */}
            <div className="bg-white border border-slate-300 rounded-b-2xl shadow-xl overflow-hidden min-h-[520px] flex flex-col justify-between">
              
              <div className="p-6 sm:p-10">
                {/* Page 1 */}
                {currentPage === 1 && (
                  <div className="text-center space-y-6 max-w-2xl mx-auto py-6">
                    <div className="inline-flex items-center justify-center">
                      <AppLogo size="xl" className="ring-4 ring-blue-100 shadow-xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-700">
                        I.I.S. don Lorenzo Milani Gragnano
                      </h3>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-display">
                        "Accogliere, formare e orientare tra esperienza ed innovazione"
                      </h4>
                      <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                        Brochure informativa ufficiale per le iscrizioni alle classi prime per l'anno scolastico 2026/2027.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
                      <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100">
                        <div className="font-bold text-xs uppercase text-blue-800">Sede Centrale</div>
                        <div className="text-sm text-slate-800 font-semibold">Via Quarantola, 6 - Gragnano</div>
                        <div className="text-xs text-slate-500 mt-1">Presidenza, segreterie, auditorium, laboratori</div>
                      </div>
                      <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-100">
                        <div className="font-bold text-xs uppercase text-amber-800">Seconda Sede</div>
                        <div className="text-sm text-slate-800 font-semibold">Via Castellammare, 191 - Gragnano</div>
                        <div className="text-xs text-slate-500 mt-1">Plesso ristrutturato con dotazioni digitali di punta</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 2 */}
                {currentPage === 2 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pagina 2 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">Gli Orari & I Codici per le Iscrizioni</h3>
                      <p className="text-sm text-slate-600 mt-1">Orari di ricevimento al pubblico e codici ministeriali unici.</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-xl p-6 shadow-md">
                      <h4 className="font-bold text-base mb-3 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-amber-400" />
                        <span>Orari Uffici di Segreteria</span>
                      </h4>
                      <p className="text-xs text-slate-300 mb-4">Tutti gli uffici di Segreteria sono aperti al pubblico nei seguenti orari:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                          <div className="font-semibold text-amber-300">Lunedì, Mercoledì e Sabato</div>
                          <div className="text-lg font-bold">dalle ore 08:30 alle 11:30</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                          <div className="font-semibold text-amber-300">Martedì e Giovedì</div>
                          <div className="text-lg font-bold">dalle ore 14:30 alle 17:00</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-500 uppercase">Indirizzi Liceali</span>
                        <div className="text-xl font-black font-mono text-blue-700 mt-1">NAPS01301N</div>
                        <ul className="text-xs text-slate-600 mt-2 space-y-1">
                          <li>• Liceo Classico</li>
                          <li>• Liceo Scientifico</li>
                          <li>• Liceo Scientifico Opzione Scienze Applicate</li>
                          <li>• Liceo delle Scienze Umane</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <span className="text-xs font-bold text-slate-500 uppercase">Indirizzi Tecnico - Economici</span>
                        <div className="text-xl font-black font-mono text-emerald-700 mt-1">NATD01301D & NATN01301B</div>
                        <ul className="text-xs text-slate-600 mt-2 space-y-1">
                          <li>• <strong className="font-mono">NATD01301D</strong>: Amministrazione Finanza e Marketing (AFM)</li>
                          <li>• <strong className="font-mono">NATN01301B</strong>: Sistemi Informativi Aziendali (SIA) e Turismo</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 3 */}
                {currentPage === 3 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Pagina 3 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                        Perché l'Istituto è intitolato a Don Lorenzo Milani
                      </h3>
                      <p className="text-xs text-slate-500">Firenze 27/05/1923 – Firenze 26/06/1967</p>
                    </div>

                    <div className="bg-amber-50/50 rounded-xl p-5 border border-amber-200/80">
                      <p className="text-sm text-slate-800 leading-relaxed">
                        Don Lorenzo Milani è stato un presbitero, scrittore, docente ed educatore cattolico.
                        È stato un prete rivoluzionario, ma anche ritenuto scomodo dalla Chiesa e da alcuni rappresentanti della società italiana degli anni '50, per molti aspetti del suo operato.
                      </p>
                      <p className="text-sm text-slate-800 leading-relaxed mt-3">
                        Il suo anticonformismo, portato avanti con rigore evangelico, fu la causa del suo trasferimento da Calenzano a Barbiana, un borgo di montagna sperduto sui pendii dell'Appennino toscano. 
                        Nella piccola parrocchia fondò una scuola gratuita e sempre aperta; diremmo oggi <strong>INCLUSIVA</strong>, per formare cittadini <strong>LIBERI</strong> e <strong>RESPONSABILI</strong>.
                      </p>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4 py-2 italic font-serif-quote text-slate-800 text-base leading-relaxed bg-white">
                      "Su una parete della nostra scuola c'è scritto grande: <strong>I CARE</strong>. È il motto intraducibile dei giovani americani migliori: <em>'Me ne importa, mi sta a cuore'</em>."
                      <div className="text-xs font-sans text-slate-500 mt-2 font-normal">
                        — Tratto dalla <em>Lettera ai Giudici</em>, Don Lorenzo Milani
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 4 */}
                {currentPage === 4 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pagina 4 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                        Presso il Nostro Istituto si Conseguono:
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Certificazioni linguistiche europee di eccellenza preparate in sede.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div className="font-bold text-base text-slate-900">DELF Scolaire</div>
                        <div className="text-xs font-semibold text-blue-700">Certificazione di Francese</div>
                        <p className="text-xs text-slate-600 mt-2">
                          Rilasciata dal Ministero dell'Educazione Nazionale Francese e CIEP.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div className="font-bold text-base text-slate-900">Cambridge English</div>
                        <div className="text-xs font-semibold text-emerald-700">Gold Preparation Centre 2025-2026</div>
                        <p className="text-xs text-slate-600 mt-2">
                          Certificazione di Inglese Cambridge riconosciuta a livello accademico e lavorativo mondiale.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div className="font-bold text-base text-slate-900">Goethe-Institut</div>
                        <div className="text-xs font-semibold text-amber-700">Certificazione di Tedesco</div>
                        <p className="text-xs text-slate-600 mt-2">
                          Esami ufficiali di lingua tedesca per opportunità internazionali.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                        <div className="font-bold text-base text-slate-900">Certificazione del Latino</div>
                        <div className="text-xs font-semibold text-purple-700">Ufficio Scolastico Regionale Campania</div>
                        <p className="text-xs text-slate-600 mt-2">
                          Valutazione e valorizzazione delle competenze nella lingua e cultura latina.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 5 */}
                {currentPage === 5 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Pagina 5 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">Offerta Formativa & Progetti d'Istituto</h3>
                      <p className="text-sm text-slate-600 mt-1">Una scuola ricca di stimoli culturali e competizioni nazionali.</p>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      L'Istituto amplia costantemente la propria proposta formativa con attività aggiuntive, articolate in progetti, corsi e competizioni che arricchiscono il bagaglio culturale e relazionale degli studenti:
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {[
                        'Progetto Lettura', 'Progetto Madrelingua', 'Programma Erasmus+',
                        'Teatro a Scuola', 'Piano Lauree Scientifiche', 'Progetto Scuola Viva',
                        'Scuola Amica UNICEF', 'Centro Sportivo Scolastico', 'Giochi della Chimica',
                        'Hippo Competition', 'Premio Morelli', 'Olimpiadi di Italiano',
                        'Olimpiadi di Matematica', 'Giochi di Anacleto', 'Deutschland Plus',
                        'Concorso Economia', 'Olimpiadi Lingue Classiche', 'eTwinning School'
                      ].map((proj, idx) => (
                        <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                          <span className="truncate">{proj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Page 6 */}
                {currentPage === 6 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pagina 6 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">Licei & Istituti Tecnici</h3>
                      <p className="text-sm text-slate-600 mt-1">Due vocazioni formative per orientare il futuro di ciascuno studente.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200">
                        <h4 className="font-bold text-base text-blue-900 mb-2">I Percorsi Liceali</h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Forniscono allo studente gli strumenti culturali e metodologici per una comprensione approfondita della realtà affinché egli si ponga con atteggiamento critico di fronte alle situazioni e ai problemi ed acquisisca conoscenze e competenze funzionali a compiere scelte adeguate al proseguimento degli studi e all'inserimento nel mondo del lavoro.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                        <h4 className="font-bold text-base text-emerald-900 mb-2">Gli Istituti Tecnici</h4>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Offrono una solida base culturale di carattere scientifico e tecnologico. Favoriscono un immediato inserimento nel mondo del lavoro e la prosecuzione degli studi all'Università o presso gli <strong>ITS Academy (Legge n. 99 del 15 luglio 2022)</strong>. Didattica di laboratorio e Formazione Scuola Lavoro (F.S.L.).
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 7 */}
                {currentPage === 7 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Pagina 7 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                        La Filiera Formativa "4+2"
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">Decreto Ministeriale 256 del 16 dicembre 2024 (MIM)</p>
                    </div>

                    <div className="bg-emerald-900 text-white p-6 rounded-xl space-y-3 shadow-md">
                      <div className="inline-block px-2.5 py-1 rounded bg-emerald-700 text-xs font-bold tracking-wide uppercase">
                        Riforma Nazionale MIM
                      </div>
                      <h4 className="text-xl font-bold font-display">
                        4 Anni Superiore + 2 Anni ITS Academy
                      </h4>
                      <p className="text-xs text-emerald-100 leading-relaxed">
                        Con il Decreto Ministeriale 256 del 16 dicembre 2024, il Ministero dell'Istruzione e del Merito (MIM) ha definito le linee guida per l'attivazione dei percorsi per l'anno scolastico 2025/26.
                      </p>
                      <p className="text-xs text-emerald-100 leading-relaxed">
                        Questi percorsi rappresentano una riforma del sistema educativo italiano per favorire competenze integrate ed innovative con didattica on-the-job.
                      </p>
                      <div className="pt-2 text-xs font-bold text-amber-300">
                        ✓ Titolo di alta specializzazione tecnica in soli 6 anni!
                      </div>
                    </div>
                  </div>
                )}

                {/* Pages 8, 10, 12: Quadri Orari */}
                {(currentPage === 8 || currentPage === 10 || currentPage === 12) && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pagina {currentPage} del PDF</span>
                      <h3 className="text-xl font-extrabold text-slate-900 font-display">
                        {currentBrochurePage.title}
                      </h3>
                      <p className="text-xs text-slate-500">{currentBrochurePage.subtitle}</p>
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-100 text-slate-700 uppercase font-semibold border-b border-slate-200">
                          <tr>
                            <th className="py-2 px-3">Discipline per Anno Scolastico</th>
                            <th className="py-2 px-2 text-center">I°</th>
                            <th className="py-2 px-2 text-center">II°</th>
                            <th className="py-2 px-2 text-center">III°</th>
                            <th className="py-2 px-2 text-center">IV°</th>
                            <th className="py-2 px-2 text-center">V°</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {currentPage === 8 && (
                            <>
                              <tr className="bg-blue-50/70 font-semibold text-blue-900">
                                <td colSpan={6} className="py-1 px-3">Liceo Classico (Codice: NAPS01301N)</td>
                              </tr>
                              <tr><td className="py-1.5 px-3">Lingua e letteratura italiana</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td></tr>
                              <tr><td className="py-1.5 px-3">Lingua e letteratura latina</td><td className="text-center font-mono">5</td><td className="text-center font-mono">5</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td></tr>
                              <tr><td className="py-1.5 px-3">Lingua e letteratura greca</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td></tr>
                              <tr><td className="py-1.5 px-3">Lingua e cultura straniera (Inglese)</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td></tr>
                              <tr><td className="py-1.5 px-3">Storia e Filosofia (al triennio)</td><td className="text-center font-mono">-</td><td className="text-center font-mono">-</td><td className="text-center font-mono">6</td><td className="text-center font-mono">6</td><td className="text-center font-mono">6</td></tr>
                              <tr className="font-bold bg-slate-50"><td className="py-1.5 px-3">Totale ore settimanali</td><td className="text-center">27</td><td className="text-center">27</td><td className="text-center">31</td><td className="text-center">31</td><td className="text-center">31</td></tr>
                            </>
                          )}

                          {currentPage === 10 && (
                            <>
                              <tr className="bg-amber-50/70 font-semibold text-amber-900">
                                <td colSpan={6} className="py-1 px-3">Liceo Scienze Applicate (Codice: NAPS01301N)</td>
                              </tr>
                              <tr><td className="py-1.5 px-3">Informatica (5 anni)</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2</td></tr>
                              <tr><td className="py-1.5 px-3">Matematica</td><td className="text-center font-mono">5</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td><td className="text-center font-mono">4</td></tr>
                              <tr><td className="py-1.5 px-3">Scienze naturali (Biologia, Chimica, Terra)</td><td className="text-center font-mono">3</td><td className="text-center font-mono">4</td><td className="text-center font-mono">5</td><td className="text-center font-mono">5</td><td className="text-center font-mono">5</td></tr>
                              <tr className="font-bold bg-slate-50"><td className="py-1.5 px-3">Totale ore settimanali</td><td className="text-center">27</td><td className="text-center">27</td><td className="text-center">30</td><td className="text-center">30</td><td className="text-center">30</td></tr>
                            </>
                          )}

                          {currentPage === 12 && (
                            <>
                              <tr className="bg-indigo-50/70 font-semibold text-indigo-900">
                                <td colSpan={6} className="py-1 px-3">Tecnico AFM, SIA & Turismo (Codici: NATD01301D / NATN01301B)</td>
                              </tr>
                              <tr><td className="py-1.5 px-3">Economia Aziendale</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2</td><td className="text-center font-mono">6/4</td><td className="text-center font-mono">7/7</td><td className="text-center font-mono">8/7</td></tr>
                              <tr><td className="py-1.5 px-3">Informatica (SIA potenziata)</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2</td><td className="text-center font-mono">2/4</td><td className="text-center font-mono">2/5</td><td className="text-center font-mono">0/5</td></tr>
                              <tr><td className="py-1.5 px-3">2° lingua comunitaria (Francese)</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td><td className="text-center font-mono">3</td></tr>
                              <tr className="font-bold bg-slate-50"><td className="py-1.5 px-3">Totale ore settimanali</td><td className="text-center">32</td><td className="text-center">32</td><td className="text-center">32</td><td className="text-center">32</td><td className="text-center">32</td></tr>
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Pages 9, 11, 13: Profili & Sbocchi */}
                {(currentPage === 9 || currentPage === 11 || currentPage === 13) && (
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Pagina {currentPage} del PDF</span>
                      <h3 className="text-xl font-extrabold text-slate-900 font-display">
                        {currentBrochurePage.title}
                      </h3>
                      <p className="text-xs text-slate-500">{currentBrochurePage.subtitle}</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Contenuti Formativi</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {currentBrochurePage.content}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Punti Salienti del Profilo</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {currentBrochurePage.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/50 text-slate-800 border border-blue-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Page 14: La Storia */}
                {currentPage === 14 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Pagina 14 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">La Storia dell'Istituto</h3>
                      <p className="text-sm text-slate-600 mt-1">Dalle origini all'autonomia e alle due sedi all'avanguardia.</p>
                    </div>

                    <div className="text-xs text-slate-700 leading-relaxed space-y-3">
                      <p>
                        L'Istituto di Istruzione Superiore <strong>"don Lorenzo Milani"</strong> ha una storia recente, in quanto è nato a seguito del dimensionamento e della razionalizzazione dell'intera rete scolastica nazionale nell'anno 2000, sotto la presidenza del Dirigente prof. <strong>Catello Maresca</strong>.
                      </p>
                      <p>
                        Nel maggio del 2003 l'Istituto è stato dotato di una nuova sede appositamente costruita in <strong>Via Quarantola</strong>. Negli ultimi anni, il Dirigente Scolastico prof. <strong>Francesco Fuschillo</strong> ha promosso l'adeguamento tecnologico (reti LAN, LIM, PC), l'inaugurazione del nuovo <strong>Auditorium nel 2018</strong> e la nuova sede succursale di <strong>Via Castellammare n. 191</strong> a partire dall'a.s. 2023/24.
                      </p>
                    </div>
                  </div>
                )}

                {/* Page 15: Vision & Mission */}
                {currentPage === 15 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Pagina 15 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">Vision & Mission dell'Istituto</h3>
                      <p className="text-sm text-slate-600 mt-1">Tratto dal Piano Triennale dell'Offerta Formativa (PTOF).</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-5 rounded-xl">
                      <div className="text-xs uppercase font-bold text-amber-300">Vision</div>
                      <p className="text-sm font-medium mt-1">
                        "Fare dell'Istituto un luogo di crescita e formazione innovativo, nonché un centro culturale e relazionale per le famiglie e il territorio."
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                      <div className="text-xs uppercase font-bold text-blue-700">Mission</div>
                      <p className="text-sm font-bold text-slate-900 mt-1">
                        "Accogliere, formare e orientare tra esperienza ed innovazione."
                      </p>
                      <ul className="text-xs text-slate-600 mt-3 space-y-1.5">
                        <li>1) Valorizzare le eccellenze e contrastare la dispersione scolastica</li>
                        <li>2) Incentivare la didattica laboratoriale e compiti di realtà</li>
                        <li>3) Favorire l'accoglienza di studenti e famiglie</li>
                        <li>4) Continuità educativa con la Scuola Media e l'Università</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Page 16: Reti & Dove Siamo */}
                {currentPage === 16 && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Pagina 16 del PDF</span>
                      <h3 className="text-2xl font-extrabold text-slate-900 font-display">Reti, Partner e Dove Siamo</h3>
                      <p className="text-sm text-slate-600 mt-1">Le nostre coordinate e i progetti europei.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>Sede Centrale</span>
                        </div>
                        <div className="text-slate-600">Via Quarantola, 6 - Gragnano (NA)</div>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>Seconda Sede</span>
                        </div>
                        <div className="text-slate-600">Via Castellammare, 191 - Gragnano (NA)</div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <strong>Contatti Istituzionali:</strong>
                        <div>Sito Web: <span className="underline font-semibold">{SCHOOL_INFO.website}</span></div>
                        <div>Email: {SCHOOL_INFO.email} · Tel: {SCHOOL_INFO.phone}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Progress Bar & Flip Controls */}
              <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none rounded-lg border border-slate-300 shadow-xs flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Precedente</span>
                </button>

                <div className="hidden sm:flex items-center gap-1">
                  {BROCHURE_PAGES.map((p) => (
                    <button
                      key={p.pageNumber}
                      onClick={() => setCurrentPage(p.pageNumber)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentPage === p.pageNumber
                          ? 'w-6 bg-blue-700'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      title={`Vai a pag. ${p.pageNumber}`}
                      aria-label={`Vai a pag. ${p.pageNumber}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 disabled:opacity-40 disabled:pointer-events-none rounded-lg shadow-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>Successiva</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* View Mode: Grid (All 16 pages) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {BROCHURE_PAGES.map((page) => (
              <div
                key={page.pageNumber}
                onClick={() => {
                  setCurrentPage(page.pageNumber);
                  setViewMode('reader');
                }}
                className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-bold text-slate-700">Pagina {page.pageNumber}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      {page.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors font-display line-clamp-1">
                    {page.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                    {page.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-3 mt-3 leading-relaxed">
                    {page.content}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-blue-700">
                  <span>Apri nel lettore</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
