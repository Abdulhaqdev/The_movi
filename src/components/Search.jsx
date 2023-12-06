// Search.jsx

import React, { useState, useContext } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import { APIKEY } from "../context/context";

const Search = ({ setSearchResults }) => {
  const apikey = useContext(APIKEY);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="outline-primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default Search;
