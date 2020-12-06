import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import NavBar from "./components/Header";
import Home from "./Pages/Home";
import FilterFilm from "./Pages/FilterFilm";
import WatchFilm from "./Pages/WatchFilm";
import LeftComponent from "./components/LeftComponent";
import Auth from "./Pages/Auth/index";
import userApi from "./api/userApi";

import "./App.css";
import "./style/reset.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [data, setData] = useState([]);
  const [films, setFilms] = useState([]);
  const [unRight, setUnRight] = useState(false);
  const [user, setUser] = useState(null);
  const his = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetch("https://5f8a739718c33c0016b31771.mockapi.io/Film")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilms(res.slice(0, 6));
      });
    const token = localStorage.getItem("jwt");
    if (token) {
      userApi
        .signInAfterReload()
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
        });
    }
  }, []);
  useEffect(() => {
    if (his.pathname === "/auth/sign-in" || his.pathname === "/auth/sign-up") {
      setUnRight(true);
      return;
    }
    setUnRight(false);
  }, [his]);
  return (
    <UserProvider value={{ user, setUser }}>
      <div className="app">
        <NavBar className="nav-bar" />
        <div className="app__container">
          <div
            className="app__container__left"
            style={{ width: unRight && "100%" }}
          >
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/video" component={VideoPlayer} />

              {/* <Route path="/genres">
                <FilterFilm />
              </Route>
              <Route path="/country">
                <FilterFilm />
              </Route>
              <Route path="/hot-films">
                <FilterFilm />
              </Route>
              <Route path="/new-films">
                <FilterFilm />
              </Route> */}
              <Route path="/watch-film/:id">
                <WatchFilm />
              </Route>
              <Route path="/:query1/:query2">
                <FilterFilm />
              </Route>
              <Route path="/movies-shown-in-theater">
                <FilterFilm />
              </Route>
              <Route exact path="/">
                <Home films={films} />
              </Route>
            </Switch>
          </div>
          {!unRight && (
            <div className="app__container__right">
              <LeftComponent films={films} />
            </div>
          )}
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
