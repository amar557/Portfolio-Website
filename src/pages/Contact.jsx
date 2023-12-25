import { useContext } from "react";
import { ContexApi } from "../components/context";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import "aos/dist/aos.css";
const contactData = [
  {
    icon: <CgMail />,
    data: "amarhussain391@gmail.com",
  },
  {
    icon: <IoCallOutline />,
    data: "+923336033081",
  },
  {
    icon: <IoLocationOutline />,
    data: "RehmanAbad metro station ,Rawalpindi",
  },
];

function Contact() {
  return (
    <div
      id="contactus"
      className="mx-auto w-3/4 py-16 pt-32 md:w-2/3 "
      data-aos="zoom-in"
    >
      <Heading />
      <InfoSection />
    </div>
  );
}
function Heading() {
  return (
    <div className="flex w-full items-center justify-center py-8 text-center">
      <Line />
      <span className="w-10/12 px-3 text-2xl font-bold capitalize lg:w-1/2">
        contact us
      </span>
      <Line />
    </div>
  );
}
function Line() {
  return <div className="h-1 w-full rounded bg-yellow-600"></div>;
}
function InfoSection() {
  return (
    <div
      className={`mx-auto flex   flex-wrap justify-center gap-x-5  gap-y-10  `}
    >
      {contactData.map((data, i) => (
        <ContactInfo key={i} icon={data.icon} data={data.data} />
      ))}
    </div>
  );
}
function ContactInfo({ icon, data }) {
  const { Isdark } = useContext(ContexApi);
  return (
    <div
      className={` space-x-5 rounded ${
        Isdark ? "bg-white" : "bg-black"
      } flex w-[50%] shrink grow basis-auto items-center px-12 py-3 text-lg`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="">{data}</span>
    </div>
  );
}
export default Contact;
