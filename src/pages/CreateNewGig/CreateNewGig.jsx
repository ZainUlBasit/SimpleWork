import React, { useState } from "react";
import StepsBtn from "../../components/Buttons/StepsBtn";
import { BiSolidChevronDown } from "react-icons/bi";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import GradientBtn from "../../components/Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";

const CreateNewGig = () => {
  const [text, setText] = useState("");
  const maxLength = 100;
  const [checked, setChecked] = useState([]);
  const [Tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeCheckBox = (event) => {
    if (checked.find((dt) => dt === event.target.value)) {
      setChecked(checked.filter((dt) => dt !== event.target.value));
    } else {
      setChecked([...checked, event.target.value]);
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-[#FFFFFF33] text-white w-[100%] flex flex-col justify-center items-center py-4 mx-6 font-poppins rounded-2xl">
        <div className="flex justify-start items-center w-[80%] my-4 mb-8 font-semibold text-xl">
          Create New Gig
        </div>
        <StepsBtn />
        <div className="flex-col w-[80%] mt-7">
          <div className="font-semibold text-xl">Gig Title</div>
          <div className="text-[.7rem] font-thin w-[50%] mb-1">
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours
          </div>
          <div className="relative w-full">
            <textarea
              className="w-full bg-transparent text-white border-white border-[1px] rounded-2xl p-2 h-[20vh] text-[1rem] font-poppins outline-none mt-2 resize-none"
              placeholder="Lorem Ipsum ..."
              minLength={100}
              maxLength={maxLength}
              value={text}
              onChange={handleChange}
            />
            {/* Character counter in the bottom-right corner */}
            <div className="absolute bottom-2 right-2 text-white text-[.7rem]">
              {text.length}/{maxLength}
            </div>
          </div>
        </div>
        <div className="flex-col w-[80%] mt-7">
          <div className="font-semibold text-xl">Category</div>
          <div className="text-[.7rem] font-thin w-[50%] mb-1">
            Choose the category and sub-category most suitable for your Gig.
          </div>
          <div className="w-full flex justify-between">
            <div
              className={`relative text-center text-lg tracking-[1px] no-underline text-[#fff] cursor-pointer transition-all ease-in-out duration-500 border-2 border-solid border-[#f7f7f7] hover:text-[black] shadow-[inset_0_0_0_0_#fff] hover:shadow-[inset_0_-100px_0_0_#fff] active:scale-90 px-4 py-3 rounded-2xl font-[Quicksand] font-[700] text-[1rem] bg-transparent flex gap-x-6 items-center maxWeb1:text-[1.5rem] maxWeb2:text-[2rem] maxWeb3:text-[2.5rem] maxWeb4:text-[3rem]`}
              //   onClick={handleClick}
            >
              <div className="flex items-center">
                <div className="w-[250px] outline-none font-[200] font-poppins text-[1.1rem] text-left placeholder:text-white bg-transparent whitespace-nowrap">
                  Select Category
                </div>
                <BiSolidChevronDown
                  className="text-[1.5rem] cursor-pointer"
                  //   aria-describedby={id}
                  variant="contained"
                />
              </div>
            </div>
            <div
              className={`relative text-center text-lg tracking-[1px] no-underline text-[#fff] cursor-pointer transition-all ease-in-out duration-500 border-2 border-solid border-[#f7f7f7] hover:text-[black] shadow-[inset_0_0_0_0_#fff] hover:shadow-[inset_0_-100px_0_0_#fff] active:scale-90 px-4 py-3 rounded-2xl font-[Quicksand] font-[700] text-[1rem] bg-transparent flex gap-x-6 items-center maxWeb1:text-[1.5rem] maxWeb2:text-[2rem] maxWeb3:text-[2.5rem] maxWeb4:text-[3rem]`}
              //   onClick={handleClick}
            >
              <div className="flex items-center">
                <div className="w-[250px] outline-none font-[200] font-poppins text-[1.1rem] text-left placeholder:text-white bg-transparent whitespace-nowrap">
                  Select Sub Category
                </div>
                <BiSolidChevronDown
                  className="text-[1.5rem] cursor-pointer"
                  //   aria-describedby={id}
                  variant="contained"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col w-[80%] mt-7">
          <div className="font-semibold text-xl">Gig Metadata</div>
          <div className="flex justify-between py-5">
            <div className="flex flex-col w-[340px] p-6 border-2 border-white rounded-3xl">
              <div className="flex items-start py-3 justify-between font-poppins">
                <div className="text-xl font-semibold">App Type</div>
                <div className="text-sm">03 / 03</div>
              </div>
              <div className="w-[270px] text-[.8rem] font-poppins">
                Select the types of applications you specialize in.
              </div>
              <div className="flex flex-wrap justify-between">
                {[
                  { title: "Business" },
                  { title: "Books" },
                  { title: "Events" },
                  { title: "Education" },
                  { title: "Games" },
                ].map((dt) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={dt.title}
                        checked={checked.find((dt) => dt === dt.title)}
                        onChange={handleChangeCheckBox}
                        color="white" // You can change this to 'secondary', 'default', or custom color
                        sx={{ color: "white" }}
                      />
                    }
                    label={dt.title}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                        fontSize: "1rem", // Adjust font size if needed
                        color: "white", // Ensure the label text is visible
                      },
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[340px] p-6 border-2 border-white rounded-3xl">
              <div className="flex items-start py-3 justify-between font-poppins">
                <div className="text-xl font-semibold">Design Tool</div>
                <div className="text-sm">03 / 03</div>
              </div>
              <div className="w-[270px] text-[.8rem] font-poppins">
                Select the design tools you deliver in your Gig or Extras.
              </div>
              <div className="flex flex-wrap justify-between">
                {[
                  { title: "Marvel" },
                  { title: "Figma" },
                  { title: "Adobe XD" },
                  { title: "Fluid" },
                  { title: "Zeplin" },
                ].map((dt) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={dt.title}
                        checked={checked.find((dt) => dt === dt.title)}
                        onChange={handleChangeCheckBox}
                        color="white" // You can change this to 'secondary', 'default', or custom color
                        sx={{ color: "white" }}
                      />
                    }
                    label={dt.title}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                        fontSize: "1rem", // Adjust font size if needed
                        color: "white", // Ensure the label text is visible
                      },
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[340px] p-6 border-2 border-white rounded-3xl">
              <div className="flex items-start py-3 justify-between font-poppins">
                <div className="text-xl font-semibold">Device</div>
                <div className="text-sm">03 / 03</div>
              </div>
              <div className="w-[270px] text-[.8rem] font-poppins">
                What mobile do you design for?
              </div>
              <div className="flex flex-wrap justify-between">
                {[
                  { title: "Events" },
                  { title: "Education" },
                  { title: "Business" },
                  { title: "Books" },
                  { title: "Games" },
                ].map((dt) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={dt.title}
                        checked={checked.find((dt) => dt === dt.title)}
                        onChange={handleChangeCheckBox}
                        color="white" // You can change this to 'secondary', 'default', or custom color
                        sx={{ color: "white" }}
                      />
                    }
                    label={dt.title}
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                        fontSize: "1rem", // Adjust font size if needed
                        color: "white", // Ensure the label text is visible
                      },
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col w-[80%] mt-7">
          <div className="font-semibold text-xl">Positive Keywords</div>
          <div className="text-[.7rem] font-thin w-[50%] mb-1">
            Enter search terms you feel your buyers will use when looking for
            your service.
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-fit bg-transparent text-white border-white border-[1px] rounded-2xl p-4 text-[1rem] font-poppins outline-none mt-2 resize-none"
              placeholder="Lorem Ipsum ..."
              minLength={100}
              maxLength={maxLength}
              value={text}
              onChange={handleChange}
            />
            {/* Character counter in the bottom-right corner */}
            <div className="absolute bottom-3 right-3 text-white text-[.7rem]">
              05 Tags Maximum
            </div>
          </div>
        </div>
        <div className="w-[80%] py-8 px-3">
          <div className="w-[300px]">
            <GradientBtn
              title={"Continue"}
              onClick={() => {
                navigate("/seller/create-new-gig/2");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewGig;
