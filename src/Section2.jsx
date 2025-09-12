import { motion } from "framer-motion";
import dream2 from "../src/assets/dreaming2.jpg";
import dream3 from "../src/assets/dreaming3.jpg";
import dream4 from "../src/assets/dreaming4.jpg";

function Section2() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-gray-100 min-h-screen px-3 py-20">
      {/* Title & Description */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center lg:gap-20 justify-center text-center"
      >
        <motion.p
          variants={item}
          className="text-md font-semibold w-50 flex justify-center rounded-full h-10 items-center bg-white shadow-sm"
        >
          Featured Properties
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl lg:w-100 mt-5 font-semibold"
        >
          Discover your dream home
        </motion.h1>

        <motion.p
          variants={item}
          className="leading-normal font-semibold text-md lg:w-130 mt-10"
        >
          Explore an exclusive selection of premium properties, meticulously
          curated to provide you with the best in luxury living and prime real
          estate investment options, tailored to your needs.
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col gap-5 mt-10"
      >
        <div className="flex justify-center px-5 gap-3 flex-wrap">
          {["All Properties", "Family House", "Villa", "Apartments", "Mansions", "Green House"].map(
            (label, i) => (
              <motion.button
                key={i}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-35 h-10 ${
                  i === 0 ? "bg-black text-white" : "bg-white text-black"
                } rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-black hover:text-white transition`}
              >
                {label}
              </motion.button>
            )
          )}
        </div>
      </motion.div>

      {/* Property Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-row overflow-x-auto no-scrollbar gap-10 mt-20 px-3"
      >
        {[
          {
            img: dream2,
            title: "Silver Birch Villa",
            loc: "Birmingham B12AA, United Kingdom",
            beds: "4 beds",
            bath: "3 bath",
            size: "1,200 sqft",
            price: "$850,000",
          },
          {
            img: dream3,
            title: "Maplewood Estate",
            loc: "London SW1A, United Kingdom",
            beds: "5 beds",
            bath: "4 bath",
            size: "1,800 sqft",
            price: "$1,250,000",
          },
          {
            img: dream4,
            title: "Rosewood Mansion",
            loc: "Manchester M1, United Kingdom",
            beds: "6 beds",
            bath: "5 bath",
            size: "2,500 sqft",
            price: "$2,000,000",
          },
          {
            img: dream2,
            title: "Cedarwood Retreat",
            loc: "Liverpool L1, United Kingdom",
            beds: "3 beds",
            bath: "2 bath",
            size: "950 sqft",
            price: "$650,000",
          },
          {
            img: dream4,
            title: "Willowbrook Residence",
            loc: "Edinburgh EH1, United Kingdom",
            beds: "5 beds",
            bath: "4 bath",
            size: "1,750 sqft",
            price: "$1,100,000",
          },
          {
            img: dream3,
            title: "Oakwood Manor",
            loc: "Leeds LS1, United Kingdom",
            beds: "4 beds",
            bath: "3 bath",
            size: "1,400 sqft",
            price: "$900,000",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex-shrink-0 w-72 mx-auto bg-white rounded-2xl shadow-md p-3"
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-50 w-full object-cover rounded-2xl"
            />
            <h1 className="font-semibold text-xl mt-3">{card.title}</h1>
            <p className="text-sm font-semibold text-gray-500 mt-3">{card.loc}</p>
            <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
              <p>{card.beds}</p>
              <p>{card.bath}</p>
              <p>{card.size}</p>
            </div>
            <h1 className="text-2xl font-bold mt-3">{card.price}</h1>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Section2;
