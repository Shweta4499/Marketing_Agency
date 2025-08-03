import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaCogs } from "react-icons/fa";

const services = [
  {
    icon: <FaBullseye size={28} />,
    title: "Performance Marketing",
    desc: "Targeted campaigns that generate measurable growth and returns.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Creative Strategy",
    desc: "Ideas that resonate emotionally and connect with your audience.",
  },
  {
    icon: <FaCogs size={28} />,
    title: "Brand & Content",
    desc: "We help you build brand identity and content that converts.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Services = () => {
  return (
    <section id="how-it-works" className ="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works

</h2>
        <p className="text-neutral-400 text-lg md:text-xl mb-14">
          We resolve problems associated with creative procedures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-lime-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
