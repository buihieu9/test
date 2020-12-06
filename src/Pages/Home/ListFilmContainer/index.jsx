import React, { useEffect, useState } from "react";
import ListFilm from "../../../components/ListFilm";
import "./style.scss";
function ListFilmContainer(props) {
  const { title } = props;
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch("https://5f8a739718c33c0016b31771.mockapi.io/Film")
      .then((res) => res.json())
      .then((data) => {
        setFilms(data.slice(0, 10));
      });
  }, []);
  return (
    console.log(films),
    <div className="ListFilmContainer">
      <div className="ListFilmContainer__title">
        <a href="/">
          <span>{title}</span>
          <i className="fas fa-caret-right"></i>
        </a>
      </div>
      {films.length ? <ListFilm films={films} /> : "..."}
    </div>
  );
}

export default ListFilmContainer;
