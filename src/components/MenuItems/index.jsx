import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { NavHashLink } from "react-router-hash-link";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <Link
            role="button"
            to={items.url}
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} <HiOutlineChevronDown />
          </Link>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <>
          {/* <Link to={items.url}>{items.title}</Link> */}
          <NavHashLink smooth to={items.url}>
            {items.title}
          </NavHashLink>
        </>
      )}
    </li>
  );
};

export default MenuItems;
