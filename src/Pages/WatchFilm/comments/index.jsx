import React from "react";
import "./style.scss";
function Comments(props) {
  const { comments } = props;
  return (
    <div className="comments">
      <form className="comments__form">
        <img
          src="https://cf.shopee.vn/file/6705ccbb67416a1dd07e00ec1eddd49b"
          alt="logo"
        />
        <textarea
          maxLength="185"
          placeholder="Your comments"
          name="input-comment"
        />
        <button>Comment</button>
      </form>
      <div className="comments__listComment">
        <ul className="comments__listComment__container">
          {comments.map((item) => (
            <li>
              <div className="comments__listComment__container__img">
                <img src={item.avatar} alt="logo" />
              </div>
              <div className="comments__listComment__container__info">
                <p>{item.userName}</p>
                <p>{item.comment}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="comments__listComment__loading"></div>
      </div>
    </div>
  );
}

export default Comments;
