const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#1f1c1c] to-[#2b2727]">
      
      {/* Heading */}
      <h1 className="text-5xl font-bold text-white mb-3">
        Shake the Malibu Madness
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 max-w-xl mb-12">
        Try your luck and win instant discounts on your next visit to Malibu Madness!
      </p>

      {/* Card */}
      <div className="w-55 h-55 rounded-2xl bg-linear-to-b from-[#fffaf4] to-[#f0fffd] flex flex-col items-center justify-center mb-6">
        <div className="text-orange-500 text-5xl mb-3">
          🎁
        </div>
        <span className="text-lg font-semibold text-black">
          Malibu Madness
        </span>
      </div>

      {/* Button */}
      <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded-xl">
        🎁 Shake & Win!
      </button>
    </section>
  );
};

export default Hero;
