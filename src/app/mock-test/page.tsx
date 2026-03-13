
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  BookOpen,
  Trophy
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const questions = [
  {
    id: 1,
    question: "Which road sign indicates that the driver must stop the vehicle?",
    image: "road-sign-stop",
    visualOptions: [
      { label: "Yield Sign", icon: "road-sign-yield" },
      { label: "No Entry Sign", icon: "road-sign-no-entry" },
      { label: "Stop Sign", icon: "road-sign-stop" },
      { label: "One Way Sign", icon: "road-sign-oneway" }
    ],
    options: ["Yield Sign", "No Entry Sign", "Stop Sign", "One Way Sign"],
    correct: 2
  },
  {
    id: 2,
    question: "This sign indicates that the road ahead has a:",
    image: "road-sign-turn",
    visualOptions: [
      { label: "Left Turn", icon: "road-sign-turn" },
      { label: "Right Turn", icon: "road-sign-turn" },
      { label: "Steep Descent", icon: null },
      { label: "Narrow Bridge", icon: null }
    ],
    options: ["Left Turn", "Right Turn", "Steep Descent", "Narrow Bridge"],
    correct: 0
  },
  {
    id: 3,
    question: "When approaching a pedestrian crossing where people are waiting to cross, you should:",
    options: ["Speed up to pass before they cross", "Stop and let them cross", "Honk to warn them and keep moving", "Wait for the traffic light to change only"],
    correct: 1
  },
  {
    id: 4,
    question: "Overtaking another vehicle is prohibited when:",
    options: ["Driving on a highway", "The road ahead is clear", "Approaching a bend or a bridge", "Driving at night"],
    correct: 2
  }
];

export default function MockTestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (showResult) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setCompleted(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
  };

  const qImg = questions[currentQuestion].image 
    ? PlaceHolderImages.find(img => img.id === questions[currentQuestion].image) 
    : null;

  if (completed) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary animate-bounce-in shadow-lg">
          <Trophy className="w-12 h-12 animate-spin-slow" />
        </div>
        <h1 className="text-4xl font-bold font-headline mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Test Completed!</h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          You scored <span className="font-bold text-primary text-2xl">{score}</span> out of <span className="font-bold text-slate-800 text-2xl">{questions.length}</span>
        </p>
        
        <Card className="mb-10 bg-gradient-to-br from-slate-50 to-slate-100 border-none shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <CardContent className="p-8 space-y-6">
            <h3 className="font-bold text-lg">Performance Summary</h3>
            <div className="flex justify-center gap-12">
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-4xl font-bold text-green-600 mb-2">{score}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Correct</p>
              </div>
              <div className="w-px bg-slate-300"></div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.5s' }}>
                <p className="text-4xl font-bold text-red-600 mb-2">{questions.length - score}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Wrong</p>
              </div>
              <div className="w-px bg-slate-300"></div>
              <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-4xl font-bold text-primary mb-2">{Math.round((score / questions.length) * 100)}%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Button size="lg" onClick={resetTest} className="gap-2 h-14 px-8 transition-all duration-300 hover:shadow-xl">
            <RotateCcw className="w-5 h-5" /> Retake Test
          </Button>
          <Button variant="outline" size="lg" asChild className="h-14 px-8 transition-all duration-300 hover:shadow-lg">
            <a href="/apply">Proceed to Application</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-10 animate-fade-in-down">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-headline">Mock Learner Test</h1>
          <p className="text-sm text-muted-foreground">Practice before the actual RTO test.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 text-primary bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2 rounded-full border border-primary/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
             <Clock className="w-4 h-4 animate-bounce-gentle" />
             <span className="font-mono font-bold">14:52</span>
           </div>
           <Button variant="ghost" onClick={resetTest} size="sm" className="transition-all duration-300 hover:bg-red-50 hover:text-red-600">Quit</Button>
        </div>
      </div>

      <div className="mb-8 space-y-3 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-primary">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2.5 rounded-full shadow-sm" />
      </div>

      <Card className="border-slate-100 shadow-2xl overflow-hidden transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <CardHeader className="bg-gradient-to-r from-slate-50/80 to-slate-100/50 p-8 border-b border-slate-200/50">
          <CardTitle className="text-xl leading-relaxed text-slate-900 font-semibold">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-8">
          {qImg && (
            <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative aspect-square w-full max-w-[250px] bg-white rounded-2xl shadow-lg border border-slate-200 p-6 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                <Image 
                  src={qImg.imageUrl} 
                  alt="Question visual" 
                  width={200} 
                  height={200} 
                  className="object-contain transition-transform duration-300 hover:scale-105"
                  data-ai-hint={qImg.imageHint}
                />
              </div>
            </div>
          )}

          {/* Visual Options Grid */}
          {questions[currentQuestion].visualOptions && (
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {questions[currentQuestion].visualOptions.map((visualOption, idx) => {
                const isCorrect = idx === questions[currentQuestion].correct;
                const isSelected = selectedOption === idx;
                const iconImg = visualOption.icon ? PlaceHolderImages.find(img => img.id === visualOption.icon) : null;

                let variantClasses = "border-slate-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transform hover:scale-102 transition-all duration-300";
                if (isSelected && !showResult) variantClasses = "border-primary bg-gradient-to-br from-primary/10 to-primary/5 ring-2 ring-primary/30 shadow-lg scale-102 transform";
                if (showResult && isCorrect) variantClasses = "border-green-400 bg-gradient-to-br from-green-50 to-green-100 ring-2 ring-green-300 shadow-lg animate-pulse";
                if (showResult && isSelected && !isCorrect) variantClasses = "border-red-400 bg-gradient-to-br from-red-50 to-red-100 ring-2 ring-red-300 shadow-lg animate-shake";

                return (
                  <div
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`p-6 rounded-xl border-2 cursor-pointer flex flex-col items-center justify-center gap-3 group ${variantClasses}`}
                    style={{ animationDelay: `${0.5 + idx * 0.05}s` }}
                  >
                    {iconImg && (
                      <div className="relative w-20 h-20 bg-white rounded-lg flex items-center justify-center border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                        <Image
                          src={iconImg.imageUrl}
                          alt={visualOption.label}
                          width={60}
                          height={60}
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                          data-ai-hint={iconImg.imageHint}
                        />
                      </div>
                    )}
                    <span className={`font-medium text-center text-sm transition-colors duration-300 ${isSelected && !showResult ? 'text-primary font-semibold' : 'text-slate-700'}`}>
                      {visualOption.label}
                    </span>
                    {showResult && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500 mt-2 animate-bounce-in" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500 mt-2 animate-shake" />}
                  </div>
                );
              })}
            </div>
          )}

          {/* Text-only Options */}
          {!questions[currentQuestion].visualOptions && (
            <div className={`space-y-3 max-w-2xl mx-auto w-full animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
              {questions[currentQuestion].options.map((option, idx) => {
                const isCorrect = idx === questions[currentQuestion].correct;
                const isSelected = selectedOption === idx;

                let variantClasses = "border-slate-200 hover:border-primary hover:bg-primary/5 hover:shadow-md transition-all duration-300 transform hover:scale-102";
                if (isSelected && !showResult) variantClasses = "border-primary bg-gradient-to-r from-primary/10 to-primary/5 ring-2 ring-primary/30 shadow-lg scale-102";
                if (showResult && isCorrect) variantClasses = "border-green-400 bg-gradient-to-r from-green-50 to-green-100 ring-2 ring-green-300 shadow-lg animate-pulse";
                if (showResult && isSelected && !isCorrect) variantClasses = "border-red-400 bg-gradient-to-r from-red-50 to-red-100 ring-2 ring-red-300 shadow-lg animate-shake";

                return (
                  <div 
                    key={idx} 
                    onClick={() => handleOptionSelect(idx)}
                    className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between group ${variantClasses}`}
                    style={{ animationDelay: `${0.5 + idx * 0.05}s` }}
                  >
                    <span className={`font-medium transition-colors duration-300 ${isSelected && !showResult ? 'text-primary font-semibold' : 'text-slate-700'}`}>
                      {option}
                    </span>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 animate-bounce-in" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 animate-shake" />}
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
        <CardFooter className="p-6 bg-gradient-to-r from-slate-50/50 to-slate-100/30 border-t border-slate-200/50 flex justify-end gap-3">
          {!showResult ? (
            <Button onClick={handleCheckAnswer} disabled={selectedOption === null} size="lg" className="px-8 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:shadow-none">
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg" className="px-8 gap-2 transition-all duration-300 hover:shadow-lg animate-bounce-in">
              {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'} <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          )}
        </CardFooter>
      </Card>
      
      <div className="mt-8 flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-indigo-50/80 to-indigo-100/50 text-indigo-800 text-sm border border-indigo-200 shadow-sm animate-fade-in-up transition-all duration-300 hover:shadow-md" style={{ animationDelay: '0.5s' }}>
        <BookOpen className="w-5 h-5 shrink-0 animate-bounce-gentle" />
        <p>Pro-tip: Read the <strong>Road Safety Manual</strong> before attempting the actual test to score 100%.</p>
      </div>
    </div>
  );
}
