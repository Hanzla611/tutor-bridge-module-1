import React from "react";
import registerCover from "../../assets/registar.jpg";

function Register() {
  return (
    <div className="flex border-2 border-slate-200 rounded-xl w-2/4 mx-auto my-10">
      <div className="image">
        <img className="rounded-l-xl " style={{width:"92%"}} src={registerCover} alt="cover" />
      </div>
      <div className="form w-9/12 py-2 px-4 pt-4">
        <span className="text-2xl font-bold text-blue-400">Register</span>
        <br />
        <span className="text slate-400" style={{color:"gray"}}>Register to our world to be the best version of yourself</span>
        <div className="form-body">
          <div className="pt-1">
            {/* <label className="m-2">
              Email<span className="text-red-500">*</span>
            </label> */}
  
            <div className="border-2 p-2 rounded-md m-2">
              <input
                placeholder="Name"
                className="focus:outline-none bg-inherit"
              />
            </div>
          </div>
          <div className="pt-1">
            {/* <label className="m-2">
              Password<span className="text-red-500">*</span>
            </label> */}
     
            <div className="border-2 p-2 rounded-md m-2 ">
              <input
                placeholder="password"
                type="password"
                className="focus:outline-none bg-inherit"
              />
            </div>
          </div>
          <div className="pt-1">
            {/* <label className="m-2">
              Retype Password<span className="text-red-500">*</span>
            </label> */}
         
            <div className="border-2 p-2 rounded-md m-2 ">
              <input
                placeholder="Retype-password"
                type="password"
                className="focus:outline-none bg-inherit"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
            <input type='radio' className="p-2 mr-2"/>
            <span className="pt-4 text-sm text-slate-500">By tapping you agree to our <span className="font-bold hover:underline">Terms and Services</span></span>
        </div>
      
        <div className="flex items-center mt-6 justify-center">
            <button className="p-2 bg-black text-white font-bold rounded-3xl w-8/12 px-4">
              Submit
            </button>
          </div>
          <div className="mt-4 text-slate-500 text-sm"><span>Already a member? <span className="hover:underline">click to Login</span></span></div>
      </div>
    </div>
  );
}

export default Register;
