import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainImage1 from "../../assets/populargigs/gigspix.png"; // Replace with actual images
import MainImage2 from "../../assets/populargigs/gigspix.png"; // Replace with actual images
import MainImage3 from "../../assets/populargigs/gigspix.png"; // Replace with actual images
import Thumbnail1 from "../../assets/populargigs/gigspix.png"; // Replace with actual images
import Thumbnail2 from "../../assets/populargigs/gigspix.png"; // Replace with actual images
import Thumbnail3 from "../../assets/populargigs/gigspix.png"; // Replace with actual images

const images = [
  { id: 1, main: MainImage1, thumbnail: Thumbnail1 },
  { id: 2, main: MainImage2, thumbnail: Thumbnail2 },
  { id: 3, main: MainImage3, thumbnail: Thumbnail3 },
];

const Image_Slider = () => {
  const settingsMain = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className=" py-10">
      <h2 className="text-white ml-[10%] text-3xl font-bold mb-6">
        I WILL DO UI IN FIGMA
      </h2>
      <div className="container mx-auto">
        {/* Main Slider */}
        <Slider {...settingsMain} className="relative w-[80%] mx-auto">
          {images.map((image) => (
            <div key={image.id}>
              <img
                src={image.main}
                alt={`Main Slide ${image.id}`}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </Slider>

        {/* Thumbnail Slider */}
        <div className="mt-4 w-[60%] mx-auto">
          <Slider {...settingsThumbs}>
            {images.map((image) => (
              <div key={image.id} className="px-2">
                <img
                  src={image.thumbnail}
                  alt={`Thumbnail ${image.id}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Image_Slider;
