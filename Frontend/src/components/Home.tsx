import Navbar from "./Navbar";
import Hero from "./Hero";
import Reservation from "./Reservation";
import Visits from "./Visits";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <Visits />
        </div>
        <div className="md:w-1/2">
          <Reservation />
        </div>
      </div>
    </>
  );
};

export default Home;
