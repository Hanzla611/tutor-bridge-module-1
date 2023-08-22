import Icon from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="w-full bg-black flex flex-row bottom-0 justify-between text-white p-2 py-4 items-center mt-32 px-4">
      <div className="icon">
        <img className="w-16 p-0 m-0 ml-2" src={Icon} alt="icon" />
      </div>
      <div>
        <span className="text-md font-bold">
          T&C | Privacy Policy |Disclaimer | FAQs
        </span>
      </div>
      <div className="text-xs">Copyright © 2023 TutorBridge</div>
    </div>
  );
}

export default Footer;
