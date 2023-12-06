import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { APIKEY } from "../../context/context";
import { Col, Row } from "react-bootstrap";
import Carousel from "../Carusel";
import play from "../../assets/play.png";

function Singlepage() {
  const apikey = useContext(APIKEY);
  const [date, Setdata] = useState([]);
  const [actors, SetActors] = useState([]);
  const [videosKey, SetVideos] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getdata();
    getActors();
    getVideo();
  }, []);

  async function getdata(type = "movie") {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${apikey}&language=en-US`
      )
      .then((res) => Setdata(res.data))
      .catch((err) => getdata("tv"));
  }
  async function getActors(type = "movie") {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apikey}&language=en-US`
      )
      .then((res) => SetActors(res.data.cast))
      .catch((err) => getActors("tv"));
  }
  async function getVideo(type = "movie") {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apikey}&language=en-US`
      )
      .then((res) => SetVideos(res.data.results[0].key))
      .catch((err) => getVideo("tv"));
  }
  const divStyle = {
    background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${date.backdrop_path})`,
    width: "100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="wrapper">
      <div style={divStyle}>
        <Row className="wrap-color">
          <Col md="12" xl="3">
            <div className="content-img">
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${date.poster_path}`}
                alt=""
              />
            </div>
          </Col>

          <Col md="12" xl="9">
            <h1 className="title">{date.original_title}</h1>
            <h3>Overview</h3>
            <p className="texts">{date.overview}</p>{" "}
            <span>
              <a
                className="video_btn"
                href={`https://www.youtube.com/watch?v=${videosKey}`}
                target={"_blank"}
              >
                Play trailer <img src={play} alt="" />
              </a>{" "}
            </span>
            <h2>Casts</h2>
            <Carousel cards={actors} type={"single"} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Singlepage;
