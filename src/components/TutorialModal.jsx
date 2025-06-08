import { useState, useEffect } from 'react';
import mascot from '../data/mascot.svg';

export default function TutorialModal({ onClose }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('tutorialSeen')) {
      setShow(true);
    }
  }, []);
  const handleClose = () => {
    localStorage.setItem('tutorialSeen', '1');
    setShow(false);
    if (onClose) onClose();
  };
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <img src={mascot} alt="Mascota" className="w-24 h-24 mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold mb-2 text-pink-600">¿Cómo jugar?</h2>
        <ul className="text-lg text-blue-800 mb-4 space-y-2 text-left">
          <li>• Vas a ver preguntas divertidas de matemática.</li>
          <li>• Elegí la respuesta correcta entre las opciones.</li>
          <li>• ¡Sumá puntos por cada respuesta correcta!</li>
          <li>• ¡Intentá acertar todas!</li>
        </ul>
        <button
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full text-xl shadow-lg mt-2"
          onClick={handleClose}
        >
          ¡Entendido!
        </button>
      </div>
    </div>
  );
}
