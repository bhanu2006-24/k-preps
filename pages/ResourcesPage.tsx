import React, { useState, useEffect } from 'react';
import { Search, Filter, FolderOpen, X, BookOpen, Layers, Printer, List, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { resources, subjects } from '../data/index';
import { ResourceCard } from '../components/resources/ResourceCard';
import { ResourceType, Resource } from '../types';
import { processMathContent } from '../services/mathService';
import { userService } from '../services/userService';
import { PDFReader } from '../components/PDFReader';

export const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<ResourceType | 'All'>('All');
  const [readingResource, setReadingResource] = useState<Resource | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || res.subjectId === selectedSubject;
    const matchesModule = selectedModule === 'all' || (res.moduleId && res.moduleId === selectedModule) || (!res.moduleId);
    const matchesType = selectedType === 'All' || res.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesType && matchesModule;
  });

  const types: (ResourceType | 'All')[] = ['All', 'Study Note', 'Cheat Sheet', 'PDF', 'Mind Map', 'Video', 'Link'];
  const activeSubject = subjects.find(s => s.id === selectedSubject);

  // --- Advanced Reader Component ---
  const ReaderOverlay = ({ resource, onClose }: { resource: Resource; onClose: () => void }) => {
     const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

     useEffect(() => {
       if (resource.markdownContent) {
         const lines = resource.markdownContent.split('\n');
         const newToc = lines
           .filter(line => line.startsWith('#'))
           .map((line, index) => ({
             id: `header-${index}`,
             text: line.replace(/#+\s/, ''),
             level: (line.match(/#/g) || []).length
           }));
         setToc(newToc);
       }
     }, [resource]);

     useEffect(() => {
        const startTime = Date.now();
        return () => {
            const date = new Date();
            const endTime = date.getTime();
            const minutes = (endTime - startTime) / 60000;
            if (minutes > 0.5) {
                userService.recordActivity(Math.ceil(minutes));
            }
        };
     }, [resource]);

     const handlePrint = () => {
       window.print();
     };

     return (
       <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in slide-in-from-bottom-5">
         {/* Reader Header */}
         <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-10 print:hidden">
           <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${resource.type === 'Cheat Sheet' ? 'bg-orange-100 text-orange-600' : 'bg-brand-100 text-brand-600'}`}>
                 <BookOpen className="w-5 h-5" />
              </div>
              <div>
                 <h2 className="font-bold text-slate-900 leading-tight">{resource.title}</h2>
                 <p className="text-xs text-slate-500">{resource.type} • {resource.subjectId}</p>
              </div>
           </div>
           <div className="flex items-center gap-2">
             <button onClick={handlePrint} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors hidden md:block" title="Print Resource">
               <Printer className="w-5 h-5" />
             </button>
             <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-red-500">
               <X className="w-6 h-6" />
             </button>
           </div>
         </div>

         <div className="flex flex-1 overflow-hidden">
           {/* Sidebar TOC (Desktop) */}
           {toc.length > 0 && (
             <div className="hidden lg:block w-64 border-r border-slate-100 bg-slate-50/50 overflow-y-auto p-6 print:hidden">
               <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                 <List className="w-4 h-4" /> Contents
               </h3>
               <nav className="space-y-1">
                 {toc.map((item, idx) => (
                   <a 
                     key={idx}
                     href={`#header-${idx}`} 
                     onClick={(e) => {
                       e.preventDefault();
                       document.getElementById(`header-${idx}`)?.scrollIntoView({ behavior: 'smooth' });
                     }}
                     className={`block text-sm py-1.5 px-2 rounded-lg transition-colors hover:bg-slate-200/50 ${item.level === 1 ? 'font-bold text-slate-800' : 'pl-4 text-slate-600'}`}
                   >
                     {item.text}
                   </a>
                 ))}
               </nav>
             </div>
           )}

           {/* Content Area */}
           <div className="flex-1 overflow-y-auto bg-white" id="reader-content">
              <div className="max-w-3xl mx-auto p-6 md:p-12 pb-32">
                <article className="prose prose-slate prose-lg max-w-none">
                  {resource.markdownContent?.split('\n').map((line, i) => {
                    // Headers
                    if (line.startsWith('# ')) {
                      const idx = toc.findIndex(t => t.text === line.replace('# ', ''));
                      return <h1 id={`header-${idx}`} key={i} className="text-3xl font-display font-bold text-slate-900 mb-6 mt-8 pb-4 border-b border-slate-100">{line.replace('# ', '')}</h1>;
                    }
                    if (line.startsWith('## ')) {
                      const idx = toc.findIndex(t => t.text === line.replace('## ', ''));
                      return <h2 id={`header-${idx}`} key={i} className="text-2xl font-display font-bold text-slate-800 mb-4 mt-8 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-brand-500 rounded-full inline-block"></span>
                        {line.replace('## ', '')}
                      </h2>;
                    }
                    
                    // List Item with Bold Title (Common in notes)
                    if (line.startsWith('- **')) {
                        const parts = line.replace('- ', '').split('**:');
                        const title = parts[0].replace('**', '');
                        const content = parts[1] ? parts[1] : '';
                        const processedHtml = processMathContent(content);
                        
                        return (
                            <li key={i} className="ml-4 list-disc text-slate-700 mb-2 pl-2">
                                <strong className="text-slate-900 font-semibold">{title}</strong>: 
                                <span dangerouslySetInnerHTML={{ __html: processedHtml }} />
                            </li>
                        );
                    }

                    // Standard List Item
                    if (line.startsWith('- ')) {
                        const content = line.replace('- ', '');
                        const processedHtml = processMathContent(content);
                        return (
                             <li key={i} className="ml-4 list-disc text-slate-700 mb-1 pl-2 marker:text-brand-400">
                                <span dangerouslySetInnerHTML={{ __html: processedHtml }} />
                             </li>
                        );
                    }

                    // Tables (Basic support)
                    if (line.startsWith('|')) {
                         const cells = line.split('|').filter(c => c.trim() !== '');
                         if(line.includes('---')) return null;
                         return (
                             <div key={i} className="flex border-b border-slate-100 py-2 last:border-0 hover:bg-slate-50 transition-colors">
                                 {cells.map((c, ci) => (
                                    <div key={ci} className="flex-1 px-2 text-sm text-slate-700">
                                       <span dangerouslySetInnerHTML={{ __html: processMathContent(c) }} />
                                    </div>
                                 ))}
                             </div>
                         )
                    }

                    if (line.trim() === '') return <br key={i} />;
                    
                    // Standard Paragraph (with math support)
                    return <p key={i} className="text-slate-600 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: processMathContent(line) }} />;
                  })}
                </article>

                <div className="mt-20 pt-10 border-t border-slate-100 text-center text-slate-400 text-sm print:hidden">
                   <p>End of Resource</p>
                   <button 
                     onClick={() => document.getElementById('reader-content')?.scrollTo({ top: 0, behavior: 'smooth'})}
                     className="mt-4 inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium"
                   >
                     <ArrowUp className="w-4 h-4" /> Back to Top
                   </button>
                </div>
              </div>
           </div>
         </div>
         
         <style>{`
           @media print {
             .print\\:hidden { display: none !important; }
             body { background: white; }
             #reader-content { overflow: visible; }
           }
         `}</style>
       </div>
     );
  };

  if (readingResource) {
    if (readingResource.type === 'PDF') {
        return <PDFReader resource={readingResource} onClose={() => setReadingResource(null)} />;
    }
    return <ReaderOverlay resource={readingResource} onClose={() => setReadingResource(null)} />;
  }

  return (
    <div className="flex flex-col h-full space-y-6 animate-in fade-in duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-2">
            <FolderOpen className="w-7 h-7 text-brand-600" />
            Library & Resources
          </h1>
          <p className="text-slate-500 text-sm">Access notes, PYQs, and cheat sheets.</p>
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Collapsible Filters */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
        <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
            <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-bold text-slate-600 uppercase tracking-wide">Filters</span>
            </div>
            {isFiltersOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>
        
        {isFiltersOpen && (
            <div className="p-4 border-t border-slate-100 flex flex-col gap-4 animate-in slide-in-from-top-2">
                <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                    Subject
                    </label>
                    <select 
                    value={selectedSubject} 
                    onChange={(e) => { setSelectedSubject(e.target.value); setSelectedModule('all'); }}
                    className="w-full p-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-brand-500"
                    >
                    <option value="all">All Subjects</option>
                    {subjects.map(sub => (
                        <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                    </select>
                </div>
                
                <div className={`flex-1 space-y-2 transition-all ${activeSubject ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                    <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Module
                    </label>
                    <select 
                        value={selectedModule} 
                        onChange={(e) => setSelectedModule(e.target.value)}
                        className="w-full p-2 text-sm border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-brand-500"
                        disabled={!activeSubject}
                    >
                        <option value="all">All Modules</option>
                        {activeSubject?.objectives.map(obj => (
                        <option key={obj.id} value={obj.id}>{obj.id}</option>
                        ))}
                    </select>
                </div>
                </div>

                <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase">File Type</label>
                <div className="flex flex-wrap gap-2">
                    {types.map(t => (
                    <button
                        key={t}
                        onClick={() => setSelectedType(t)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedType === t 
                            ? 'bg-brand-600 text-white shadow-md' 
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                    >
                        {t}
                    </button>
                    ))}
                </div>
                </div>
            </div>
        )}
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto">
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-4">
            {filteredResources.map(res => (
              <ResourceCard 
                key={res.id} 
                resource={res} 
                onOpen={setReadingResource}
              />
            ))}
          </div>
        ) : (
          <div className="h-60 flex flex-col items-center justify-center text-slate-400">
            <FolderOpen className="w-16 h-16 mb-4 opacity-30" />
            <p className="font-medium">No resources found matching your filters.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedSubject('all'); setSelectedType('All'); setSelectedModule('all');}}
              className="mt-2 text-brand-600 hover:underline text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};