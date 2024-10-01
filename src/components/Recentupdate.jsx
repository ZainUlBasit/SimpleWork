import Bestservice from "../assets/recentupdate/Group4.png";
import Support from "../assets/recentupdate/support.png";
import Reviews from "../assets/recentupdate/reviews.png";
import Policy from "../assets/recentupdate/policy.png";

export default function Recentupdate() {
  return (
    <div className="bg-black pt-[10%]">
      <div className="flex flex-wrap justify-between gap-y-5">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%] text-white bg-[#DE0588] flex flex-col items-center justify-center h-[280px]">
          <div>
            <img src={Bestservice} alt="Best Service" />
          </div>
          <h1 className="text-xl font-bold uppercase">Best Service</h1>
        </div>
        {/* Card 2 */}
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%] text-white bg-[#DE0588] flex flex-col items-center justify-center h-[280px]">
          <div>
            <img src={Support} alt="24/7 Support" />
          </div>
          <h1 className="text-xl font-bold uppercase">24/7 Support</h1>
        </div>
        {/* Card 3 */}
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%] text-white bg-[#DE0588] flex flex-col items-center justify-center h-[280px]">
          <div>
            <img src={Policy} alt="Policy" />
          </div>
          <h1 className="text-xl font-bold uppercase">Policy</h1>
        </div>
        {/* Card 4 */}
        <div className="w-full sm:w-[48%] md:w-[31%] lg:w-[24%] text-white bg-[#DE0588] flex flex-col items-center justify-center h-[280px]">
          <div>
            <img src={Reviews} alt="Review" />
          </div>
          <h1 className="text-xl font-bold uppercase">Review</h1>
        </div>
      </div>

      <div className="flex justify-center mt-[5%]">
        <button className="bg-blue-800 text-white p-3 rounded-xl">
          Recent Updates
        </button>
      </div>
    </div>
  );
}
