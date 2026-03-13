"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Send, MessageSquare, Zap, HelpCircle, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const sampleResponses: { [key: string]: string } = {
  'hello': 'नमस्ते! Welcome to Sarathi Connect Assistant. How can I help you with your driving licence services today?',
  'hi': 'नमस्ते! Welcome to Sarathi Connect Assistant. How can I help you with your driving licence services today?',
  'how to apply': 'To apply for a driving licence, you can follow these steps:\n\n1. Select your state from the landing page\n2. Navigate to "Apply for LL" or "Apply for DL"\n3. Fill in your personal details\n4. Upload required documents\n5. Pay the application fee\n6. Schedule your test slot\n\nWould you like more information about any specific step?',
  'learner licence': 'A Learner Licence (LL) is a provisional license that allows you to learn driving under supervision. You must:\n\n• Be at least 16 years old\n• Pass a written test (computer or OMR based)\n• Have a valid learning licence for 30 days before driving test\n• Carry LL while practicing with supervision\n\nWant to take the Mock Test now?',
  'driving test': 'The Driving Test includes:\n\n**Practical Test:**\n- Vehicle control and maneuvering\n- Lane driving\n- Parking\n- Emergency handling\n- Traffic rules awareness\n\n**Duration:** 20-30 minutes\n**Pass Mark:** At least 20 out of 30 marks\n\nWould you like to practice with our Mock Test?',
  'slot booking': 'To book your test slot:\n\n1. Go to "Appointments" → "Book Slot"\n2. Select your preferred RTO center\n3. Choose available date and time\n4. Confirm your slot\n5. Get SMS confirmation\n\nYou can modify or cancel up to 3 days before the test.',
  'fee payment': 'Driving Licence Fees:\n\n**Learner Licence:** ₹150\n**Driving Licence:** ₹200\n**International Permit:** ₹350\n**Renewal:** ₹150\n\nPayment Methods:\n✓ Online (NEFT/RTGS)\n✓ Debit/Credit Card\n✓ UPI\n✓ At RTO Counter\n\nGet instant receipt after payment.',
  'documents needed': 'Required Documents for Driving Licence:\n\n**Address Proof:**\n- Aadhaar Card, Passport, Utility Bill, Voter ID\n\n**Age Proof:**\n- Birth Certificate, 10th mark sheet, PAN Card\n\n**Passport Size Photo:**\n- 4 recent colored photos\n\n**Medical Certificate:**\n- For certain categories\n\nUpload PDF/JPG (max 2MB each)',
  'renewal': 'Renewing your Driving Licence is easy:\n\n1. Navigate to "Driving Licence" → "Renewal"\n2. Enter your current DL number\n3. Upload required documents\n4. Pay renewal fee (₹150)\n5. Get renewal certificate within 5 working days\n\nValid for 20-50 years depending on your age.',
  'mock test': 'Our Mock Test simulates the real RTO exam:\n\n✓ 30 questions on traffic rules\n✓ Road sign identification\n✓ Safety regulations\n✓ Instant feedback\n✓ Detailed explanations\n✓ No time limit for practice\n\nTake the test now to improve your chances of passing!',
  'status tracking': 'Track your application status anytime:\n\n1. Visit "Track Status" from home\n2. Enter your reference number\n3. View real-time status updates\n4. Get notifications at each stage:\n   - Application received\n   - Documents verified\n   - Slot assigned\n   - Test completed\n   - License issued\n\nYou\'ll also receive SMS updates.',
  'fail': 'If you fail the driving test:\n\n• You can retake after 7 days\n• Practice with our Mock Test\n• Focus on weak areas\n• Unlimited retakes available\n• No additional fees for retake\n\nDon\'t worry! Most candidates pass on their second attempt. Practice makes perfect!',
  'help': 'I can help you with:\n\n📋 Learner Licence (LL) process\n🚗 Driving Licence (DL) application\n📅 Slot booking and scheduling\n💳 Fee payment information\n📄 Required documents list\n🔄 Renewal procedures\n📝 Mock test practice\n📊 Status tracking\n🏢 RTO center locator\n📱 Digital wallet access\n\nJust ask me anything!',
  'rto': 'Regional Transport Office (RTO) Info:\n\nServices Available:\n✓ Licence issuance\n✓ Driving tests\n✓ Vehicle registration\n✓ Permit renewal\n✓ Address updates\n✓ Duplicate certificates\n\nVisit your nearest RTO with required documents. You can also book your slot online!',
  'digital wallet': 'Digital Wallet Features:\n\n📱 Digital Copy of Your Licence\n📄 Driving History & Records\n💳 Payment History\n🎫 Recent Transactions\n📋 Active Permits & Registrations\n🔐 Safe & Secure Storage\n\nAccess anytime, anywhere on your mobile device!',
  'default': 'I understand you\'re asking about "{query}". For more specific help:\n\n🔍 **Popular Topics:**\n• How to apply for licence\n• Document requirements\n• Slot booking process\n• Fee payment\n• Mock test practice\n• Status tracking\n• RTO information\n\nYou can also visit the respective sections or contact our helpline: 0120-2459168\n\nHow else can I assist you?'
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'नमस्ते! 👋 Welcome to Sarathi Assistant! I\'m here to help you with all your driving licence-related questions. Whether you\'re applying for your first licence, renewing, or just have questions about the process, I\'m here to guide you.\n\nWhat can I help you with today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    for (const [key, response] of Object.entries(sampleResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    const query = userMessage;
    return sampleResponses['default'].replace('{query}', query);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const quickQuestions = [
    'How to apply for licence?',
    'What documents are needed?',
    'How to book a test slot?',
    'Learner Licence process',
    'Mock test practice',
    'Fee information'
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chat Area */}
        <div className="lg:col-span-2 animate-fade-in-up">
          <Card className="h-full flex flex-col shadow-2xl overflow-hidden">
            {/* Header */}
            <CardHeader className="bg-gradient-to-r from-primary to-blue-700 text-white pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-white">Sarathi Assistant</CardTitle>
                  <p className="text-xs text-white/80 mt-0.5">24/7 Driving Licence Support</p>
                </div>
              </div>
            </CardHeader>

            {/* Chat Messages */}
            <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-50/50 to-white max-h-[500px]">
              {messages.map((message, idx) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {message.type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl transition-all duration-300 transform hover:scale-102 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-br from-primary to-blue-700 text-white rounded-br-none shadow-lg'
                        : 'bg-white border border-slate-200 text-slate-900 rounded-bl-none shadow-md text-sm leading-relaxed'
                    }`}
                  >
                    {message.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < message.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  {message.type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-3 mt-1">
                      <span className="text-xs text-white font-bold">U</span>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start animate-fade-in-up">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-3">
                    <Bot className="w-4 h-4 text-primary animate-bounce-gentle" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </CardContent>

            {/* Input Area */}
            <div className="border-t p-4 bg-white space-y-3">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me about driving licence, tests, slots..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 h-10 transition-all duration-300 focus:ring-primary"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="gap-2 transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500 text-center">💡 Try asking about licence, documents, slots, or mock test</p>
            </div>
          </Card>
        </div>

        {/* Sidebar with Bot Image & Quick Help */}
        <div className="lg:col-span-1 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Chatbot Avatar */}
          <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-0 relative bg-gradient-to-br from-primary/5 to-blue-100/30 flex items-center justify-center min-h-[350px]">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
                alt="Sarathi Assistant Bot"
                width={300}
                height={300}
                className="object-contain p-4 animate-bounce-gentle filter drop-shadow-lg"
                priority
              />
            </CardContent>
          </Card>

          {/* Quick Questions */}
          <Card className="shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Zap className="w-4 h-4 text-primary" />
                Quick Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="w-full justify-start text-sm h-10 transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-md animate-fade-in-up"
                  onClick={() => handleQuickQuestion(question)}
                  style={{ animationDelay: `${(0.3 + idx * 0.05)}s` }}
                >
                  <MessageSquare className="w-3 h-3 mr-2" />
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="shadow-lg bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base text-indigo-900">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                Need More Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-indigo-800">
              <div>
                <p className="font-semibold mb-1">📞 Helpline</p>
                <p className="text-indigo-700">0120-2459168</p>
              </div>
              <div>
                <p className="font-semibold mb-1">📧 Email</p>
                <p className="text-indigo-700">helpdesk-sarathi@gov.in</p>
              </div>
              <div>
                <p className="font-semibold mb-1">🕐 Hours</p>
                <p className="text-indigo-700">Mon-Fri: 9 AM - 6 PM IST</p>
              </div>
              <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 hover:shadow-lg" asChild>
                <a href="/home">Back to Home</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
