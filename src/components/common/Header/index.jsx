import React, { useState } from "react";
import Head from "../Head";
import "./styles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { menuItems } from "../../../menuItems";
import MenuItems from "../../MenuItems";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header className="header">
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            // onClick={() => setClick(false)}
          >
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
            })}
          </ul>
          <div className="start">
            <div className="button">
              <AiOutlineMail size={22} />
              <p>ladelim@ladelin.ufrn.br</p>
            </div>
            <div className="button">
              <AiOutlinePhone size={22} />
              <p>(84) 99999-9999</p>
            </div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
