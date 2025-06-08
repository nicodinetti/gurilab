import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Gurilab</h1>
      <button
        className="bg-blue-500 text-white py-3 px-6 rounded-lg text-xl"
        onClick={() => navigate('/levels')}
      >
        Start
      </button>
    </div>
  );
}
