import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { Resource } from '../types';

interface PDFReaderProps {
  resource: Resource;
  onClose: () => void;
}

export const PDFReader: React.FC<PDFReaderProps> = ({ resource, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-300">
      <div className="flex items-center justify-between p-4 bg-slate-900/50 text-white border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div>
             <h2 className="font-bold text-lg leading-tight">{resource.title}</h2>
             <p className="text-xs text-slate-400">{resource.subjectId}</p>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 w-full bg-slate-900 relative">
        <iframe 
          src={resource.url} 
          className="w-full h-full border-none"
          title={resource.title}
        />
      </div>
    </div>
  );
};
