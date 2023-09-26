import { useState, useEffect } from "react";

function FilmsList(props) {
    let [list, setList] = useState([])

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
    .then((res) => res.json())
    .then((films) => setList(films))
    .catch((err) => console.error(err));
}

useEffect(() => {
  getFilms();
}, []);
  
  return (

  
       <ul>
        {list.map((film) => {
            return <li key={film.id}>{film.title}  {film.release_date}----{film.description}</li>
        })}
    </ul>
  );

}


export default FilmsList;
