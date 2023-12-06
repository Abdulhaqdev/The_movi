import React from "react";
// import { Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import "./singlecontent.css";
import icon from "../../assets/star.png";

function singlecontent({ item, index }) {
  return (
    <Link to={`/single-movie/${item.id}`} className="singel-content">
      <div class="card-container">
        <div class="card">
          <div class="img-content">
            <img
              className="cardimg"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
              alt=""
            />
          </div>
          <div class="content">
            <p class="rate">
              {Math.round(item.vote_average * 10) + "%"}{" "}
              <span>
                <img src={icon} alt="" />
              </span>
            </p>
            <p>{item.release_date || item.first_air_date} </p>
          </div>
          <div className="heading"> {item.title || item.name}</div>
        </div>
      </div>
    </Link>
  );
}

export default singlecontent;
