import { useState } from "react";
import Profileimg from "../assets/profilepage/profimg.png";
import gigImage from "../../src/assets/populargigs/gigspix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faComments, faPhone } from "@fortawesome/free-solid-svg-icons";
import Star from "../assets/profilepage/star.png";
import { Link } from "react-router-dom";
import Smaller_Card from "../components/Cards/Smaller_Card";
import Image_Slider from "../components/Sliders/Image_Slider";

const planDetails = {
  Basic: {
    price: 40,
    description: "Lorem ipsum dolor amet in doomsdayion lorem.",
    features: [
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
    ],
  },
  Standard: {
    price: 120,
    description: "Lorem ipsum dolor amet in doomsdayion lorem.",
    features: [
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
    ],
  },
  Premium: {
    price: 300,
    description: "Lorem ipsum dolor amet in doomsdayion lorem.",
    features: [
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
      "Lorem ipsum dolor amet.",
    ],
  },
};

const gigs = [
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    price: 30,
    image: gigImage, // You can use the same image or different images for each gig
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    price: 30,
    image: gigImage, // You can use the same image or different images for each gig
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    price: 30,
    image: gigImage,
  },
  {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    price: 30,
    image: gigImage,
  },
];

export default function AboutSeller() {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-gradient-to-r from-black to-purple-900">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-[75%]">
          <Image_Slider />
        </div>
        <div className="flex flex-col gap-y-10 items-center justify-center pb-20 lg:w-[25%]">
          <div className="bg-white mx-auto text-black flex flex-col lg:flex-row px-7 py-4 gap-x-5 rounded-lg">
            <Link to={"/profilepage"}>
              <img
                className="w-[50px] h-auto bg-cover"
                src={Profileimg}
                alt=""
              />
            </Link>
            <div className="flex flex-col gap-y-4 mt-5 lg:mt-0">
              <p className="text-xl">
                UI UX Designer
                <p className="text-lg">
                  Online <span>.</span>
                </p>
              </p>
              <button className="text-black border-black border px-4 p-3 rounded-xl">
                <Link to="/orderdetail">Order</Link>
              </button>
            </div>
          </div>
          <div className="bg-[#FFFFFF4A] mt-5 w-full lg:w-[264px] rounded-lg border-t-white border-t">
            <div className="flex">
              {["Basic", "Standard", "Premium"].map((plan) => (
                <button
                  key={plan}
                  className={`w-1/3 border border-white rounded-t-lg border-t-0 hover:bg-slate-200 px-4 py-3 ${
                    selectedPlan === plan ? "bg-slate-200" : ""
                  }`}
                  onClick={() => handlePlanClick(plan)}
                >
                  {plan}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-y-3 py-3 px-3 text-white">
              <h1 className="text-xl font-bold">
                PKR ${planDetails[selectedPlan].price}
              </h1>
              <h3 className="text-lg font-semibold">
                {planDetails[selectedPlan].description}
              </h3>
              <ul className="flex flex-col gap-y-3">
                {planDetails[selectedPlan].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[4%] md:pl-10">
        <div className="flex flex-col gap-y-6 text-white">
          <h1 className="text-4xl font-bold">About this gig:</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Et pellentesque turpis non
            mauris tristique
            <br />
            lacus consequat vitae eu. Sit luctus neque egestas augue
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur. Et pellentesque turpis non
            mauris tristique
            <br />
            lacus consequat vitae eu. Sit luctus neque egestas augue.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 text-white mt-10">
          <h1 className="text-4xl font-bold">What's Included</h1>
          <ul className="flex flex-col gap-y-3">
            <li>ipsum dolor sit amet consectetur.</li>
            <li>ipsum dolor sit amet consectetur.</li>
            <li>ipsum dolor sit amet consectetur.</li>
            <li>ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-6 text-white mt-10">
          <h1 className="text-4xl font-bold">What I Require</h1>
          <ul className="flex flex-col gap-y-3">
            <li>ipsum dolor sit amet consectetur.</li>
            <li>ipsum dolor sit amet consectetur.</li>
            <li>ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-x-5  text-white mx-[4%] mt-12 ">
          <Link to={"/profilepage"} className="">
            <img className="mt-5" src={Profileimg} alt="Profile" />
            <img className="relative -top-60 left-40" src={Star} alt="Star" />
          </Link>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-3xl font-bold">UI/UX Designer</h1>
            <p className="text-xl"> @jahangiral2424</p>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faStar}
                size="2x"
                className="text-yellow-500"
              />
              <h1 className="ml-2 font-bold text-xl">
                4.5 <span className="font-normal text-lg">(23)</span>
              </h1>
            </div>

            <div className="flex items-center mt-4">
              <FontAwesomeIcon icon={faComments} size="2x" className="white" />
              <h1 className="ml-2 font-semibold text-xl">
                English, German, Spanish
              </h1>
            </div>

            <div className="flex items-center mt-4">
              <FontAwesomeIcon
                icon={faPhone}
                size="2x"
                className="text-white"
              />
              <h1 className="ml-2 text-xl font-semibold">Contact Info</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[4%]">
        <h2 className="text-2xl font-bold mb-6">Popular Gigs</h2>
        <div className="flex flex-wrap justify-start gap-x-10 mb-10">
          {gigs.map((gig, index) => (
            <Smaller_Card
              key={index}
              title={gig.title}
              rating={gig.rating}
              price={gig.price}
              image={gig.image}
            />
          ))}
        </div>
        <button className="bg-gradient-to-br from-[#DE0588]  to-[#460BCB] rounded-xl mx-[46%]  text-white px-5 py-4   ">
          View More
        </button>
      </div>
    </div>
  );
}
