import React, { useState } from "react";

const Reservation = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation submitted!");
    console.log(form);
  };

  return (
    <div className="w-full p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-2">Make a Reservation</h2>
      <p className="text-gray-600 mb-6">
        Book your table and experience our delicious locally sourced dishes.
      </p>

      <form className="bg-white shadow rounded-lg p-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 font-semibold">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <p className="text-gray-500 text-sm mt-1">Enter the name for the reservation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <p className="text-gray-500 text-sm mt-1">We'll send a confirmation to this email.</p>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <p className="text-gray-500 text-sm mt-1">We may call you if there are any changes.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Reservation Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <p className="text-gray-500 text-sm mt-1">Select the date you would like to dine.</p>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Reservation Time</label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Select time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="8:00 PM">8:00 PM</option>
            </select>
            <p className="text-gray-500 text-sm mt-1">Choose your preferred dining time.</p>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min={1}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <p className="text-gray-500 text-sm mt-1">How many people will be in your party?</p>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Special Requests / Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Any dietary restrictions or special occasions?"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={4}
          ></textarea>
          <p className="text-gray-500 text-sm mt-1">Optional: let us know if you have any special needs.</p>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default Reservation;
