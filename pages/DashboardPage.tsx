
import React, { useState, useEffect } from 'react';
import { Clock, Zap, CheckCircle2, Trophy, BarChart3, TrendingUp, Calendar } from 'lucide-react';
import { Subject, UserStats } from '../types';
import { subjects, resources } from '../data/index';
import { SubjectCard } from '../components/dashboard/SubjectCard';
import { SubjectDetail } from '../components/dashboard/SubjectDetail';
import { userService } from '../services/userService';

export const DashboardPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    // Initialize/Update stats on load
    const currentStats = userService.checkStreak();
    setStats(currentStats);
  }, []);

  if (selectedSubject) {
    const subjectResources = resources.filter(r => r.subjectId === selectedSubject.id);
    return (
      <SubjectDetail 
        subject={selectedSubject} 
        resources={subjectResources} 
        onBack={() => setSelectedSubject(null)} 
      />
    );
  }

  const ActivityChart = () => {
    if (!stats) return null;

    const maxMinutes = Math.max(...stats.weeklyProgress.map(p => p.minutesSpent), 60); // Minimum 60m scale

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-brand-500" />
            Weekly Progress
            </h3>
            <select className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-none outline-none p-1 rounded">
            <option>Last 7 Days</option>
            </select>
        </div>
        <div className="flex items-end justify-between h-40 gap-2">
            {stats.weeklyProgress.map((day, i) => {
               const heightPercent = Math.min((day.minutesSpent / maxMinutes) * 100, 100);
               const dayLabel = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' });
               
               return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                    <div 
                    className="w-full bg-brand-100 rounded-t-lg relative overflow-hidden transition-all duration-500 group-hover:bg-brand-500" 
                    style={{ height: `${heightPercent}%` }}
                    title={`${day.minutesSpent} mins`}
                    >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">
                    {dayLabel}
                    </span>
                </div>
            )})}
        </div>
        </div>
    );
  };

  const StatCard = ({ icon: Icon, label, value, color, trend }: any) => (
    <div className="glass-card p-5 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
      <div className="flex justify-between items-start">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} shadow-lg transition-transform group-hover:scale-110`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
           <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
             <TrendingUp className="w-3 h-3" /> {trend}
           </span>
        )}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-display font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
           <div className="w-16 h-16 rounded-3xl bg-brand-600 flex items-center justify-center text-white shadow-xl shadow-brand-100 text-2xl font-bold font-display">
             S
           </div>
           <div>
              <h1 className="text-3xl font-display font-bold text-slate-900 leading-tight">
                Hey, <span className="text-brand-600">Scholar!</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                <Calendar className="w-4 h-4" />
                <span>Semester 3 • Exam in 14 Days</span>
              </div>
           </div>
        </div>
        <div className="flex gap-2">
          <div className="text-sm font-bold text-brand-600 bg-brand-50 px-4 py-2.5 rounded-2xl border border-brand-100 flex items-center gap-2 shadow-sm">
            <Zap className="w-4 h-4 fill-brand-600" /> Lv. 5
          </div>
        </div>
      </div>

      {/* Stats and Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-4">
          <StatCard 
            icon={Clock} 
            label="Focus Time" 
            value={stats ? `${(stats.focusTimeMinutes / 60).toFixed(1)}h` : "..."} 
            color="bg-blue-500" 
            trend="+12%" 
          />
          <StatCard 
            icon={Zap} 
            label="Daily Streak" 
            value={stats ? `${stats.streakDays} Days` : "..."} 
            color="bg-orange-500" 
          />
          <StatCard 
            icon={CheckCircle2} 
            label="Modules Done" 
            value={stats ? `${stats.modulesCompleted}/${stats.totalModules}` : "..."} 
            color="bg-emerald-500" 
            trend="+5" 
          />
          <StatCard 
            icon={Trophy} 
            label="Global Rank" 
            value={stats ? `#${stats.globalRank}` : "..."} 
            color="bg-purple-500" 
          />
        </div>
        <ActivityChart />
      </div>

      {/* Subjects Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
            Active Courses
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-tighter">
              {subjects.length} Total
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(subject => (
            <SubjectCard 
              key={subject.id} 
              subject={subject} 
              onClick={() => setSelectedSubject(subject)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
