import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Film(props) {
  const { film } = props;
  return (
    <div className="listFilm__item">
      <Link to={`/watch-film/${film.id}`}>
        <div className="a123">
          <div
            style={{
              backgroundImage: `url('${film.image}')`,
              backgroundSize: "cover",
            }}
            className="listFilm__item__img"
          >
            <div className="listFilm__item__playIcon">
              <div className="overlay"></div>
              <i className="fas fa-play"></i>
            </div>
            <div className="listFilm__item__star">
              <i className="fas fa-star">
                <p>9.1</p>
              </i>
            </div>
          </div>
          <div className="listFilm__item__info">
            <p>{film.vieName}</p>
            <p>{film.engName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Film;
