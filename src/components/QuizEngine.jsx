import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questions';

function QuizEngine() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  const navigate = useNavigate();
  const playerInfo = JSON.parse(localStorage.getItem('playerInfo'));

  const quizQuestions = questionsData[playerInfo.category][playerInfo.difficulty];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQ]);

  const handleOptionClick = (option) => {
    if (!selected) {
      setSelected(option);
      if (option === quizQuestions[currentQ].answer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    setSelected(null);
    setTimeLeft(15);
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const playerData = {
  ...playerInfo,
  score,
  date: new Date().toLocaleString(),
};

const history = JSON.parse(localStorage.getItem('history')) || [];
history.push(playerData);
localStorage.setItem('history', JSON.stringify(history));

localStorage.setItem('lastScore', score);
navigate('/scores');

    }
  };

  const current = quizQuestions[currentQ];

  return (
    <div className="quiz-engine">
      <h2>Question {currentQ + 1}</h2>
      <p>{current.question}</p>
      <div>
        {current.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            disabled={!!selected}
            style={{
              backgroundColor:
                selected === opt
                  ? opt === current.answer
                    ? 'green'
                    : 'red'
                  : '',
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      <p>Time Left: {timeLeft}s</p>
      {selected && <button onClick={handleNext}>Next</button>}
    </div>
  );
}

export default QuizEngine;
