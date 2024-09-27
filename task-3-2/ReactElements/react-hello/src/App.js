import './App.css';
import image from './assets/images/profile.jpeg';

const user = {
  name: 'James',
  surname: 'Bond',
  date_of_birth: '1997/07/07',
  country: 'UK',
  email: 'bond@mi6.co.uk',
  telephone: 7007007007,
  company: 'mi6',
  profile_picture: image,
  shopping_cart: [],
};
export default function App() {
  return (
    <div className="main-container">
      <h1>
        This is {user.name} {user.surname}
      </h1>
      <p>He is a legend</p>
      <img src={user.profile_picture} alt="profile Picture" />
    </div>
  );
}
