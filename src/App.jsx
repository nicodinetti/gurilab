import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import LevelSelect from './components/LevelSelect.jsx';
import ExerciseSession from './components/ExerciseSession.jsx';
import ResultScreen from './components/ResultScreen.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/levels" element={<LevelSelect />} />
        <Route path="/play/:level" element={<ExerciseSession />} />
        <Route path="/results" element={<ResultScreen />} />
      </Routes>
    </div>
  );
}
