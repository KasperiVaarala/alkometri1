
import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  
  function handleSumbit(e){
    e.preventDefault();
    let alcohol = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gLeft = grams - (burning * time);
    if (gender === 'male'){
    alcohol = gLeft / (weight * 0.7);
    } else { alcohol = gLeft / (weight * 0.6)
    }
    if (alcohol < 0){
      result = 0; 
    }
    setResult(alcohol) 
  }

  return (

<div>
    <h1>Nonnih paljonkos sitä ollaan juotu??!!</h1>
    <form onSubmit={handleSumbit}>
      <div>
        <label>Paino:</label>
        <input name='weight' type='number' step='1' value={weight} 
        onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Tölkit:</label>
        <select name='bottles' type='number'
         value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
        </select>
      </div>
      <div>
        <label>Aika:</label>
        <select name='time' type='number'
         value={time} onChange={e => setTime(e.target.value)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
         <option value='10'>10</option>
        </select>
      </div>
      <div>
        <label>Sukupuoli</label>
        <input type='radio' name='gender' value='male' defaultChecked 
        onChange={e => setGender(e.target.value)} /> <label>Aatami</label>
        <input type='radio' name='gender' value='female' 
         onChange={e => setGender(e.target.value)}  /> <label>Eeva</label>
        </div>
        <output>{result.toFixed(2)}</output>
        <br></br>
        <button>Katsotaan</button>
    </form>
  </div>
  );
}

export default App;
