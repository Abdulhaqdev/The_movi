// Series.jsx

import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { APIKEY } from "../context/context";
import CustomPagin from "../components/Pagination/CustomPagin";
import Singlecontent from "../components/Sinlecontent/Singlecontent";
import Search from "../components/Search";
import Footer from "../components/Footer/Footer";

function Series() {
  const apikey = useContext(APIKEY);
  const { page } = useParams(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(page);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchResults.length === 0) {
      getTrends();
    }
  }, [currentPage, searchResults]);

  async function getTrends() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=`
      );

      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching trends:", error);
    }
  }

  return (
    <div className="movie">
      <Container>
        <Search setSearchResults={setSearchResults} />
        <Row>
          {searchResults.length !== 0 ? (
            searchResults.map((item, index) => (
              <Col xs="12" sm="6" md="3" xl="2" key={index + item.id}>
                <Singlecontent item={item} index={index} />
              </Col>
            ))
          ) : movies.length !== 0 ? (
            movies.map((item, index) => (
              <Col xs="12" sm="6" md="3" xl="2" key={index + item.id}>
                <Singlecontent item={item} index={index} />
              </Col>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </Row>
      </Container>
      <CustomPagin
        Currentpage={+currentPage}
        count={totalPages}
        Setcurrentpage={setCurrentPage}
        BaseUrl={"series"}
      />
      <Footer />
    </div>
  );
}

export default Series;
