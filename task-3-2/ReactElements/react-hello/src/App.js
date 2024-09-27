import './App.css';
import image from './assets/images/profile.jpeg';

//create the user object with an object literal
const user = {
  name: 'James',
  surname: 'Bond',
  date_of_birth: '1997/07/07',
  country: 'UK',
  address: 'London, Mi6, 7 headquarters road 0007',
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
      <div className="profile-container">
        <h1>
          Shopper name: {user.name} {user.surname}
        </h1>
        {/* dynamically render the profile in case someone wishes to change it */}
        <img src={user.profile_picture} alt="Profile Picture" />
        <p>Birthday: {user.date_of_birth}</p>
        <p>Country: {user.country}</p>
        <p>Address: {user.address}</p>
        <p>Email: {user.email}</p>
        <p>Telephone: {user.telephone}</p>
        <p>Company: {user.company}</p>
      </div>
      <div className="shopping-cart-container">
        <h2>Shopping Cart:</h2>
        {/* dynamically render each array item */}
        <ol>
          {user.shopping_cart.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
