import React, { useRef, useEffect } from 'react';
import { Send, Wifi, Sparkles, User, Bot } from 'lucide-react';
import { ChatMessage } from '../../types';

interface Props {
  messages: ChatMessage[];
  input: string;
  isTyping: boolean;
  onInputChange: (val: string) => void;
  onSend: () => void;
}

export const BotChat: React.FC<Props> = ({ messages, input, isTyping, onInputChange, onSend }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 && (
           <div className="text-center text-slate-400 mt-20 animate-in fade-in zoom-in duration-500">
             <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-brand-300" />
             </div>
             <p className="font-medium">Start a conversation with K-Bot</p>
             <p className="text-sm opacity-70 mt-1">Ask definitions, quotes, or math facts</p>
           </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-in slide-in-from-bottom-2 duration-300`}
          >
            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${
              msg.sender === 'user' 
                ? 'bg-slate-200 border-white shadow-sm' 
                : 'bg-brand-600 border-brand-200 shadow-brand-200 shadow-md'
            }`}>
              {msg.sender === 'user' ? <User className="w-5 h-5 text-slate-500" /> : <Bot className="w-5 h-5 text-white" />}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-[80%] p-5 rounded-2xl text-sm md:text-base shadow-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-white text-slate-800 rounded-tr-none border border-slate-100'
                  : 'bg-brand-600 text-white rounded-tl-none shadow-brand-200'
              } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
            >
              <div className="whitespace-pre-wrap">
                {msg.text.split('\n').map((line, i) => (
                  <p key={i} className="mb-1 min-h-[1em] last:mb-0">{line}</p>
                ))}
              </div>
              <div className={`text-[10px] mt-2 text-right opacity-60 font-medium ${msg.sender === 'user' ? 'text-slate-400' : 'text-blue-100'}`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shrink-0">
               <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl rounded-tl-none shadow-sm">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-brand-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-slate-200/60 z-10">
        <div className="flex gap-2 items-end max-w-4xl mx-auto">
          <div className="flex-1 relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSend()}
              placeholder="Ask anything..."
              className="w-full bg-slate-100 border-none rounded-2xl px-5 py-4 pr-12 text-sm focus:bg-white focus:ring-2 focus:ring-brand-500/20 transition-all shadow-inner"
            />
             <div className="absolute right-4 bottom-4 text-slate-400 group-hover:text-brand-500 transition-colors" title="Connected">
                <Wifi className="w-4 h-4" />
             </div>
          </div>
          <button
            onClick={onSend}
            disabled={!input.trim() || isTyping}
            className="bg-brand-600 hover:bg-brand-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white p-4 rounded-2xl transition-all shadow-lg shadow-brand-200 active:scale-95 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};