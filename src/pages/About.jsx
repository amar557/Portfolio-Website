import Heading from "../components/Heading";
import "aos/dist/aos.css";

function About() {
  return (
    <div
      className="mx-auto h-max w-3/4 py-10 md:w-2/3"
      id="about"
      data-aos="fade-left"
    >
      <Heading> about</Heading>
      <Details />
    </div>
  );
}

function Details() {
  return (
    <p className="relative font-roboto text-sm font-medium  leading-8 sm:text-lg">
      Highly motivated Junior Front End Developer. Skilled in HTML, CSS,
      JavaScript, Tailwind CSS, and React.js. I am a proactive problem-solver
      Dedicated to delivering high-quality & my career goal is to gain
      experience and develop a Solid foundation in software development. Looking
      for an Front End Development internship .
    </p>
  );
}
export default About;
