import {
  faMapMarked,
  faMapMarkedAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownArrow from "../assets/profilepage/downarrow.png";
import Yourlogo from "../assets/profilepage/yourlogo.png";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Graphic Designer",
    company: "Web Flow",
    description: "Lorem Ipsum Dolor Sit Amet Consecutur. Consequat Pharetra.",
    workType: "Full Time",
    experience: "Senior Level",
    price: "$102",
  },
  {
    title: "Graphic Designer",
    company: "Web Flow",
    description: "Lorem Ipsum Dolor Sit Amet Consecutur. Consequat Pharetra.",
    workType: "Full Time",
    experience: "Senior Level",
    price: "$120",
  },
  {
    title: "Graphic Designer",
    company: "Web Flow",
    description: "Lorem Ipsum Dolor Sit Amet Consecutur. Consequat Pharetra.",
    workType: "Part Time",
    experience: "Junior Level",
    price: "$80",
  },
  {
    title: "Graphic Designer",
    company: "Web Flow",
    description: "Lorem Ipsum Dolor Sit Amet Consecutur. Consequat Pharetra.",
    workType: "Full Time",
    experience: "Senior Level",
    price: "$102",
  },
  {
    title: "Graphic Designer",
    company: "Web Flow",
    description: "Lorem Ipsum Dolor Sit Amet Consecutur. Consequat Pharetra.",
    workType: "Full Time",
    experience: "Senior Level",
    price: "$120",
  },
  {
    title: "Graphic Designer",
    company: "Web Flow",
    description: "Lorem Ipsum Dolor Sit Amet Consecutur. Consequat Pharetra.",
    workType: "Part Time",
    experience: "Junior Level",
    price: "$80",
  },
];
export default function Findjob() {
  return (
    <div className="bg-gradient-to-r from-black to-purple-900">
      <div className="flex justify-center  mx-[4%]">
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 px-12 mt-[5%] rounded-3xl pt-10 pb-10 h-[220px] shadow-lg w-[1200px] ">
          <h2 className="text-white text-start text-2xl mb-4">
            Find Your Job Here
          </h2>
          <div className="bg-white rounded-full flex items-center p-3 shadow-md justify-between">
            <div className="flex  flex-row">
              <div className="flex items-center px-4 border-r border-gray-300 ">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="x"
                  className="text-black"
                />
                <input
                  type="text"
                  placeholder="Job Title Or Keyword"
                  className="ml-2 p-2 text-gray-700 focus:outline-none"
                />
              </div>

              <div className="flex items-center px-4">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  size="x"
                  className="text-black"
                />
                <input
                  type="text"
                  placeholder="Add Location Or City"
                  className="ml-2 p-2 text-gray-700 focus:outline-none"
                />
              </div>
            </div>

            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 ml-4">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className=" py-4 px-6 mx-[4%] my-[70px]">
        <h2 className="text-white mb-4 font-semibold text-2xl ml-[10%]">
          Filters
        </h2>
        <div className="flex space-x-10 justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 text-xl flex flex-row items-center px-6 ">
            Category{" "}
            <span className="ml-2">
              <img className="mt-2" src={DownArrow} alt="" />
            </span>
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 text-xl flex flex-row items-center px-6 ">
            Price Range{" "}
            <span className="ml-2">
              <img className="mt-2" src={DownArrow} alt="" />
            </span>
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 text-xl flex flex-row items-center px-6 ">
            Deadline{" "}
            <span className="ml-2">
              <img className="mt-2" src={DownArrow} alt="" />
            </span>
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 text-xl flex flex-row items-center px-6 ">
            Deadline{" "}
            <span className="ml-2">
              <img className="mt-2" src={DownArrow} alt="" />
            </span>
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 text-xl flex flex-row items-center px-6 ">
            Verified{" "}
            <span className="ml-2">
              <img className="mt-2" src={DownArrow} alt="" />
            </span>
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 text-xl flex flex-row items-center px-6 ">
            Level
            <span className="ml-2">
              <img className="mt-2" src={DownArrow} alt="" />
            </span>
          </button>
        </div>
      </div>

      <div>
        <div className="p-8  mt-10 mx-[8%]">
          <div className="grid grid-cols-7 text-white mb-6 text-xl font-semibold">
            <div className="col-span-3 ml-4 text-left">Job</div>
            <div className="text-left">Work Type</div>
            <div className="text-left">Experience</div>
            <div className="text-left">Price</div>
            <div className="text-left"></div>
          </div>
          <Link to={"/jobdetails"}>
            {jobs.map((job, index) => (
              <div
                key={index}
                className="grid grid-cols-7 text-white font-bold text-xl gap-4 items-center p-4 bg-opacity-50 mb-4 rounded-lg"
              >
                <div className="col-span-3 flex items-center space-x-4">
                  <img
                    src={Yourlogo}
                    alt="Company Logo"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold">{job.title}</h2>
                    <p className="text-sm text-gray-400">{job.company}</p>
                    <p className="text-xs text-gray-500">{job.description}</p>
                  </div>
                </div>
                <div>{job.workType}</div>
                <div>{job.experience}</div>
                <div>{job.price}</div>
                <div className="text-right">
                  <button className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v16l7-5 7 5V3H5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </Link>
        </div>
      </div>
    </div>
  );
}
