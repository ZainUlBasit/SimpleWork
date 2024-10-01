import { Link } from "react-router-dom";
import Typing from "../assets/bro.png";
import Cube from "../assets/cube.png";

export default function Signup() {
  return (
    <div className="bg-black flex items-center justify-center ">
      <div className="bg-black text-white flex w-[100%] h-[100%] overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-10">
          <div className="flex items-center">
            <img
              src={Cube}
              alt="Logo"
              width="50"
              height="50"
              className="mr-3"
            />
            <span className="text-2xl font-bold">SIMPLEWORK</span>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">SIGNUP</h2>
            <p className="mb-6">Create your account</p>
          </div>

          <form>
            <div className="mb-4">
              <input
                type="name"
                placeholder="Name"
                className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="confirmpassword"
                placeholder="Confirm Password"
                className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none"
              />
            </div>
            <div className="mb-6 text-left">
              <a href="#" className="text-red-500">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded gradient-button text-white font-bold"
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-center">
            Already a member?{" "}
            <Link to={"/login"} className="text-pink-500">
              Login
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex w-[50%] items-center justify-center rounded-l-[12%] bg-pink-600">
          <div className="top-0 right-0 bottom-0 left-0"></div>
          <div className="relative z-10">
            <img
              src={Typing}
              alt="Illustration"
              width="300"
              height="300"
              className="mb-6"
            />
            <h2 className="text-3xl font-bold text-center">
              Hire or Get Hired
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
