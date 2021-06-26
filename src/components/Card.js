import React from "react";
import { Link } from "react-router-dom";

function Card({ user }) {
  return (
    <div className="card">
      <img
        className="card-image-top"
        src={user.avatar_url}
        alt={user.login}
        style={{ maxHeight: "350px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <Link to={"/profile/" + user.login} className="btn btn-primary">
          Відкрити
        </Link>
      </div>
    </div>
  );
}

export default Card;
