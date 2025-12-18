
import React, { useState } from 'react';
import { Bot, Sparkles, LayoutGrid, MessageCircle, Database } from 'lucide-react';
import { ChatMessage } from '../types';
import { getSmartResponse } from '../services/botService';
import { BotChat } from '../components/smart-bot/BotChat';
import { BotFeatures } from '../components/smart-bot/BotFeatures';

type Tab = 'CHAT' | 'FEATURES';

export const SmartBotPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('FEATURES');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim()) return;

    if (activeTab === 'FEATURES') setActiveTab('CHAT');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await getSmartResponse(textToSend);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: result.text,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Error searching library.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden relative">
      <div className="bg-slate-900 p-4 text-white flex items-center justify-between shadow-md z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-600 rounded-lg">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg leading-tight">Knowledge Engine</h2>
            <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-brand-500 rounded-full"></span>
              Offline Library Index
            </div>
          </div>
        </div>
        
        <div className="flex bg-white/10 p-1 rounded-lg">
           <button 
             onClick={() => setActiveTab('FEATURES')}
             className={`p-2 rounded-md transition-all ${activeTab === 'FEATURES' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'}`}
           >
             <LayoutGrid className="w-4 h-4" />
           </button>
           <button 
             onClick={() => setActiveTab('CHAT')}
             className={`p-2 rounded-md transition-all ${activeTab === 'CHAT' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-300 hover:text-white'}`}
           >
             <MessageCircle className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative">
        {activeTab === 'FEATURES' ? (
           <div className="h-full overflow-y-auto bg-slate-50">
             <div className="p-8 text-center">
               <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Sparkles className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-slate-800">Instant Study Reference</h3>
               <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">Access your definitions and formulas instantly from your library.</p>
             </div>
             <BotFeatures onSelect={(text) => {
               setInput(text);
               if (!text.endsWith(' ')) handleSend(text);
               else setActiveTab('CHAT');
             }} />
           </div>
        ) : (
           <div className="h-full flex flex-col">
             <div className="flex-1 overflow-hidden">
                <BotChat 
                  messages={messages} 
                  input={input} 
                  isTyping={isTyping} 
                  onInputChange={setInput} 
                  onSend={() => handleSend()} 
                />
             </div>
           </div>
        )}
      </div>
    </div>
  );
};
