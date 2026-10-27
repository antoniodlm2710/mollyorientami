/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MimBanner } from './components/MimBanner';
import { StudyPlansExplorer } from './components/StudyPlansExplorer';
import { BrochureViewer } from './components/BrochureViewer';
import { FilieraSection } from './components/FilieraSection';
import { DonMilaniValues } from './components/DonMilaniValues';
import { OrientationAssistant } from './components/OrientationAssistant';
import { SchoolInfoSection } from './components/SchoolInfoSection';
import { Footer } from './components/Footer';
import { CodeModal } from './components/CodeModal';
import { ExternalLink, Copy, Check, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['iscrizioni-mim', 'indirizzi', 'brochure', 'filiera', 'don-milani', 'quiz', 'sedi'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Header */}
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenBrochure={() => handleNavigate('brochure')}
          onOpenQuiz={() => handleNavigate('quiz')}
          onOpenCodeModal={() => setIsCodeModalOpen(true)}
        />

        {/* MIM Iscrizioni Online Dedicated Banner & Guide */}
        <MimBanner />

        {/* Interactive Study Plans & Timetables */}
        <StudyPlansExplorer />

        {/* 16-Page Digital PDF Brochure Viewer */}
        <BrochureViewer />

        {/* Filiera Formativa "4+2" (D.M. 256/2024) */}
        <FilieraSection />

        {/* Identity & Tribute to Don Lorenzo Milani */}
        <DonMilaniValues />

        {/* Molly Orientation Assistant & Quiz */}
        <OrientationAssistant />

        {/* Locations, Certifications & Contacts */}
        <SchoolInfoSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Quick Code Modal */}
      <CodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

      {/* Floating Quick Navigation & Direct MIM Shortcut */}
      <aside aria-label="Azioni rapide e scorciatoie" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-white text-slate-700 hover:text-slate-950 rounded-full shadow-lg border border-slate-200 transition-all hover:scale-105 cursor-pointer"
            title="Torna all'inizio"
            aria-label="Torna all'inizio della pagina"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCodeModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-lg border border-slate-700 transition-all cursor-pointer"
            title="Apri codici scuola"
          >
            <Copy className="w-3.5 h-3.5 text-amber-400" />
            <span>Codici Scuola</span>
          </button>

          <a
            href={SCHOOL_INFO.mimEnrollmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-extrabold rounded-xl shadow-xl transition-transform hover:scale-105 cursor-pointer border border-amber-500/30"
            title="Accedi a mim.gov.it/iscrizioni-online"
          >
            <span>Iscrizioni MIM</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>
    </div>
  );
}
