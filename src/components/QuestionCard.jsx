export default function QuestionCard({ question, options, handleAnswer, selected, correctAnswer }) {
  return (
    <div className="space-y-6 lg:space-y-8 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-4 border-yellow-200 animate-fade-in max-w-4xl mx-auto">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-pink-600 mb-4 lg:mb-6 flex items-center justify-center gap-2 lg:gap-4 text-center">
        <span role="img" aria-label="pregunta" className="text-2xl md:text-4xl lg:text-4xl">❓</span> {question}
      </h3>
      <div className="space-y-3 lg:space-y-4">
        {options.map((opt) => {
          const isSelected = selected === opt;
          const isCorrect = correctAnswer && opt === correctAnswer;
          let style =
            'w-full py-4 md:py-6 lg:py-6 px-4 md:px-6 lg:px-8 rounded-2xl text-lg md:text-2xl lg:text-2xl font-bold border-2 lg:border-4 transition-all duration-200 shadow-lg';
          if (correctAnswer) {
            style += isCorrect
              ? ' bg-green-300 border-green-500 scale-105'
              : isSelected
              ? ' bg-red-300 border-red-500 shake'
              : ' bg-white border-gray-200';
          } else if (isSelected) {
            style += ' bg-blue-200 border-blue-400 scale-105';
          } else {
            style += ' bg-yellow-100 border-yellow-300 hover:bg-yellow-200';
          }
          return (
            <button
              key={opt}
              className={style}
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
