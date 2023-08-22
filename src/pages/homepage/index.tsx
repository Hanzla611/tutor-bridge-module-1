
import introImage from "../../assets/introimage.jpg";
import { motion, AnimatePresence, useScroll } from "framer-motion"
// import { reinventingCareData, relyList } from "../../mocks/homemockdata";
import { FaUserNurse, FaUserFriends } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { GiLoveMystery, GiPublicSpeaker } from "react-icons/gi";
import { MdBookOnline, MdSpeakerNotes } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
import { BsClipboardHeartFill } from "react-icons/bs";
import {
  SiSimplenote,
  SiFoursquarecityguide,
  SiGoogleclassroom,
} from "react-icons/si";
import "./Homepage.css";

function Homepage({night}) {
  const { scrollYProgress } = useScroll();
  const reinventingCareData = [
    {
      icon: <FaUserNurse />,
      heading: "Personalised Care",
      text: "  Our registered Experts offer a suite of specialized services such  as brainstorming, physical therapy, medication, and more. We  ensure that the right Caregiver is matched with the right Client—so everyone wins.",
    },
    {
      icon: <FaUserFriends />,
      heading: "Caring Companionship",
      text: "  Our registered Experts offer a suite of specialized services such  as brainstorming, physical therapy, medication, and more. We  ensure that the right Caregiver is matched with the right Client—so everyone wins.",
    },
    {
      icon: <GiLoveMystery />,
      heading: "On-Demand Care",
      text: "  Our registered Experts offer a suite of specialized services such  as brainstorming, physical therapy, medication, and more. We  ensure that the right Caregiver is matched with the right Client—so everyone wins.",
    },
    {
      icon: <SiSimplenote />,
      heading: "Simplified",
      text: "  Our registered Experts offer a suite of specialized services such  as brainstorming, physical therapy, medication, and more. We  ensure that the right Caregiver is matched with the right Client—so everyone wins.",
    },
  ];

  const relyList = [
    {
      icon: <GiPublicSpeaker />,
      name: "Daily Motivation",
    },
    {
      icon: <SiFoursquarecityguide />,
      name: "Career Guidance",
    },
    {
      icon: <SiGoogleclassroom />,
      name: "Class Scheduling",
    },
    {
      icon: <RiPresentationLine />,
      name: "Online Meetup",
    },
    {
      icon: <PiPhoneCallFill />,
      name: "Doubts Session",
    },
    {
      icon: <MdBookOnline />,
      name: "Smart Class",
    },
    {
      icon: <BsClipboardHeartFill />,
      name: "Board on Fly",
    },
    {
      icon: <MdSpeakerNotes />,
      name: "Notes",
    },
  ];

  return (
    <div>
      <div className="section-one w-full flex justify-between mt-12 items-center">
        <div className="intro-text  w-full pr-8 ml-32">
          <div className="font-bold text-4xl">
            <h1>Bridging The Gap Between Intellects & Curious</h1>
          </div>

          <p className="font-extralight ">
            Our registered Experts offer a suite of specialized services such as
            brainstorming, physical therapy, medication, and more. We ensure
            that the right Caregiver is matched with the right Client—so
            everyone wins.
          </p>
        </div>
        <div className="intro-image w-full mr-36">
          <img
            className="rounded-xl w-full h-full float-right"
            src={introImage}
            alt="image"
          />
        </div>
      </div>
      <div
        className="section-two mt-24 pb-36"
        style={{ background: !night ? "#F7F9FA" : "" }}
      >
        <h1 className="font-bold text-3xl text-center pt-20">
          Reinventing Care
        </h1>
        <div className=" md:container md:mx-auto px-20 ">
          <div className="flex flex-wrap m-2 mt-20">
            {reinventingCareData.map((item, index) => {
              return (
                <div
                  className="cards rounded-xl border-2 border-slate-200 p-2 m-4 mt-12 py-8 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-6 md:m-4 flex flex-col items-center "
                  key={index}
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h1 className={`font-bold text-xl flex ${!night ? "text-gray-600}" :""}`}>
                    Personalised Experts
                  </h1>
                  <p className={`font-extralight text-xs ${!night ? "text-gray-600" : ""}`}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-three mt-24">
        <div className=" md:container md:mx-auto px-20">
          <h1 className="font-bold text-3xl text-center pt-12">
            You Can Rely On Us For
          </h1>
          <div className="flex flex-wrap mt-20 w-full justify-center">
            {relyList.map((item) => {
              return (
                <div
                  className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-6 md:m-4 flex flex-col items-center"
                  key={item.name}
                >
                  <span className="p-6 rounded-full bg-slate-300 text-6xl">
                    {item.icon}
                  </span>
                  <span className="mt-2">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
