import pigGamePic from "../pictures/pigGame.png";
import EcommercePic from "../pictures/Category Dropdown.jpg";
import guessMyNumber from "../pictures/guessMyNumber.png";
import Heading from "../components/Heading";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const projectsData = [
  {
    img: pigGamePic,
    to: "https://github.com/amar557/PigGame",
  },
  {
    img: EcommercePic,
    to: "https://github.com/amar557/AppleStore",
  },
  {
    img: guessMyNumber,
    to: "https://github.com/amar557/GuessMyNumber-Game",
  },
];

function Portfolio() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="mx-auto  h-max  w-3/4 py-10 text-center md:w-2/3"
      id="portfolio"
      data-aos="fade-up-right"
    >
      <Heading>portfolio</Heading>
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-x-3 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
        {projectsData.map((data, i) => (
          <Projects key={i} image={data.img} to={data.to} />
        ))}
      </div>
    </div>
  );
}
function Projects({ image, to }) {
  return (
    <div className="group relative overflow-hidden rounded bg-white">
      <img
        src={image}
        alt="projects"
        className="transit h-60 w-60  overflow-scroll object-cover duration-300 hover:cursor-pointer  group-hover:scale-125"
      />
      <button className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded bg-[#ffc86b] px-2  py-1 opacity-0 transition-all duration-300   group-hover:opacity-100">
        <a href={to} target="blank">
          View Now
        </a>
      </button>
    </div>
  );
}
export default Portfolio;
