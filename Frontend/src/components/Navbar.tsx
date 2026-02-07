import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-17.5 px-4 sm:px-6 md:px-10 flex items-center justify-between bg-white">
      
      {/* Left */}
      <Link
        to="/"
        className="text-lg sm:text-xl font-medium hover:cursor-pointer"
      >
        FlavorBox
      </Link>

      {/* Center (hide on small screens) */}
      <div className="hidden md:block text-sm font-medium text-black hover:cursor-pointer">
        Contact Reservations
      </div>

      {/* Right */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl hover:cursor-pointer">
        Book Now
      </button>
    </nav>
  );
};

export default Navbar;
