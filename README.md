# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


## install redux 

npm install redux react-redux 

## thing to learn 
- Store 
- Action 
- reducer 
- dispatch 


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



### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

