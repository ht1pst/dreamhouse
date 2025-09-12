import heroimg from '../src/assets/dreaming1.jpg';
function Hero(){
return(
   <section className="left-0 absolute w-full bg-white h-screen px-3">
    <div className="flex flex-col lg:flex-row lg:gap-100 justify-center items-center mt-40 ">
        <div>
<div>
   
        
    <p className='text-md font-semibold lg:w-50 flex lg:justify-center rounded-full h-10 items-center bg-white'> Explore. Discover. Buy</p>
   
    <h1 className='lg:text-5xl text-5xl lg:w-100 mt-5 font-semibold  '>Find your best home to live in</h1>
</div>
        </div>
        <div>
            <p className='leading-normal font-semibold text-md lg:w-130 mt-5'>Discover your ideal home with ease. Browse through a curated selection of properties, connect with expert agents, and find the perfect place to call your own, whether you're a first-time buyer or looking to invest.</p>

            <button className='w-35 h-10  bg-black text-white  rounded-full font-semibold mt-5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-white hover:text-black transition'>Get Started</button>
        </div>
    </div>
<div className='flex justify-center mt-15'>
    <img src={heroimg} alt=""  className='rounded lg:h-140 h-60 '/>
</div>
   </section>
)

}


export default Hero;