import './App.css';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, textadd, textsub } from './redux/CounterActions';

function App() {

  const count = useSelector((state) => state.count)
  const [value, setValue] = useState(count)
  // const [count2,setCount2]={val:null}

  const dispatch = useDispatch()
  function updater(e) {
    setValue(e.target.value)
    console.log(value)
  }

  // count2= 
  // {
  //   val:value
  // }


  return (
    <div className="App">
      <h1> count:{count}</h1><br />
      <input type="number" value={value} onChange={updater}></input>
      <div className='auto'>
        <button onClick={() => dispatch(increment(4))}>add</button>
        <button onClick={() => dispatch(decrement(4))}>subtract</button>
      </div>
      <div className='manual'>
        <button onClick={() => dispatch(textadd(value))}>Add Manually</button>
        <button onClick={() => dispatch(textsub(value))}>sub Manually</button>
      </div>
    </div>
  );
}

export default App;
