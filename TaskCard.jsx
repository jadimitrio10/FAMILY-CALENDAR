import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

export default function TaskCard({ task, onToggle, memberColor }) {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'from-green-100 to-green-50 border-green-200';
      case 'medium':
        return 'from-yellow-100 to-yellow-50 border-yellow-200';
      case 'hard':
        return 'from-red-100 to-red-50 border-red-200';
      default:
        return 'from-blue-100 to-blue-50 border-blue-200';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Morning: 'bg-orange-100 text-orange-700',
      Afternoon: 'bg-blue-100 text-blue-700',
      Evening: 'bg-purple-100 text-purple-700',
      Chores: 'bg-green-100 text-green-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => onToggle(task.id)}
      className={`
        p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300
        ${getDifficultyColor(task.difficulty)}
        ${task.completed ? 'task-card-completed shadow-md' : 'card-gradient shadow-card hover:shadow-soft'}
      `}
    >
      <div className="flex items-center justify-between gap-3">
        {/* Izquierda: Icono y contenido */}
        <div className="flex items-center gap-3 flex-1">
          <div className="text-4xl flex-shrink-0">{task.icon}</div>
          <div className="flex-1 min-w-0">
            <h3
              className={`font-bold text-lg ${
                task.completed
                  ? 'line-through text-gray-500'
                  : 'text-gray-800'
              }`}
            >
              {task.name}
            </h3>
            <div className="flex gap-2 mt-2 flex-wrap">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(task.category)}`}>
                {task.category}
              </span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                ⭐ {task.points} pts
              </span>
            </div>
            {task.dueTime && (
              <p className="text-xs text-gray-600 mt-2">🕐 {task.dueTime}</p>
            )}
          </div>
        </div>

        {/* Derecha: Botón de completar */}
        <div className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            {task.completed ? (
              <CheckCircle2 className="w-10 h-10 text-green-500 drop-shadow-lg" />
            ) : (
              <Circle className="w-10 h-10 text-gray-400 hover:text-blue-400 transition-colors" />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
