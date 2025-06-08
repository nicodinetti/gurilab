import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state) return null;
  const { score, total, level } = state;
  const isPerfect = score === total;
  return (
    <div className="text-center space-y-6 lg:space-y-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 p-4 lg:p-8">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-pink-600 drop-shadow mb-2 lg:mb-4">
        {isPerfect ? '¡Excelente! 🎉' : '¡Muy bien!'}
      </h2>
      <div className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2 lg:mb-4">
        ¡Obtuviste {score} de {total}!
      </div>
      <div className="flex justify-center space-x-2 lg:space-x-3 mb-4 lg:mb-6">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full border-2 lg:border-3 flex items-center justify-center text-lg lg:text-2xl ${i < score ? 'bg-yellow-300 border-yellow-500' : 'bg-gray-200 border-gray-400'}`}
          >{i < score ? '⭐️' : '🌑'}</div>
        ))}
      </div>
      <div className="mb-4 lg:mb-6 text-lg md:text-2xl lg:text-2xl text-green-700 font-semibold max-w-4xl text-center">
        {isPerfect ? '¡Respondiste todo perfecto! Sos un genio.' : '¡Seguí practicando para mejorar aún más!'}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
        <button
          className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 md:py-6 lg:py-6 px-8 md:px-12 lg:px-14 rounded-full text-lg md:text-2xl lg:text-2xl shadow-lg transition-transform transform hover:scale-110"
          onClick={() => navigate(`/play/${level}`)}
        >
          Volver a intentar
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 md:py-6 lg:py-6 px-8 md:px-12 lg:px-14 rounded-full text-lg md:text-2xl lg:text-2xl shadow-lg transition-transform transform hover:scale-110"
          onClick={() => navigate('/')}
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}
