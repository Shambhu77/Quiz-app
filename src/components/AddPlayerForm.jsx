import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPlayerForm.css';

function AddPlayerForm({ setPlayerInfo }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const playerData = { name, category, difficulty };
    localStorage.setItem('playerInfo', JSON.stringify(playerData));
    setPlayerInfo(playerData);
    navigate('/quiz/start');
  };

  const isDisabled = !name || !category || !difficulty;

  return (
    <div className="player-form-container">
      <h2>Enter Player Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit" disabled={isDisabled}>
          Start
        </button>
      </form>
    </div>
  );
}

export default AddPlayerForm;
