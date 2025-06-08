import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import exerciseLoader from '../data/exercises/index.js';

const funMessages = [
  "¡Uy! 🚧 Los ejercicios para este año están en construcción. ¡Volvé pronto!",
  "¡Ups! 🎯 Este nivel está en el taller de diversión. ¡Pronto estará listo!",
  "¡Mmm! 🛠️ Los duendecitos están preparando ejercicios súper divertidos para vos!",
  "¡Epa! 🎪 Este año escolar se está llenando de magia educativa. ¡Esperá un poquito!",
  "¡Che! 🎨 Los artistas están pintando ejercicios geniales para este nivel. ¡Paciencia!"
];

export default function AgeSelect() {
  const navigate = useNavigate();
  const [schoolYears, setSchoolYears] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAvailableYears = () => {
      try {
        const selectedSubject = localStorage.getItem('selectedSubject') || 'math';

        console.log('Cargando años disponibles para:', selectedSubject);

        // Usar el nuevo sistema síncrono
        const years = exerciseLoader.getAvailableYears(selectedSubject);

        console.log('Años cargados:', years);
        setSchoolYears(years);
      } catch (error) {
        console.error('Error cargando años disponibles:', error);
        // Fallback manual para matemáticas
        setSchoolYears([
          { name: 'Prep', available: false },
          { name: 'Primero', available: false },
          { name: 'Segundo', available: true },
          { name: 'Tercero', available: false },
          { name: 'Cuarto', available: false },
          { name: 'Quinto', available: true },
          { name: 'Sexto', available: false },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadAvailableYears();
  }, []);

  const handleYearSelect = (year) => {
    if (year.available) {
      const level = exerciseLoader.yearToLevel[year.name];
      localStorage.setItem('selectedLevel', level);
      localStorage.setItem('selectedYear', year.name.toLowerCase());
      console.log(`Seleccionado: ${year.name} (nivel ${level})`);
      navigate('/type');
    } else {
      const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
      setModalMessage(randomMessage);
      setShowModal(true);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl font-bold text-blue-600">Cargando años disponibles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 p-4 lg:p-8">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-6 lg:mb-8 text-center">¿En qué año estás?</h2>

      {/* Mostrar años disponibles */}
      <div className="mb-4 text-center">
        <p className="text-lg md:text-xl lg:text-xl text-green-600 font-semibold">
          ✨ Disponibles: {schoolYears.filter(y => y.available).map(y => y.name).join(', ')} ✨
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl">
        {schoolYears.map((year) => (
          <button
            key={year.name}
            className={`
              ${year.available
                ? 'bg-gradient-to-r from-pink-400 to-pink-600 hover:scale-110 shadow-lg'
                : 'bg-gray-300 hover:bg-gray-400'
              }
              text-white font-bold py-4 md:py-6 lg:py-6 px-4 md:px-6 lg:px-8 rounded-xl lg:rounded-xl
              text-lg md:text-2xl lg:text-2xl transition-transform transform
              min-h-[80px] md:min-h-[100px] lg:min-h-[100px] flex items-center justify-center
            `}
            onClick={() => handleYearSelect(year)}
          >
            {year.available ? '✨' : '🔒'} {year.name}
          </button>
        ))}
      </div>

      {/* Modal de mensaje divertido */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-6 lg:p-8 max-w-md lg:max-w-xl text-center shadow-2xl">
            <p className="text-lg md:text-2xl lg:text-2xl font-bold text-purple-600 mb-4 lg:mb-6">
              {modalMessage}
            </p>
            <button
              className="bg-gradient-to-r from-purple-400 to-pink-500 hover:bg-purple-600 text-white font-bold py-3 md:py-4 lg:py-4 px-6 md:px-8 lg:px-10 rounded-xl lg:rounded-xl text-lg md:text-xl lg:text-xl shadow-lg transition-transform transform hover:scale-105"
              onClick={() => setShowModal(false)}
            >
              ¡Entendido! 😊
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
