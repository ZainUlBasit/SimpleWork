import React, { useState } from "react";
import "./StepsBtn.css";
import { useLocation } from "react-router-dom";

const StepsBtn = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [Step1, setStep1] = useState(pathname === "/create-new-gig");
  const [Step2, setStep2] = useState(pathname === "/create-new-gig/2");
  const [Step3, setStep3] = useState(pathname === "/create-new-gig/3");
  const [Step4, setStep4] = useState(pathname === "/create-new-gig/4");
  const [Step5, setStep5] = useState(pathname === "/create-new-gig/5");
  const [Step6, setStep6] = useState(pathname === "/create-new-gig/6");
  return (
    <div className="radio-input">
      <div className="radio-item !w-[95px]">
        <input
          type="radio"
          checked={Step1 || Step2 || Step3 || Step4 || Step5 || Step6}
          id="value-1"
          value="value-1"
        />
        <div className="circle"></div>
        <p className="label-text">Step 1</p>
        <p className="font-poppins text-[1rem] -mt-2 font-bold text-[#ffffffb2] text-center">
          Overview
        </p>
      </div>
      <div className="w-[100px] h-[3px] bg-[#FFFFFFB2] mr-10 rounded-full -mt-12"></div>{" "}
      <div className="radio-item !w-[95px]">
        <input
          type="radio"
          checked={Step2 || Step3 || Step4 || Step5 || Step6}
          id="value-2"
          value="value-2"
        />
        <div className="circle"></div>
        <p className="label-text">Step 2</p>
        <p className="font-poppins text-[1rem] -mt-2 font-bold text-[#ffffffb2] text-center">
          Pricing
        </p>
      </div>
      <div className="w-[100px] h-[3px] bg-[#FFFFFFB2] mr-10 rounded-full -mt-12"></div>
      <div className="radio-item !w-[95px]">
        <input
          type="radio"
          checked={Step3 || Step4 || Step5 || Step6}
          id="value-3"
          value="value-3"
        />
        <div className="circle"></div>
        <p className="label-text">Step 3</p>
        <p className="font-poppins text-[1rem] -mt-2 font-bold text-[#ffffffb2] text-center">
          Description
        </p>
      </div>
      <div className="w-[100px] h-[3px] bg-[#FFFFFFB2] mr-10 rounded-full -mt-12"></div>
      <div className="radio-item !w-[95px]">
        <input
          type="radio"
          checked={Step4 || Step5 || Step6}
          id="value-4"
          value="value-4"
        />
        <div className="circle"></div>
        <p className="label-text">Step 4</p>
        <p className="font-poppins text-[1rem] -mt-2 font-bold text-[#ffffffb2] text-center">
          Requirement{" "}
        </p>
      </div>
      <div className="w-[100px] h-[3px] bg-[#FFFFFFB2] mr-10 rounded-full -mt-12"></div>
      <div className="radio-item !w-[95px]">
        <input
          type="radio"
          checked={Step5 || Step6}
          id="value-5"
          value="value-5"
        />
        <div className="circle"></div>
        <p className="label-text">Step 5</p>
        <p className="font-poppins text-[1rem] -mt-2 font-bold text-[#ffffffb2] text-center">
          Gallery
        </p>
      </div>
      <div className="w-[100px] h-[3px] bg-[#FFFFFFB2] mr-10 rounded-full -mt-12"></div>
      <div className="radio-item !w-[95px]">
        <input type="radio" checked={Step6} id="value-6" value="value-6" />
        <div className="circle"></div>
        <p className="label-text">Step 6</p>
        <p className="font-poppins text-[1rem] -mt-2 font-bold text-[#ffffffb2] text-center">
          Publish
        </p>
      </div>
    </div>
  );
};

export default StepsBtn;
