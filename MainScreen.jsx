import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store';
import MemberProfile from './MemberProfile';
import TaskCard from './TaskCard';
import Confetti from './Confetti';
import { ChevronRight, Star, Flame } from 'lucide-react';

export default function MainScreen() {
  const { familyMembers, tasks, toggleTaskCompletion } = useStore();
  const [selectedMemberId, setSelectedMemberId] = useState(familyMembers[0]?.id);
  const [showConfetti, setShowConfetti] = useState(false);

  const selectedMember = familyMembers.find((m) => m.id === selectedMemberId);
  const memberTasks = tasks.filter((t) => t.memberId === selectedMemberId);

  const groupedTasks = {
    Morning: memberTasks.filter((t) => t.category === 'Morning'),
    Afternoon: memberTasks.filter((t) => t.category === 'Afternoon'),
    Evening: memberTasks.filter((t) => t.category === 'Evening'),
    Chores: memberTasks.filter((t) => t.category === 'Chores'),
  };

  const handleTaskToggle = (taskId) => {
    toggleTaskCompletion(taskId);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const completedCount = memberTasks.filter((t) => t.completed).length;
  const totalCount = memberTasks.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-8">
      {showConfetti && <Confetti />}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50 py-4"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Family Quest Calendar
              </h1>
              <p className="text-gray-600 text-sm mt-1">¡Completa tus misiones diarias! 🚀</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-blue-600">{completedCount}/{totalCount}</div>
              <p className="text-xs text-gray-600 mt-1">Tareas completadas</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Selector de miembros - Grid de 2 columnas en móvil, más en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {familyMembers.map((member) => (
            <MemberProfile
              key={member.id}
              member={member}
              isActive={selectedMemberId === member.id}
              onClick={() => setSelectedMemberId(member.id)}
            />
          ))}
        </div>

        {/* Panel de tareas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMemberId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Header del miembro */}
            <div className="text-center py-8">
              <div className="text-8xl mb-4">{selectedMember?.avatar}</div>
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                {selectedMember?.name}
              </h2>
              
              {/* Barra de progreso grande */}
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-bold text-gray-700">Progreso de hoy</span>
                    <span className="text-3xl font-black text-blue-600">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="h-4 rounded-full overflow-hidden bg-gray-200 shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    />
                  </div>
                </div>

                {/* Estadísticas rápidas */}
                <div className="flex gap-4 justify-center mt-6">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-card flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-xs text-gray-600">Puntos</div>
                      <div className="font-bold text-lg">{selectedMember?.points}</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl px-4 py-3 shadow-card flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <div>
                      <div className="text-xs text-gray-600">Racha</div>
                      <div className="font-bold text-lg">{selectedMember?.streak}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tareas por categoría */}
            {Object.entries(groupedTasks).map(([category, categoryTasks]) => (
              categoryTasks.length > 0 && (
                <div key={category}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">
                      {category === 'Morning' && '🌅'}
                      {category === 'Afternoon' && '☀️'}
                      {category === 'Evening' && '🌙'}
                      {category === 'Chores' && '🧹'}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{category}</h3>
                    <div className="ml-auto text-sm font-bold text-gray-600">
                      {categoryTasks.filter((t) => t.completed).length}/{categoryTasks.length}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {categoryTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onToggle={handleTaskToggle}
                        memberColor={selectedMember?.color}
                      />
                    ))}
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
