import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { ChatArea } from './ChatArea';
import { ResultsArea } from './ResultsArea';
import { FiMonitor } from 'react-icons/fi';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';
import type { GenerateResponse } from './types';
import { generateEstimate, mapAnswersToPayload } from './api';

import LottieLogo from '../Logo/LottieLogo';

const PROGRESS_STEPS = [
  'Analyzing business requirements & project scope...',
  'Calculating custom rate card estimate...',
  'Structuring page architecture & component layouts...',
  'Generating custom interactive wireframe concepts...',
  'Finalizing project estimate & live preview...',
];

interface CalculatorAgentProps {
  /** Rendered branding for the sidebar — pass the site's <Logo> from Astro. */
  logo?: React.ReactNode;
}

export default function CalculatorAgent({ logo }: CalculatorAgentProps = {}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [apiResult, setApiResult] = useState<GenerateResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [progressIndex, setProgressIndex] = useState(0);

  // Lifted state for live tracker
  const [step, setStep] = useState<-1 | number>(-1);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [userEmail, setUserEmail] = useState<string>('');

  // Cycle progress messages during generation
  useEffect(() => {
    if (!isGenerating) return;
    const interval = setInterval(() => {
      setProgressIndex((prev) => (prev + 1) % PROGRESS_STEPS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleGenerate = async (answers: Record<string, string>, email: string) => {
    setUserAnswers(answers);
    setUserEmail(email);
    setIsGenerating(true);
    setErrorMessage(null);
    setProgressIndex(0);

    const payload = mapAnswersToPayload(answers, email);

    try {
      const result = await generateEstimate(payload);
      setApiResult(result);
      setIsGenerating(false);
      setShowResults(true);
    } catch (err: any) {
      console.error('Generation Error:', err);
      setIsGenerating(false);
      setErrorMessage(
        err.message || 'Failed to generate estimate. Please try again or contact support.'
      );
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setApiResult(null);
    setErrorMessage(null);
    setUserAnswers({});
    setUserEmail('');
    setStep(-1);
  };

  return (
    <>
      {/* Mobile Fallback */}
      <div className="md:hidden flex flex-col items-center justify-center p-10 my-16 bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-3xl text-center shadow-lg mx-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-primary)]/20 blur-[80px] rounded-full pointer-events-none"></div>
        
        <div className="w-16 h-16 rounded-full bg-[var(--color-bg)] border border-[var(--color-primary)]/30 flex items-center justify-center mb-6 shadow-[0_0_15px_var(--color-primary)_inset] relative z-10">
          <FiMonitor className="text-2xl text-[var(--color-primary)]" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3 relative z-10">Desktop Recommended</h2>
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8 max-w-sm mx-auto relative z-10">
          The GWS AI Estimator & Wireframe tool is highly interactive and provides the best experience on a larger screen. Please switch to a desktop or tablet to build your project.
        </p>
        <a href="#contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold text-sm shadow-lg shadow-[var(--color-primary)]/20 hover:scale-105 transition-all relative z-10">
          Contact Us Directly
        </a>
      </div>

      {/* Desktop App */}
      <div className="hidden md:flex h-[750px] w-full max-w-7xl mx-auto bg-[var(--color-bg)] overflow-hidden font-body text-[var(--color-text)] border border-[var(--color-border)] rounded-3xl shadow-2xl my-12 relative z-10">
        <Sidebar step={step} answers={userAnswers} showResults={showResults} logo={logo} />
        
        <main className="flex-1 relative h-full flex flex-col overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-primary)]/25 blur-[120px] rounded-full pointer-events-none"></div>
          
          {isGenerating ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 animate-in fade-in duration-500 text-center">
              <div className="relative w-28 h-28 mb-8">
                <div className="absolute inset-0 rounded-full border-4 border-[var(--color-border)]"></div>
                <div className="absolute inset-0 rounded-full border-4 border-t-[var(--color-primary)] border-r-[var(--color-accent)] border-b-transparent border-l-transparent animate-spin"></div>
                <div className="absolute inset-3 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center backdrop-blur-sm p-2 overflow-hidden">
                  <LottieLogo 
                    autoplay 
                    loop 
                    mediaClasses="w-14 h-14 object-contain flex items-center justify-center"
                  />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-header font-bold text-[var(--color-heading)] mb-3">
                {PROGRESS_STEPS[progressIndex]}
              </h2>
              <p className="text-[var(--color-muted)] text-sm md:text-base max-w-md">
                Building your bespoke estimate and structural wireframes... This takes around 15–20 seconds.
              </p>
            </div>
          ) : errorMessage ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 text-red-400">
                <FaExclamationTriangle className="text-3xl" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-2">Connection Issue</h2>
              <p className="text-red-400 max-w-md mb-6">{errorMessage}</p>
              <button
                onClick={() => handleGenerate(userAnswers, userEmail)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <FaRedo /> Retry Request
              </button>
            </div>
          ) : showResults && apiResult ? (
            <ResultsArea apiResult={apiResult} answers={userAnswers} email={userEmail} onReset={handleReset} />
          ) : (
            <ChatArea 
              onGenerate={handleGenerate} 
              step={step} 
              setStep={setStep} 
              answers={userAnswers} 
              setAnswers={setUserAnswers} 
            />
          )}
        </main>
      </div>
    </>
  );
}
