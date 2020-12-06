import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userContext from '../../context/UserContext'
import "../../style/reset.css";
import "./style.scss";
function NavBar(props) {
  const [collapse, setCollapse] = useState(false);
  const {user,setUser} = useContext(userContext)
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
          <div className="col col-img">
            <NavLink to="/" className="nav__logo">
              <img src="https://bapngoz.com/logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="col col-hamburger">
            <div className="nav__hamburger">
              <i
                className={collapse ? "fas fa-times" : "fas fa-bars"}
                onClick={handleCollapse}
              ></i>
            </div>
          </div>
          <div
            className={collapse ? "nav__collapse nav__active" : "nav__collapse"}
          >
            <ul className="nav__menu">
              <li className="nav__item nav__hover">
                <label htmlFor="checkbox1" className="nav__link">
                  Thể Loại <i className="fas fa-caret-down"></i>
                </label>
                <input type="checkbox" id="checkbox1" />
                <ul className="nav__smenu">
                  <li className="smenu__item">
                    <Link className="smenu__link" to="/genres/action">
                      Phim Hành Động
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link className="smenu__link" to="/genres/horror">
                      Phim King Dị
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link className="smenu__link" to="/genres/science-fiction">
                      Phim Khoa Học Viễn Tưởng
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link className="smenu__link" to="/genres/comedy">
                      Phim Hài
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link className="smenu__link" to="/genres/drama">
                      Phim Tâm Lý
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link className="smenu__link" to="/genres/cartoon">
                      Phim Hoạt Hình
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item nav__hover">
                <label htmlFor="checkbox2" className="nav__link">
                  Quốc Gia <i className="fas fa-caret-down"></i>
                </label>
                <input type="checkbox" id="checkbox2" />
                <ul className="nav__smenu">
                  <li className="smenu__item">
                    <Link to="/country/vietnam" className="smenu__link">
                      Phim Việt Nam
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link to="/country/united-states" className="smenu__link">
                      Phim Mỹ
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link to="/country/china" className="smenu__link">
                      Phim Trung Quốc
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link to="/country/korea" className="smenu__link">
                      Phim Hàn Quốc
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link to="/country/japan" className="smenu__link">
                      Phim Nhật Bản
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link to="/country/hongkong" className="smenu__link">
                      Phim Hong Kong
                    </Link>
                  </li>
                  <li className="smenu__item">
                    <Link to="/country/europe" className="smenu__link">
                      Phim Âu Mỹ
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav__item">
                <NavLink to="/hot-films" className="nav__link">
                  Phim Hot
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/new-films" className="nav__link">
                  Phim Mới
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/movies-shown-in-theater" className="nav__link">
                  Phim Chiếu Rạp
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col nav__search">
            <div className="nav__form">
              <div className="nav__input">
                <input type="text" placeholder="Search" />
                <div className="nav__form--btn">
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <div className="nav__login">
                {
                  user?user.userName:<NavLink to="/auth/sign-in">Login</NavLink>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
