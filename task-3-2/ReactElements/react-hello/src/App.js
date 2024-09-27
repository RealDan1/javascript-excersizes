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
  shopping_cart: [
    'Bread',
    'Milk',
    'Cheese',
    'Cigars',
    'Wine',
    'Eggs',
    'Butter',
  ],
};

export default function App() {
  return (
    <div className="main-container">
      <h1>
        Shopper name: {user.name} {user.surname}
      </h1>
      <img src={user.profile_picture} alt="Profile Picture" />
      <p>Birthday: {user.date_of_birth}</p>
      <p>Country: {user.country}</p>
      <p>Email: {user.email}</p>
      <p>Telephone: {user.telephone}</p>
      <p>Company: {user.company}</p>
      <h2>Shopping Cart:</h2>
    </div>
  );
}
