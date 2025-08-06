import { useState } from "react";

export default function App(){
  let [ count, setCount ] = useState(0);

const Increment =() => {
  setCount(++count);
  console.log("Increment called");
}
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}