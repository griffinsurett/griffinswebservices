import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { FaWandMagicSparkles, FaCheck, FaHeadset } from 'react-icons/fa6';
import LottieLogo from '../Logo/LottieLogo';

interface SidebarProps {
  step: number;
  answers: Record<string, string>;
  showResults?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ step, answers, showResults }) => {
  const getFeatures = () => {
    const features: string[] = [];
    
    // Only show base features after they answer the first question
    if (answers['q_industry']) {
      features.push('Responsive Design', 'Basic SEO Setup');
      features.push(`${answers['q_industry'].split(' ')[0]} Industry Optimization`);
    }
    
    if (answers['q3']?.includes('Yes')) features.push('E-Commerce Functionality');
    if (answers['q5'] === 'Yes') features.push('Custom Content Management (CMS)');
    if (answers['q6']?.includes('Yes')) features.push('User Authentication System');
    if (answers['q7']?.includes('Advanced')) features.push('Advanced SEO Architecture');
    if (answers['q8']?.includes('help')) features.push('Professional Copywriting');
    if (answers['q9']?.includes('new logo')) features.push('Brand Identity Design');
    if (answers['q10']?.includes('High-end')) features.push('Premium Framer Motion Animations');
    return features;
  };

  const getProcessingText = () => {
    if (step === 0) return "Identifying industry standards...";
    if (step === 1) return "Analyzing regional data...";
    if (step === 2) return "Evaluating commerce requirements...";
    if (step === 3) return "Calculating structural complexity...";
    if (step === 4) return "Assessing content management...";
    if (step > 4 && step < 10) return "Cross-referencing feature costs...";
    return "Finalizing estimate parameters...";
  };

  return (
    <div className="hidden md:flex flex-col w-72 h-full border-r border-[var(--color-border)] bg-[var(--color-bg2)]/80 backdrop-blur-xl p-6 shadow-xl relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-10 relative z-10">
        <div className="flex items-center justify-center shrink-0">
          <LottieLogo autoplay loop />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-[var(--color-heading)] leading-tight">Griffin's Web</h1>
          <p className="text-xs font-medium text-[var(--color-muted)] uppercase tracking-widest">Services AI</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 relative z-10 pr-2 custom-scrollbar">
        {showResults ? (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3 px-1">Project Estimate</h2>
            
            <div className="mb-8 pl-1">
              <div className="flex items-center gap-2 mb-2 text-emerald-400">
                <FaCheckCircle className="text-lg shrink-0" />
                <div className="text-sm font-bold text-[var(--color-heading)] tracking-wide">
                  Analysis Complete
                </div>
              </div>
              <p className="text-xs text-emerald-400/90 font-medium">
                Bespoke estimate & wireframes generated
              </p>
            </div>

            {Object.keys(answers).length > 0 && (
              <>
                <h2 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3 px-1">Included Features</h2>
                <ul className="space-y-3">
                  {getFeatures().map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-heading)] animate-in slide-in-from-left-2" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                      <FaCheck className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : step >= 0 ? (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3 px-1">Project Estimate</h2>
            
            <div className="mb-8 pl-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-white to-white/30 shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-white to-white/30 shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-white to-white/30 shadow-[0_0_8px_rgba(255,255,255,0.5)] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <div className="text-sm font-bold text-[var(--color-heading)] tracking-wide">
                  Calculating...
                </div>
              </div>
              <p className="text-xs text-[var(--color-muted)] font-medium animate-pulse ml-[30px]">
                {getProcessingText()}
              </p>
            </div>

            {Object.keys(answers).length > 0 && (
              <>
                <h2 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3 px-1">Included Features</h2>
                <ul className="space-y-3">
                  {getFeatures().map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-heading)] animate-in slide-in-from-left-2" style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}>
                      <FaCheck className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in duration-500 opacity-50 text-center pt-10">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-[var(--color-border)] flex items-center justify-center mx-auto mb-3">
              <FaWandMagicSparkles className="text-[var(--color-muted)]" />
            </div>
            <p className="text-xs text-[var(--color-muted)] px-4">Start the analysis to see your live project estimate & features.</p>
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 relative z-10 flex justify-center pb-2">
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg)] border border-white/80 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all group shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          title="Support"
        >
          <FaHeadset className="text-sm group-hover:scale-110 transition-transform" /> 
          <span>Support</span>
        </a>
      </div>
    </div>
  );
};
