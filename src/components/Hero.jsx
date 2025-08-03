import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-12 bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        Accelerate Your Growth <br className="hidden md:block" />
        with <span className="text-lime-400">PureMark Agency</span>
      </h1>

      <p className="text-neutral-400 text-base md:text-lg max-w-2xl mb-10">
        PureMark is your growth partner — blending data-driven strategy with standout creative to help you captivate audiences, boost engagement, and drive real business results.
      </p>

      {/* Email input + CTA */}
      <div className="w-full max-w-md bg-[#0a0a0a] border border-neutral-800 rounded-full overflow-hidden flex items-center shadow-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-3 bg-transparent text-white placeholder-neutral-500 focus:outline-none"
        />
        <button
          className="px-5 py-3 bg-lime-400 text-black font-semibold hover:bg-lime-300 transition duration-300 rounded-full"
        >
          Join the Waitlist
        </button>
      </div>

      {/* Optional Trust Line */}
      <p className="text-sm text-neutral-500 mt-4">Be the first to know when we launch. No spam — just value.</p>
    </section>
  );
};

export default Hero;
