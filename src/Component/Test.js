
import logoTest from '../logo.svg';
import '../App.css'
import { useState, useEffect } from 'react';

const Test = () => {
  const [stateInput, setStateInput] = useState(null);
  const [dropdownSelect, setDropdownSelect] = useState("isPrime")
  const [toggle, setToggle] = useState(false);

  const isPrime = (n) => {
    let count = 0;
    if (n === 1) {
      return true;
    }
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    return count <= 1;
  }

  const isFibonacci = (n) => {
    if (n === 0 || n === 1) {
      return true;
    }
    let a = 0;
    let b = 1;
    let c;
    //Find Fibonacci
    while (true) {
      if (c === n) { return true; }
      if (c > n) { return false; }
      c = a + b;
      a = b;
      b = c;

    }
  }
  useEffect(() => {
    if (dropdownSelect === "isPrime") {
      setToggle(isPrime(Number(stateInput)));
    }
    else if (dropdownSelect === "isFibonacci") {
      setToggle(isFibonacci(Number(stateInput)));
    }
  }, [stateInput, dropdownSelect])

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
      <div style={{ height: '100%', width: '200px', borderRight: '5px solid red' }}>
        <input type="number" value={stateInput} onChange={(event) => { setStateInput(event.target.value < 0 ? 1 : event.target.value) }} />
      </div>
      <div id={`test`} style={{ height: '100%', flex: 1, borderRight: '5px solid red', }}>
        <select name="dropdown-check" id="dropdown-check" onChange={(test) => { setDropdownSelect(test.target.value) }}>
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div style={{ height: '100%', width: '300px', borderRight: '5px solid red', justifyContent: 'flex-end' }}>
        {`${stateInput ? toggle : ""}`}
      </div>
    </div>
  );
}

export default Test;
