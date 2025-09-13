import { motion } from "framer-motion";
import heroimg from "../src/assets/dreaming1.jpg";

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-white min-h-screen px-3 overflow-hidden">
      {/* Text container */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col lg:flex-row lg:gap-30 lg:justify-center lg:items-center mt-20"
      >
        <div>
          <motion.p
            variants={item}
            className="text-md font-semibold lg:w-50 w-50 justify-center flex lg:justify-center rounded-full h-10 items-center bg-white shadow-sm"
          >
            Explore. Discover. Buy
          </motion.p>

          <motion.h1
            variants={item}
            className="lg:text-6xl text-4xl lg:w-120 mt-5 md:justify-start font-semibold"
          >
            Find your best home to live in
          </motion.h1>
        </div>

        <div>
          <motion.p
            variants={item}
            className="leading-normal font-semibold text-md lg:w-130 mt-5"
          >
            Discover your ideal home with ease. Browse through a curated
            selection of properties, connect with expert agents, and find the
            perfect place to call your own, whether you're a first-time buyer or
            looking to invest.
          </motion.p>

          <motion.button
            variants={item}
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="w-35 h-10 bg-black text-white rounded-full font-semibold mt-5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Image with Animation */}
      <motion.div
        initial={{ scale: 0.9, y: 80, opacity: 0 }}
        whileInView={{ scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex justify-center mt-15"
      >
        <motion.img
          src={heroimg}
          alt="dreaming home"
          className="rounded lg:h-140 h-50 shadow-lg md:w-300 md:h-100 "
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
