import React from "react";

const brands = [
  "Google", "Amazon", "Netflix", "Meta", "Spotify", "Adobe", "Slack", "Shopify"
];

const TrustedBy = () => {
  return (
    <section className="w-full bg-black text-white py-12 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-center text-lg text-neutral-400 font-medium mb-8">
        Already trusted by global leaders
      </h2>

      {/* Marquee Animation */}
      <div className="relative overflow-hidden w-full">
        <div className="flex gap-16 whitespace-nowrap animate-marquee text-neutral-500 text-xl font-semibold">
          {brands.concat(brands).map((brand, idx) => (
            <span key={idx} className="inline-block min-w-max">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
