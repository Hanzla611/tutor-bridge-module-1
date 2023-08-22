import Icon from "../../assets/logo.svg";
import { motion } from "framer-motion";
function Header({ night, setNight }) {
  return (
    <div className="md:container md:mx-auto px-12 flex items-center">
      <div className=" md:container md:mx-auto d-flex flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <div className="icon">
            <img className="w-20 p-0 m-0 ml-2" src={Icon} alt="icon" />
          </div>
        </motion.div>
        <div className="nav-items">
          <div className="mr-6 d-flex items-center">
            <motion.span
              whileHover={{ scale: 1.1, color: "#ccc" }}
              className="p-6 font-bold cursor-pointer"
            >
              Home
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#ccc" }} // Scale and color change on hover
              className="p-6 font-bold cursor-pointer"
            >
              About Us
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1, color: "#ccc" }} // Scale and color change on hover
              className="p-6 font-bold cursor-pointer"
            >
              Services
            </motion.span>
            <motion.span
              whileHover={{ scale: 0.2, color: "#ccc" }} // Scale and color change on hover
              className="p-6 font-bold cursor-pointer"
            >
              Contact Us
            </motion.span>
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "gray" }} // Scale and color change on hover
              className="bg-black text-white font-bold rounded-3xl p-2 mr-6"
            >
              Register With Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.25, backgroundColor: ";lightgreen" }} // Scale and color change on hover
              className="p-2 bg-green-400 text-white font-bold rounded-3xl px-4"
            >
              LogIn ▶️
            </motion.button>
          </div>
        </div>
      </div>
      {night ? (
        <span
          onClick={() => setNight(!night)}
          className="cursor-pointer text-3xl pl-6"
        >
          ☀️
        </span>
      ) : (
        <span
          onClick={() => setNight(!night)}
          className=" cursor-pointer pl-6 text-3xl"
        >
          🌒
        </span>
      )}
    </div>
  );
}

export default Header;

// import "./Header.css";
// import Icon from "../../assets/b-icon.png";

// function Header() {
//   return (
//     <div className="header bg-sky-600 text-neutral-100 w-full flex d-flex justify-between items-center">
//       <div className="p-3">
//         <img className="w-20 p-0 m-0 ml-2" src={Icon} alt="icon" />
//         {/* <span className="icon-text mt--2">TutorBridge_Gap</span> */}
//       </div>
//       <div className="mr-6 d-flex items-center">
//         <span className="p-6 font-bold cursor-pointer hover:text-sky-200">Home</span>
//         <span className="p-6 font-bold cursor-pointer hover:text-sky-200">Gallery</span>
//         <span className="p-6 font-bold cursor-pointer hover:text-sky-200">Contact Us</span>
//         <span className="p-6 font-bold cursor-pointer hover:text-sky-200">Support</span>
//         <span className="p-6 font-bold cursor-pointer hover:text-sky-200">Menu</span>
//       </div>
//     </div>
//   );
// }

// export default Header;
