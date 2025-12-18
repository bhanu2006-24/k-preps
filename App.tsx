import React, { useState } from 'react';
import { LayoutDashboard, FolderOpen, Brain, PenTool, Bot, Menu, X, UserCircle, LogOut } from 'lucide-react';
import { ViewState } from './types';
import { DashboardPage } from './pages/DashboardPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PracticeArena } from './pages/PracticeArena';
import { ToolsPage } from './pages/Tools';
import { SmartBotPage } from './pages/SmartBotPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState; icon: any; label: string }) => (
    <button
      onClick={() => {
        setCurrentView(view);
        setMobileMenuOpen(false);
      }}
      className={`group flex items-center gap-3 px-4 py-3.5 w-full rounded-xl transition-all duration-200 ${
        currentView === view
          ? 'bg-brand-600 text-white shadow-lg shadow-brand-200'
          : 'text-slate-500 hover:bg-white hover:text-slate-900 hover:shadow-sm'
      }`}
    >
      <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${currentView === view ? 'text-white' : 'text-slate-400 group-hover:text-brand-500'}`} />
      <span className="font-medium">{label}</span>
      {currentView === view && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      )}
    </button>
  );

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD: return <DashboardPage />;
      case ViewState.RESOURCES: return <ResourcesPage />;
      case ViewState.PRACTICE: return <PracticeArena />;
      case ViewState.TOOLS: return <ToolsPage />;
      case ViewState.TUTOR: return <SmartBotPage />;
      default: return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-72 glass border-r border-slate-200/60 p-5 z-20">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200 text-white">
            <span className="font-display font-bold text-xl">K</span>
          </div>
          <div>
            <span className="font-display text-xl font-bold text-slate-900 tracking-tight block">K-Preps</span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Student Companion</span>
          </div>
        </div>
        
        <nav className="space-y-2 flex-1">
          <NavItem view={ViewState.DASHBOARD} icon={LayoutDashboard} label="Dashboard" />
          <NavItem view={ViewState.RESOURCES} icon={FolderOpen} label="Library" />
          <NavItem view={ViewState.PRACTICE} icon={Brain} label="Practice Arena" />
          <NavItem view={ViewState.TOOLS} icon={PenTool} label="Tools" />
          <NavItem view={ViewState.TUTOR} icon={Bot} label="Smart Tutor" />
        </nav>

        {/* User Profile Snippet */}
        <div className="mt-auto pt-6 border-t border-slate-200/60">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-slate-100 hover:border-brand-200 transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
               <UserCircle className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-800 truncate">Student User</p>
              <p className="text-xs text-slate-500 truncate">Sem 3 • ECE</p>
            </div>
            <LogOut className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full glass z-50 px-4 py-3 flex items-center justify-between border-b border-slate-200/60">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">K</span>
          </div>
          <span className="text-lg font-bold text-slate-900 font-display">K-Preps</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600 active:bg-slate-100 rounded-lg">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-slate-900/40 z-40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-[60px] left-0 w-full glass-card rounded-b-2xl p-4 space-y-2 animate-in slide-in-from-top-4 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <NavItem view={ViewState.DASHBOARD} icon={LayoutDashboard} label="Dashboard" />
            <NavItem view={ViewState.RESOURCES} icon={FolderOpen} label="Library" />
            <NavItem view={ViewState.PRACTICE} icon={Brain} label="Practice Arena" />
            <NavItem view={ViewState.TOOLS} icon={PenTool} label="Tools" />
            <NavItem view={ViewState.TUTOR} icon={Bot} label="Smart Tutor" />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto w-full relative">
        <div className="h-full p-4 md:p-8 pt-20 md:pt-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;