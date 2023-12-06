import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { APIKEY } from "../context/context";
import Carousel from "../components/Carusel";
import { Container, Row } from "react-bootstrap";
import Footer from "../components/Footer/Footer";

function Home() {
  const apikey = useContext(APIKEY);
  const [Movies, setMovies] = useState([]);
  const [Series, setSeries] = useState([]);
  const [cinima, setcenima] = useState([]);

  useEffect(() => {
    getTrends();
    getCenima();
    getSeries();
  }, []);

  async function getTrends() {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }
  async function getCenima() {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
        setcenima(res.data.results);
      })
      .catch((err) => console.log(err));
  }
  async function getSeries() {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`
      )
      .then((res) => {
        setSeries(res.data.results);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="main">
      <div className="wrap">
        <h1>Wellcome</h1>
        <span>
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
      </div>
      <Container>
        <Row>
          <div className="head">
            <h1>Tredins</h1>
            <Carousel cards={Movies} type={"home"} />
          </div>
          <div className="head">
            <h1>Movies</h1>
            <Carousel cards={cinima} type={"home"} />
          </div>
          <div className="head">
            <h1>Series</h1>
            <Carousel cards={Series} type={"home"} />
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
