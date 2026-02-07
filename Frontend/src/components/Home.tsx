import Navbar from "./Navbar";
import Hero from "./Hero";
import Visit from "./visit";
import Reservation from "./Reservation";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <Visit />
        </div>
        <div className="md:w-1/2">
          <Reservation />
        </div>
      </div>
    </>
  );
};

export default Home;
