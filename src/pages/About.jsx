import Heading from "../components/Heading";
import "aos/dist/aos.css";

function About() {
  return (
    <div
      className="mx-auto h-max w-5/6 py-10 md:w-2/3 sm:pt-20"
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
      Highly motivated Junior Mern Stack Developer. Skilled in HTML, CSS,
      JavaScript, Tailwind CSS, React.js, Node.js, Express.js and Mongo DB. I am
      a proactive problem-solver Dedicated to delivering high-quality & my
      career goal is to gain experience and develop a Solid foundation in
      software development.
    </p>
  );
}
export default About;
