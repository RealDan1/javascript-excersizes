import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NavBar() {
  return (
    // <div className="container">
    <nav>
      <div className="navbar-logo" id="navbar-logo">
        <a href="https://medium.com/">Medium</a>
      </div>
      <ul className="navbar-items">
        <li className="navbar-item">
          <a href="" target="_blank">
            Our story
          </a>
        </li>
        <li className="navbar-item">
          <a href="" target="_blank">
            Membership
          </a>
        </li>
        <li className="navbar-item">
          <a href="" target="_blank">
            Write
          </a>
        </li>
        <li className="navbar-item">
          <a href="" target="_blank">
            Sign in
          </a>
        </li>
        <li className="navbar-item">
          <button id="navbar-btn">
            <a href="" target="_blank">
              Get started
            </a>
          </button>
        </li>
      </ul>
      {/* <hr className="navbar-hr" />
    </div> */}
    </nav>
  );
}
