import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About This App</h2>
      <p>
        This is a fun and interactive Quiz App built as part of the Kshitij Web Development & AI Workshop 2025.
      </p>
      <h3>🛠️ Tech Stack Used:</h3>
      <ul>
        <li>ReactJS (with Vite)</li>
        <li>JavaScript</li>
        <li>CSS for styling and animations</li>
        <li>React Router for navigation</li>
        <li>LocalStorage for persistence</li>
      </ul>
      <h3>📚 What I Learned:</h3>
      <ul>
        <li>How to create reusable React components</li>
        <li>How to manage state and props effectively</li>
        <li>How to use `localStorage` to store player data</li>
        <li>Routing with `react-router-dom`</li>
        <li>CSS animations and responsive layout</li>
      </ul>
      <h3>😄 Just for Fun:</h3>
      <img
        src="https://i.imgflip.com/7rfefy.jpg"
        alt="React meme"
        className="about-meme"
      />
      <p>Keep calm and code on!</p>
    </div>
  );
}

export default AboutPage;
