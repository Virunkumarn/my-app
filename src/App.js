import logo from './logo.svg';
import './App.css';
import Test from './Component/Test';
import Test2 from './Component/Test2';
import { useState, useEffect } from 'react';


const App = () => {
  const [buttonOne, setButtoneOne] = useState(false);
  const [buttonTwo, setButtoneTwo] = useState(false);

  return (

    <>
      {!buttonOne && !buttonTwo ?
        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex', flexDirection: 'column', height: '100%', }}>
          <button type="button" onClick={() => { setButtoneOne(true) }}>Question 1</button>

          <button type="button" onClick={() => { setButtoneTwo(true) }}>Question 2</button>

          <div style={{ alignSelf: 'center', color: 'red' }}>Question ที่3 ไฟล์ชื่อ TestNode.js อยู่ภายใต้ src/TestNode.js ครับ</div>


          <div style={{ alignSelf: 'center' }}>If want to go to  another Question Please Refresh to Home (ถ้าจะเข้ามาหน้านี้ใหม่ต้องทำการรีเฟรช1รอบครับ)</div>
        </div>
        : buttonOne ?
          <Test />
          :
          <Test2 />
      }
    </>
  );
}

export default App;
