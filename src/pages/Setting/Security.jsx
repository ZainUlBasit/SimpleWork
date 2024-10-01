import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GradientBtn from "../../components/Buttons/GradientBtn";
const Security = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-[#FFFFFF33] text-white w-full rounded-2xl items-center flex flex-col justify-center gap-y-8 py-8">
      <div className="flex justify-center flex-col w-[90%] font-poppins text-sm px-3 gap-y-1">
        <div>Password</div>
        <div className="relative w-[100%]">
          <input
            type={showPassword ? "text" : "password"}
            className="w-[100%] border-2 border-white bg-transparent px-4 py-3 rounded-xl outline-none"
            placeholder="Enter your password"
          />
          <div
            className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </div>
        </div>
      </div>
      <div className="w-[90%] my-5 px-5">
        <div className="max-w-[300px]">
          <GradientBtn title={"Change Password"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Security;
