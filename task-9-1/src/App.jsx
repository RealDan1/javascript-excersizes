import './App.css';
import React, { useReducer } from 'react';
import Btn from './components/Btn';

const initialState = { balance: 0, input: 0 };

const reducer = (state = initialState, action) => {
  //use switch case for better readability
  switch (action.type) {
    //change the state of input to the users text input
    case 'INPUT':
      return { ...state, input: action.payload };
    case 'WITHDRAW':
      return { ...state, balance: state.balance - Number(state.input) };
    case 'DEPOSIT':
      return { ...state, balance: state.balance + Number(state.input) };
    case 'ADD_INTEREST':
      return { ...state, balance: state.balance + Number(state.input) * 0.15 };
    default:
      return state;
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
        //sentence starts with lowercase as it completes a sentence
        btnDescription={'deposit the input amount to the balance'}
      />
    </div>
  );
}

export default App;
