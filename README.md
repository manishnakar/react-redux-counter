# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


## Install redux 

npm install redux react-redux 

## Thing to learn 
- Store 
- Action 
- reducer 
- dispatch 


`

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
`


