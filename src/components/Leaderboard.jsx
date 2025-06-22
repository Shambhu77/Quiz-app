import { useState, useEffect } from 'react';
import './Leaderboard.css';

function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [sortBy, setSortBy] = useState('score');

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    setPlayers(history);
  }, []);

  const sortedPlayers = [...players].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    // Extend with time if available
    return 0;
  });

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <div className="sort-options">
        <label>Sort by: </label>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="score">Score</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Category</th>
            <th>Difficulty</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.difficulty}</td>
              <td>{p.score}</td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
