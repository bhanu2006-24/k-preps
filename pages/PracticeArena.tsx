
import React, { useState, useMemo } from 'react';
import { RotateCw, ChevronLeft, ChevronRight, Brain, Check, HelpCircle, AlertCircle, X, Trophy, Timer, Settings2, Play, Info } from 'lucide-react';
import { flashcards, questions, subjects } from '../../data/index';
import { Question, Subject, Flashcard, QuizAttempt } from '../../types';

type Mode = 'MENU' | 'SETUP_QUIZ' | 'SETUP_FLASH' | 'GAME_QUIZ' | 'GAME_FLASH';

export const PracticeArena: React.FC = () => {
  const [mode, setMode] = useState<Mode>('MENU');
  
  // Configuration State
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Any'|'Easy'|'Medium'|'Hard'>('Any');

  const startQuiz = () => setMode('GAME_QUIZ');
  const startFlash = () => setMode('GAME_FLASH');

  return (
    <div className="h-full flex flex-col pb-10">
      {mode === 'MENU' && <ArenaMenu onSelect={(m) => setMode(m === 'QUIZ' ? 'SETUP_QUIZ' : 'SETUP_FLASH')} />}
      
      {(mode === 'SETUP_QUIZ' || mode === 'SETUP_FLASH') && (
        <ArenaSetup 
          mode={mode === 'SETUP_QUIZ' ? 'Quiz' : 'Flashcards'}
          selectedSubject={selectedSubjectId}
          onSubjectChange={setSelectedSubjectId}
          selectedModule={selectedModuleId}
          onModuleChange={setSelectedModuleId}
          selectedDiff={selectedDifficulty}
          onDiffChange={setSelectedDifficulty}
          onStart={mode === 'SETUP_QUIZ' ? startQuiz : startFlash}
          onBack={() => setMode('MENU')}
        />
      )}

      {mode === 'GAME_FLASH' && (
        <FlashcardMode 
          subjectId={selectedSubjectId} 
          moduleId={selectedModuleId}
          difficulty={selectedDifficulty}
          onBack={() => setMode('MENU')} 
        />
      )}

      {mode === 'GAME_QUIZ' && (
        <QuizMode 
          subjectId={selectedSubjectId}
          moduleId={selectedModuleId}
          difficulty={selectedDifficulty}
          onBack={() => setMode('MENU')} 
        />
      )}
    </div>
  );
};

// --- Sub-components ---

const ArenaMenu: React.FC<{ onSelect: (m: 'QUIZ' | 'FLASH') => void }> = ({ onSelect }) => (
  <div className="flex flex-col items-center justify-center h-full space-y-10 animate-in fade-in zoom-in duration-500 px-4">
    <div className="text-center space-y-3">
      <div className="inline-block p-5 bg-white border border-slate-100 rounded-[2.5rem] mb-4 animate-float shadow-2xl shadow-brand-100/50">
        <Brain className="w-12 h-12 text-brand-600" />
      </div>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Practice Arena</h1>
      <p className="text-slate-500 text-lg max-w-md mx-auto leading-relaxed">Choose your training method to master your subjects through interactive learning.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
      <button 
        onClick={() => onSelect('FLASH')}
        className="group relative overflow-hidden bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-left"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
          <RotateCw className="w-48 h-48 text-brand-600" />
        </div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-brand-50 rounded-3xl flex items-center justify-center mb-8 text-brand-600 group-hover:scale-110 transition-transform shadow-sm">
            <RotateCw className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">Dynamic Flashcards</h3>
          <p className="text-slate-500 leading-relaxed">Quick-fire revision with confidence tracking and flip mechanics.</p>
        </div>
      </button>

      <button 
        onClick={() => onSelect('QUIZ')}
        className="group relative overflow-hidden bg-slate-900 p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all text-left text-white"
      >
        <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:rotate-12 duration-500">
          <HelpCircle className="w-48 h-48 text-white" />
        </div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md group-hover:scale-110 transition-transform border border-white/20">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3 font-display">Simulated Exam</h3>
          <p className="text-slate-400 leading-relaxed">Test your knowledge with timed questions and detailed results analysis.</p>
        </div>
      </button>
    </div>
  </div>
);

interface SetupProps {
  mode: string;
  selectedSubject: string;
  onSubjectChange: (id: string) => void;
  selectedModule: string;
  onModuleChange: (id: string) => void;
  selectedDiff: string;
  onDiffChange: (d: any) => void;
  onStart: () => void;
  onBack: () => void;
}

const ArenaSetup: React.FC<SetupProps> = ({ mode, selectedSubject, onSubjectChange, selectedModule, onModuleChange, selectedDiff, onDiffChange, onStart, onBack }) => {
  const activeSubject = subjects.find(s => s.id === selectedSubject);

  return (
    <div className="max-w-xl mx-auto w-full h-full flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 p-4">
      <button onClick={onBack} className="absolute top-8 left-8 text-slate-500 hover:text-slate-800 flex items-center gap-2 font-bold transition-colors">
        <ChevronLeft className="w-5 h-5" /> Back
      </button>
      
      <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
        <div className="flex items-center gap-5 mb-10">
          <div className="w-14 h-14 bg-brand-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-100">
            <Settings2 className="w-7 h-7" />
          </div>
          <div>
             <h2 className="text-3xl font-display font-bold text-slate-900">Configure {mode}</h2>
             <p className="text-slate-500 text-sm">Fine-tune your training session</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Select Subject</label>
            <div className="grid grid-cols-1 gap-2">
              <button
                 onClick={() => { onSubjectChange('all'); onModuleChange('all'); }}
                 className={`p-4 rounded-2xl border text-left font-bold transition-all ${selectedSubject === 'all' ? 'border-brand-500 bg-brand-600 text-white shadow-lg shadow-brand-100' : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                Comprehensive Study (All Subjects)
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subjects.map(sub => (
                  <button
                    key={sub.id}
                    onClick={() => { onSubjectChange(sub.id); onModuleChange('all'); }}
                    className={`p-4 rounded-2xl border text-left font-bold text-sm transition-all ${selectedSubject === sub.id ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {activeSubject && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
               <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Target Module</label>
               <select 
                 value={selectedModule} 
                 onChange={(e) => onModuleChange(e.target.value)}
                 className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 font-bold text-slate-700 focus:ring-2 focus:ring-brand-500 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
               >
                 <option value="all">Entire Syllabus</option>
                 {activeSubject.objectives.map(obj => (
                   <option key={obj.id} value={obj.id}>{obj.id}: {obj.description.substring(0, 40)}...</option>
                 ))}
               </select>
            </div>
          )}

          <div className="space-y-3">
             <label className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em]">Difficulty Level</label>
             <div className="flex gap-2">
               {['Any', 'Easy', 'Medium', 'Hard'].map(d => (
                 <button
                   key={d}
                   onClick={() => onDiffChange(d)}
                   className={`flex-1 py-4 rounded-2xl border font-bold text-sm transition-all ${selectedDiff === d ? 'border-brand-500 bg-brand-600 text-white shadow-lg shadow-brand-200' : 'border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                 >
                   {d}
                 </button>
               ))}
             </div>
          </div>

          <button 
            onClick={onStart}
            className="w-full bg-slate-900 text-white font-bold text-xl py-5 rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 mt-6 active:scale-[0.98]"
          >
            <Play className="w-6 h-6 fill-current" /> Begin {mode}
          </button>
        </div>
      </div>
    </div>
  );
};

const FlashcardMode: React.FC<{ subjectId: string; moduleId: string; difficulty: string; onBack: () => void }> = ({ subjectId, moduleId, difficulty, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mastery, setMastery] = useState<Record<string, number>>({});

  const filteredCards = useMemo(() => {
    return flashcards.filter(f => 
      (subjectId === 'all' || f.subjectId === subjectId) &&
      (moduleId === 'all' || f.moduleId === moduleId) &&
      (difficulty === 'Any' || f.difficulty === difficulty)
    );
  }, [subjectId, moduleId, difficulty]);

  const currentCard = filteredCards[currentIndex];

  const handleRating = (rating: number) => {
    setMastery(prev => ({ ...prev, [currentCard.id]: rating }));
    nextCard();
  };

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev + 1) % filteredCards.length), 300);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length), 300);
  };

  if (filteredCards.length === 0) {
    return (
       <div className="h-full flex flex-col items-center justify-center text-center p-6">
         <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-6 text-slate-300">
            <AlertCircle className="w-10 h-10" />
         </div>
         <h3 className="text-2xl font-bold text-slate-800">No Flashcards Found</h3>
         <p className="text-slate-500 mb-8 max-w-xs mx-auto">We couldn't find any cards matching your specific criteria. Try broadening your selection.</p>
         <button onClick={onBack} className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all">Adjust Filters</button>
       </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center h-full py-10 px-4 w-full animate-in fade-in">
      <div className="w-full flex items-center justify-between mb-10">
        <button onClick={onBack} className="text-slate-500 hover:text-slate-900 flex items-center gap-2 font-bold transition-colors">
          <X className="w-5 h-5" /> End Session
        </button>
        <div className="flex items-center gap-2">
            <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-brand-500 transition-all duration-500" 
                    style={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
                ></div>
            </div>
            <span className="text-xs font-bold text-slate-400 font-mono">
                {currentIndex + 1} / {filteredCards.length}
            </span>
        </div>
      </div>

      <div className="w-full aspect-[4/3] md:aspect-[16/10] perspective-2000 mb-12 relative group">
        <div 
          className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white border border-slate-100 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center hover:shadow-brand-100/50 transition-all duration-500 ring-1 ring-slate-100">
            <div className="absolute top-10 left-10 flex gap-2">
                <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-brand-100">
                Question
                </span>
            </div>
            <span className="absolute top-10 right-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               {currentCard.subjectId.replace('-', ' ')}
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
              {currentCard.question}
            </h3>
            <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce-soft opacity-40">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Tap to Flip
                </p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden bg-slate-900 text-white rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center rotate-y-180 border border-slate-800 ring-4 ring-slate-800/50">
            <div className="absolute top-10 left-10">
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm border border-emerald-500/20">
                Answer
                </span>
            </div>
            <p className="text-xl md:text-3xl leading-relaxed font-medium text-slate-100">
              {currentCard.answer}
            </p>
            <div className={`absolute bottom-10 right-10 text-[10px] font-bold px-3 py-1.5 rounded-full border ${
              currentCard.difficulty === 'Easy' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
              currentCard.difficulty === 'Medium' ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10' :
              'border-red-500/50 text-red-400 bg-red-500/10'
            }`}>
              {currentCard.difficulty} Difficulty
            </div>
          </div>
        </div>
      </div>

      {isFlipped ? (
         <div className="w-full flex flex-col gap-6 animate-in slide-in-from-bottom-4">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">How confident are you?</p>
            <div className="flex gap-4 w-full">
                <button onClick={() => handleRating(1)} className="flex-1 py-4 rounded-2xl bg-red-50 text-red-600 font-bold text-sm border border-red-100 hover:bg-red-100 transition-all">Hard</button>
                <button onClick={() => handleRating(2)} className="flex-1 py-4 rounded-2xl bg-yellow-50 text-yellow-600 font-bold text-sm border border-yellow-100 hover:bg-yellow-100 transition-all">Good</button>
                <button onClick={() => handleRating(3)} className="flex-1 py-4 rounded-2xl bg-emerald-50 text-emerald-600 font-bold text-sm border border-emerald-100 hover:bg-emerald-100 transition-all">Easy</button>
            </div>
         </div>
      ) : (
        <div className="flex items-center gap-10">
            <button onClick={prevCard} className="p-6 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-brand-600 hover:shadow-xl transition-all active:scale-90">
            <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={nextCard} className="p-6 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-brand-600 hover:shadow-xl transition-all active:scale-90">
            <ChevronRight className="w-8 h-8" />
            </button>
        </div>
      )}
    </div>
  );
};

const QuizMode: React.FC<{ subjectId: string; moduleId: string; difficulty: string; onBack: () => void }> = ({ subjectId, moduleId, difficulty, onBack }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);

  const quizQuestions = useMemo(() => {
    const filtered = questions.filter(q => 
      (subjectId === 'all' || q.subjectId === subjectId) &&
      (moduleId === 'all' || q.moduleId === moduleId) &&
      (difficulty === 'Any' || q.difficulty === difficulty)
    );
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [subjectId, moduleId, difficulty]);

  if (quizQuestions.length === 0) {
    return (
       <div className="h-full flex flex-col items-center justify-center text-center p-6">
         <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mb-6 text-slate-300">
            <AlertCircle className="w-10 h-10" />
         </div>
         <h3 className="text-2xl font-bold text-slate-800">Bank is Empty</h3>
         <p className="text-slate-500 mb-8 max-w-xs mx-auto">No questions match your current settings. We're constantly adding more content!</p>
         <button onClick={onBack} className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-all">Try Other Filters</button>
       </div>
    );
  }

  const currentQ = quizQuestions[currentQIndex];

  const handleSubmit = () => {
    const isCorrect = selectedOption === currentQ.correctAnswer;
    setAttempts(prev => [...prev, { questionId: currentQ.id, selectedOption, isCorrect }]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished && !isReviewing) {
    const score = attempts.filter(a => a.isCorrect).length;
    const percentage = (score / quizQuestions.length) * 100;
    return (
      <div className="flex flex-col items-center justify-center h-full text-center animate-in fade-in zoom-in duration-500 p-6">
        <div className={`w-32 h-32 rounded-[2.5rem] flex items-center justify-center mb-10 relative ${percentage >= 70 ? 'bg-emerald-100' : 'bg-slate-100'}`}>
           <Trophy className={`w-16 h-16 absolute ${percentage >= 70 ? 'text-emerald-600' : 'text-slate-400'}`} />
           {percentage >= 70 && <div className="absolute inset-0 border-4 border-emerald-200 rounded-[2.5rem] animate-ping opacity-20"></div>}
        </div>
        <h2 className="text-5xl font-display font-black text-slate-900 mb-4 tracking-tight">Quiz Result</h2>
        <p className="text-slate-500 mb-10 text-lg font-medium">
           {percentage >= 80 ? 'Masterfully executed!' : percentage >= 50 ? 'Strong performance.' : 'Needs more focus.'}
        </p>
        
        <div className="flex items-baseline justify-center gap-3 mb-12">
          <span className="text-8xl font-display font-black text-brand-600 leading-none">{score}</span>
          <span className="text-3xl font-bold text-slate-300">/ {quizQuestions.length}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button 
                onClick={() => setIsReviewing(true)}
                className="flex-1 bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
                <Info className="w-5 h-5" /> Review Answers
            </button>
            <button 
                onClick={onBack} 
                className="flex-1 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
            >
                Finish Session
            </button>
        </div>
      </div>
    );
  }

  if (isReviewing) {
    return (
        <div className="max-w-3xl mx-auto py-10 w-full h-full flex flex-col animate-in slide-in-from-right-10 px-4 overflow-hidden">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-display font-bold text-slate-900">Review Results</h2>
                <button onClick={onBack} className="text-slate-500 hover:text-slate-900 font-bold p-2">Close</button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                {quizQuestions.map((q, i) => {
                    const attempt = attempts.find(a => a.questionId === q.id);
                    return (
                        <div key={q.id} className={`p-6 rounded-[2rem] border ${attempt?.isCorrect ? 'bg-emerald-50/50 border-emerald-100' : 'bg-red-50/50 border-red-100'}`}>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Question {i + 1}</span>
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${attempt?.isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                    {attempt?.isCorrect ? 'Correct' : 'Incorrect'}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-800 mb-4">{q.text}</h4>
                            <div className="space-y-2">
                                <p className="text-sm">
                                    <span className="font-bold text-slate-400">Your Answer:</span> <span className={attempt?.isCorrect ? 'text-emerald-600' : 'text-red-600'}>{attempt?.selectedOption || 'Not answered'}</span>
                                </p>
                                {!attempt?.isCorrect && (
                                    <p className="text-sm">
                                        <span className="font-bold text-slate-400">Correct Answer:</span> <span className="text-emerald-600">{q.correctAnswer}</span>
                                    </p>
                                )}
                            </div>
                            {q.explanation && (
                                <div className="mt-4 pt-4 border-t border-slate-200/50">
                                    <p className="text-xs text-slate-500 leading-relaxed italic">
                                        <span className="font-bold text-slate-400 uppercase mr-2 not-italic">Note:</span>
                                        {q.explanation}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 w-full h-full flex flex-col animate-in fade-in px-4">
      <div className="flex items-center justify-between mb-10">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
            <X className="w-7 h-7"/>
        </button>
        <div className="flex items-center gap-6">
             <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question</span>
                <span className="text-sm font-bold text-slate-800">{currentQIndex + 1} / {quizQuestions.length}</span>
             </div>
             <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shadow-sm">
                <Timer className="w-6 h-6" />
             </div>
        </div>
      </div>

      <div className="w-full h-1.5 bg-slate-100 rounded-full mb-10 overflow-hidden">
         <div 
           className="h-full bg-brand-500 transition-all duration-500 ease-out" 
           style={{ width: `${((currentQIndex + 1) / quizQuestions.length) * 100}%` }}
         ></div>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-brand-100">
            {currentQ.type}
          </span>
          <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full uppercase tracking-widest border border-slate-100">
            {currentQ.subjectId.replace('-', ' ')}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${
            currentQ.difficulty === 'Easy' ? 'bg-green-50 text-green-600 border-green-100' :
            currentQ.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' :
            'bg-red-50 text-red-600 border-red-100'
          }`}>
            {currentQ.difficulty}
          </span>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-display font-bold text-slate-900 mb-10 leading-[1.2]">
          {currentQ.text}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {(currentQ.type === 'MCQ' ? currentQ.options : ['True', 'False'])?.map((opt, i) => (
               <button
                key={i}
                onClick={() => setSelectedOption(opt)}
                disabled={showResult}
                className={`w-full p-6 rounded-2xl text-left border-2 transition-all flex items-center justify-between group ${
                  showResult 
                    ? opt === currentQ.correctAnswer 
                      ? 'border-emerald-500 bg-emerald-50 shadow-sm' 
                      : opt === selectedOption 
                        ? 'border-red-500 bg-red-50'
                        : 'border-slate-100 opacity-50'
                    : selectedOption === opt
                      ? 'border-brand-500 bg-brand-50 shadow-md ring-2 ring-brand-100'
                      : 'border-slate-100 bg-white hover:border-brand-200 hover:bg-slate-50'
                }`}
               >
                 <span className={`font-bold text-lg ${showResult && opt === currentQ.correctAnswer ? 'text-emerald-800' : 'text-slate-700'}`}>{opt}</span>
                 {showResult && opt === currentQ.correctAnswer && <Check className="w-6 h-6 text-emerald-600" />}
                 {showResult && opt === selectedOption && opt !== currentQ.correctAnswer && <AlertCircle className="w-6 h-6 text-red-600" />}
                 {!showResult && (
                    <div className={`w-6 h-6 rounded-full border-2 transition-all ${selectedOption === opt ? 'bg-brand-500 border-brand-600' : 'border-slate-200 group-hover:border-brand-300'}`}></div>
                 )}
               </button>
             ))}
        </div>
        
        {showResult && (
          <div className="mt-10 p-8 bg-slate-900 text-white rounded-[2.5rem] animate-in fade-in slide-in-from-top-6 flex gap-6">
            <div className="shrink-0 w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
               <Brain className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold block mb-2 text-lg font-display">Review Note</span>
              <p className="text-slate-400 text-sm leading-relaxed">{currentQ.explanation || "Continue to the next question to build your streak!"}</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-10">
        {!showResult ? (
          <button 
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full bg-slate-900 text-white font-bold text-xl py-5 rounded-[2rem] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1 active:scale-[0.98]"
          >
            Check Answer
          </button>
        ) : (
          <button 
            onClick={handleNext}
            className="w-full bg-brand-600 text-white font-bold text-xl py-5 rounded-[2rem] hover:bg-brand-700 transition-all shadow-xl shadow-brand-100 flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-[0.98]"
          >
            {currentQIndex === quizQuestions.length - 1 ? 'See Final Results' : 'Continue Forward'} <ChevronRight className="w-6 h-6"/>
          </button>
        )}
      </div>
    </div>
  );
}
