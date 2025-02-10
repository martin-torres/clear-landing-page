import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-900">
        A Magical Water Adventure Awaits! 🌊✨
      </h1>
      <p className="text-lg text-center text-blue-700 mt-2">
        Get Your Free Kids' Activity Pack Today!
      </p>

      {/* Lead Magnet Section */}
      <div className="bg-white p-6 mt-6 rounded-2xl shadow-lg max-w-md w-full text-center">
        <p className="text-xl font-semibold text-blue-800">
          📥 Sign up now & get a FREE printable activity pack!
        </p>
        <p className="text-blue-600 mt-2">
          Includes coloring pages, fun water experiments, and a sneak peek inside the book!
        </p>

        <form className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full mt-3 p-3 bg-yellow-500 text-white font-bold rounded-xl shadow-md hover:bg-yellow-600"
          >
            📩 Get My Free Gift Now!
          </button>
        </form>
      </div>

      {/* Visuals */}
      <div className="mt-6">
        <img
          src="/images/book-cover.png"
          alt="CLEAR: A Droplet's Journey"
          className="w-64 rounded-lg shadow-lg"
        />
      </div>

      {/* Social Proof */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow-md max-w-md w-full text-center">
        <p className="text-blue-900 font-semibold">⭐ "My kids loved the story of CLEAR! It made science so fun!" – Early Reader</p>
        <p className="text-blue-900 font-semibold mt-2">⭐ "Beautiful illustrations and a great lesson about nature." – Homeschooling Mom</p>
      </div>

      {/* Final CTA */}
      <div className="mt-6">
        <button
          className="p-4 bg-orange-500 text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-orange-600"
        >
          📩 Get My Free Gift Now!
        </button>
      </div>
    </div>
  );
}
