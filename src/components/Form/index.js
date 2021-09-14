import React from "react";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [repo, setRepo] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRepos(user);
    setRepo("");
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUser(input);
  };

  const fetchRepos = async (user) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      console.log(data);
      return data;
    } catch (err) {
      if (data.status === 404) {
        throw Error("That's not a valid Username");
      }
      throw new Error(err.message);
    }
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} aria-label="search">
        <input
          className="search-input"
          type="text"
          aria-label="Repo"
          value={user}
          name="user"
          onChange={updateInput}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Form;
