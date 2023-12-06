import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Singlecontent from "./Sinlecontent/Singlecontent";

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  768: {
    items: 3,
  },
  992: {
    items: 4,
  },
  1024: {
    items: 5,
    itemsFit: "contain",
  },
  1200: {
    items: 6,
    itemsFit: "contain",
  },
};

const carousel = ({ cards, type }) => {
  let items = [];
  if (type === "home") {
    items = cards.map((item, index) => {
      return (
        <div className="carusel-wrap" key={index}>
          <Singlecontent key={index + item.id} item={item} />
        </div>
      );
    });
  } else {
    items = cards.map((item, index) => {
      return (
        <div className="singleCard" key={index}>
          <img
            src={
              item.profile_path || item.profile_path
                ? `https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`
                : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
            }
            alt=""
          />
          <p>{item.name}</p>
          <span>{item.character}</span>
        </div>
      );
    });
  }
  return (
    <>
      {type === "home" ? (
        <AliceCarousel
          responsive={responsive}
          mouseTracking
          autoPlayInterval={1000}
          autoPlay
          infinite
          disableButtonsControls
          items={items}
        />
      ) : (
        <AliceCarousel
          responsive={responsive}
          mouseTracking
          autoPlayInterval={500}
          autoPlay
          infinite
          disableButtonsControls
          disableDotsControls
          items={items}
        />
      )}
    </>
  );
};

export default carousel;
