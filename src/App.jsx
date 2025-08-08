import { useRef, useState } from "react";

 //-------useState examples---------
function App(){
//counter 

  let [ count, setCount ] = useState(0);

const Increment =() => {
  setCount(++count);
  console.log("Increment called");
}
  return(
    //HTML for counter
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}


 function DropDown(){
  const data =  {
    Kerala: "Thiruvanamthapuram",
    Karnataka: "Bngaluru",
    TamilNadu: "Chennai"
  };

  const [selectedState, setSelectedState] = useState("Kerala");

  const changeState = (e) => {     //e is for event which is triggered when state is changed 
    console.log("State changed to:", e.target.value);
    setSelectedState(e.target.value);
  };
  return (
    <div>
      <select onChange={changeState}>
        <option value="Kerala">Kerala</option>
        <option value="Karnataka">Karnataka</option>
        <option value="TamilNadu">TamilNadu</option>
      </select>
      <p>Selected state is :{selectedState}</p>
      <p>Capital is :{data[selectedState]}</p>
    </div>
  )
}

function Facts() {
  const [fact, setFact] = useState();
  const numberRef = useRef();
  const getFact = async () => {
    const number = numberRef.current.value;
    const response = await fetch(`http://numbersapi.com/${number}`);  //fetch is a promise based API to fetch data from a URL
    const factText = await response.text();
    console.log(factText);
    console.log(number);
    setFact(factText);
  };
  return (
    <div>
      <input ref={numberRef} type="number" placeholder="Enter a number"/>
      <button onClick={getFact}>Get Fact</button>
      {fact && <p>Fact: {fact}</p>}
    </div>
  )
}

export { App, DropDown, Facts };
