import { useContext } from "react";
import { ContexApi } from "../components/context";
import reactLogo from "../pictures/reactLogo.png";
import HTMLLogo from "../pictures/HTML-Logo.png";
import CSSLogo from "../pictures/CSS-Logo.png";
import javaScriptLogo from "../pictures/JAVASCRIPT-Logo.png";
import TailwindLogo from "../pictures/TailwindCss.png";
import GitLogo from "../pictures/git.png";
import Heading from "../components/Heading";
import "aos/dist/aos.css";
const skillData = [
  {
    img: HTMLLogo,
    heading: "HTML",
    discription:
      " Creating visually stunning and seamlessly functional websites",
  },
  {
    img: CSSLogo,
    heading: "CSS",
    discription:
      " Proficient in leveraging the latest features of CSS3 to create engaging and dynamic web layouts.",
  },
  {
    img: javaScriptLogo,
    heading: "JAVASCRIPT",
    discription:
      " Specialized in front-end development,  focus on creating seamless and intuitive user interfaces ",
  },
  {
    img: reactLogo,
    heading: "REACT",
    discription:
      "Experienced  Redux or Context API, to ensure efficient data flow and application scalability",
  },
  {
    img: TailwindLogo,
    heading: "TAILWIND CSS",
    discription:
      "Navigate the expansive utility classes to bring consistency and elegance to every project.",
  },
  {
    img: GitLogo,
    heading: "GIT And GITHUB",
    discription:
      " Proficient in the complete spectrum of Git commands, navigate repositories with finesse",
  },
];
function Skills() {
  const { Isdark } = useContext(ContexApi);
  return (
    <div className="mx-auto  w-11/12 pb-10 mt-14 md:w-2/3" id="skills">
      <Heading>skills</Heading>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 xl:gap-x-10  ">
        {skillData.map((data, i) => (
          <SkillContainer
            image={data.img}
            key={i}
            heading={data.heading}
            Isdark={Isdark}
            discription={data.discription}
          />
        ))}
      </div>
    </div>
  );
}

function SkillContainer({ image, heading, Isdark }) {
  return (
    <div
      className={`flex w-[70%] shrink-0 grow-0 basis-auto flex-col items-center justify-center gap-y-7 overflow-hidden rounded-lg p-0 py-12 transition-all duration-300 ease-linear hover:skew-x-3 hover:cursor-pointer sm:w-[40%] md:w-[30%] lg:w-[25%] xl:w-[22%]  xl:shrink ${
        Isdark ? "bg-white text-black" : "bg-black text-white"
      } `}
      data-aos="fade-right"
    >
      <img src={image} alt="" className="h-16" />
      <h1 className="font-medium capitalize ">{heading}</h1>
    </div>
  );
}

export default Skills;
