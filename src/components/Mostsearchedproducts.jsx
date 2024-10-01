import Graphics from "../assets/searchedproductsicons/graphicsdesign.png";
import DigitalMarketing from "../assets/searchedproductsicons/digitalmarketing.png";
import Writing from "../assets/searchedproductsicons/Ink pen.png";
import VideoAnimation from "../assets/searchedproductsicons/Video library.png";
import MusicAudio from "../assets/searchedproductsicons/Queue music.png";
import Programmers from "../assets/searchedproductsicons/Vector (4).png";
import Business from "../assets/searchedproductsicons/Add business.png";
import Dataset from "../assets/searchedproductsicons/Dataset.png";

const products = [
  {
    name: "Graphics Design",
    imgSrc: Graphics,
  },
  {
    name: "Digital Marketing",
    imgSrc: DigitalMarketing,
  },
  {
    name: "Writing and Transltion",
    imgSrc: Writing,
  },
  {
    name: "Video and Animation",
    imgSrc: VideoAnimation,
  },
  {
    name: "Music & Audio",
    imgSrc: MusicAudio,
  },
  {
    name: "Programming",
    imgSrc: Programmers,
  },
  {
    name: "Business",
    imgSrc: Business,
  },
  {
    name: "Data",
    imgSrc: Dataset,
  },
];

export default function MostSearchedProducts() {
  return (
    <div className="bg-black">
      <h1 className="text-4xl md:text-5xl text-white text-center py-5">
        Most <span className="text-[#DE0588]">Searched </span>
        <span className="font-bold">Products</span>
      </h1>
      <div className="text-white flex justify-center flex-wrap mx-[5%] gap-y-10 gap-x-7">
        {/* Adjusting the width and layout based on screen size */}
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] border-2 border-blue-800"
          >
            <div className="w-full p-10 h-[250px] md:h-[300px] flex items-center justify-center">
              <img
                src={product.imgSrc}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>
            <button className="w-full uppercase bg-blue-800 py-4 md:py-5 text-md md:text-lg font-bold h-[80px] md:h-[100px]">
              {product.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
