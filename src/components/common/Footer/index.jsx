import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { blog } from "../../../dummydata";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <h1>LADELIN</h1>
            <span>Laboratório de Desenvolvimento da Linguagem</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div className="social">
              <FaFacebookF className="icon" size={20} />
              <AiOutlineInstagram className="icon" />
              <AiOutlineTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
          <div className="box link">
            <h3>Menu</h3>
            <ul>
              <li>Inicio</li>
              <li>Linguagem</li>
              <li>Audiologia</li>
              <li>Transtorno Fonológico</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="box">
            <h3>Últimos artigos</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Contato</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                <p>
                  R. Gen. Gustavo Cordeiro de Faria, 601 - Ribeira, Natal - RN,
                  59012-570
                </p>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <p>(84) 99999-9999</p>
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                <p>ladelim@ladelin.ufrn.br</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
