export default function LevelButton({ level, onClick }) {
  return (
    <button
      className="bg-green-500 w-40 py-3 text-white rounded-lg text-xl block mx-auto mb-4"
      onClick={onClick}
    >
      Level {level}
    </button>
  );
}
