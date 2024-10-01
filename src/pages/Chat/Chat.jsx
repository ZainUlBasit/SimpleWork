import React from "react";

const Chat = () => {
  return <div className="text-white">Chat</div>;
};

export default Chat;
// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import moment from "moment";
// import { FaListAlt, FaSearch } from "react-icons/fa";
// import { motion } from "framer-motion";
// import "./Chat.css";
// import { HiOutlineMailOpen } from "react-icons/hi";
// import { FaStar } from "react-icons/fa6";

// const Chat = () => {
//   const dispatch = useDispatch();
//   const [SelectedId, setSelectedId] = useState("");
//   const [Message, setMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [OpenContactList, setOpenContactList] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       if (window.innerWidth > 770) setOpenContactList(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await SendMessageAPI({
//         patientId: AuthState.data.patientId._id,
//         doctorId: SelectedId,
//         message: Message,
//         date: Math.floor(new Date() / 1000),
//         sender: 2,
//       });
//       if (response?.data?.success) {
//         dispatch(fetchPatientsForChat());
//         setMessage("");
//         // SuccessToast(response.data?.data?.msg);
//       }
//     } catch (err) {
//       ErrorToast(err.response?.data?.error?.msg || err.message);
//     }
//   };

//   return (
//     <div className="w-screen min-h-screen bg-aliceblue">
//       <div className="flex justify-center items-center w-full">
//         <div className="w-[90%] overflow-hidden">
//           <div
//             className="w-full bg-custom-bg text-white font-[600] font-montserrat text-4xl flex justify-center items-center py-5 rounded-t-lg relative"
//             style={{ textShadow: "#768A9E 1px 0 10px" }}
//           >
//             Chat
//             <FaListAlt
//               className={`absolute top-1/2 left-7 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-aliceblue transition-all ease-in-out duration-700 cursor-pointer ${
//                 windowWidth > 770 && "hidden"
//               }`}
//               onClick={() => {
//                 setOpenContactList(!OpenContactList);
//               }}
//             />
//           </div>
//           <motion.div
//             className="flex w-full border-2 border-custom-bg rounded-b-lg"
//             initial={{ width: OpenContactList ? "100%" : "100%" }}
//             animate={{ width: OpenContactList ? "100%" : "100%" }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             {(windowWidth > 770 || OpenContactList) && (
//               <motion.div
//                 className={`min-h-[60vh] flex flex-col border-r-[2px] border-r-[#465462] ${
//                   OpenContactList && "w-full"
//                 }`}
//                 initial={{ x: -400, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: -400, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//               >
//                 <div className="font-montserrat font-bold text-center py-8 bg-custom-bg text-white min-w-[300px]">
//                   <div className="flex w-full justify-between items-center font-poppins px-4">
//                     <div className="">All Messages</div>
//                     <div className="">
//                       <FaSearch />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center py-2 gap-y-2 px-4">
//                   <div className="flex items-center gap-x-2" onClick={() => {}}>
//                     <img
//                       className="w-[50px] h-[50px] object-contain"
//                       src={"/customerimg.png"}
//                       alt=""
//                     />
//                     <div className="text-white flex flex-col">
//                       <div className="">Test</div>
//                       <div className="text-sm font-thin">
//                         Me: are you available
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <div className="flex flex-col text-white font-poppins gap-y-1">
//                       <div className="flex gap-x-2 items-center text-sm">
//                         1 week
//                       </div>
//                       <div className="flex gap-x-2 items-center">
//                         <HiOutlineMailOpen className="text-[#fff] text-xl" />
//                         <FaStar className="text-[#fff] text-xl" />
//                       </div>
//                       <div className=""></div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//             <div
//               className={
//                 SelectedId === "" || OpenContactList
//                   ? "hidden"
//                   : "card-container"
//               }
//             >
//               <div className="card-header">
//                 <div className="img-avatar">
//                   {SelectedId && (
//                     <img src={"/customerimg.png"} alt="Doctor Image" />
//                   )}
//                 </div>
//                 <div className="text-chat">Zain</div>
//               </div>
//               <div className="card-body">
//                 <div className="messages-container">
//                   <div
//                     className={`px-2 py-2 w-full font-montserrat text-white font-semibold ${
//                       true
//                         ? "flex justify-start items-center"
//                         : false && "flex justify-end items-center"
//                     }`}
//                   >
//                     <div
//                       className={`w-fit px-4 pt-3 message-box ${
//                         true
//                           ? "left"
//                           : false === 1 && "right"
//                       }`}
//                     >
//                       {d.message}
//                       <div className="text-xs py-2 justify-end">
//                         {moment(new Date(d.date * 1000)).format(
//                           "DD-MM-YY - hh:mm A"
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                   <div ref={messagesEndRef} />
//                 </div>
//                 <div className="message-input">
//                   <form
//                   //   onSubmit={handleSendMessage}
//                   >
//                     <textarea
//                       placeholder="Type your message here"
//                       className="message-send"
//                       value={Message}
//                       onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
//                     <button type="submit" className="button-send">
//                       Send
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
