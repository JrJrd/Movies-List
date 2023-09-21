import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
    .then((res) => res.json())
    .then((films) => this.setState({list: films}))
    .catch((err => console.log(err)));
}

componentDidMount() {
   this.getFilms()
}
  
  
  render() {
      return <ul>
        {this.state.list.map((film) => {
            return <li key={film.id}>{film.title}  {film.release_date}----{film.description}</li>
        })}
    </ul>;
  }
}




export default FilmsList;
