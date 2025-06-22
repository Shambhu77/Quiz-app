import { useNavigate } from 'react-router-dom';
import './ScoreSummary.css';

function ScoreSummary() {
  const navigate = useNavigate();
  const playerInfo = JSON.parse(localStorage.getItem('playerInfo'));
  const score = parseInt(localStorage.getItem('lastScore'));

  const message =
    score >= 3
      ? 'Quiz Champion! 🏆'
      : score === 0
      ? 'More caffeine, maybe? ☕'
      : 'Good try! Keep practicing 💪';

  const handlePlayAgain = () => {
    localStorage.removeItem('lastScore');
    localStorage.removeItem('playerInfo');
    navigate('/');
  };

  return (
    <div className="score-summary">
      <h2>Well done, {playerInfo.name}!</h2>
      <p>Your Score: <strong>{score}</strong></p>
      <p className="message">{message}</p>
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
}

export default ScoreSummary;
