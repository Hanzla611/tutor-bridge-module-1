import Icon from "../../assets/logo.svg";
import { motion } from "framer-motion";
function Header() {
  return (
    <div className="md:container md:mx-auto px-20">
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
            <span className="p-6 font-bold cursor-pointer hover:text-grey-200">
              Home
            </span>
            <span className="p-6 font-bold cursor-pointer hover:text-grey-200">
              About Us
            </span>
            <span className="p-6 font-bold cursor-pointer hover:text-grey-200">
              Services
            </span>
            <span className="p-6 font-bold cursor-pointer hover:text-grey-200">
              Contact Us
            </span>
            <button className="bg-black text-white font-bold rounded-3xl p-2 mr-6">
              Register With Us
            </button>
            <button className="p-2 bg-green-400 text-white font-bold rounded-3xl px-4">
              LogIn ▶️
            </button>
          </div>
        </div>
      </div>
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
