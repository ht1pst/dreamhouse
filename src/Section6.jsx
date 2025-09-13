import { motion } from "framer-motion";

function Section6() {
  return (
    <section id="FAQ" className="w-full bg-gray-white">
      <div className="flex flex-col lg:flex-row justify-center lg:gap-50 gap-15 items-center pt-20">
        {/* Animated Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
          <p className="text-xl font-semibold">FAQ</p>
          <h1 className="text-5xl w-89 lg:w-120 font-semibold mt-5 md:w-120">
            Frequently Asked Questions
          </h1>
          <p className="leading-normal font-semibold text-md w-80 lg:w-120 md:w-100 mt-5">
            Got questions about buying, selling, or renting with DreamHome? We're
            here to help you out!
          </p>
          </div>
        </motion.div>

        {/* FAQ Items (Static, no motion) */}
        <div>
          <details className="group border w-80 sm:w-[90%] md:w-[700px] lg:w-[700px] border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300">
            <summary className="cursor-pointer px-4 sm:px-6 py-3 sm:py-4 bg-white text-base sm:text-lg font-semibold flex justify-between items-center">
              <span>Best interest rates on the market</span>
              <span className="text-xl sm:text-2xl text-gray-500 group-open:rotate-45 transform transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="px-4 sm:px-6 pb-4 pt-2 bg-white text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </div>
          </details>

          <details className="group border w-80 sm:w-[90%] md:w-[700px] lg:w-[700px] border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300">
            <summary className="cursor-pointer px-4 sm:px-6 py-3 sm:py-4 bg-white text-base sm:text-lg font-semibold flex justify-between items-center">
              <span>Best interest rates on the market</span>
              <span className="text-xl sm:text-2xl text-gray-500 group-open:rotate-45 transform transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="px-4 sm:px-6 pb-4 pt-2 bg-white text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </div>
          </details>

          <details className="group border w-80 sm:w-[90%] md:w-[700px] lg:w-[700px] border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300">
            <summary className="cursor-pointer px-4 sm:px-6 py-3 sm:py-4 bg-white text-base sm:text-lg font-semibold flex justify-between items-center">
              <span>Best interest rates on the market</span>
              <span className="text-xl sm:text-2xl text-gray-500 group-open:rotate-45 transform transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="px-4 sm:px-6 pb-4 pt-2 bg-white text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </div>
          </details>

          <details className="group border w-80 sm:w-[90%] md:w-[700px] lg:w-[700px] border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300">
            <summary className="cursor-pointer px-4 sm:px-6 py-3 sm:py-4 bg-white text-base sm:text-lg font-semibold flex justify-between items-center">
              <span>Best interest rates on the market</span>
              <span className="text-xl sm:text-2xl text-gray-500 group-open:rotate-45 transform transition-transform duration-300">
                +
              </span>
            </summary>
            <div className="px-4 sm:px-6 pb-4 pt-2 bg-white text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export default Section6;
