import { useState } from "react";
import Search from "../../assets/search-normal.png";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import NavItem from "./NavItem";

const NavData = [
  {
    title: "Find Job",
    Link: "/findjob",
  },
  {
    title: "GigList",
    Link: "/giglist",
  },
  {
    title: "How we are",
    Link: "/how-we-are",
    SubLinks: [
      { title: "Our Story", Link: "/our-story" },
      { title: "Team", Link: "/team" },
      { title: "Careers", Link: "/careers" },
    ],
  },
  {
    title: "Resources",
    Link: "/how-we-are",
    SubLinks: [
      { title: "Blog", Link: "/blog" },
      { title: "Case Studies", Link: "/case-studies" },
      { title: "Guides", Link: "/guides" },
    ],
  },
];

export default function Navbar() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [Token, setToken] = useState(localStorage.getItem("token"));

  return (
    <div className="bg-[#381138] w-full px-6 md:px-12 h-[12vh]">
      <div className="flex flex-row justify-between items-center text-white h-full">
        {/* Logo */}
        <div className="flex flex-row items-center">
          <div className="h-[80px] w-[100px]">
            <img className="w-[100%] h-[100%]" src={Logo} alt="" />
          </div>
          <Link to="/">
            <h1 className="text-xl font-bold">SIMPLEWORK</h1>
          </Link>
        </div>

        {/* Links Section (hidden on mobile) */}
        <div className="hidden md:flex gap-x-6 h-full">
          {NavData.map((dt, index) => (
            <NavItem key={index} nav={dt} />
          ))}
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            ☰
          </button>
        </div>

        {/* Search and Buttons Section (visible on desktop) */}
        <div className={`hidden md:flex items-center gap-x-3`}>
          <div className="flex items-center my-3 md:my-0">
            <input
              type="text"
              placeholder=""
              className="p-2 bg-transparent text-white outline-none placeholder-gray-300 border-b border-white"
            />
            <img src={Search} alt="Search Icon" className="w-5 h-5 ml-2" />
          </div>
          {Token ? (
            <div className="h-12 w-12 bg-black rounded-full"></div>
          ) : (
            <Link to={"/login"} className="p-3 border border-white text-sm">
              Login
            </Link>
          )}
          <button className="p-3 bg-gradient-to-br from-[#DE0588] to-[#460BCB] text-sm">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu Links (visible when toggled) */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col gap-y-4 mt-4 text-white">
          <li>
            <Link to={"/profilepage"}>Solutions</Link>
          </li>
          <li>
            <Link to={"/findjob"}>Find Job</Link>
          </li>
          <li>
            <Link to={"/giglist"}>GigList</Link>
          </li>
          <li>
            <Link to={"/aboutseller"}>About Seller</Link>
          </li>
          <li>
            <a href="#">Solution 2</a>
          </li>
          <li>
            <a href="#">Solution 3</a>
          </li>
          <li>
            <a href="#">Prices</a>
          </li>
          <li>
            <a href="#">How we are</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>

          {/* Search bar and Buttons (at the end of the list on mobile) */}
          <div className="flex flex-col items-center gap-y-2 mt-4">
            <div className="flex items-center mb-3">
              <input
                type="text"
                placeholder=""
                className="p-2 bg-transparent text-white outline-none placeholder-gray-300 border-b border-white w-full"
              />
              <img src={Search} alt="Search Icon" className="w-5 h-5 ml-2" />
            </div>
            <Link to={"/login"}>login</Link>
            <button className="p-3 bg-gradient-to-br from-[#DE0588] to-[#460BCB] text-sm w-full">
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
