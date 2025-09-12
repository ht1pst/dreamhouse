import dream2 from '../src/assets/dreaming2.jpg';
import dream3 from '../src/assets/dreaming3.jpg';
import dream4 from '../src/assets/dreaming4.jpg';
function Section2(){
    return(
        <section className="left-0 w-full absolute mt-230 bg-gray-100 h-280 px-3">
<div className="flex flex-col  items-center lg:gap-100 justify-center mt-20">
    <div>
         <p className='text-md font-semibold w-50 flex justify-center rounded-full h-10 items-center bg-white'>Featured Properties</p>
         <h1 className='text-5xl lg:w-100 mt-5 font-semibold'>Discover your dream home</h1>
    </div>
    <div>
        <h1 className='leading-normal font-semibold text-md lg:w-130 mt-10'>Explore an exclusive selection of premium properties,meticulously cruated to provide you with the best in luxury living and prime real estate investment optons, tailored to your needs.</h1>
    </div>
</div>
<div className='flex flex-col gap-5 mt-10' >
    <div className='flex justify-center px-10'>
    <button className='w-35 h-10  bg-black text-white mx-auto rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)]'> All Properties</button>
    <button className='w-35 h-10  bg-white text-black  mx-auto rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-black hover:text-white transition '>Family House</button>
   </div>

   <div className='flex justify-center px-10'> 
    <button className='w-35 h-10  bg-white text-black  mx-auto rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-black hover:text-white transition'>Villa</button>
    <button className='w-35 h-10  bg-white text-black  mx-auto rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-black hover:text-white transition'>Apartments</button>
    </div>

    <div className='flex justify-center px-10'>
    <button className='w-35 h-10  bg-white text-black  mx-auto rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-black hover:text-white transition'>Mansions</button>
    <button className='w-35 h-10  bg-white text-black  mx-auto rounded-full font-semibold shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-black hover:text-white transition'>Green House</button>
    </div>
</div>
<div className="flex flex-row overflow-x-auto no-scrollbar gap-10 mt-25 px-3">
  {/* Card 1 */}
  <div className="flex-shrink-0 w-72 mx-auto">
    <img src={dream2} alt="" className="h-50 w-full object-cover rounded-2xl"/>
    <h1 className="font-semibold text-xl mt-3">Silver Birch Villa</h1>
    <p className="text-sm font-semibold text-gray-500 mt-3">Birmingham B12AA, United Kingdom</p>
    <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
      <p>4 beds</p>
      <p>3 bath</p>
      <p>1,200 sqft</p>
    </div>
    <h1 className="text-2xl font-bold mt-3">$850,000</h1>
  </div>

  {/* Card 2 */}
  <div className="flex-shrink-0 w-72">
    <img src={dream3} alt="" className="h-50 w-full object-cover rounded-2xl"/>
    <h1 className="font-semibold text-xl mt-3">Maplewood Estate</h1>
    <p className="text-sm font-semibold text-gray-500 mt-3">London SW1A, United Kingdom</p>
    <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
      <p>5 beds</p>
      <p>4 bath</p>
      <p>1,800 sqft</p>
    </div>
    <h1 className="text-2xl font-bold mt-3">$1,250,000</h1>
  </div>

  {/* Card 3 */}
  <div className="flex-shrink-0 w-72">
    <img src={dream4} alt="" className="h-50 w-full object-cover rounded-2xl"/>
    <h1 className="font-semibold text-xl mt-3">Rosewood Mansion</h1>
    <p className="text-sm font-semibold text-gray-500 mt-3">Manchester M1, United Kingdom</p>
    <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
      <p>6 beds</p>
      <p>5 bath</p>
      <p>2,500 sqft</p>
    </div>
    <h1 className="text-2xl font-bold mt-3">$2,000,000</h1>
  </div>

  {/* Card 4 */}
  <div className="flex-shrink-0 w-72">
    <img src={dream2} alt="" className="h-50 w-full object-cover rounded-2xl"/>
    <h1 className="font-semibold text-xl mt-3">Cedarwood Retreat</h1>
    <p className="text-sm font-semibold text-gray-500 mt-3">Liverpool L1, United Kingdom</p>
    <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
      <p>3 beds</p>
      <p>2 bath</p>
      <p>950 sqft</p>
    </div>
    <h1 className="text-2xl font-bold mt-3">$650,000</h1>
  </div>

  {/* Card 5 */}
  <div className="flex-shrink-0 w-72">
    <img src={dream4} alt="" className="h-50 w-full object-cover rounded-2xl"/>
    <h1 className="font-semibold text-xl mt-3">Willowbrook Residence</h1>
    <p className="text-sm font-semibold text-gray-500 mt-3">Edinburgh EH1, United Kingdom</p>
    <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
      <p>5 beds</p>
      <p>4 bath</p>
      <p>1,750 sqft</p>
    </div>
    <h1 className="text-2xl font-bold mt-3">$1,100,000</h1>
  </div>

  {/* Card 6 */}
  <div className="flex-shrink-0 w-72">
    <img src={dream3} alt="" className="h-50 w-full object-cover rounded-2xl"/>
    <h1 className="font-semibold text-xl mt-3">Oakwood Manor</h1>
    <p className="text-sm font-semibold text-gray-500 mt-3">Leeds LS1, United Kingdom</p>
    <div className="flex gap-2 text-sm font-semibold text-gray-500 mt-3">
      <p>4 beds</p>
      <p>3 bath</p>
      <p>1,400 sqft</p>
    </div>
    <h1 className="text-2xl font-bold mt-3">$900,000</h1>
  </div>
</div>


        </section>
    )
}
export default Section2