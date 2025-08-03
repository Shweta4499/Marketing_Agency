import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBullseye,
  FaPencilRuler,
  FaClock,
  FaComments,
  FaStar,
} from "react-icons/fa";

// Feature data
const features = [
  {
    icon: <FaChartLine size={24} />,
    title: "Data-Driven Campaigns",
    desc: "Our strategies are powered by analytics to ensure performance and growth.",
    span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1",
  },
  {
    icon: <FaBullseye size={24} />,
    title: "Precision Targeting",
    desc: "Reach the right audience with tailored messages that drive conversion.",
    span: "col-span-1 row-span-2",
  },
  {
    icon: <FaPencilRuler size={24} />,
    title: "Creative that Converts",
    desc: "We design assets that blend visual appeal with real-world impact.",
    span: "col-span-1 row-span-1",
  },
  {
    icon: <FaStar size={24} />,
    title: "Core Value",
    desc: "At the heart of every strategy lies meaningful design.",
    span: "col-span-1 row-span-1 place-self-center",
  },
  {
    icon: <FaClock size={24} />,
    title: "Fast Turnaround",
    desc: "Get high-quality work delivered quickly without sacrificing standards.",
    span: "col-span-1 sm:col-span-2 md:col-span-2 row-span-1",
  },
  {
    icon: <FaComments size={24} />,
    title: "Real-Time Collaboration",
    desc: "Stay connected with instant feedback and transparent workflows.",
    span: "col-span-1 row-span-1",
  },
];

// Animation variants
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
    <section  id="features" className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What you’ll get </h2>
        <p className="text-neutral-400 text-lg md:text-xl mb-14">
          Top–notch designs, delivered at your doorstep.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[minmax(150px,_auto)] gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className={`
                ${item.span}
                relative group 
                bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-2xl p-6 shadow-xl transition-all duration-300 
                hover:-translate-y-1 hover:ring-2 hover:ring-lime-400 
                hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]
                flex flex-col items-center justify-center text-center
              `}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              custom={i}
            >
              <div className="text-lime-400 mb-4 text-2xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
