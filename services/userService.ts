
import { UserStats, DailyProgress } from '../types';

const STORAGE_KEY = 'k_preps_user_stats';

const getInitialStats = (): UserStats => {
    const today = new Date().toISOString().split('T')[0];
    return {
        focusTimeMinutes: 0,
        streakDays: 0,
        modulesCompleted: 0,
        totalModules: 45, // This can remain as a target
        globalRank: 0, // 0 indicates unranked
        weeklyProgress: [],
        lastLoginDate: today
    };
};

export const userService = {
  getStats: (): UserStats => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
          const initial = getInitialStats();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
          return initial;
        }
        return JSON.parse(stored);
    } catch (e) {
        console.error("Failed to load user stats", e);
        return getInitialStats();
    }
  },

  updateStats: (newStats: Partial<UserStats>): UserStats => {
    const current = userService.getStats();
    const updated = { ...current, ...newStats };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  recordActivity: (minutes: number) => {
    const stats = userService.getStats();
    const today = new Date().toISOString().split('T')[0];
    
    // Update daily progress
    let newWeeklyProgress = [...stats.weeklyProgress];
    const todayProgressIndex = newWeeklyProgress.findIndex(p => p.date === today);
    
    if (todayProgressIndex >= 0) {
      newWeeklyProgress[todayProgressIndex].minutesSpent += minutes;
    } else {
        newWeeklyProgress.push({ date: today, minutesSpent: minutes });
    }
    
    // Keep last 7 days sorted
    newWeeklyProgress = newWeeklyProgress
        .sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(-7);

    return userService.updateStats({
        focusTimeMinutes: stats.focusTimeMinutes + minutes,
        weeklyProgress: newWeeklyProgress
    });
  },
  
  checkStreak: () => {
      const stats = userService.getStats();
      const today = new Date().toISOString().split('T')[0];
      const lastLogin = stats.lastLoginDate;
      
      if (today === lastLogin) return stats; // Already logged in today
      
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterday = yesterdayDate.toISOString().split('T')[0];
      
      let newStreak = stats.streakDays;
      if (lastLogin === yesterday) {
          newStreak += 1;
      } else if (new Date(lastLogin) < yesterdayDate) {
          newStreak = 1; // Reset if missed a day
      }
      
      return userService.updateStats({ streakDays: newStreak, lastLoginDate: today });
  }
};
