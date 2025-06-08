import mascot from '../data/mascot.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TutorialModal from './TutorialModal.jsx';

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const audio = new Audio('/sounds/welcome.mp3');
    audio.play();
    return () => audio.pause();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-yellow-100 to-blue-200 p-4 lg:p-8">
      <TutorialModal />
      <img src={mascot} alt="Mascota" className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 lg:mb-8 animate-bounce" />
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-pink-600 drop-shadow mb-4 lg:mb-6 font-sans text-center">¡Bienvenido a Gurilab!</h1>
      <p className="text-lg md:text-2xl lg:text-2xl text-blue-700 mb-6 lg:mb-8 font-semibold text-center">Aprendé jugando y divertite estudiando</p>
      <button
        className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 md:py-6 lg:py-6 px-8 md:px-12 lg:px-14 rounded-full text-xl md:text-3xl lg:text-3xl shadow-lg transition-transform transform hover:scale-110 animate-pulse"
        onClick={() => navigate('/subject')}
      >
        ¡Empezar a jugar!
      </button>
    </div>
  );
}
