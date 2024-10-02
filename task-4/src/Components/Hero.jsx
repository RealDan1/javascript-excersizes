import './Hero.css';

export default function Hero({ title }) {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <h1>{title}</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <button>
          <a href="#" className="Hero-button">
            Start reading
          </a>
        </button>
      </div>
      <div className="Hero-image"></div>
    </div>
  );
}
