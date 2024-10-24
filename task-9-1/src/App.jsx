import './App.css';
import React, { useReducer } from 'react';
import Btn from './components/Btn';

const initialState = { balance: 0, input: 0 };

const reducer = (state = initialState, action) => {
  //used switch/case for better readability
  switch (action.type) {
    case 'INPUT': //change the state of 'input' to the users text input
      return { ...state, input: action.payload };

    case 'WITHDRAW': // case for withdraw is to decrease the balance
      return {
        ...state,
        balance: Math.round((state.balance - Number(state.input)) * 100) / 100,
      };

    case 'DEPOSIT': // case for deposit is to increase the balance
      return {
        ...state,
        balance: Math.round((state.balance + Number(state.input)) * 100) / 100,
      };
    case 'ADD_INTEREST': //case for adding interest 5%
      return {
        ...state,
        balance:
          Math.round((state.balance + Number(state.balance) * 0.05) * 100) /
          100,
      };
    case 'CHARGES': //case for deducting interest 15%
      return {
        ...state,
        balance:
          Math.round((state.balance - Number(state.balance) * 0.15) * 100) /
          100,
      };
    default:
      return state; //if action.type isn't recognised, return the current state
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* add a heading for the app in h1 tag */}
      <h1>Banking App</h1>
      <h2>Balance: {state.balance}</h2>
      <input
        type="text"
        name="input"
        id="input"
        value={state.input}
        //send the input to the global state so we can hold on to user input
        onChange={(e) => dispatch({ type: 'INPUT', payload: e.target.value })}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'WITHDRAW' }); //function sent to the button for 'onclick' is to send a dispatch WITHDRAW event (to the reducer)
        }}
        btnText={'Withdraw'}
        btnDescription={'withdraw the input amount from balance'}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'DEPOSIT' }); //function sent to the button for 'onclick' is to send a dispatch DEPOSIT event (to the reducer)
        }}
        btnText={'Deposit'}
        btnDescription={'deposit the input amount to the balance'}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'ADD_INTEREST' }); //function sent to the button for 'onclick' is to send a dispatch ADD_INTEREST event (to the reducer)
        }}
        btnText={'Add Interest'}
        btnDescription={'add 5% interest to the balance'}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'CHARGES' }); //function sent to the button for 'onclick' is to send a dispatch CHARGES event (to the reducer)
        }}
        btnText={'Charges'}
        btnDescription={'deduct 15% interest from the balance'}
      />
    </div>
  );
}

export default App;
