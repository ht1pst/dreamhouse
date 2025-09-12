import suit from '../src/assets/suit.jpg';
import star from '../src/assets/star.webp';

function Section4() {
  return (
    <section className="w-full left-0 absolute lg:mt-800 mt-750 h-200 bg-gray-100 ">
      <div className="px-3">
        <div className="mt-20">
          <p className="justify-center flex text-2xl font-semibold">Testimonial</p>
          <h1 className="mx-auto w-70 text-center text-4xl mt-5 font-semibold">
            What Our Clients Say
          </h1>
          <p className="mx-auto leading-normal font-semibold text-md lg:w-100 mt-5 text-center">
            At DreamingHome, we're all about giving smooth real estate solutions
            that fits your needs, making sure you have a great experience every
            step of the way.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex flex-row overflow-x-auto no-scrollbar gap-10 mt-10">
          {/* Testimonial 1 */}
          <div className="bg-white flex-shrink-0 lg:w-110 w-80 px-4 h-100 pt-10 rounded-3xl">
            <h1 className="font-bold text-4xl text-gray-400">''</h1>
            <p className="lg:w-100 w-70 leading-normal font-semibold text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              odio earum voluptas maxime perspiciatis hic exercitationem
              incidunt consequuntur sint nam sequi quaerat, assumenda expedita
              eum suscipit debitis minus eveniet at?
            </p>
            <p className="border-1 border-gray-200 lg:w-100 w-60 mt-3"></p>

            <div className="flex bg-white gap-6 mt-5 items-center">
              <div className="flex gap-5">
                <div>
                  <img src={suit} alt="" className="w-12 rounded" />
                </div>
                <div>
                  <h1 className="font-semibold">Adam Smith</h1>
                  <p className="text-gray-400">First-Time Homebuyer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white flex-shrink-0 lg:w-110 px-4 h-100 pt-10 rounded-3xl">
            <h1 className="font-bold text-4xl text-gray-400">''</h1>
            <p className="lg:w-100 w-70 leading-normal font-semibold text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              odio earum voluptas maxime perspiciatis hic exercitationem
              incidunt consequuntur sint nam sequi quaerat, assumenda expedita
              eum suscipit debitis minus eveniet at?
            </p>
            <p className="border-1 border-gray-200 lg:w-100 w-60 mt-3"></p>

            <div className="flex bg-white gap-6 mt-5 items-center">
              <div className="flex gap-5">
                <div>
                  <img src={suit} alt="" className="w-12 rounded" />
                </div>
                <div>
                  <h1 className="font-semibold">Adam Smith</h1>
                  <p className="text-gray-400">First-Time Homebuyer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white flex-shrink-0 lg:w-110 px-4 h-100 pt-10 rounded-3xl">
            <h1 className="font-bold text-4xl text-gray-400">''</h1>
            <p className="lg:w-100 w-70 leading-normal font-semibold text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              odio earum voluptas maxime perspiciatis hic exercitationem
              incidunt consequuntur sint nam sequi quaerat, assumenda expedita
              eum suscipit debitis minus eveniet at?
            </p>
            <p className="border-1 border-gray-200 lg:w-100 w-60 mt-3"></p>

            <div className="flex bg-white gap-6 mt-5 items-center">
              <div className="flex gap-5">
                <div>
                  <img src={suit} alt="" className="w-12 rounded" />
                </div>
                <div>
                  <h1 className="font-semibold">Adam Smith</h1>
                  <p className="text-gray-400">First-Time Homebuyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
