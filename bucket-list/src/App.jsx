import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [bucketList, setBucketList] = useState(() => {
      const saved = localStorage.getItem("bucketList");
      return saved ? JSON.parse(saved) : ["example"];
  });

const [input, setInput] = useState("");

useEffect(() => {
    localStorage.setItem("bucketList", JSON.stringify(bucketList));
}, [bucketList]);

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
      <div className="input">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => {if (e.key === "Enter") {addItem();
          }}} placeholder="my next todo"  />
          <button className="addItem-button" onClick={addItem} onKeyDown={e => e.key ==="Enter"} >+</button>
      </div>
      <text className="underInput" >press Enter or click the "+" button</text>
      <div className="list"> {bucketList.map((item, index) => ( <div className="list-item" key={index}> {item}
      <button className="removeItem-button" onClick={() => removeItem(index)}>x</button>
      </div>))}
      </div>
     </>
  );
}

export default App;
