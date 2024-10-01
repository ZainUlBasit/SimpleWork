import React, { useState } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import OrderTable from "../../components/tables/OrderTable";

const OrderList = () => {
  const [CurrentStatus, setCurrentStatus] = useState(1);
  return (
    <div className="px-5 flex w-full text-white">
      <SideMenu />
      <div className="flex flex-col w-full px-4 pt-4 fade-in">
        <div className="font-poppins font-bold text-xl my-3 mb-6">
          <div className="">Orders</div>
        </div>
        <div className="flex items-center gap-x-7 font-poppins font-semibold mb-8 ml-4">
          <div
            className={`py-3 cursor-pointer transition-all ease-in-out duration-700 ${
              CurrentStatus === 1
                ? " border-b-2 border-b-white"
                : " border-b-2 border-b-transparent"
            }`}
            onClick={() => {
              setCurrentStatus(1);
            }}
          >
            ACTIVE (02)
          </div>
          <div
            className={`py-3 cursor-pointer transition-all ease-in-out duration-700 ${
              CurrentStatus === 2
                ? " border-b-2 border-b-white"
                : " border-b-2 border-b-transparent"
            }`}
            onClick={() => {
              setCurrentStatus(2);
            }}
          >
            PENDING (01)
          </div>
          <div
            className={`py-3 cursor-pointer transition-all ease-in-out duration-700 ${
              CurrentStatus === 3
                ? " border-b-2 border-b-white"
                : " border-b-2 border-b-transparent"
            }`}
            onClick={() => {
              setCurrentStatus(3);
            }}
          >
            DELEVERD (01)
          </div>
          <div
            className={`py-3 cursor-pointer transition-all ease-in-out duration-700 ${
              CurrentStatus === 4
                ? " border-b-2 border-b-white"
                : " border-b-2 border-b-transparent"
            }`}
            onClick={() => {
              setCurrentStatus(4);
            }}
          >
            COMPLETED (01)
          </div>
          <div
            className={`py-3 cursor-pointer transition-all ease-in-out duration-700 ${
              CurrentStatus === 5
                ? " border-b-2 border-b-white"
                : " border-b-2 border-b-transparent"
            }`}
            onClick={() => {
              setCurrentStatus(5);
            }}
          >
            CANCELLED (02)
          </div>
        </div>
        <div className="flex flex-col h-fit py-5 px-5 w-full bg-[#FFFFFF33] rounded-[20px] overflow-hidden">
          <div className="border-b-[1px] border-b-white pb-3 font-poppins px-2 uppercase">
            {CurrentStatus === 1
              ? "Active"
              : CurrentStatus === 2
              ? "Pending"
              : CurrentStatus === 3
              ? "DELEVERD"
              : CurrentStatus === 4
              ? "COMPLETED"
              : CurrentStatus === 5 && "CANCELLED"}{" "}
            Orders
          </div>
          <OrderTable
            status={
              CurrentStatus === 1
                ? "Active"
                : CurrentStatus === 2
                ? "Pending"
                : CurrentStatus === 3
                ? "DELEVERD"
                : CurrentStatus === 4
                ? "COMPLETED"
                : CurrentStatus === 5 && "CANCELLED"
            }
            data={[
              {
                avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
                productImage: "https://via.placeholder.com/100x60", // Replace with actual image URL
                due_on: new Date(),
                total: 200,
                notes: "lashjvdhgascvdhgaschgxcashgcxahgc",
                status: "ACTIVE",
              },
              {
                avatar: "https://via.placeholder.com/50", // Replace with actual avatar URL
                productImage: "https://via.placeholder.com/100x60", // Replace with actual image URL
                due_on: new Date(),
                total: 200,
                notes: "lashjvdhgascvdhgaschgxcashgcxahgc",
                status: "ACTIVE",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
