import React from "react";
import ListFilmContainer from "./ListFilmContainer";
import SlideShow from "./SlideShow";

function Home(props) {
  const { films } = props;
  return (
    <div>
      <SlideShow  slides={films} />
      <ListFilmContainer title="New Films" />
    </div>
  );
}

export default Home;
