import logo from './logo.svg';
import './App.css';
import {increement, decreement} from "./Actions";
import {useDispatch, useSelector} from "react-redux";

function App() {
   const dispatch = useDispatch();
   let counter = useSelector(state => state.counterReducer);

  return (
      <div className="App">
          <p>value triggered is : {counter}</p>
          <button onClick={()=> dispatch(increement())}> +</button>
          <button onClick={()=> dispatch(decreement())}>-</button>
      </div>
  );
}

export default App;
