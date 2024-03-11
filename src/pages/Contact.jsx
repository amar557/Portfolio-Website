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
    data: "RehmanAbad metro station, Rawalpindi",
    width: "70%",
  },
];

function Contact() {
  return (
    <div
      id="contactus"
      className="mx-auto w-5/6 py-16 pt-32 md:w-2/3 "
      data-aos="zoom-in"
    >
      <Heading />
      <InfoSection />
    </div>
  );
}
function Heading() {
  return (
    <div className="mx-auto flex items-center justify-center py-8 text-center md:w-10/12">
      <Line />
      <span className="px-3  text-xl  font-bold capitalize  md:w-10/12 md:text-2xl lg:w-3/5">
        contact us
      </span>
      <Line />
    </div>
  );
}
function Line() {
  return <div className="h-1 w-1/4 rounded bg-yellow-600 md:w-full"></div>;
}
function InfoSection() {
  return (
    <div
      className={`mx-auto flex   flex-wrap justify-center gap-x-5  gap-y-10  `}
    >
      {contactData.map((data, i) => (
        <ContactInfo
          key={i}
          icon={data.icon}
          data={data.data}
          width={data.width}
        />
      ))}
    </div>
  );
}
function ContactInfo({ icon, data, width }) {
  const { Isdark } = useContext(ContexApi);
  return (
    <div
      className={` space-x-5 rounded ${
        Isdark ? "bg-white" : "bg-black"
      } flex w-full shrink grow-0 basis-auto items-center justify-center px-12 py-3 text-lg md:w-[48%] lg:w-[48%] ${
        width ? `xl:w-[${width}]` : "xl:w-[40%]"
      }`}
    >
      <span className="shrink text-[16px] lg:text-3xl">{icon}</span>
      <span className="shrink text-[12px] lg:text-lg">{data}</span>
    </div>
  );
}
export default Contact;
