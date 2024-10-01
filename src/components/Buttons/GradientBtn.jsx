import React from "react";

const GradientBtn = ({ title, onClick }) => {
  return (
    <button
      className="px-4 py-3 font-poppins text-white w-[90%] font-normal text-[1rem] rounded-lg "
      style={{
        background: "linear-gradient(270deg, #DE0588 0%, #460BCB 100%)",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default GradientBtn;
