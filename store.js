import { create } from 'zustand';

const useStore = create((set) => ({
  // Familia
  familyMembers: [
    {
      id: 1,
      name: 'Sofia',
      role: 'Niña',
      color: 'from-blue-400 to-blue-500',
      avatar: '👧',
      points: 250,
      level: 3,
      streak: 5,
      dailyProgress: 75,
    },
    {
      id: 2,
      name: 'Lucas',
      role: 'Niño',
      color: 'from-green-400 to-green-500',
      avatar: '👦',
      points: 180,
      level: 2,
      streak: 3,
      dailyProgress: 60,
    },
    {
      id: 3,
      name: 'Mamá',
      role: 'Madre',
      color: 'from-pink-400 to-pink-500',
      avatar: '👩',
      points: 500,
      level: 5,
      streak: 10,
      dailyProgress: 90,
    },
  ],

  // Tareas
  tasks: [
    // Sofia - Morning
    {
      id: 1,
      memberId: 1,
      name: 'Cepillarse los dientes',
      category: 'Morning',
      icon: '🪥',
      points: 10,
      completed: true,
      dueTime: '07:00',
      difficulty: 'easy',
    },
    {
      id: 2,
      memberId: 1,
      name: 'Hacer la cama',
      category: 'Morning',
      icon: '🛏️',
      points: 15,
      completed: true,
      dueTime: '07:30',
      difficulty: 'easy',
    },
    {
      id: 3,
      memberId: 1,
      name: 'Desayunar',
      category: 'Morning',
      icon: '🥣',
      points: 10,
      completed: false,
      dueTime: '08:00',
      difficulty: 'easy',
    },
    // Sofia - Afternoon
    {
      id: 4,
      memberId: 1,
      name: 'Tarea de matemáticas',
      category: 'Afternoon',
      icon: '📐',
      points: 30,
      completed: false,
      dueTime: '16:00',
      difficulty: 'medium',
    },
    {
      id: 5,
      memberId: 1,
      name: 'Leer 20 minutos',
      category: 'Afternoon',
      icon: '📚',
      points: 20,
      completed: false,
      dueTime: '17:00',
      difficulty: 'medium',
    },
    // Sofia - Evening
    {
      id: 6,
      memberId: 1,
      name: 'Ducha',
      category: 'Evening',
      icon: '🚿',
      points: 15,
      completed: false,
      dueTime: '20:00',
      difficulty: 'easy',
    },
    {
      id: 7,
      memberId: 1,
      name: 'Pijama y cama',
      category: 'Evening',
      icon: '😴',
      points: 10,
      completed: false,
      dueTime: '21:00',
      difficulty: 'easy',
    },
    // Sofia - Chores
    {
      id: 8,
      memberId: 1,
      name: 'Ordenar el cuarto',
      category: 'Chores',
      icon: '🧹',
      points: 25,
      completed: false,
      dueTime: '18:00',
      difficulty: 'medium',
    },

    // Lucas - Morning
    {
      id: 9,
      memberId: 2,
      name: 'Cepillarse los dientes',
      category: 'Morning',
      icon: '🪥',
      points: 10,
      completed: false,
      dueTime: '07:00',
      difficulty: 'easy',
    },
    {
      id: 10,
      memberId: 2,
      name: 'Hacer la cama',
      category: 'Morning',
      icon: '🛏️',
      points: 15,
      completed: false,
      dueTime: '07:30',
      difficulty: 'easy',
    },
    // Lucas - Afternoon
    {
      id: 11,
      memberId: 2,
      name: 'Tarea de español',
      category: 'Afternoon',
      icon: '✏️',
      points: 30,
      completed: true,
      dueTime: '16:00',
      difficulty: 'medium',
    },
    {
      id: 12,
      memberId: 2,
      name: 'Practicar guitarra',
      category: 'Afternoon',
      icon: '🎸',
      points: 25,
      completed: true,
      dueTime: '17:00',
      difficulty: 'hard',
    },
    // Lucas - Chores
    {
      id: 13,
      memberId: 2,
      name: 'Alimentar la mascota',
      category: 'Chores',
      icon: '🐕',
      points: 20,
      completed: false,
      dueTime: '18:00',
      difficulty: 'easy',
    },
  ],

  // Recompensas disponibles
  rewards: [
    {
      id: 1,
      name: '30 min de pantalla',
      icon: '📱',
      points: 50,
      color: 'from-blue-400 to-blue-500',
    },
    {
      id: 2,
      name: 'Elegir película',
      icon: '🍿',
      points: 75,
      color: 'from-pink-400 to-pink-500',
    },
    {
      id: 3,
      name: 'Postre especial',
      icon: '🍰',
      points: 40,
      color: 'from-yellow-400 to-yellow-500',
    },
    {
      id: 4,
      name: 'Salida al parque',
      icon: '🌳',
      points: 100,
      color: 'from-green-400 to-green-500',
    },
    {
      id: 5,
      name: 'Noche de juegos',
      icon: '🎮',
      points: 80,
      color: 'from-purple-400 to-purple-500',
    },
  ],

  // Actions
  toggleTaskCompletion: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),

  addFamilyMember: (member) =>
    set((state) => ({
      familyMembers: [...state.familyMembers, member],
    })),

  updateFamilyMember: (id, updates) =>
    set((state) => ({
      familyMembers: state.familyMembers.map((member) =>
        member.id === id ? { ...member, ...updates } : member
      ),
    })),

  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),

  deleteFamilyMember: (id) =>
    set((state) => ({
      familyMembers: state.familyMembers.filter((member) => member.id !== id),
    })),
}));

export default useStore;
