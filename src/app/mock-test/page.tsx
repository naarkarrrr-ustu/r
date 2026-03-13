
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
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
          <Trophy className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-bold font-headline mb-4">Test Completed!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          You scored <span className="font-bold text-primary">{score}</span> out of <span className="font-bold text-slate-800">{questions.length}</span>
        </p>
        
        <Card className="mb-10 bg-slate-50 border-none">
          <CardContent className="p-8 space-y-4">
            <h3 className="font-bold text-lg">Performance Summary</h3>
            <div className="flex justify-center gap-12">
              <div>
                <p className="text-2xl font-bold text-green-600">{score}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Correct</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{questions.length - score}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Wrong</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{Math.round((score / questions.length) * 100)}%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={resetTest} className="gap-2 h-14 px-8">
            <RotateCcw className="w-5 h-5" /> Retake Test
          </Button>
          <Button variant="outline" size="lg" asChild className="h-14 px-8">
            <a href="/apply">Proceed to Application</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex justify-between items-center mb-10">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold font-headline">Mock Learner Test</h1>
          <p className="text-sm text-muted-foreground">Practice before the actual RTO test.</p>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 text-primary bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
             <Clock className="w-4 h-4" />
             <span className="font-mono font-bold">14:52</span>
           </div>
           <Button variant="ghost" onClick={resetTest} size="sm">Quit</Button>
        </div>
      </div>

      <div className="mb-8 space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </div>

      <Card className="border-slate-100 shadow-xl overflow-hidden">
        <CardHeader className="bg-slate-50/50 p-8 border-b">
          <CardTitle className="text-xl leading-relaxed">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          {qImg && (
            <div className="flex justify-center">
              <div className="relative aspect-square w-full max-w-[250px] bg-white rounded-2xl shadow-inner border p-4 flex items-center justify-center">
                <Image 
                  src={qImg.imageUrl} 
                  alt="Question visual" 
                  width={200} 
                  height={200} 
                  className="object-contain"
                  data-ai-hint={qImg.imageHint}
                />
              </div>
            </div>
          )}

          {/* Visual Options Grid */}
          {questions[currentQuestion].visualOptions && (
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].visualOptions.map((visualOption, idx) => {
                const isCorrect = idx === questions[currentQuestion].correct;
                const isSelected = selectedOption === idx;
                const iconImg = visualOption.icon ? PlaceHolderImages.find(img => img.id === visualOption.icon) : null;

                let variantClasses = "border-slate-200 hover:border-primary hover:bg-primary/5";
                if (isSelected && !showResult) variantClasses = "border-primary bg-primary/5 ring-2 ring-primary/20";
                if (showResult && isCorrect) variantClasses = "border-green-500 bg-green-50 ring-2 ring-green-200";
                if (showResult && isSelected && !isCorrect) variantClasses = "border-red-500 bg-red-50 ring-2 ring-red-200";

                return (
                  <div
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col items-center justify-center gap-3 group ${variantClasses}`}
                  >
                    {iconImg && (
                      <div className="relative w-20 h-20 bg-white rounded-lg flex items-center justify-center border">
                        <Image
                          src={iconImg.imageUrl}
                          alt={visualOption.label}
                          width={60}
                          height={60}
                          className="object-contain"
                          data-ai-hint={iconImg.imageHint}
                        />
                      </div>
                    )}
                    <span className={`font-medium text-center text-sm ${isSelected && !showResult ? 'text-primary' : 'text-slate-700'}`}>
                      {visualOption.label}
                    </span>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 mt-auto" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500 mt-auto" />}
                  </div>
                );
              })}
            </div>
          )}

          {/* Text-only Options */}
          {!questions[currentQuestion].visualOptions && (
            <div className={`space-y-4 max-w-2xl mx-auto w-full`}>
              {questions[currentQuestion].options.map((option, idx) => {
                const isCorrect = idx === questions[currentQuestion].correct;
                const isSelected = selectedOption === idx;

                let variantClasses = "border-slate-200 hover:border-primary hover:bg-primary/5";
                if (isSelected && !showResult) variantClasses = "border-primary bg-primary/5 ring-2 ring-primary/20";
                if (showResult && isCorrect) variantClasses = "border-green-500 bg-green-50 ring-2 ring-green-200";
                if (showResult && isSelected && !isCorrect) variantClasses = "border-red-500 bg-red-50 ring-2 ring-red-200";

                return (
                  <div 
                    key={idx} 
                    onClick={() => handleOptionSelect(idx)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between group ${variantClasses}`}
                  >
                    <span className={`font-medium ${isSelected && !showResult ? 'text-primary' : 'text-slate-700'}`}>
                      {option}
                    </span>
                    {showResult && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
        <CardFooter className="p-6 bg-slate-50 border-t flex justify-end gap-3">
          {!showResult ? (
            <Button onClick={handleCheckAnswer} disabled={selectedOption === null} size="lg" className="px-8">
              Check Answer
            </Button>
          ) : (
            <Button onClick={handleNext} size="lg" className="px-8 gap-2">
              {currentQuestion === questions.length - 1 ? 'Finish Test' : 'Next Question'} <ChevronRight className="w-4 h-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
      
      <div className="mt-8 flex items-center gap-3 p-4 rounded-lg bg-indigo-50 text-indigo-800 text-sm border border-indigo-100">
        <BookOpen className="w-5 h-5 shrink-0" />
        <p>Pro-tip: Read the <strong>Road Safety Manual</strong> before attempting the actual test to score 100%.</p>
      </div>
    </div>
  );
}
