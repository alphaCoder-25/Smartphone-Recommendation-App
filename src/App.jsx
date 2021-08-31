import { useState } from 'react';
import './App.css';
import { smartphoneData } from "./data"

function App() {

  const [category, setCategory] = useState("Best under 20000")

  // function getCategory(value){
  //   setCategory(value);
  // }

  const data1 = (Object.keys(smartphoneData))
  return (
    <div className="App">
      <h1>SmartPhone Recommendation App</h1>
      <h2>Best SmartPhones under different Price range available in India</h2>
      <div className ="btn-container">
      {
        data1.map(value => <button onClick = {() => setCategory(value)} className ="btn">{value}</button>)
      }
      </div>
        {
          smartphoneData[category].map(value => (
            <div className = "details">
              <h3>{value.name}</h3>
              <img className ="image" src={value.img} alt="" />
              <h4>Storage Variant:- {value.storage_variant}</h4>
              <h4>Price:- {value.price}</h4>
            </div>
          ))
        }
    </div>
  );
}

export default App;
