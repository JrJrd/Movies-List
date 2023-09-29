import { useState, useEffect } from "react";
import {
  filterFilmsByDir,
  getListOf,
  getFilmStats,
} from "../../helpers/film.helpers";
import { Link } from "react-router-dom";

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
  let { avg_score, latest, total } = getFilmStats(filmsByDir);

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
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDir.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
