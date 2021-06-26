import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../components/context/github/githubContext";

function Profile({ match }) {
  const { getUser, loading, user } = useContext(GithubContext);
  const urlName = match.params.name;
  useEffect(() => {
    getUser(urlName);
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка</p>;
  }
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    login,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;
  return (
    <div>
      <Link className="btn btn-link" to="/">
        На головну
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: "200px" }} />
              <h1>{name}</h1>
              {location && <p>розположення: {location} </p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO </h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
                href={html_url}
              >
                Відкрити профіль{" "}
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username</strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company</strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Myblog</strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary">Підписники: {followers}</div>
              <div className="badge badge-success">Підписаний: {following}</div>
              <div className="badge badge-info">
                Репозиторії: {public_repos}
              </div>
              <div className="badge badge-dark">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
