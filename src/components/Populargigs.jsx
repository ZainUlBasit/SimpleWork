import Graphics from "../assets/populargigs/graphics.png";

const products = [
  {
    name: "Graphics Design",
    imgSrc: Graphics,
    disc: "MAKE MORE DAILY PRODUCTIVE FLOW LIKE PRO.",
  },
  {
    name: "Graphics Design",
    imgSrc: Graphics,
    disc: "MAKE MORE DAILY PRODUCTIVE FLOW LIKE PRO.",
  },
  {
    name: "Graphics Design",
    imgSrc: Graphics,
    disc: "MAKE MORE DAILY PRODUCTIVE FLOW LIKE PRO.",
  },
  {
    name: "Graphics Design",
    imgSrc: Graphics,
    disc: "MAKE MORE DAILY PRODUCTIVE FLOW LIKE PRO.",
  },
  {
    name: "Graphics Design",
    imgSrc: Graphics,
    disc: "MAKE MORE DAILY PRODUCTIVE FLOW LIKE PRO.",
  },
  {
    name: "Graphics Design",
    imgSrc: Graphics,
    disc: "MAKE MORE DAILY PRODUCTIVE FLOW LIKE PRO.",
  },

  // You can add more products here in the same format
];

export default function Populargigs() {
  return (
    <div className="bg-black ">
      <h1 className="text-5xl text-white text-center py-5">
        The gigs <span className="text-[#DE0588]">popular </span>
        in simplework
      </h1>
      <div className="text-white flex justify-center flex-wrap mx-[5%] gap-y-10  gap-x-7">
        {" "}
        {/* Flexbox to handle layout */}
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[32%] flex justify-center flex-col items-center "
          >
            <div className="w-[100%] p-15  flex items-center justify-center ">
              <img src={product.imgSrc} alt={product.name} />
            </div>
            <div className="w-[90%]  bg-pink-500 px-10 py-3   ">
              <h1 className="text-[yellow] ">{product.name}</h1>
              <p>{product.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
