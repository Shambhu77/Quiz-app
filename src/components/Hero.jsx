import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Challenge Your Brain</h1>
        <p>Test your knowledge across categories and become a quiz master!</p>
        <Link to="/quiz">
          <button className="start-btn">Start Quiz</button>
        </Link>
      </div>
      <div className="hero-image">
        <img src="https://undraw.co/api/illustrations/9d57d88c-4f25-4766-a4f3-671206b3f90e" alt="Quiz Illustration" />
      </div>
    </section>
  );
}

export default Hero;
