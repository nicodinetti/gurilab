import { useNavigate } from 'react-router-dom';
import LevelButton from './LevelButton.jsx';

export default function LevelSelect() {
  const navigate = useNavigate();
  const levels = [1, 2, 3];
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Choose a Level</h2>
      {levels.map((level) => (
        <LevelButton
          key={level}
          level={level}
          onClick={() => navigate(`/play/${level}`)}
        />
      ))}
    </div>
  );
}
