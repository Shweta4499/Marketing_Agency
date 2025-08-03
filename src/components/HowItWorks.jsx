import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaMagic, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaPaperPlane size={24} />,
    title: "Share Your Goals",
    desc: "Choose a plan and let us know what you aim to achieve — your brand vision, tone, and market.",
  },
  {
    icon: <FaMagic size={24} />,
    title: "We Craft & Deliver",
    desc: "Our team of marketers, strategists, and creatives bring your campaigns to life — fast and effective.",
  },
  {
    icon: <FaHandshake size={24} />,
    title: "Scale with Support",
    desc: "We grow with you. Enjoy ongoing collaboration and optimizations every step of the way.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          How We Help You Win
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl mb-14 leading-relaxed">
          High-converting marketing strategies, <br className="sm:hidden" /> delivered like clockwork.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,_auto)]">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="
                bg-white/5 backdrop-blur-xl border border-white/10
                rounded-2xl p-6 shadow-xl transition-all duration-300
                hover:-translate-y-1 hover:ring-2 hover:ring-lime-400
                hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]
                flex flex-col items-center justify-center text-center
              "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              custom={i}
            >
              <div className="text-lime-400 mb-4 text-3xl">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
