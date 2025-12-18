
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Calculator, CheckSquare, StickyNote, Save, Edit3, Timer as TimerIcon, Play, Pause, RotateCcw, Equal, X as XIcon, Hash, ChevronRight } from 'lucide-react';
import { TodoItem, NoteItem } from '../../types';

export const ToolsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CGPA' | 'TODO' | 'NOTES' | 'POMO' | 'CALC'>('POMO');

  return (
    <div className="h-full flex flex-col space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="text-center">
        <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight">Productivity Toolkit</h1>
        <p className="text-slate-500 mt-2">Tools designed to keep you on top of your game.</p>
      </div>

      <div className="bg-slate-100/50 p-2 rounded-[2rem] flex w-full max-w-xl mx-auto overflow-x-auto gap-2 backdrop-blur-md border border-slate-200/50">
        {(['POMO', 'CALC', 'TODO', 'NOTES', 'CGPA'] as const).map(tab => (
           <button
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={`flex-1 min-w-[90px] py-3 text-xs font-bold rounded-2xl transition-all duration-300 whitespace-nowrap uppercase tracking-widest ${
               activeTab === tab 
                 ? 'bg-white text-brand-600 shadow-xl shadow-brand-100/20 ring-1 ring-slate-200' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
             }`}
           >
             {tab === 'CALC' ? 'Calculator' : tab === 'POMO' ? 'Focus' : tab === 'TODO' ? 'Tasks' : tab === 'NOTES' ? 'Notes' : 'CGPA'}
           </button>
        ))}
      </div>

      <div className="flex-1 flex justify-center overflow-y-auto pt-4">
        {activeTab === 'CGPA' && <CGPACalculator />}
        {activeTab === 'TODO' && <TodoList />}
        {activeTab === 'NOTES' && <NotesApp />}
        {activeTab === 'POMO' && <PomodoroTimer />}
        {activeTab === 'CALC' && <ScientificCalculator />}
      </div>
    </div>
  );
};

const ScientificCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleInput = (val: string) => {
    if (display === '0' && !isNaN(Number(val))) {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  const handleMathFunc = (func: string) => {
      try {
          const val = parseFloat(display);
          let result = 0;
          switch(func) {
              case 'sin': result = Math.sin(val * Math.PI / 180); break;
              case 'cos': result = Math.cos(val * Math.PI / 180); break;
              case 'tan': result = Math.tan(val * Math.PI / 180); break;
              case 'log': result = Math.log10(val); break;
              case 'sqrt': result = Math.sqrt(val); break;
              case 'square': result = val * val; break;
          }
          setEquation(`${func}(${display}) =`);
          setDisplay(String(Number(result.toFixed(8))));
      } catch {
          setDisplay('Error');
      }
  }

  const calculate = () => {
    try {
      const sanitized = display.replace(/x/g, '*');
      const result = new Function(`return ${sanitized}`)();
      setEquation(display + ' =');
      setDisplay(String(Number(result.toFixed(8))));
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const backspace = () => {
      if (display.length > 1) {
          setDisplay(display.slice(0, -1));
      } else {
          setDisplay('0');
      }
  }

  const Btn = ({ label, action, color = 'bg-white', span = 1 }: { label: string | React.ReactNode, action: () => void, color?: string, span?: number }) => (
    <button 
        onClick={action} 
        className={`${color} p-4 rounded-2xl font-bold text-slate-700 shadow-sm hover:shadow-lg active:scale-95 transition-all border border-slate-100 text-sm flex items-center justify-center col-span-${span}`}
    >
      {label}
    </button>
  );

  return (
    <div className="w-full glass-card rounded-[3rem] p-8 max-w-sm animate-in zoom-in-95 duration-300 shadow-2xl">
      <div className="bg-slate-900 rounded-[2rem] p-8 mb-6 text-right overflow-hidden border-b-8 border-slate-800 shadow-inner">
        <div className="text-brand-400 text-xs h-4 mb-2 font-mono uppercase tracking-widest">{equation}</div>
        <div className="text-white text-4xl font-mono truncate tracking-tight">{display}</div>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1: Advanced */}
        <Btn label="sin" action={() => handleMathFunc('sin')} color="bg-slate-50 text-brand-600" />
        <Btn label="cos" action={() => handleMathFunc('cos')} color="bg-slate-50 text-brand-600" />
        <Btn label="tan" action={() => handleMathFunc('tan')} color="bg-slate-50 text-brand-600" />
        <Btn label="√" action={() => handleMathFunc('sqrt')} color="bg-slate-50 text-brand-600" />

        {/* Row 2: Advanced */}
        <Btn label="log" action={() => handleMathFunc('log')} color="bg-slate-50 text-brand-600" />
        <Btn label="x²" action={() => handleMathFunc('square')} color="bg-slate-50 text-brand-600" />
        <Btn label="DEL" action={backspace} color="bg-orange-50 text-orange-600" />
        <Btn label="C" action={clear} color="bg-red-50 text-red-600" />

        <Btn label="7" action={() => handleInput('7')} />
        <Btn label="8" action={() => handleInput('8')} />
        <Btn label="9" action={() => handleInput('9')} />
        <Btn label="/" action={() => handleInput('/')} color="bg-brand-50 text-brand-600" />
        
        <Btn label="4" action={() => handleInput('4')} />
        <Btn label="5" action={() => handleInput('5')} />
        <Btn label="6" action={() => handleInput('6')} />
        <Btn label="x" action={() => handleInput('*')} color="bg-brand-50 text-brand-600" />
        
        <Btn label="1" action={() => handleInput('1')} />
        <Btn label="2" action={() => handleInput('2')} />
        <Btn label="3" action={() => handleInput('3')} />
        <Btn label="-" action={() => handleInput('-')} color="bg-brand-50 text-brand-600" />
        
        <Btn label="0" action={() => handleInput('0')} />
        <Btn label="." action={() => handleInput('.')} />
        <Btn label="=" action={calculate} color="col-span-2 bg-brand-600 text-white shadow-xl shadow-brand-100" />
      </div>
    </div>
  );
};

const PomodoroTimer: React.FC = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<'focus' | 'break'>('focus');

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setIsActive(false);
          if (mode === 'focus') {
              setMode('break');
              setMinutes(5);
              alert("Focus session complete! Take a break.");
          } else {
              setMode('focus');
              setMinutes(25);
              alert("Break's over! Let's get back to work.");
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setMinutes(mode === 'focus' ? 25 : 5);
    setSeconds(0);
  };

  const setTimer = (m: number, type: 'focus' | 'break') => {
      setIsActive(false);
      setMode(type);
      setMinutes(m);
      setSeconds(0);
  }

  return (
    <div className={`w-full glass-card rounded-[3.5rem] p-12 max-w-md animate-in zoom-in-95 duration-500 text-center border-t-8 ${mode === 'focus' ? 'border-brand-500' : 'border-emerald-500'} shadow-2xl`}>
      <div className="flex flex-col items-center gap-2 mb-10">
        <div className={`p-4 rounded-[1.5rem] shadow-lg ${mode === 'focus' ? 'bg-brand-100 text-brand-600' : 'bg-emerald-100 text-emerald-600'} transition-colors duration-500`}>
           <TimerIcon className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-display font-black text-slate-900 mt-2">{mode === 'focus' ? 'Focus Session' : 'Relaxing Break'}</h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{mode === 'focus' ? 'Deep Work Mode' : 'Charge Up'}</p>
      </div>

      <div className="text-8xl font-display font-black text-slate-900 mb-14 tracking-tighter flex justify-center items-center gap-1">
        {String(minutes).padStart(2, '0')}<span className="animate-pulse text-brand-200">:</span>{String(seconds).padStart(2, '0')}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={toggle}
          className={`flex-1 py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl ${
            isActive 
                ? 'bg-slate-100 text-slate-400' 
                : mode === 'focus' 
                    ? 'bg-brand-600 text-white shadow-brand-100 hover:-translate-y-1' 
                    : 'bg-emerald-600 text-white shadow-emerald-100 hover:-translate-y-1'
          }`}
        >
          {isActive ? <><Pause className="w-6 h-6" /> Pause</> : <><Play className="w-6 h-6 fill-current" /> Start</>}
        </button>
        <button 
          onClick={reset}
          className="p-5 bg-slate-50 border border-slate-200 rounded-[2rem] text-slate-400 hover:text-slate-800 transition-all hover:bg-white active:rotate-180"
        >
          <RotateCcw className="w-7 h-7" />
        </button>
      </div>

      <div className="mt-12 flex justify-center p-1.5 bg-slate-100 rounded-2xl w-fit mx-auto">
        <button 
            onClick={() => setTimer(25, 'focus')} 
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'focus' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-400'}`}
        >
            Study
        </button>
        <button 
            onClick={() => setTimer(5, 'break')} 
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${mode === 'break' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
        >
            Break
        </button>
      </div>
    </div>
  );
};

const CGPACalculator: React.FC = () => {
  const [courses, setCourses] = useState<{ credit: string; grade: string }[]>([
    { credit: '4', grade: '10' },
    { credit: '4', grade: '9' },
    { credit: '3', grade: '8' },
  ]);

  const addRow = () => setCourses([...courses, { credit: '', grade: '' }]);
  
  const updateRow = (index: number, field: 'credit' | 'grade', value: string) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setCourses(newCourses);
  };

  const removeRow = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    courses.forEach(c => {
      const cred = parseFloat(c.credit);
      const grd = parseFloat(c.grade);
      if (!isNaN(cred) && !isNaN(grd)) {
        totalCredits += cred;
        totalPoints += (cred * grd);
      }
    });
    return totalCredits === 0 ? '0.00' : (totalPoints / totalCredits).toFixed(2);
  };

  const cgpa = calculateCGPA();

  return (
    <div className="w-full glass-card rounded-[3rem] p-10 max-w-2xl animate-in zoom-in-95 duration-300 shadow-2xl">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-[1.5rem] flex items-center justify-center shadow-lg">
            <Calculator className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-black text-slate-800">Grade Point Estimator</h2>
            <p className="text-sm text-slate-500">Academic performance calculator</p>
          </div>
        </div>
        <div className="bg-brand-50 px-8 py-5 rounded-[2rem] border-2 border-brand-100 flex flex-col items-center shadow-xl shadow-brand-100/50">
          <p className="text-[10px] text-brand-400 font-black uppercase tracking-[0.2em] mb-1">Resulting CGPA</p>
          <p className="text-5xl font-display font-black text-brand-600 tracking-tighter">{cgpa}</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-6 gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">
          <div className="col-span-2">Credits</div>
          <div className="col-span-3">Achieved Grade</div>
          <div className="col-span-1"></div>
        </div>
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {courses.map((course, idx) => (
            <div key={idx} className="grid grid-cols-6 gap-4 animate-in slide-in-from-left-4 group">
                <input
                type="number"
                value={course.credit}
                onChange={(e) => updateRow(idx, 'credit', e.target.value)}
                className="col-span-2 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 font-bold text-slate-700 focus:ring-4 focus:ring-brand-100 focus:bg-white focus:outline-none transition-all shadow-inner"
                placeholder="0"
                />
                <input
                type="number"
                value={course.grade}
                onChange={(e) => updateRow(idx, 'grade', e.target.value)}
                className="col-span-3 bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 font-bold text-slate-700 focus:ring-4 focus:ring-brand-100 focus:bg-white focus:outline-none transition-all shadow-inner"
                placeholder="0.0"
                />
                <button 
                onClick={() => removeRow(idx)}
                className="col-span-1 flex items-center justify-center text-slate-200 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all active:scale-90"
                >
                <Trash2 className="w-6 h-6" />
                </button>
            </div>
            ))}
        </div>
      </div>

      <button 
        onClick={addRow}
        className="w-full py-5 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-black uppercase text-xs tracking-widest hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
      >
        <Plus className="w-5 h-5" /> Append New Subject
      </button>
    </div>
  );
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: '1', text: 'Revise Network CO-1', completed: false, priority: 'High' },
    { id: '2', text: 'Practice BJT numerials', completed: true, priority: 'Medium' },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, {
      id: Date.now().toString(),
      text: newTodo,
      completed: false,
      priority: 'Medium'
    }]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="w-full glass-card rounded-[3rem] p-10 max-w-2xl flex flex-col h-[600px] animate-in zoom-in-95 duration-300 shadow-2xl">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-[1.5rem] flex items-center justify-center shadow-lg">
           <CheckSquare className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight">Daily Missions</h2>
      </div>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Deploy a new task..."
          className="flex-1 bg-slate-50 border border-slate-100 rounded-[1.5rem] px-6 py-5 font-bold text-slate-700 focus:ring-4 focus:ring-emerald-100 focus:bg-white focus:outline-none transition-all shadow-inner"
        />
        <button 
          onClick={addTodo}
          disabled={!newTodo.trim()}
          className="bg-slate-900 text-white rounded-[1.5rem] px-8 hover:bg-slate-800 disabled:opacity-20 transition-all shadow-xl active:scale-95"
        >
          <Plus className="w-7 h-7" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-3 custom-scrollbar">
        {todos.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 opacity-40">
                <CheckCircle className="w-12 h-12 text-slate-400" />
            </div>
            <p className="font-bold text-slate-300 uppercase tracking-widest text-xs">Mission Accomplished</p>
          </div>
        ) : (
            todos.map(todo => (
            <div key={todo.id} className="group flex items-center gap-5 p-5 bg-white border border-slate-100 rounded-[1.5rem] hover:border-emerald-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
                <button onClick={() => toggleTodo(todo.id)} className="shrink-0 transition-transform active:scale-75">
                {todo.completed ? <CheckCircle className="w-8 h-8 text-emerald-500 drop-shadow-sm" /> : <Circle className="w-8 h-8 text-slate-100 group-hover:text-emerald-100 transition-colors" />}
                </button>
                <span className={`flex-1 font-bold text-lg transition-all ${todo.completed ? 'line-through text-slate-300' : 'text-slate-700'}`}>
                {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)} className="shrink-0 opacity-0 group-hover:opacity-100 text-slate-200 hover:text-red-500 hover:bg-red-50 p-2 rounded-xl transition-all">
                <Trash2 className="w-5 h-5" />
                </button>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

const NotesApp: React.FC = () => {
    const [notes, setNotes] = useState<NoteItem[]>([
        { id: '1', title: 'Kirchhoff Laws', content: 'KCL: Sum of currents = 0\nKVL: Sum of voltages = 0', timestamp: new Date() }
    ]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentNote, setCurrentNote] = useState<Partial<NoteItem>>({});

    const handleSave = () => {
        if (!currentNote.title || !currentNote.content) return;
        
        if (currentNote.id) {
             setNotes(notes.map(n => n.id === currentNote.id ? { ...n, title: currentNote.title!, content: currentNote.content!, timestamp: new Date() } : n));
        } else {
             setNotes([...notes, { id: Date.now().toString(), title: currentNote.title, content: currentNote.content, timestamp: new Date() }]);
        }
        setIsEditing(false);
        setCurrentNote({});
    };

    const deleteNote = (id: string) => {
        setNotes(notes.filter(n => n.id !== id));
    };

    if (isEditing) {
        return (
             <div className="w-full glass-card rounded-[3rem] p-10 max-w-2xl h-[650px] flex flex-col animate-in slide-in-from-right-8 shadow-2xl">
                 <div className="flex justify-between items-center mb-8">
                     <h2 className="text-2xl font-display font-black text-slate-800">Draft Note</h2>
                     <button onClick={() => setIsEditing(false)} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 px-4 py-2 rounded-xl hover:bg-slate-100 transition-all">Discard</button>
                 </div>
                 <input 
                    className="w-full text-3xl font-display font-black border-b-2 border-slate-100 pb-4 mb-8 focus:outline-none focus:border-brand-500 bg-transparent placeholder-slate-200 transition-all" 
                    placeholder="Subject Header"
                    value={currentNote.title || ''}
                    onChange={e => setCurrentNote({...currentNote, title: e.target.value})}
                 />
                 <textarea 
                    className="w-full flex-1 resize-none focus:outline-none text-slate-600 leading-[1.8] bg-transparent text-xl p-2 custom-scrollbar" 
                    placeholder="Log your theoretical findings here..."
                    value={currentNote.content || ''}
                    onChange={e => setCurrentNote({...currentNote, content: e.target.value})}
                 />
                 <div className="mt-8 flex justify-end">
                     <button onClick={handleSave} className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-[1.5rem] hover:bg-slate-800 font-black uppercase text-xs tracking-[0.2em] shadow-2xl active:scale-95 transition-all">
                         <Save className="w-5 h-5" /> Commit Note
                     </button>
                 </div>
             </div>
        );
    }

    return (
        <div className="w-full glass-card rounded-[3rem] p-10 max-w-2xl h-[650px] flex flex-col animate-in zoom-in-95 duration-300 shadow-2xl">
            <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-[1.5rem] flex items-center justify-center shadow-lg">
                       <StickyNote className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-display font-black text-slate-800 tracking-tight">Study Vault</h2>
                 </div>
                 <button onClick={() => setIsEditing(true)} className="flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-[1.2rem] hover:bg-slate-800 font-bold transition-all shadow-lg active:scale-95">
                     <Plus className="w-5 h-5" /> Create
                 </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto pb-6 pr-3 custom-scrollbar">
                {notes.map(note => (
                    <div key={note.id} className="bg-white border border-slate-100 p-8 rounded-[2rem] relative group hover:shadow-2xl hover:border-brand-100 transition-all cursor-pointer">
                         <h3 className="font-display font-black text-slate-900 text-lg mb-3 pr-8 truncate group-hover:text-brand-600 transition-colors">{note.title}</h3>
                         <p className="text-sm text-slate-500 line-clamp-3 whitespace-pre-wrap leading-relaxed">{note.content}</p>
                         <div className="mt-6 flex items-center justify-between">
                            <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest">{note.timestamp.toLocaleDateString()}</p>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setCurrentNote(note); setIsEditing(true); }}
                                    className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-600 transition-all"
                                >
                                    <Edit3 className="w-4 h-4" />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }} 
                                    className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-red-500 transition-all"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
