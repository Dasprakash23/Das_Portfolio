import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, MessageSquareCode } from 'lucide-react';
import { getAIResponse } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export const AskDasAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am Das's AI assistant. Ask me questions about his projects, skills, internship experience, or academic background. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  const suggestedQuestions = [
    "What projects has he built?",
    "What are his technical skills?",
    "Tell me about his AI internship.",
    "Has he won any hackathons?",
    "What is his CGPA and college?",
    "How can I contact him?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => chatInputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI delay
    setTimeout(() => {
      const responseText = getAIResponse(text);
      const botMessage: Message = {
        id: Math.random().toString(),
        sender: 'bot',
        text: responseText,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 850);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-cyber-accent2 to-cyber-accent border border-cyber-accent/40 rounded-full hover:scale-105 shadow-cyber-glow transition-all duration-300 group custom-glow-pulse"
          aria-label="Ask Das AI Chatbot"
        >
          <div className="absolute inset-0 rounded-full bg-cyber-accent animate-ping opacity-15" />
          <Sparkles className="w-6 h-6 text-cyber-bg group-hover:rotate-12 transition-transform duration-300" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel w-[350px] sm:w-[380px] h-[500px] rounded-2xl flex flex-col overflow-hidden shadow-cyber-glow-heavy border border-cyber-accent/30 animate-fade-in">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyber-accent2/20 to-cyber-accent/20 border-b border-cyber-border/40 flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-cyber-accent/15 border border-cyber-accent/30 rounded-xl">
                <Bot className="w-5 h-5 text-cyber-accent" />
              </div>
              <div>
                <h4 className="text-sm font-space font-extrabold text-white tracking-wide">Ask Das AI</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-cyber-accent font-semibold tracking-wider font-space uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-ping" />
                  Knowledge Base Mode
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/5 border border-transparent hover:border-cyber-border rounded-lg text-cyber-muted hover:text-white transition-all"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-cyber-accent2/10 border border-cyber-accent2/20 flex items-center justify-center shrink-0 mt-1">
                    <MessageSquareCode className="w-4 h-4 text-cyber-accent2" />
                  </div>
                )}
                
                <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-line ${
                  msg.sender === 'user' 
                    ? 'bg-cyber-accent/15 border border-cyber-accent/30 text-white rounded-tr-none' 
                    : 'bg-white/5 border border-cyber-border text-cyber-text/90 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* AI Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-cyber-accent2/10 border border-cyber-accent2/20 flex items-center justify-center shrink-0">
                  <MessageSquareCode className="w-4 h-4 text-cyber-accent2" />
                </div>
                <div className="bg-white/5 border border-cyber-border px-3.5 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions List */}
          <div className="px-4 py-2 border-t border-cyber-border/20 bg-cyber-bg/25">
            <span className="block text-[9px] font-bold text-cyber-muted uppercase tracking-wider mb-1.5 font-space">Suggested Questions:</span>
            <div className="flex flex-wrap gap-1.5 max-h-20 overflow-y-auto pr-1">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendMessage(q)}
                  className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-cyber-border hover:border-cyber-accent/40 text-cyber-muted hover:text-white transition-all text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Form Input */}
          <div className="p-3 border-t border-cyber-border/40 bg-cyber-bg flex items-center gap-2">
            <input 
              ref={chatInputRef}
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 bg-white/5 border border-cyber-border rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-cyber-accent/50 text-white placeholder-cyber-muted"
              placeholder="Ask about skills, projects, contact..."
            />
            <button 
              onClick={() => handleSendMessage(inputValue)}
              className="p-2.5 bg-cyber-accent hover:shadow-cyber-glow hover:bg-cyber-accent/90 text-cyber-bg rounded-xl transition-all"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
export default AskDasAI;
