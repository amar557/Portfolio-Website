import { useContext } from "react";
import { ContexApi } from "../components/context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Animation from "./Animation";
import heroPicture from "../pictures/portfoliopic.png";
const iconsData = [
  {
    icon: <FaGithub className="text-2xl" />,

    to: "https://github.com/amar557",
  },
  {
    icon: <FaTwitter className="text-2xl" />,

    to: "https://twitter.com/i/flow/login",
  },
  {
    icon: <FaLinkedinIn className="text-2xl" />,

    to: "https://www.linkedin.com/in/amar-hussain-b82392283/",
  },
  {
    icon: <FaWhatsapp className="text-2xl" />,

    to: "https://wa.me/+923336033081",
  },
];

function Hero() {
  const { Isdark } = useContext(ContexApi);

  return (
    <div className={`relative  h-max  sm:h-[33rem]  `} id="hero">
      <div
        className={`
         ${Isdark ? "text-secondary" : "text-[#adadaf]"}  mx-auto
         flex h-max w-3/4 flex-col-reverse items-center justify-between gap-y-8 sm:flex-row  sm:py-40 sm:pt-20 md:w-2/3`}
      >
        <IntroSection Isdark={Isdark} />
        <HeroPicture />
      </div>
      <HeroIcons Isdark={Isdark} />
    </div>
  );
}

function IntroSection({ Isdark }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -80 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 0.25, duration: 0.75 }}
      className="space-y-5 text-center sm:text-start "
    >
      <div className="text-4xl font-bold capitalize  ">
        <span className="text-2xl">i'M </span>
        <span className={` ${Isdark ? "text-[#2f3e46]" : "text-[#ffc86b]"}`}>
          amar ali
        </span>
      </div>
      <div className=" text-lg font-bold capitalize ">front End developer</div>

      <HeroButton Isdark={Isdark} />
    </motion.div>
  );
}

function HeroPicture() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.25, duration: 0.75 }}
      className="relative"
    >
      <img src={heroPicture} alt="pic " className="w-56 self-center " />
      <Animation />
    </motion.div>
  );
}

function HeroButton({ Isdark }) {
  return (
    <button
      className={` rounded-lg border-2  md:border-4 ${
        Isdark
          ? "border-[#3c484e] text-[#3c484e]  hover:border-[#384d58ef] hover:text-[#384d58ef]"
          : "border-[#ffc86b] text-[#ffc86b] hover:border-[#f3c16ac3] hover:text-[#f3c16ac3]"
      }  px-4 py-2 font-bold capitalize transition-all duration-300  `}
    >
      <Link
        to="contactus"
        activeClass="active"
        spy={true}
        offset={-230}
        duration={500}
        // smooth={true}
      >
        contact me
      </Link>
    </button>
  );
}
function HeroIcons() {
  return (
    <div
      className={`absolute -bottom-0.5 right-5 flex flex-col items-center space-y-4 md:bottom-14 md:right-16 `}
    >
      <div className="h-12 w-1 rounded bg-[#ffc86b]  "></div>

      {iconsData.map((data, i) => (
        <AccountsLink to={data.to} icon={data.icon} key={i} />
      ))}
    </div>
  );
}

function AccountsLink({ to, icon }) {
  return (
    <>
      <a href={to} target="blank">
        {icon}
      </a>
    </>
  );
}

export default Hero;
