
import React, { useState, useEffect } from 'react';
import { Layers, FileText, BookOpen, Link as LinkIcon, Download, Clock, Star, CheckCircle } from 'lucide-react';
import { Subject, Resource } from '../../types';

interface Props {
  subject: Subject;
  resources: Resource[];
  onBack: () => void;
}

export const SubjectDetail: React.FC<Props> = ({ subject, resources, onBack }) => {
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`progress_${subject.id}`);
    if (saved) setCompletedModules(JSON.parse(saved));
  }, [subject.id]);

  const toggleModule = (id: string) => {
    const next = completedModules.includes(id) 
      ? completedModules.filter(m => m !== id)
      : [...completedModules, id];
    setCompletedModules(next);
    localStorage.setItem(`progress_${subject.id}`, JSON.stringify(next));
  };

  const progress = Math.round((completedModules.length / subject.objectives.length) * 100);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
      <button 
        onClick={onBack}
        className="text-sm text-brand-600 font-bold hover:text-brand-700 flex items-center gap-1 transition-colors"
      >
        ← Back to Dashboard
      </button>

      <div className="bg-gradient-to-br from-brand-600 to-indigo-700 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold mb-2 border border-white/10">
                {subject.code}
              </span>
              <h1 className="text-3xl font-bold mb-2">{subject.name}</h1>
              <p className="mt-2 text-indigo-100 max-w-2xl leading-relaxed">{subject.description}</p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-bold">{subject.credits} Credits</span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-200 mb-1">Overall Progress</p>
                <div className="flex items-center gap-2">
                   <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                   </div>
                   <span className="text-xs font-bold">{progress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
            <Layers className="w-5 h-5 text-brand-600" />
            Syllabus Mastery
          </h3>
          <div className="space-y-4">
            {subject.objectives.map((co) => (
              <div 
                key={co.id} 
                onClick={() => toggleModule(co.id)}
                className={`flex gap-4 group p-3 rounded-xl transition-all cursor-pointer border ${
                  completedModules.includes(co.id) ? 'bg-green-50/50 border-green-100' : 'hover:bg-slate-50 border-transparent'
                }`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl text-xs font-bold flex items-center justify-center transition-colors border ${
                  completedModules.includes(co.id) 
                    ? 'bg-green-100 text-green-700 border-green-200' 
                    : 'bg-slate-50 text-slate-500 border-slate-100 group-hover:bg-brand-50 group-hover:text-brand-600'
                }`}>
                  {completedModules.includes(co.id) ? <CheckCircle className="w-6 h-6" /> : co.id}
                </div>
                <div>
                  <p className={`text-sm leading-relaxed pt-1 font-medium ${completedModules.includes(co.id) ? 'text-green-800' : 'text-slate-600'}`}>
                    {co.description}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">
                    {completedModules.includes(co.id) ? 'Completed' : 'Click to mark as done'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-fit">
           <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 pb-3 border-b border-slate-100">
            <FileText className="w-5 h-5 text-brand-600" />
            Subject Resources
          </h3>
          <div className="space-y-3">
            {resources.length > 0 ? (
              resources.map(res => (
                <div key={res.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      res.type === 'PDF' ? 'bg-red-100 text-red-600' :
                      res.type === 'Mind Map' ? 'bg-emerald-100 text-emerald-600' :
                      res.type === 'Study Note' ? 'bg-brand-100 text-brand-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {res.type === 'PDF' ? <FileText className="w-5 h-5" /> : 
                       res.type === 'Link' ? <LinkIcon className="w-5 h-5" /> :
                       <BookOpen className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 group-hover:text-brand-700">{res.title}</p>
                      <p className="text-xs text-slate-500 font-medium">{res.type}</p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-brand-600 hover:bg-white p-2 rounded-full transition-all">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                 <Clock className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                 <p className="text-slate-400 text-sm italic">No specific resources found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
