import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/footer-bg.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <Link className="header__logo logo" to="/">
          TheMovi
        </Link>
        <div className="footer__content__menus">
          <ul className="footer__content__menu">
            <li className="footer__content__item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">Contact us</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">Term of services</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">About us</Link>
            </li>
          </ul>
          <ul className="footer__content__menu">
            <li className="footer__content__item">
              <Link to="/">Live</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">FAQ</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">Premium</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">Pravacy policy</Link>
            </li>
          </ul>
          <ul className="footer__content__menu">
            <li className="footer__content__item">
              <Link to="/">You must watch</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">Recent release</Link>
            </li>
            <li className="footer__content__item">
              <Link to="/">Recent release</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
