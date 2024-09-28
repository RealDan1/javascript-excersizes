import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function NavBar() {
  return (
    <nav>
      <div className="navbar-logo">
        <a href="">Medium</a>
      </div>
      <ul>
        <li>
          <a href="" target="_blank">
            Our story
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            Membership
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            Write
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            Sign in
          </a>
        </li>
        <li>
          <button>
            <a href="" target="_blank">
              Get started
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
