import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lime-400 font-semibold mb-2">
            Still have more questions?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elevate the way you source design
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Get ready to start producing stunning, efficient design work without
            the hassles of hiring. Soon available.
          </p>
        </motion.div>

        {/* Email Input */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="name@email.com"
            className="bg-white/10 text-white px-6 py-3 rounded-lg backdrop-blur-md border border-white/20 w-full md:w-2/3 focus:outline-none focus:border-lime-400 transition-all"
          />
          <button
            type="submit"
            className="bg-lime-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-300 transition-all"
          >
            Contact
          </button>
        </motion.form>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 mt-8"
        >
          <a href="#" className="hover:text-white transition-all">
            Privacy & Cookie Policy
          </a>
          <a href="#" className="hover:text-white transition-all">
            Terms & Conditions
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
