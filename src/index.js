import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'

//actions 
const increament = () => {
  return {
    type: "INCREMENT"
  }
}


//reducer 
const counter = (state = 0, action ) => {
  switch(action.type){
    case "INCREMENT": 
      return state + 1;
    default : 
    return state;  
  }
}


const store = createStore(counter);

//Display it in console
store.subscribe(() => console.log(store.getState()))
//dispacth 
store.dispatch(increament());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


