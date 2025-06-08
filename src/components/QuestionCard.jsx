export default function QuestionCard({ question, options, handleAnswer, selected, correctAnswer }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium mb-4">{question}</h3>
      <div className="space-y-2">
        {options.map((opt) => {
          const isSelected = selected === opt;
          const isCorrect = correctAnswer && opt === correctAnswer;
          const base = 'w-full py-3 rounded-lg text-lg border';
          let style = 'bg-white';
          if (correctAnswer) {
            style = isCorrect ? 'bg-green-300' : isSelected ? 'bg-red-300' : 'bg-white';
          } else if (isSelected) {
            style = 'bg-blue-200';
          }
          return (
            <button
              key={opt}
              className={`${base} ${style}`}
              onClick={() => handleAnswer(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
