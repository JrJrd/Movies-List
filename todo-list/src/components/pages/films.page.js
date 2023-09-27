import { useState, useEffect } from "react";
import { filterFilmsByDir, getListOf } from "../../helpers/film.helpers";

function FilmsPage(props) {
  let [list, setList] = useState([]);

  let [searchDir, setSearchDir] = useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDir = filterFilmsByDir(list, searchDir);
  let dirs = getListOf(list, "director");

  return (
    <div>
      <h1>Studio Ghibli Film</h1>
      <form action="">
        <label htmlFor="searchDir">Filter by director</label>
        <select
          name="searchDir"
          id="searchDir"
          value={searchDir}
          onChange={(e) => setSearchDir(e.target.value)}
        >
          <option value="">All</option>
          {dirs.map((director, i) => {
            return (
              <option key={director + i} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </form>
      <ul>
        {filmsByDir.map((film) => {
          return <li key={film.id}>{film.title}-{film.description}</li>;
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
