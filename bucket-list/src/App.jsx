import { useState } from 'react';
import './App.css';

function App() {
  const [bucketList, setBucketList] = useState([
    "learn spanish",
    "learn to fly",
    "parachute",
  ]);

const [input, setInput] = useState("");

const removeItem = (index) => {
    setBucketList(bucketList.filter((_,I) => I !== index));
};

function addItem() {
    if(input ==="") return;

    setBucketList([...bucketList, input]);
    setInput("")
    }


  return (
      <>
      <h1>Meine Bucket List</h1>
      <input value={input} onChange={(e) =>setInput(e.target.value)}
             placeholder="my next todo"  />
      <button className="addItem-button" onClick={addItem}>add</button>
      <div className="list"> {bucketList.map((item, index) => ( <div className="list-item" key={index}> {item}
      <button className="removeItem-button" onClick={() => removeItem(index)}>remove</button>
      </div>))}
      </div>
     </>
  );
}

export default App;
