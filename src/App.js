
import {useSelector, useDispatch } from 'react-redux';

import {increment, decrement} from './actions';


function App() {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    console.log(counter)
  return (
    <div class="grid-container">
      <header class="row">
        <a href="" className="brand">COUNTER </a>
      </header>      
      <main>
      <div class="card">
          <h1 className="row center">{counter}</h1>
          <div className="row card-body">
            <div>
              <button className="primary " onClick={()=> dispatch(increment())}>+</button>
            </div>
            <div>
        <button className="primary" onClick={()=> dispatch(decrement())}>-</button></div>
        </div>
        </div>
      </main>
      <footer class="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
