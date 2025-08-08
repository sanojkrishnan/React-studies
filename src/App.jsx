import { useRef, useState } from "react";
import style from './app.module.css';
import Post from './components/post.jsx'
// ...component...

// Counter component using useState
function App() {
  // Declare state variable 'count' and updater 'setCount'
  let [count, setCount] = useState(0);

  // Function to increment the counter
  const Increment = () => {
    setCount(prevCount => prevCount + 1); // Use functional update for reliability
    console.log("Increment called");
  }

  // Render counter UI
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

// Dropdown component to select state and show its capital
function DropDown() {
  // Data object mapping states to their capitals
  const data = {
    Kerala: "Thiruvanamthapuram",
    Karnataka: "Bngaluru",
    TamilNadu: "Chennai"
  };

  // State for selected state in dropdown
  const [selectedState, setSelectedState] = useState("Kerala");

  // Event handler for dropdown change
  const changeState = (e) => {
    console.log("State changed to:", e.target.value);
    setSelectedState(e.target.value);
  };

  // Render dropdown and capital info
  return (
    <div>
      <select onChange={changeState}>
        <option value="Kerala">Kerala</option>
        <option value="Karnataka">Karnataka</option>
        <option value="TamilNadu">TamilNadu</option>
      </select>
      <p>Selected state is : {selectedState}</p>
      <p>Capital is : {data[selectedState]}</p>
    </div>
  )
}

// Facts component to fetch and display number facts
function Facts() {
  // State for fetched fact
  const [fact, setFact] = useState();
  // Ref for input field to get number value
  const numberRef = useRef();
  // State for loading spinner
  const [loading, setLoading] = useState(false);

  // Function to fetch fact from numbersapi
  const getFact = async () => {
    const number = numberRef.current.value; // Get value from input
    setLoading(true); // Show loader
    const response = await fetch(`http://numbersapi.com/${number}`); // Fetch fact
    const factText = await response.text(); // Get response text
    console.log(factText);
    console.log(number);
    setLoading(false); // Hide loader
    setFact(factText); // Set fact state
  };

  // Render input, button, loader, and fact
  return (
    <div>
      <input ref={numberRef} type="number" placeholder="Enter a number"/>
      <button onClick={getFact}>Get Fact</button>
      {/* Show loader while loading */}
      {loading && <div className={style.loaderOne}>
        <div className={style.loaderTwo}></div>
      </div>}
      {/* Show fact if available */}
      {fact && <p>Fact: {fact}</p>}
    </div>
  )
}

function JsonFetchingEg () {
  const [posts, setPosts] = useState([]);
  const loadPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    setPosts(data);
    console.log(data);
  }

  return (
    <div>
      <button onClick={loadPost}>Load Post</button>
      {posts.map((post)=><Post key={post.id} title={post.title} body={post.body}/>)}
    </div>
  )
}

// Export all components as named exports
export { App, DropDown, Facts,JsonFetchingEg  };