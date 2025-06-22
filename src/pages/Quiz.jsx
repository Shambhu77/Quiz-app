import AddPlayerForm from '../components/AddPlayerForm';
import { useState } from 'react';

function Quiz() {
  const [playerInfo, setPlayerInfo] = useState(null);

  return (
    <div>
      <AddPlayerForm setPlayerInfo={setPlayerInfo} />
    </div>
  );
}

export default Quiz;
