import { Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";

const ContextMenuProduct = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div
        className={`relative text-center text-lg tracking-[1px] no-underline text-[#fff] cursor-pointer transition-all ease-in-out duration-500  hover:text-[black] shadow-[inset_0_0_0_0_#fff] hover:shadow-[inset_0_-100px_0_0_#fff] active:scale-90 px-1 py-1 rounded-full font-[Quicksand] font-[700] text-[1rem] bg-transparent flex gap-x-6 items-center maxWeb1:text-[1.5rem] maxWeb2:text-[2rem] maxWeb3:text-[2.5rem] maxWeb4:text-[3rem] w-fit`}
        onClick={handleClick}
      >
        <IoSettings
          className="text-[1.5rem] cursor-pointer"
          aria-describedby={id}
          variant="contained"
        />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "10px", // Add rounded corners
            backgroundColor: "white", // Set background color to white
            width: "fit", // Set the width as needed
            // overflow: "hidden", // Hide overflowing content
            marginTop: "10px",
            boxShadow: "none",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography
          sx={{
            borderColor: "#465462",
            backgroundColor: "#fff",
            // width: "400px",
            // overflow: "hidden",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div className="bg-[#fff] text-black font-poppins  flex flex-col justify-center items-start rounded-[50px] p-2">
            <div className="w-full cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-lg font-normal font-poppins">
              Preview
            </div>
            <div className="w-full cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-lg font-normal font-poppins">
              Edit
            </div>
            <div className="w-full cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-lg font-normal font-poppins">
              Share
            </div>
            <div className="w-full cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-lg font-normal font-poppins">
              Delete
            </div>
          </div>
        </Typography>
      </Popover>
    </>
  );
};

export default ContextMenuProduct;
