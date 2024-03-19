import { useContext } from "react";
import { ContexApi } from "../components/context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import pic from "../pictures/AmarAli.png";
import { Typewriter } from "react-simple-typewriter";
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
    <div className={`relative  h-max  sm:h-[33rem] pt-20 sm:pt-0 `} id="hero">
      <div
        className={`
         ${Isdark ? "text-secondary" : "text-[#adadaf]"}  mx-auto
         flex h-max w-5/6 sm:w-3/4  items-center justify-between gap-y-8 flex-col  sm:py-40 sm:pt-12 md:w-2/3`}
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
      className=" space-y-3 md:space-y-5 text-center  mb-12 font-Montserrat "
    >
      <div className="text-4xl font-bold capitalize tracking-wide relative ">
        <span className={` ${Isdark ? "text-[#2f3e46]" : "text-[#ffc86b]"}  `}>
          i'M amar ali,
        </span>
      </div>
      <div className="text-xl sm:text-4xl font-medium  tracking-wider capitalize  ">
        <Typewriter
          cursor
          autostart={true}
          cursorStyle="|"
          words={["Frontend Developer", "React Js developer"]}
          typeSpeed={120}
          deleteSpeed={90}
        />
      </div>

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
      className="relative mt-8 sm:mt-0"
    >
      <img src={pic} alt="pic " className="w-[26rem] self-center -mt-[150px]" />
    </motion.div>
  );
}

function HeroButton({ Isdark }) {
  return (
    <button
      className={` rounded-lg  absolute bottom-14 right-[37%]  sm:right-[46%] z-30 ${
        Isdark
          ? "text-[#3c484e] bg-white  hover:border-[#384d58ef] hover:text-[#384d58ef]"
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
