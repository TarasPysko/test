import React, { useContext } from "react";
import Alert from "../components/Alert";
import Card from "../components/Card";
import { GithubContext } from "../components/context/github/githubContext";
import Search from "../components/Search";

function Home() {
  const { loading, users } = useContext(GithubContext);
  return (
    <div className="container pt-4">
      <Alert alert={{ text: "привет" }} />
      <Search />
      <div className="row">
        {loading ? (
          <p className="text-center">Загрузка</p>
        ) : (
          users.map((user) => {
            return (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
