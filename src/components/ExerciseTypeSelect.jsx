import mascot from '../data/mascot.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import exerciseLoader from '../data/exercises/index.js';

export default function ExerciseTypeSelect() {
  const navigate = useNavigate();
  const [exerciseTypes, setExerciseTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAvailableTypes = () => {
      try {
        const selectedSubject = localStorage.getItem('selectedSubject') || 'math';
        const selectedYear = localStorage.getItem('selectedYear') || 'segundo';

        console.log('Cargando tipos para:', { selectedSubject, selectedYear });

        const allTypes = [
          { type: 'addition', name: 'Sumas', emoji: '➕', color: 'from-red-400 to-pink-500' },
          { type: 'subtraction', name: 'Restas', emoji: '➖', color: 'from-blue-400 to-blue-600' },
          { type: 'multiplication', name: 'Multiplicaciones', emoji: '✖️', color: 'from-green-400 to-green-600' },
          { type: 'division', name: 'Divisiones', emoji: '➗', color: 'from-purple-400 to-purple-600' },
        ];

        // Verificar disponibilidad de cada tipo usando el sistema síncrono
        const typesWithAvailability = allTypes.map((typeInfo) => {
          const available = exerciseLoader.hasExercises(
            selectedSubject,
            selectedYear,
            typeInfo.type
          );
          return { ...typeInfo, available };
        });

        console.log('Tipos con disponibilidad:', typesWithAvailability);
        setExerciseTypes(typesWithAvailability);
      } catch (error) {
        console.error('Error cargando tipos de ejercicios:', error);
        // Fallback: solo sumas disponibles
        setExerciseTypes([
          { type: 'addition', name: 'Sumas', emoji: '➕', color: 'from-red-400 to-pink-500', available: true },
          { type: 'subtraction', name: 'Restas', emoji: '➖', color: 'from-blue-400 to-blue-600', available: false },
          { type: 'multiplication', name: 'Multiplicaciones', emoji: '✖️', color: 'from-green-400 to-green-600', available: false },
          { type: 'division', name: 'Divisiones', emoji: '➗', color: 'from-purple-400 to-purple-600', available: false },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadAvailableTypes();
  }, []);

  const handleTypeSelect = (typeInfo) => {
    if (typeInfo.available) {
      localStorage.setItem('selectedExerciseType', typeInfo.type);
      const level = localStorage.getItem('selectedLevel');
      navigate(`/play/${level}`);
    } else {
      alert('¡Ups! 🚧 Este tipo de ejercicio estará disponible muy pronto. ¡Probá con Sumas por ahora!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-xl font-bold text-orange-600">Cargando tipos de ejercicios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 p-4 lg:p-8">
      <img src={mascot} alt="Mascota" className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-6 lg:mb-8 animate-bounce" />
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-700 mb-6 lg:mb-8 text-center">¿Qué tipo de ejercicio querés hacer?</h2>

      {/* Mostrar tipos disponibles */}
      <div className="mb-4 text-center">
        <p className="text-lg md:text-xl lg:text-xl text-green-600 font-semibold">
          ✨ Disponibles: {exerciseTypes.filter(t => t.available).map(t => t.name).join(', ')} ✨
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-6 max-w-6xl">
        {exerciseTypes.map((typeInfo) => (
          <button
            key={typeInfo.type}
            disabled={!typeInfo.available}
            className={`
              ${typeInfo.available
                ? `bg-gradient-to-br ${typeInfo.color} hover:scale-110 shadow-lg cursor-pointer`
                : 'bg-gray-300 cursor-not-allowed opacity-60'
              }
              text-white font-bold py-6 md:py-8 lg:py-8 px-6 md:px-8 lg:px-10 rounded-2xl lg:rounded-2xl
              text-lg md:text-2xl lg:text-2xl transition-transform transform
              min-h-[120px] md:min-h-[150px] lg:min-h-[160px] flex flex-col items-center justify-center gap-2 lg:gap-3
            `}
            onClick={() => handleTypeSelect(typeInfo)}
          >
            <span className="text-3xl md:text-4xl lg:text-4xl">
              {typeInfo.available ? typeInfo.emoji : '🔒'}
            </span>
            <span className="text-center">{typeInfo.name}</span>
            {!typeInfo.available && (
              <span className="text-sm md:text-lg lg:text-lg text-gray-500">Próximamente</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
