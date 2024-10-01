import React from "react";
import GradientBtn from "../../components/Buttons/GradientBtn";

const Account = () => {
  return (
    <div className="bg-[#FFFFFF33] text-white w-full rounded-2xl items-center flex flex-col justify-center gap-y-8 py-8">
      <div className="flex justify-center flex-col w-[90%] font-poppins text-sm px-3 gap-y-1">
        <div className="">Full Name</div>
        <input
          type="text"
          className="w-[100%] border-2 border-white bg-transparent px-4 py-3 rounded-xl outline-none"
        />
      </div>
      <div className="flex justify-center flex-col w-[90%] font-poppins text-sm px-3 gap-y-1">
        <div className="">Email</div>
        <input
          type="email"
          className="w-[100%] border-2 border-white bg-transparent px-4 py-3 rounded-xl outline-none"
        />
      </div>
      <div className="w-[90%] my-5 px-5">
        <div className="max-w-[300px]">
          <GradientBtn title={"Continue"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Account;
