import React, { useEffect, useState } from "react";
import HotFilm from "../HotFilm";

import "./style.scss";

function LeftComponent(props) {
  // const [data, setData] = useState([]);
  // const [films, setFilms] = useState([]);
  const { films } = props;

  //   useEffect(() => {
  //     fetch("https://5f8a739718c33c0016b31771.mockapi.io/Film")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         // setData(res);
  //         setFilms(res.slice(0, 6));
  //       });
  //   }, []);
  return (
    <div className="LeftComponent">
      <HotFilm films={films} title="Hot Films" />
    </div>
  );
}

export default LeftComponent;
