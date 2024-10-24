import './App.css';
import React, { useReducer } from 'react';
import Btn from './components/Btn';

const initialState = { balance: 0, input: 0 };

const reducer = (state = initialState, action) => {
  //used switch/case for better readability
  switch (action.type) {
    case 'INPUT': //change the state of 'input' to the users text input
      return { ...state, input: action.payload };
    case 'WITHDRAW':
      return {
        ...state,
        balance: Math.round((state.balance - Number(state.input)) * 100) / 100,
      };

    case 'DEPOSIT':
      return {
        ...state,
        balance: Math.round((state.balance + Number(state.input)) * 100) / 100,
      };
    case 'ADD_INTEREST':
      return {
        ...state,
        balance:
          Math.round((state.balance + Number(state.input) * 0.05) * 100) / 100,
      };
    case 'CHARGES':
      return {
        ...state,
        balance:
          Math.round((state.balance - Number(state.input) * 0.15) * 100) / 100,
      };
    default:
      return state; //if action.type isn't recognised, return the current state
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Balance: {state.balance}</h1>
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
          dispatch({ type: 'WITHDRAW' });
        }}
        btnText={'Withdraw'}
        btnDescription={'withdraw the input amount from balance'}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'DEPOSIT' });
        }}
        btnText={'Deposit'}
        btnDescription={'deposit the input amount to the balance'}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'ADD_INTEREST' });
        }}
        btnText={'Add Interest'}
        btnDescription={'add 5% interest to the balance'}
      />
      <Btn
        btnFunction={() => {
          dispatch({ type: 'CHARGES' });
        }}
        btnText={'Charges'}
        btnDescription={'deduct 15% interest from the balance'}
      />
    </div>
  );
}

export default App;
