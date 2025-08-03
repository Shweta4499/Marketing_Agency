import React from "react";
import { motion } from "framer-motion";
import JohnnyImg from "../assets/johnny.jpg"; // Update this path if needed

const testimonials = [
  {
    quote:
      "Creative, innovative and strategic. We have great achievements made together and looking to more",
    name: "Henry Arthur",
    role: "Head of Engineering, Loom",
  },
  {
    quote:
      "Incredible group of people and talented professionals. Focused on the development of flexible ideas",
    name: "Jerome Bell",
    role: "Product Analyst, Intercom",
  },
  {
    quote:
      "A truly innovative approach to gameplay that sets this agency apart from its peers within the broader industry",
    name: "Eleanor Pena",
    role: "Head of Product Design, Abstract",
  },
];

const stats = [
  { value: "45+", label: "Happy customers" },
  { value: "5k+", label: "Hours spent on craft" },
  { value: "4.8", label: "Review rate" },
];

const Testimonial = () => {
  return (
    <section  id="testimonials" className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid gap-16">
        {/* Johnny Highlight */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Customer Story</h2>
            <p className="text-lg md:text-xl italic mb-6 text-neutral-300">
              “Our growth no longer necessitates the recruitment and education of
              additional design professionals.”
            </p>
            <button className="text-lime-400 font-medium hover:underline transition-all">
              Read the story →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <img
              src={JohnnyImg}
              alt="Johnny Seedapple"
              className="w-64 h-72 object-cover rounded-xl shadow-lg border-2 border-lime-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Johnny Seedapple</h3>
            <p className="text-neutral-400">Founder, Some Startup Co.</p>
          </motion.div>
        </div>

        {/* Divider line */}
        <div className="w-full border-t border-neutral-800 my-12" />

        {/* Other Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <p className="italic text-neutral-300 mb-4">“{t.quote}”</p>
              <h4 className="text-white font-semibold">{t.name}</h4>
              <p className="text-sm text-neutral-500 mb-2">{t.role}</p>
              <div className="text-lime-400 text-lg">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-neutral-600">★</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-lime-400">{s.value}</h3>
              <p className="text-neutral-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
