import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/exercises.json';
import QuestionCard from './QuestionCard.jsx';

const successSound = new Audio('/sounds/success.mp3');
const errorSound = new Audio('/sounds/error.mp3');

export default function ExerciseSession() {
  const { level } = useParams();
  const navigate = useNavigate();
  const exercises = data.filter((q) => q.level === Number(level));

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const question = exercises[current];

  useEffect(() => {
    setSelected(null);
    setCorrectAnswer(null);
  }, [current]);

  const handleAnswer = (opt) => {
    if (correctAnswer) return;
    setSelected(opt);
    if (opt === question.answer) {
      setScore((s) => s + 1);
      setCorrectAnswer(question.answer);
      successSound.play();
      setTimeout(() => {
        if (current + 1 < exercises.length) {
          setCurrent((c) => c + 1);
        } else {
          navigate('/results', { state: { score, total: exercises.length, level } });
        }
      }, 600);
    } else {
      errorSound.play();
      setCorrectAnswer(question.answer);
      setTimeout(() => {
        setCorrectAnswer(null);
        setSelected(null);
      }, 600);
    }
  };

  if (!question) return <div>No questions found.</div>;

  return (
    <QuestionCard
      question={question.question}
      options={question.options}
      handleAnswer={handleAnswer}
      selected={selected}
      correctAnswer={correctAnswer}
    />
  );
}
