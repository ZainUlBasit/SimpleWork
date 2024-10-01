import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  let isMount = false;

  useEffect(() => {
    if (!isMount) {
      setInterval(() => {
        isMount = true;
        setLoading(false);
      }, 1000);
    }
  }, []);

  return loading ? (
    <div className="flex justify-center items-center w-screen h-screen bg-[black] relative">
      <Loader />
    </div>
  ) : (
    <div className="w-screen bg-black min-h-screen relative">
      {/* Ellipses with lower z-index */}
      <img
        src="/Ellipse1.png"
        alt=""
        className="absolute left-0 top-0 w-[400px] z-10"
      />
      <img
        src="/Ellipse2.png"
        alt=""
        className="absolute right-0 top-0 w-[150px] z-10"
      />
      <img
        src="/Ellipse3.png"
        alt=""
        className="absolute right-0 bottom-0 w-[500px] z-10"
      />

      {/* Navbar with higher z-index */}
      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 w-full items-center justify-center fade-in">
        {/* Outlet content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
