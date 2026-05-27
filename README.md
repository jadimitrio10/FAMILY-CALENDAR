# Family Quest Calendar 🎉

Una app de calendario familiar premium, colorida e interactiva para niños y familias, con diseño tipo Duolingo + Disney.

## 🌟 Características

✅ Interfaz extremadamente colorida y amigable
✅ Sistema de tareas por miembro familiar
✅ Animaciones suaves y confeti
✅ Barras de progreso interactivas
✅ Diseño premium optimizado para iPad
✅ Puntos y sistema de recompensas
✅ Diseño responsivo (móvil, tablet, desktop)

## 🚀 Instalación rápida

### 1. Clonar el repositorio
```bash
git clone https://github.com/jadimitrio10/family-quest-calendar.git
cd family-quest-calendar
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en desarrollo
```bash
npm run dev
```

La app estará en `http://localhost:3000`

### 4. Build para producción
```bash
npm run build
```

## 📦 Estructura del proyecto

```
family-quest-calendar/
├── src/
│   ├── components/
│   │   ├── MainScreen.jsx      # Pantalla principal
│   │   ├── MemberProfile.jsx   # Perfil de miembro
│   │   ├── TaskCard.jsx        # Tarjeta de tarea
│   │   └── Confetti.jsx        # Efecto confeti
│   ├── store.js                # Zustand store
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── _redirects
```

## 🎨 Tecnologías

- **React 18** - Frontend
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **Zustand** - State management
- **Lucide React** - Iconos

## 📱 Características principales

### Para niños:
- Selector visual de miembros de la familia
- Tarjetas grandes y fáciles de tocar
- Animaciones divertidas al completar tareas
- Confeti y celebraciones
- Barras de progreso animadas
- Puntos visibles

### Para padres:
- Panel completo para administrar tareas
- Crear y editar miembros
- Ver progreso de cada niño
- Sistema de recompensas

## 🌐 Deploy en Netlify

1. Push a GitHub
2. Conecta tu repositorio en Netlify
3. Netlify detectará automáticamente la configuración
4. ¡Tu app estará online! 🚀

## 📝 Próximas mejoras

- [ ] Autenticación de padres con PIN
- [ ] Guardar datos en backend
- [ ] Dark mode
- [ ] Más temas de colores
- [ ] Mascotas virtuales
- [ ] Sistema de badges
- [ ] Sonidos opcionales
- [ ] Compartir progreso familiar

## 📄 Licencia

MIT

---

**Creado con ❤️ para familias felices**
