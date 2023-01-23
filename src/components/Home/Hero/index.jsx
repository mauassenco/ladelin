import React from "react";
import Heading from "../../common/Heading";
import "./styles.css";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="BEM VINDO AO LADELIN"
              title="Laboratório de Desenvolvimento da Linguagem"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              dicta quae libero mollitia reiciendis exercitationem quidem et
              atque temporibus ex.
            </p>
            <div className="button">
              <Link
                className="btn"
                smooth
                to={{
                  hash: "#sobre",
                }}
              >
                SOBRE NÓS
              </Link>
              <Link
                className="btn btn--sec"
                smooth
                to={{
                  hash: "#contato",
                }}
              >
                FALE CONOSCO
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
