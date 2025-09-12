import dream10 from '../src/assets/dreaming10.webp';
function Section7(){
    return(
        <section className='absolute w-full left-0 lg:mt-1320 mt-1700 h-200  bg-gray-100'>
            <div className='flex flex-col items-center lg:gap-40 gap-20 justify-center mt-20'>
    
                <div>
                      <p className=' text-xl font-semibold'>Join Our Newsletter</p>
                       <h1 className=' text-4xl w-90 lg:w-130 leading-normal   font-semibold mt-5'>Ready to Find your Dreamhouse With Urbanhouse?</h1>
                        <p className='leading-normal font-semibold text-md w-80 lg:w-120 mt-5'>Join the crowd of happy homeowners who found their dream house with us! Let's make your property journey easy and fun.</p>
                          <button className='w-50 h-10  bg-black text-white  rounded-full font-semibold mt-5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:bg-white hover:text-black transition'>Let's work together</button>
                </div>
                 <div>
                    <img src={dream10} alt="" className='lg:w-170 w-90 h-70 lg:h-150 rounded-xl' />
                </div>
            </div>
        </section>
    )
}
export default Section7;