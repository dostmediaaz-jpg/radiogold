import React, { useState, useRef, useEffect } from 'react';
import { askGeminiConsultant } from '../services/geminiService';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import Button from './Button';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Здравствуйте! Я онлайн-эксперт RadioGold. Помочь оценить деталь или узнать актуальные цены?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await askGeminiConsultant(userMsg);
    
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
            <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center justify-center w-14 h-14 bg-primary-600 rounded-full shadow-lg hover:bg-primary-500 transition-all hover:scale-110 focus:ring-4 focus:ring-primary-300"
            >
                <MessageSquare className="w-7 h-7 text-white" />
                <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-dark-800 text-white text-xs py-1 px-2 rounded opacity-90 whitespace-nowrap">
                    Онлайн оценка
                </span>
            </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-[350px] sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col max-h-[600px] h-[80vh] animate-fade-in-up">
          {/* Header */}
          <div className="bg-dark-900 p-4 rounded-t-2xl flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Эксперт RadioGold</h3>
                <p className="text-xs text-primary-400">На связи (AI)</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${msg.role === 'user' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary-600" />
                    <span className="text-xs text-gray-500">Печатает...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
            <div className="relative">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Например: Почем КМ зеленые?"
                    className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-gray-50"
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || loading}
                    className="absolute right-2 top-2 p-1.5 bg-primary-600 rounded-lg text-white hover:bg-primary-700 disabled:opacity-50 disabled:hover:bg-primary-600 transition-colors"
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeminiAssistant;