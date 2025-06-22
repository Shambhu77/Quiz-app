import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Quiz from './pages/Quiz';
import { Routes, Route } from 'react-router-dom';
import QuizEngine from './components/QuizEngine';
import ScoreSummary from './components/ScoreSummary';
import Leaderboard from './components/Leaderboard';
import AboutPage from './components/AboutPage';








function App() {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/start" element={<QuizEngine />} />
          <Route path="/scores" element={<ScoreSummary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
