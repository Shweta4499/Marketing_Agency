import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const heading = "About PureMark Agency";
  const paragraph =
    "Marketo is a performance-first marketing agency that helps ambitious brands grow fast. From strategic campaigns to bold creatives, we deliver results that actually move the needle.";

  const stats = [
    { number: "120+", label: "Clients Served" },
    { number: "95%", label: "Client Retention" },
    { number: "10M+", label: "Ad Impressions" },
  ];

  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStats(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 px-6 sm:px-10 md:px-16">
      {/* Heading & Text */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-white">About </span>
          <span className="text-lime-400">PureMark Agency</span>
        </h2>

        <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
          {paragraph}
        </p>
      </motion.div>

      {/* Stats Section */}
      {showStats && (
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="space-y-2 border border-white/10 bg-white/5 backdrop-blur-md py-6 rounded-xl"
            >
              <h3 className="text-4xl font-bold text-lime-400">{stat.number}</h3>
              <p className="text-sm sm:text-base text-neutral-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default About;
