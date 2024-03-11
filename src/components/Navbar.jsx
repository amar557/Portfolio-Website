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
      className={` z-50 flex items-center justify-between py-1 transition-all  lg:justify-center lg:py-5 ${
        stickey
          ? "fixed z-50 w-full bg-[#d9d9d9e8] shadow-lg"
          : "relative w-full bg-transparent"
      }   `}
    >
      <Logo />
      <LinkList isOpen={isOpen} />
      <ThemeChangerButton />
      <NavButton isOpen={isOpen} handleNavbar={handleNavbar} />
    </div>
  );
}
function Logo() {
  return (
    <div>
      <img src={logo} alt="logo" className="block w-16 lg:hidden" />
    </div>
  );
}
function LinkList({ isOpen }) {
  return (
    <>
      <ul
        className={`absolute right-0 top-[72px] flex h-screen w-1/2 bg-[#f6f6f7]  py-20 font-semibold lg:py-3    ${
          isOpen ? "-left-full" : "left-0"
        } w-1/2 flex-col gap-y-5  text-center text-black transition-all duration-300 lg:static lg:flex lg:h-fit  lg:flex-row lg:items-center lg:justify-center lg:space-x-7 lg:rounded-full lg:px-3 `}
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
    </>
  );
}

function NavLinks({ to, link, offset }) {
  const { handleNavbar } = useContext(ContexApi);
  return (
    <li className="hover:cursor-pointer">
      <Link
        to={to}
        activeClass="active"
        spy={true}
        offset={offset}
        duration={500}
        onClick={handleNavbar}
      >
        {link}
      </Link>
    </li>
  );
}

const NavButton = memo(function NavButton({ handleNavbar, isOpen }) {
  const { Isdark } = useContext(ContexApi);

  return (
    <button
      onClick={handleNavbar}
      className={`z-10 ${
        Isdark ? "text-black" : "text-[#ffc86b]"
      } p-2 text-2xl   lg:hidden`}
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
        className="absolute right-[20%] top-2/4 -translate-y-2/4   text-xl transition-all lg:right-[10%]"
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
