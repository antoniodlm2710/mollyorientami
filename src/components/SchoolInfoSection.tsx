import React from 'react';
import { 
  MapPin, Phone, Mail, Globe, Award, Calendar, CheckCircle2, 
  ExternalLink, Building2, ShieldCheck, Heart 
} from 'lucide-react';
import { SCHOOL_INFO, CERTIFICATIONS } from '../data/schoolData';

export const SchoolInfoSection: React.FC = () => {
  return (
    <section id="sedi" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 tracking-wider uppercase mb-1">
            <Building2 className="w-4 h-4" />
            <span>Campus, Certificazioni & Contatti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Dove Siamo & Strutture dell'Istituto
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            L'<strong>I.I.S. Don Lorenzo Milani</strong> accoglie gli studenti in due moderne sedi a Gragnano dotate di laboratori scientifici e informatici di ultima generazione, auditorium polifunzionale e palestre.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SCHOOL_INFO.locations.map((loc, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wide">
                    {loc.type}
                  </span>
                  <span className="text-xs text-slate-400">Gragnano (NA)</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                  <span>{loc.address}</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {loc.city}
                </p>

                <p className="text-xs text-slate-600 mt-4 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {loc.features}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address + ', ' + loc.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5"
                >
                  <span>Indicazioni stradali</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {idx === 0 && (
                  <span className="text-[11px] text-slate-500 font-medium">
                    Sede uffici di Segreteria e Presidenza
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-12">
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Standard Internazionali</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display">
              Certificazioni Conseguibili in Sede
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Docenti qualificati e percorsi formativi mirati per il conseguimento di titoli validi in tutta Europa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">{cert.language}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                      {cert.badge}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {cert.name}
                  </h4>
                  <div className="text-[11px] font-semibold text-blue-700 mt-1">
                    {cert.levels}
                  </div>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/60 text-[10px] text-slate-400 font-medium">
                  {cert.recognition}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact and Secretariat Hours Bar */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Direct Contacts */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Recapiti Istituzionali
              </h4>
              <div className="space-y-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <a href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white font-semibold">
                    {SCHOOL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white font-mono">
                    {SCHOOL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <a href={SCHOOL_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 underline font-medium">
                    www.donmilanigragnano.edu.it
                  </a>
                </div>
              </div>
            </div>

            {/* Public Opening Hours */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Orari Ricevimento Segreteria
              </h4>
              <div className="space-y-2 text-xs text-slate-200">
                <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                  <span className="font-semibold text-amber-300">Lun, Mer e Sabato:</span>
                  <div className="text-sm font-bold mt-0.5">08:30 – 11:30</div>
                </div>
                <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                  <span className="font-semibold text-amber-300">Martedì e Giovedì:</span>
                  <div className="text-sm font-bold mt-0.5">14:30 – 17:00</div>
                </div>
              </div>
            </div>

            {/* Quick Link to MIM Portal */}
            <div className="flex flex-col justify-between space-y-3">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Pronto per l'Iscrizione?
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Inoltra la domanda di iscrizione online tramite la piattaforma ministeriale dedicata.
                </p>
              </div>

              <a
                href={SCHOOL_INFO.mimEnrollmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs inline-flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
              >
                <span>Accedi a Iscrizioni Online MIM</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
