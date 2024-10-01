import MostSearchedProducts from "../../components/Mostsearchedproducts";
import Populargigs from "../../components/Populargigs";
import Recentupdate from "../../components/Recentupdate";
import Hero from "../../components/navbar2/Hero";

function Home() {
  return (
    <>
      <div className="w-full bg-black pb-10">
        <Hero />
        <MostSearchedProducts />
        <Recentupdate />
        <Populargigs />
      </div>
    </>
  );
}

export default Home;
