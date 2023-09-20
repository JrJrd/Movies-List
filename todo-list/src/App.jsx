import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      text: "",
    };



    this.onSubmit = this.onSubmit.bind(this);
  }
onSubmit(event) {
    event.preventDefault();

    let newList = [...this.state.list, this.state.text];
    this.setState({list: newList, text: ""})
}
  render() {
    return (
      <div>
        <h1>Hello world!</h1>

        <form onSubmit={this.onSubmit}>

        <input type="text" name="text" value={this.state.text} 
        onChange={(e) => this.setState({text: e.target.value})}/>
        <button type="submit">Add</button>
            
        </form>
        <ul>
          {this.state.list.map((item, i) => {
            return <li key={item + i}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
