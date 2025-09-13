import { motion } from "framer-motion";
import dream1 from "../src/assets/dreaming6.jpg";
import dream2 from "../src/assets/dreaming7.webp";
import dream3 from "../src/assets/dreaming8.jpg";
import dream4 from "../src/assets/dreaming9.jpeg";

function Section5() {
  return (
    <section id="blog" className="w-full bg-white h-590 md:h-320 lg:h-230">
      <div className="px-5 mt-20 pt-20 lg:pt-40">
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xl font-semibold">Blog</p>
          <h1 className="text-5xl font-semibold mt-5">Top Trending Article</h1>
        </motion.div>

        {/* Blog cards (static, untouched) */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 lg:flex-row justify-center lg:gap-15 gap-10">
          <div className="mx-auto">
            <img src={dream1} alt="" className="w-70 h-90 rounded" />
            <p className="text-gray-400 mt-3">Jan 15, 2025</p>
            <h1 className="font-semibold w-70 text-2xl">
              The Art of Minimalist Living
            </h1>
          </div>

          <div className="mx-auto">
            <img src={dream2} alt="" className="w-70 h-90 rounded" />
            <p className="text-gray-400 mt-3">Jan 15, 2025</p>
            <h1 className="font-semibold w-70 text-2xl">
              The Art of Minimalist Living
            </h1>
          </div>

          <div className="mx-auto">
            <img src={dream1} alt="" className="w-70 h-90 rounded" />
            <p className="text-gray-400 mt-3">Jan 15, 2025</p>
            <h1 className="font-semibold w-70 text-2xl">
              The Art of Minimalist Living
            </h1>
          </div>

          <div className="mx-auto">
            <img src={dream2} alt="" className="w-70 h-90 rounded" />
            <p className="text-gray-400 mt-3">Jan 15, 2025</p>
            <h1 className="font-semibold w-70 text-2xl">
              The Art of Minimalist Living
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
