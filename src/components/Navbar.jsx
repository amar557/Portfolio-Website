import { faBars, faMoon, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useContext, useState } from "react";
import { Link } from "react-scroll";
import logo from "../pictures/logos.png";
import { ContexApi } from "./context";
import { MdLightMode } from "react-icons/md";
const LinksData = [
  {
    link: "Home",
    to: "hero",
    offset: -150,
  },
  {
    link: "about",
    to: "about",
    offset: -150,
  },
  {
    link: "skill",
    to: "skills",
    offset: -150,
  },
  {
    link: "portfolio",
    to: "portfolio",
    offset: -150,
  },
  {
    link: "Experience",
    to: "experience",
    offset: -230,
  },
  {
    link: "contact ",
    to: "contactus",
    offset: -230,
  },
];

function Navbar() {
  const { isOpen, handleNavbar } = useContext(ContexApi);
  const [stickey, setStickey] = useState(false);
  function Anonymist() {
    if (window.scrollY > 70) {
      setStickey(true);
    } else {
      setStickey(false);
    }
  }
  document.addEventListener("scroll", Anonymist);
  return (
    <div
      className={` ${
        stickey
          ? "fixed z-50 w-full bg-[#d9d9d9e8] shadow-lg"
          : "relative bg-transparent"
      }  flex items-center justify-between py-1 font-roboto transition-all  lg:justify-center lg:py-5 `}
    >
      <div>
        <img src={logo} alt="logo" className="block w-16 lg:hidden" />
      </div>
      <ul
        className={`absolute right-0 top-0 flex h-screen w-1/2 bg-[#f6f6f7] bg-gradient-to-r font-semibold  ${
          isOpen ? "hidden" : "block"
        } w-1/2 flex-col gap-y-5  text-center text-black transition-all lg:static lg:flex lg:h-fit  lg:flex-row lg:items-center lg:justify-center lg:space-x-7 lg:rounded-full lg:py-3`}
      >
        {LinksData.map((data, i) => (
          <NavLinks
            to={data.to}
            link={data.link}
            key={i}
            offset={data.offset}
          />
        ))}
      </ul>
      <NavButton handleNavbar={handleNavbar} isOpen={isOpen} />
      <ThemeChangerButton />
    </div>
  );
}

function NavLinks({ to, link, offset }) {
  return (
    <li className="hover:cursor-pointer">
      <Link
        to={to}
        activeClass="active"
        spy={true}
        offset={offset}
        duration={500}
      >
        {link}
      </Link>
    </li>
  );
}

const NavButton = memo(function NavButton({ handleNavbar, isOpen }) {
  return (
    <button
      onClick={handleNavbar}
      className={`z-10 ${
        isOpen ? "text-white" : "text-black"
      } p-2 text-2xl  lg:hidden`}
    >
      {isOpen ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faXmark} />
      )}
    </button>
  );
});

const ThemeChangerButton = memo(function () {
  const { HandleTheme, Isdark } = useContext(ContexApi);
  return (
    <>
      <button
        className="absolute right-[20%] top-2/4 -translate-y-2/4 justify-end  text-xl transition-all lg:right-[10%]"
        onClick={HandleTheme}
      >
        {Isdark ? (
          <FontAwesomeIcon icon={faMoon} className="text-black" />
        ) : (
          <MdLightMode icon={faMoon} className="text-yellow-300" />
        )}
      </button>
    </>
  );
});
export default Navbar;
