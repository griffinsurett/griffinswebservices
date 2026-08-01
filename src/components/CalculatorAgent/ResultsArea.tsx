import React, { useState } from 'react';
import { 
  FaCheckCircle, 
  FaFileCode, 
  FaArrowLeft, 
  FaDollarSign, 
  FaExternalLinkAlt, 
  FaInfoCircle, 
  FaChevronDown, 
  FaChevronUp 
} from 'react-icons/fa';
import type { GenerateResponse } from './types';

interface ResultsAreaProps {
  apiResult: GenerateResponse;
  answers: Record<string, string>;
  email: string;
  onReset: () => void;
}

export const ResultsArea: React.FC<ResultsAreaProps> = ({ apiResult, answers, email, onReset }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showLineItems, setShowLineItems] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  const { estimated_price, wireframes } = apiResult;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: estimated_price.currency || 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const oneTimeCostText = `${formatCurrency(estimated_price.min)} - ${formatCurrency(estimated_price.max)}`;
  const hasMonthly = estimated_price.monthly_max > 0;
  const monthlyCostText = hasMonthly
    ? `${formatCurrency(estimated_price.monthly_min)} - ${formatCurrency(estimated_price.monthly_max)}/month`
    : null;

  const activeWireframe = wireframes && wireframes.length > 0 ? wireframes[activeTab] : null;

  return (
    <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full h-full p-4 md:p-8 overflow-y-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
        >
          <FaArrowLeft /> Start New Calculation
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            ✓ Estimate Verified
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 text-emerald-400 mb-4 border border-emerald-500/30">
          <FaCheckCircle className="text-3xl" />
        </div>
        <h1 className="text-3xl md:text-5xl font-header font-bold tracking-tight text-[var(--color-heading)] mb-3">
          Your Customized Scope & Wireframes
        </h1>
        <p className="text-[var(--color-muted)] text-base md:text-lg max-w-2xl mx-auto">
          Here is your tailored project cost estimate and interactive site wireframes.
        </p>
      </div>

      {/* Investment Overview Card - Spacious & Fully Unclipped */}
      <div className="bg-gradient-to-br from-[var(--color-primary)]/15 via-[var(--color-bg2)] to-[var(--color-accent)]/15 border border-[var(--color-primary)]/40 rounded-3xl p-6 md:p-10 mb-8 backdrop-blur-md shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-bold uppercase tracking-wider mb-2">
              <FaDollarSign /> Total Estimated Investment
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-heading)]">Bespoke Scope Estimate</h3>
            <p className="text-[var(--color-muted)] text-sm mt-1 max-w-md">
              Estimated one-time build cost based on your selected requirements.
            </p>
          </div>

          <div className="text-left lg:text-right py-2">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-indigo-300 to-[var(--color-accent)] leading-tight tracking-tight drop-shadow-md py-1">
              {oneTimeCostText}
            </div>
            <div className="text-xs text-[var(--color-muted)] font-medium mt-1">One-time project implementation cost</div>
            
            {hasMonthly && (
              <div className="mt-2 text-sm font-bold text-emerald-400">
                + {monthlyCostText} <span className="text-xs text-[var(--color-muted)] font-normal">(ongoing support & maintenance)</span>
              </div>
            )}
          </div>
        </div>

        {estimated_price.requires_discovery_call && (
          <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-300 text-sm">
            <FaInfoCircle className="text-lg shrink-0" />
            <span>This scope includes custom functionality. A brief discovery call is recommended to finalize exact technical specifications.</span>
          </div>
        )}

        {/* Line Items Accordion */}
        {estimated_price.line_items && estimated_price.line_items.length > 0 && (
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <button
              onClick={() => setShowLineItems(!showLineItems)}
              className="flex items-center justify-between w-full text-sm font-semibold text-[var(--color-heading)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              <span>View Estimated Itemized Breakdown ({estimated_price.line_items.length} items)</span>
              {showLineItems ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {showLineItems && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 animate-in fade-in duration-300">
                {estimated_price.line_items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-sm">
                    <span className="text-[var(--color-text)] font-medium">{item.label}</span>
                    <span className="font-bold text-[var(--color-primary)]">
                      {formatCurrency(item.amount)}{item.recurring ? '/mo' : ''}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Wireframe Viewer Section */}
      <div className="space-y-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-heading)] flex items-center gap-3">
              <FaFileCode className="text-[var(--color-primary)]" /> Custom Wireframe Concepts
            </h3>
            <p className="text-[var(--color-muted)] text-sm mt-1">
              Interactive layout concepts designed specifically for your pages.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--color-bg2)] p-1 rounded-xl border border-[var(--color-border)] self-start md:self-auto">
            <button
              onClick={() => setViewMode('preview')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'preview' 
                  ? 'bg-[var(--color-primary)] text-white shadow-sm' 
                  : 'text-[var(--color-muted)] hover:text-[var(--color-heading)]'
              }`}
            >
              Interactive Preview
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'code' 
                  ? 'bg-[var(--color-primary)] text-white shadow-sm' 
                  : 'text-[var(--color-muted)] hover:text-[var(--color-heading)]'
              }`}
            >
              View HTML Code
            </button>
          </div>
        </div>

        {/* Page Tabs */}
        {wireframes && wireframes.length > 0 ? (
          <div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[var(--color-border)]">
              {wireframes.map((wf, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-t-xl text-sm font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                    activeTab === idx
                      ? 'border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-heading)] hover:bg-[var(--color-bg2)]'
                  }`}
                >
                  📄 {wf.page} Layout
                </button>
              ))}
            </div>

            {/* Wireframe Content Container */}
            {activeWireframe && (
              <div className="mt-4 bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-lg">
                <div className="px-4 py-3 bg-[var(--color-bg)] border-b border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-muted)]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    <span className="ml-2 font-mono">{activeWireframe.page} Layout</span>
                  </div>
                  
                  {viewMode === 'preview' && (
                    <button
                      onClick={() => {
                        const win = window.open();
                        if (win) {
                          win.document.write(activeWireframe.html);
                          win.document.close();
                        }
                      }}
                      className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                      title="Open in new window"
                    >
                      <FaExternalLinkAlt /> Full Screen
                    </button>
                  )}
                </div>

                {viewMode === 'preview' ? (
                  <iframe
                    srcDoc={activeWireframe.html}
                    sandbox=""
                    title={`${activeWireframe.page} wireframe`}
                    loading="lazy"
                    className="w-full h-[650px] border-0 bg-white"
                  />
                ) : (
                  <pre className="p-6 text-xs font-mono text-[var(--color-heading)] bg-slate-950 overflow-x-auto h-[650px]">
                    <code>{activeWireframe.html}</code>
                  </pre>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center text-[var(--color-muted)] bg-[var(--color-bg2)] rounded-2xl border border-[var(--color-border)]">
            No wireframes returned for this scope.
          </div>
        )}
      </div>
    </div>
  );
};
