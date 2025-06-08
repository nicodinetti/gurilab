import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import LevelSelect from './components/LevelSelect.jsx';
import ExerciseSession from './components/ExerciseSession.jsx';
import ResultScreen from './components/ResultScreen.jsx';
import AgeSelect from './components/AgeSelect.jsx';
import SubjectSelect from './components/SubjectSelect.jsx';
import ExerciseTypeSelect from './components/ExerciseTypeSelect.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject" element={<SubjectSelect />} />
          <Route path="/age" element={<AgeSelect />} />
          <Route path="/type" element={<ExerciseTypeSelect />} />
          <Route path="/play/:level" element={<ExerciseSession />} />
          <Route path="/results" element={<ResultScreen />} />
        </Routes>
      </div>
    </div>
  );
}
