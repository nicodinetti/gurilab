import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import exerciseLoader from '../data/exercises/index.js';
import QuestionCard from './QuestionCard.jsx';

const successSound = new Audio('/sounds/success.mp3');
const errorSound = new Audio('/sounds/error.mp3');

export default function ExerciseSession() {
  const { level } = useParams();
  const navigate = useNavigate();

  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const loadExercises = () => {
      try {
        const selectedSubject = localStorage.getItem('selectedSubject') || 'math';
        const selectedYear = localStorage.getItem('selectedYear') || 'segundo';
        const selectedExerciseType = localStorage.getItem('selectedExerciseType') || 'addition';

        console.log('Cargando ejercicios:', { selectedSubject, selectedYear, selectedExerciseType });

        const loadedExercises = exerciseLoader.loadExercises(
          selectedSubject,
          selectedYear,
          selectedExerciseType
        );

        console.log('Ejercicios cargados:', loadedExercises);

        if (loadedExercises.length === 0) {
          console.warn('No se encontraron ejercicios para los parámetros seleccionados');
          setExercises([]);
        } else {
          setExercises(loadedExercises);
        }
      } catch (error) {
        console.error('Error cargando ejercicios:', error);
        setExercises([]);
      } finally {
        setLoading(false);
      }
    };

    loadExercises();
  }, [level]);

  const handleAnswer = (answer) => {
    setSelected(answer);
    setShowAnswer(true);

    const currentQuestion = exercises[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.answer;

    if (isCorrect) {
      setScore(score + 1);
      successSound.play().catch(() => {});
    } else {
      errorSound.play().catch(() => {});
    }

    setTimeout(() => {
      if (currentQuestionIndex < exercises.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelected(null);
        setShowAnswer(false);
      } else {
        navigate('/results', {
          state: {
            score: isCorrect ? score + 1 : score,
            total: exercises.length,
            level
          }
        });
      }
    }, 2000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-xl font-bold text-purple-600">Cargando ejercicios divertidos...</p>
        </div>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-pink-100 p-4">
        <div className="text-center bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">¡Ups! 😅</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            No hay ejercicios disponibles para esta selección.
          </p>
          <button
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-3 px-6 rounded-xl text-lg hover:scale-105 transition-transform"
            onClick={() => navigate('/subject')}
          >
            Volver a Materias
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = exercises[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4 lg:p-8">
      <div className="mb-4 lg:mb-6 text-center">
        <p className="text-lg md:text-2xl lg:text-2xl font-bold text-purple-600">
          Pregunta {currentQuestionIndex + 1} de {exercises.length}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 lg:h-3 mt-2 max-w-md mx-auto">
          <div
            className="bg-purple-600 h-2 lg:h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestionIndex + 1) / exercises.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        handleAnswer={handleAnswer}
        selected={selected}
        correctAnswer={showAnswer ? currentQuestion.answer : null}
      />

      {showAnswer && currentQuestion.explanation && (
        <div className="mt-4 lg:mt-6 bg-white bg-opacity-90 rounded-2xl p-4 lg:p-6 max-w-2xl text-center">
          <p className="text-lg md:text-xl lg:text-xl text-green-600 font-bold">
            💡 {currentQuestion.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
