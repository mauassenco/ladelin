import React from "react";
import Heading from "../../common/Heading";
import "../styles.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contato">
        <Heading subtitle="Contato" title="Fale conosco" />
        <div className="container awrapper-grid">
          <div className="box flex">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.106508616847!2d-35.21477618237571!3d-5.781019700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3006f2ffffff9%3A0xf2e24d8c2d75c88f!2sCCS%2FUFRN%20-%20Centro%20De%20Ci%C3%AAncias%20da%20Sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1673873033621!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="la"
              ></iframe>
            </div>
            <div className="box last">
              <ul>
                <li>
                  <i className="fa fa-map"></i>
                  <p>
                    R. Gen. Gustavo Cordeiro de Faria, 601 - Ribeira, Natal -
                    RN, 59012-570
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
        </div>
      </section>
    </>
  );
};

export default Contact;
