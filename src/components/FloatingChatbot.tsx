"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, MessageCircle, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

const sampleResponses: { [key: string]: string } = {
  'hello': 'नमस्ते! How can I help you today?',
  'hi': 'नमस्ते! How can I help you today?',
  'll': 'Learner Licence (LL) is for 6 months. You can apply online after selecting your state.',
  'dl': 'Driving Licence (DL) can be applied 30 days after your LL is issued.',
  'fee': 'LL fee is ₹200 and DL fee is approximately ₹700 including smart card.',
  'test': 'You can take the Mock Test in our menu to prepare for the LL exam.',
  'status': 'Use the "Track Status" option in the menu with your application number.',
  'default': 'I’m here to help! Try asking about "LL", "DL", "Fee", or "Mock Test".'
};

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'नमस्ते! I am your Sarathi Assistant. How can I help you?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = sampleResponses['default'];
      for (const key in sampleResponses) {
        if (lowerInput.includes(key)) {
          response = sampleResponses[key];
          break;
        }
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), type: 'bot', text: response }]);
      setIsLoading(false);
    }, 600);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl z-50 animate-bounce-gentle p-0"
      >
        <Bot className="w-7 h-7" />
      </Button>
    );
  }

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-300 transform",
      isMinimized ? "w-64" : "w-80 md:w-96"
    )}>
      <Card className="shadow-2xl border-primary/20 overflow-hidden flex flex-col h-[450px]">
        <CardHeader className="bg-primary text-primary-foreground p-3 flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <CardTitle className="text-sm font-bold">Sarathi Assistant</CardTitle>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex", m.type === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] px-3 py-2 rounded-2xl text-sm shadow-sm",
                    m.type === 'user' 
                      ? "bg-primary text-primary-foreground rounded-br-none" 
                      : "bg-white text-slate-800 border border-slate-100 rounded-bl-none"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-none px-3 py-2 text-xs text-slate-400">
                    Assistant is typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>
            <div className="p-3 border-t bg-white">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="h-9 text-xs"
                />
                <Button size="icon" className="h-9 w-9" onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
}
