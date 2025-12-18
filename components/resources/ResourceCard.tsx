import React from 'react';
import { FileText, Link as LinkIcon, Video, Download, Map, FileSpreadsheet, Book } from 'lucide-react';
import { Resource } from '../../types';

interface Props {
  resource: Resource;
  onOpen?: (res: Resource) => void;
}

export const ResourceCard: React.FC<Props> = ({ resource, onOpen }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'PDF': return <FileText className="w-5 h-5 text-red-500" />;
      case 'Video': return <Video className="w-5 h-5 text-purple-500" />;
      case 'Mind Map': return <Map className="w-5 h-5 text-green-500" />;
      case 'Cheat Sheet': return <FileSpreadsheet className="w-5 h-5 text-orange-500" />;
      case 'Study Note': return <Book className="w-5 h-5 text-brand-500" />;
      default: return <LinkIcon className="w-5 h-5 text-blue-500" />;
    }
  };

  const getBadgeColor = () => {
    switch (resource.type) {
      case 'PDF': return 'bg-red-50 text-red-700 border-red-100';
      case 'Video': return 'bg-purple-50 text-purple-700 border-purple-100';
      case 'Mind Map': return 'bg-green-50 text-green-700 border-green-100';
      case 'Cheat Sheet': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'Study Note': return 'bg-brand-50 text-brand-700 border-brand-100';
      default: return 'bg-blue-50 text-blue-700 border-blue-100';
    }
  };

  const handleClick = () => {
    if (onOpen && resource.markdownContent) {
      onOpen(resource);
    } else {
      // Allow default link behavior or mock alert if no URL
      if(resource.url && resource.url !== '#') window.open(resource.url, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col h-full group cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between items-start mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getBadgeColor().split(' ')[0]}`}>
          {getIcon()}
        </div>
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${getBadgeColor()}`}>
          {resource.type}
        </span>
      </div>
      
      <h3 className="font-bold text-slate-800 mb-1 group-hover:text-brand-600 transition-colors">{resource.title}</h3>
      <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1 leading-relaxed">{resource.description}</p>
      
      <button className="w-full mt-auto flex items-center justify-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 py-2 rounded-lg group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
        {resource.markdownContent ? <Book className="w-3 h-3" /> : <Download className="w-3 h-3" />}
        {resource.markdownContent ? 'Read Now' : 'Access Resource'}
      </button>
    </div>
  );
};