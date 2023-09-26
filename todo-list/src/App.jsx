import { useState } from "react";
import FilmsList from "./components/filmsList";
import "./App.css";

function App(props){
  let [ list, setList] = useState(["ready", "set", "go"]);
  let [text, setText] = useState("");
function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }
 
    return (
      <div>
        <h1>Hello world!</h1>

        <form onSubmit={onSubmit}>

        <input type="text" name="text" value={text} 
        onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Add</button>
            
        </form>
        <ul>
          {list.map((item, i) => {
            return <li key={item + i}>{item}</li>;
          })}
        </ul>
      <FilmsList />

      </div>
    );
  }


export default App;
