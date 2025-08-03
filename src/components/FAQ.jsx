import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What kind of services do you provide?",
    answer:
      "We offer branding, UI/UX design, web development, social media design, and creative content services tailored to your business goals.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "Depending on the project complexity, you can expect initial concepts within 2–3 days and revisions within 24 hours.",
  },
  {
    question: "Can I make unlimited revisions?",
    answer:
      "Yes, all our subscription plans come with unlimited revisions until you’re 100% satisfied with the outcome.",
  },
  {
    question: "Do you offer one-time projects?",
    answer:
      "Yes, we support both one-time projects and monthly subscriptions depending on your needs and budget.",
  },
  {
    question: "What tools do your designers use?",
    answer:
      "We use Figma, Adobe Creative Suite, Webflow, and modern no-code tools to craft powerful visual experiences.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="w-full bg-[#0a0a0a] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => toggleFAQ(i)}
              className="cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 transition duration-300 hover:border-lime-400"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <motion.span
                  animate={{ rotate: activeIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lime-400 text-xl"
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {activeIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neutral-400 mt-4"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
