import React, { useContext, useState } from "react";
import { AlertContext } from "./context/alert/alertContext";
import { GithubContext } from "./context/github/githubContext";

function Search() {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);
  const onSubmit = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    github.clearUsers();
    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show("Введіть дані");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введіть нік"
        onKeyPress={onSubmit}
        value={value}
        onChange={(i) => setValue(i.target.value)}
      />
    </div>
  );
}

export default Search;
