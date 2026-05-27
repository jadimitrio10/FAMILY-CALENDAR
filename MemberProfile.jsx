import { motion } from 'framer-motion';
import { Star, Flame, TrendingUp } from 'lucide-react';

export default function MemberProfile({ member, isActive, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        p-6 rounded-2xl cursor-pointer transition-all duration-300
        ${isActive
          ? `bg-gradient-to-br ${member.color} shadow-lg ring-4 ring-white`
          : 'bg-white shadow-card hover:shadow-soft border-2 border-gray-100'
        }
      `}
    >
      {/* Avatar */}
      <div className={`
        text-6xl mb-4 transition-transform duration-300
        ${isActive ? 'scale-110' : 'scale-100'}
      `}>
        {member.avatar}
      </div>

      {/* Nombre */}
      <h3 className={`
        text-xl font-bold mb-3 transition-colors
        ${isActive ? 'text-white' : 'text-gray-800'}
      `}>
        {member.name}
      </h3>

      {/* Estadísticas */}
      <div className={`space-y-2 text-sm font-semibold ${
        isActive ? 'text-white' : 'text-gray-700'
      }`}>
        {/* Puntos */}
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4" />
          <span>{member.points} pts</span>
        </div>

        {/* Nivel */}
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          <span>Nivel {member.level}</span>
        </div>

        {/* Racha */}
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-orange-400" />
          <span>{member.streak} días</span>
        </div>
      </div>

      {/* Barra de progreso diario */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
            Progreso hoy
          </span>
          <span className={`text-xs font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
            {member.dailyProgress}%
          </span>
        </div>
        <div className={`h-3 rounded-full overflow-hidden ${isActive ? 'bg-white/30' : 'bg-gray-200'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${member.dailyProgress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-full bg-gradient-to-r ${
              isActive
                ? 'from-white to-white/70'
                : 'from-blue-400 to-blue-500'
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}
