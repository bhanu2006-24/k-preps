
import React from 'react';
import { ChevronRight, BookOpen, Layers } from 'lucide-react';
import { Subject } from '../../types';

interface Props {
  subject: Subject;
  onClick: () => void;
}

export const SubjectCard: React.FC<Props> = ({ subject, onClick }) => {
  // Mock progress for consistency
  const progress = Math.floor(Math.random() * 40) + 10;

  return (
    <div 
      onClick={onClick}
      className="group glass-card rounded-[2.5rem] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden border border-slate-100/50"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/5 rounded-bl-[120px] -mr-10 -mt-10 transition-transform group-hover:scale-125 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <span className="text-[10px] font-black text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full border border-brand-100 tracking-widest uppercase">
            {subject.code}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-brand-600 group-hover:bg-brand-50 group-hover:border-brand-200 transition-all shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        <h3 className="text-2xl font-display font-black text-slate-900 mb-3 group-hover:text-brand-600 transition-colors leading-tight">
          {subject.name}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2 mb-10 leading-relaxed font-medium">
          {subject.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mastery</p>
                <div className="flex items-center gap-2">
                    <span className="text-xl font-display font-bold text-slate-800">{progress}%</span>
                </div>
            </div>
            <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Modules</p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                    <Layers className="w-3.5 h-3.5" />
                    {subject.objectives.length} Units
                </div>
            </div>
          </div>
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-slate-900 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${progress}%` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-indigo-500 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
