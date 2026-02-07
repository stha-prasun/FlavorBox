import { useState, useEffect } from "react";
import Confetti from "react-confetti";

/* ===== DISCOUNT CHANCES ===== */
const discountChances = [
  { label: "Better luck next time", discount: 0, chance: 18 },
  { label: "Small savings", discount: 5, chance: 35 },
  { label: "Saved some pocket money", discount: 10, chance: 30 },
  { label: "Jackpot", discount: 15, chance: 17 },
];

/* ===== RANDOM LOGIC ===== */
const getRandomDiscount = () => {
  const random = Math.random() * 100;
  let cumulative = 0;

  for (const item of discountChances) {
    cumulative += item.chance;
    if (random < cumulative) return item;
  }

  return discountChances[0];
};

const Hero = () => {
  const [result, setResult] = useState({ label: "", discount: 0 });
  const [shaking, setShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const openModal = () => {
    setShaking(true);

    setTimeout(() => {
      const selected = getRandomDiscount();
      setResult(selected);
      setShaking(false);

      // Show confetti only for 10% or 15% wins
      if (selected.discount >= 10) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000); // 3 sec confetti
      }

      (document.getElementById("discount_modal") as HTMLDialogElement)?.showModal();
    }, 700); // shake duration
  };

  return (
    <section className="min-h-[calc(100vh-70px)] flex flex-col items-center justify-center text-center px-4 bg-linear-to-b from-[#1f1c1c] to-[#2b2727]">

      {/* Confetti */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={150} />}

      {/* Heading */}
      <h1 className="text-5xl font-bold text-white mb-3">
        Shake the Malibu Madness
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 max-w-xl mb-12">
        Try your luck and win instant discounts on your next visit to Malibu Madness!
      </p>

      {/* Card */}
      <div
        className={`w-55 h-55 rounded-2xl bg-linear-to-b from-[#fffaf4] to-[#f0fffd] 
        flex flex-col items-center justify-center mb-6
        ${shaking ? "animate-shake" : ""}`}
      >
        <div className="text-orange-500 text-5xl mb-3">🎁</div>
        <span className="text-lg font-semibold text-black">
          Malibu Madness
        </span>
      </div>

      {/* Shake Button */}
      <button
        onClick={openModal}
        disabled={shaking}
        className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60
        text-white font-semibold text-sm px-6 py-3 rounded-xl"
      >
        🎁 Shake & Win!
      </button>

      {/* ===== MODAL ===== */}
      <dialog id="discount_modal" className="modal">
        <div className="modal-box max-w-md p-6">

          {/* Discount Header */}
          <div className="mb-6 rounded-xl border border-cyan-400 bg-cyan-50 py-5 text-center">
            <p className="text-sm text-gray-500">{result.label}</p>
            <p className="text-2xl font-bold text-cyan-500">
              {result.discount}% off
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <input type="text" placeholder="John Doe" className="input input-bordered w-full" />
            <input type="email" placeholder="you@example.com" className="input input-bordered w-full" />

            <div>
              <input type="tel" placeholder="(555) 123-4567" className="input input-bordered w-full" />
              <p className="text-xs text-gray-400 mt-1">
                We may contact you about your experience
              </p>
            </div>

            <input type="text" placeholder="Opening offer" className="input input-bordered w-full" />

            <div>
              <input
                type="text"
                value={`${result.discount}%`}
                readOnly
                className="input input-bordered w-full"
              />
              <p className="text-xs text-gray-400 mt-1">
                Discount you won
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" className="checkbox checkbox-sm" />
              You must accept to participate in the game
            </label>
          </div>

          <button className="btn btn-warning w-full mt-6 text-white">
            Claim My Discount
          </button>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* ===== SHAKE ANIMATION ===== */}
      <style>
        {`
          @keyframes shake {
            0% { transform: rotate(0deg); }
            20% { transform: rotate(-5deg); }
            40% { transform: rotate(5deg); }
            60% { transform: rotate(-5deg); }
            80% { transform: rotate(5deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-shake {
            animation: shake 0.7s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
