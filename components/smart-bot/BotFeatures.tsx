import React from 'react';
import { Book, Quote, Calculator, Globe, Search, MessageSquare } from 'lucide-react';
import { BotFeature } from '../../types';

interface Props {
  onSelect: (prompt: string) => void;
}

const features: BotFeature[] = [
  { id: 'def', title: 'Define Terms', description: 'Instant dictionary definitions', icon: Book, color: 'bg-blue-500', promptPrefix: 'Define ' },
  { id: 'wiki', title: 'Encyclopedia', description: 'Summaries from Wikipedia', icon: Globe, color: 'bg-indigo-500', promptPrefix: 'Explain ' },
  { id: 'quote', title: 'Daily Motivation', description: 'Get inspired with quotes', icon: Quote, color: 'bg-orange-500', promptPrefix: 'Give me a quote' },
  { id: 'math', title: 'Math Facts', description: 'Fun numerical trivia', icon: Calculator, color: 'bg-green-500', promptPrefix: 'Tell me a math fact' },
  { id: 'syl', title: 'Syllabus Search', description: 'Find COs and Topics', icon: Search, color: 'bg-purple-500', promptPrefix: 'What is CO-1 of ' },
  { id: 'chat', title: 'Just Chat', description: 'Ask me anything', icon: MessageSquare, color: 'bg-slate-500', promptPrefix: 'Hi' },
];

export const BotFeatures: React.FC<Props> = ({ onSelect }) => (
  <div className="p-4 grid grid-cols-2 gap-4">
    {features.map((f) => (
      <button
        key={f.id}
        onClick={() => onSelect(f.promptPrefix)}
        className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-brand-300 transition-all text-left flex flex-col gap-3 group"
      >
        <div className={`w-10 h-10 rounded-lg ${f.color} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
          <f.icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-sm">{f.title}</h3>
          <p className="text-xs text-slate-500 leading-tight mt-1">{f.description}</p>
        </div>
      </button>
    ))}
  </div>
);