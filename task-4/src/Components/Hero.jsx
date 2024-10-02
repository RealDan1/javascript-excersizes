import './Hero.css';

export default function Hero(props) {
  return (
    <div className="Hero">
      <div className="Hero-content">
        {/* using the prop to dynamically change the text of the Hero */}
        <h1>{props.title}</h1>
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
