export default function LevelButton({ level, onClick }) {
  return (
    <button
      className="bg-gradient-to-r from-green-400 via-yellow-300 to-pink-400 w-44 py-4 text-white rounded-2xl text-2xl font-bold block mx-auto mb-4 shadow-lg hover:scale-105 transition-transform border-4 border-yellow-200"
      onClick={onClick}
    >
      Nivel {level} ⭐️
    </button>
  );
}
