import { useNavigate } from 'react-router-dom';
import exerciseLoader from '../data/exercises/index.js';

export default function SubjectSelect() {
  const navigate = useNavigate();

  const handleSubjectSelect = (subjectKey) => {
    localStorage.setItem('selectedSubject', subjectKey);
    navigate('/age');
  };

  const subjects = [
    { key: 'math', name: 'Matemáticas', emoji: '📚', color: 'from-green-400 to-green-600', available: true },
    { key: 'art', name: 'Arte', emoji: '🎨', color: 'from-purple-400 to-purple-600', available: false },
    { key: 'geography', name: 'Geografía', emoji: '🌍', color: 'from-blue-400 to-blue-600', available: false }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-4 lg:p-8">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-6 lg:mb-8 text-center">¿Qué materia quieres practicar?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
        {subjects.map((subject) => (
          <button
            key={subject.key}
            disabled={!subject.available}
            className={`
              ${subject.available
                ? `bg-gradient-to-r ${subject.color} hover:scale-110 shadow-lg cursor-pointer`
                : 'bg-gray-300 cursor-not-allowed opacity-60'
              }
              text-white font-bold py-6 md:py-8 lg:py-8 px-8 md:px-12 lg:px-12 rounded-2xl lg:rounded-2xl
              text-xl md:text-3xl lg:text-3xl transition-transform transform
              min-h-[120px] md:min-h-[150px] lg:min-h-[160px] flex flex-col items-center justify-center gap-2 lg:gap-3
            `}
            onClick={() => subject.available && handleSubjectSelect(subject.key)}
          >
            <span className="text-3xl md:text-5xl lg:text-5xl">{subject.emoji}</span>
            <span>{subject.name}</span>
            {!subject.available && (
              <span className="text-sm md:text-lg lg:text-lg text-gray-600">¡Próximamente! 🚧</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
