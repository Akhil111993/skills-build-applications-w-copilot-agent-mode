export const users = [
    { id: 1, username: 'alex', email: 'alex@octofit.app', role: 'admin', fitnessGoal: 'Build endurance' },
    { id: 2, username: 'sam', email: 'sam@octofit.app', role: 'member', fitnessGoal: 'Improve strength' },
    { id: 3, username: 'maya', email: 'maya@octofit.app', role: 'member', fitnessGoal: 'Mobility and recovery' },
];
export const teams = [
    { id: 1, name: 'Trail Blazers', members: ['alex', 'sam'], challenge: 'Weekly distance challenge' },
    { id: 2, name: 'Core Crew', members: ['maya'], challenge: 'Consistency streak' },
];
export const activities = [
    { id: 1, userId: 1, type: 'run', durationMinutes: 35, caloriesBurned: 420, date: '2026-08-22' },
    { id: 2, userId: 2, type: 'workout', durationMinutes: 50, caloriesBurned: 510, date: '2026-08-22' },
    { id: 3, userId: 3, type: 'cycling', durationMinutes: 40, caloriesBurned: 390, date: '2026-08-20' },
];
export const leaderboard = [
    { id: 1, userId: 1, username: 'alex', score: 980, rank: 1 },
    { id: 2, userId: 2, username: 'sam', score: 910, rank: 2 },
    { id: 3, userId: 3, username: 'maya', score: 860, rank: 3 },
];
export const workouts = [
    { id: 1, title: 'HIIT Circuit', durationMinutes: 25, difficulty: 'intermediate', focusArea: 'Full body', equipment: ['mat', 'dumbbells'] },
    { id: 2, title: 'Recovery Mobility', durationMinutes: 20, difficulty: 'beginner', focusArea: 'Mobility', equipment: ['mat'] },
    { id: 3, title: 'Tempo Run', durationMinutes: 45, difficulty: 'advanced', focusArea: 'Cardio', equipment: ['running shoes'] },
];
