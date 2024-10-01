import React, { useState } from "react";
import StepsBtn from "../../components/Buttons/StepsBtn";
import { BiSolidChevronDown } from "react-icons/bi";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import GradientBtn from "../../components/Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";

const CreateNewGig2 = () => {
  const [text, setText] = useState("");
  const maxLength = 100;
  const [checked, setChecked] = useState([]);
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
          <div className="font-semibold text-xl">Advertisement</div>
          <div className="font-normal text-[1rem]">Package</div>
        </div>
        <div className="flex-col w-[80%] mt-7">
          <div className="flex bg-[#FFFFFF33] w-fit">
            <div className="w-[250px] font-poppins">
              <div className="h-[36.5vh] border-[1px] border-white"></div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Number of Screens
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Custom Asset Design
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Responsive Design
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Wireframe
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Prototype
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Source file
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center">
                Revisions
              </div>
              <div className="border-[1px] border-white py-3 px-2 text-center h-[10vh] flex justify-center items-center bg-[#FFFFFF80]">
                Price
              </div>
            </div>
            <div className="w-[250px] font-poppins">
              <div className="text-xl font-semibold border-[1px] border-white py-5 text-center bg-[#FFFFFF80]">
                BASIC
              </div>
              <div className="text-sm font-thin p-2 border-[1px] border-white h-[10vh]">
                Your Package name
              </div>
              <div className="text-sm font-thin flex-wrap flex p-2 border-[1px] border-white h-[10vh]">
                Describe the details you offering ...
              </div>
              <div className="text-sm font-thin flex-wrap flex p-2 border-[1px] border-white h-[8vh]">
                Delivery Time
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                01
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                Select
              </div>

              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                Select
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                $ 00
              </div>
            </div>
            <div className="w-[250px] font-poppins">
              <div className="text-xl font-semibold border-[1px] border-white py-5 text-center bg-[#FFFFFF80]">
                STANDARD
              </div>
              <div className="text-sm font-thin p-2 border-[1px] border-white h-[10vh]">
                Your Package name
              </div>
              <div className="text-sm font-thin flex-wrap flex p-2 border-[1px] border-white h-[10vh]">
                Describe the details you offering ...
              </div>
              <div className="text-sm font-thin flex-wrap flex p-2 border-[1px] border-white h-[8vh]">
                Delivery Time
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                01
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                Select
              </div>

              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                Select
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                $ 00
              </div>
            </div>
            <div className="w-[250px] font-poppins">
              <div className="text-xl font-semibold border-[1px] border-white py-5 text-center bg-[#FFFFFF80]">
                PREMIUM
              </div>
              <div className="text-sm font-thin p-2 border-[1px] border-white h-[10vh]">
                Your Package name
              </div>
              <div className="text-sm font-thin flex-wrap flex p-2 border-[1px] border-white h-[10vh]">
                Describe the details you offering ...
              </div>
              <div className="text-sm font-thin flex-wrap flex p-2 border-[1px] border-white h-[8vh]">
                Delivery Time
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                01
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                Select
              </div>

              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-center items-center">
                <FormControlLabel
                  control={
                    <Checkbox
                      // value={dt.title}
                      checked={false}
                      // onChange={handleChangeCheckBox}
                      color="white" // You can change this to 'secondary', 'default', or custom color
                      sx={{ color: "white" }}
                    />
                  }
                  // label={dt.title}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontFamily: '"Poppins", sans-serif', // Use Poppins font family
                      fontSize: "1rem", // Adjust font size if needed
                      color: "white", // Ensure the label text is visible
                    },
                  }}
                />
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                Select
              </div>
              <div className="text-[1rem] font-normal flex-wrap flex p-2 border-[1px] border-white h-[10vh] justify-start items-center">
                $ 00
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] py-8 px-3">
          <div className="w-[300px]">
            <GradientBtn
              title={"Continue"}
              onClick={() => {
                navigate("/seller/create-new-gig/3");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewGig2;
