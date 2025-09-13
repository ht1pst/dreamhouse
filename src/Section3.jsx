import { motion } from "framer-motion";
import old from "../src/assets/dreaming5.jpg";

function Section3() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="w-full  lg:h-200 bg-white px-3 py-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-15 mt-10 lg:pt-20"
      >
        {/* Left Content */}
        <div>
          <motion.p
            variants={item}
            className="text-md font-semibold rounded-full h-10 flex items-center px-4 bg-gray-100 shadow-sm w-fit"
          >
            About Us
          </motion.p>

          <motion.h1
            variants={item}
            className="lg:text-5xl md:w-100 text-4xl w-70 lg:w-140 mt-5 font-semibold"
          >
            Custom Real Estate Help For Everyone
          </motion.h1>

          <motion.p
            variants={item}
            className="leading-normal font-semibold text-md lg:w-150 md:w-140 mt-5"
          >
            At DreamingHome, we aim to give our clients smooth real estate
            solutions that fit their individual needs, making sure they have a
            great and enjoyable experience every step of the way.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            variants={container}
            className="flex flex-wrap lg:flex-row justify-center lg:gap-10 gap-5 mt-8"
          >
            {[
              { value: "1,200+", label: "Properties Sold" },
              { value: "95%", label: "Customer Satisfaction" },
              { value: "$500M+", label: "In Transactions" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="bg-gray-100 w-45 h-25 rounded-xl flex flex-col justify-center text-center shadow-sm"
              >
                <h1 className="font-semibold text-2xl">{stat.value}</h1>
                <p className="text-md text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div variants={item} className="flex justify-center">
          <img
            src={old}
            alt="About DreamingHome"
            className="w-150 rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Section3;
