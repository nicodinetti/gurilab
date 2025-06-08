import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultScreen() {
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state) return null;
  const { score, total, level } = state;
  return (
    <div className="text-center space-y-6">
      <h2 className="text-2xl font-semibold">You got {score} out of {total}!</h2>
      <div className="flex justify-center space-x-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full ${i < score ? 'bg-yellow-400' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        onClick={() => navigate(`/play/${level}`)}
      >
        Retry Level
      </button>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded-lg ml-2"
        onClick={() => navigate('/')}
      >
        Go Home
      </button>
    </div>
  );
}
