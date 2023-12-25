import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiRedux } from "react-icons/si";
import { useContext } from "react";
import { ContexApi } from "../components/context";
import { SiReactrouter } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Heading from "../components/Heading";

const experinceData = [
  {
    heading: "Routing",

    details: "Understanding and implementing various routing strategies.",
    icon: <SiReactrouter />,
  },
  {
    heading: "redux",
    details:
      "Passionate and results-driven React Redux Developer designing and implementing robust, scalable, and high-performance web applications. ",
    icon: <SiRedux />,
  },
  {
    heading: "working with api",
    details:
      "Results-oriented and highly skilled API Integration Expert with a proven track record of designing",
    icon: <TbApi />,
  },
];

function Experience() {
  return (
    <div id="experience" className="mx-auto mt-20 w-2/3 ">
      <Heading>experience</Heading>
      <VerticalTimeline>
        {experinceData.map((data, i) => (
          <Exclusive
            heading={data.heading}
            details={data.details}
            icon={data.icon}
            key={i}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
}

function Exclusive({ heading, details, icon }) {
  const { Isdark } = useContext(ContexApi);

  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={
          Isdark
            ? { background: "white", color: "black" }
            : { background: "black", color: "white" }
        }
        contentArrowStyle={
          Isdark
            ? { background: "white", color: "black" }
            : { background: "black", color: "white" }
        }
        iconStyle={
          Isdark
            ? { background: "white", color: "black" }
            : { background: "black", color: "white" }
        }
        icon={icon}
      >
        <h3 className="vertical-timeline-element-title font-roboto text-xl font-bold capitalize ">
          {heading}
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">{heading}</h4> */}
        <p>{details}</p>
      </VerticalTimelineElement>
    </>
  );
}
export default Experience;
