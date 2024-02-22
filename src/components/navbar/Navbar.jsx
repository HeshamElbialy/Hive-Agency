import { Link } from "react-router-dom";
import Logo from "../../assets/newLogo.png";
import { links } from "../../data";
import { VscThreeBars } from "react-icons/vsc";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isNavShowing, setisNavShowing] = useState(false);
  const [navStyle, setNavStyle] = useState("");

  const changeNavStyle = () => {
    if (window.scrollY > 200) {
      setNavStyle("navOnScroll");
    } else {
      setNavStyle("nav");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavStyle);
    return () => {
      window.removeEventListener("scroll", changeNavStyle);
    };
  }, []);

  return (
    <nav className={`myNav ${navStyle}`}>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo d-flex align-items-center"
          onClick={() => setisNavShowing(false)}
        >
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <a href={path} onClick={() => setisNavShowing((prev) => !prev)}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="phoneNum">
          <a
            href="https://api.whatsapp.com/send?phone=201030824036&text=Hello%2C%20I'm%20interested%20in%20your%20product"
            target="__blank"
          >
            +20 103 082 4036
          </a>
        </button>
        <button
          className="nav__toggle-btn"
          onClick={() => setisNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <VscThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
