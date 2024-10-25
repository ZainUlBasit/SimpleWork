import { Link, useNavigate } from "react-router-dom";
import Typing from "../assets/bro.png";
import Cube from "../assets/cube.png";
import { RegisterUserApi } from "../Api_Requests/Api_Requests";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [languages, setLanguages] = useState("");
  const [description, setDescription] = useState("");
  const [servicesExperties, setServicesExperties] = useState("");
  const [education, setEducation] = useState("");
  const [certificate, setCertificate] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    // You might want to add validation for the password match here
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const response = await RegisterUserApi({ email, password, username });
      console.log(response);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  return (
    <div className="bg-black flex items-center justify-center ">
      <div className="bg-black text-white flex w-[100%] h-[100%] overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-10">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
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

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-4 items-center"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none max-w-[400px]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none max-w-[400px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none max-w-[400px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded border border-gray-600 bg-black text-white focus:outline-none max-w-[400px]"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full p-3 rounded bg-gradient-to-l from-[#DE0588] to-[#460BCB] text-white font-bold max-w-[400px] mt-4"
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
