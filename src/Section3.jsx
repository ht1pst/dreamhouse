import old from '../src/assets/dreaming5.jpg';
function Section3(){
    return(
        <section className="w-full left-0 absolute lg:mt-650 mt-500 h-150">
<div className='flex flex-col lg:flex-row justify-center lg:gap-20 gap-15 mt-20 px-3'>
    <div>
    <p className='text-md font-semibold   rounded-full h-10 items-center bg-white'>About Us </p>
    <h1 className='lg:text-5xl text-4xl w-70 lg:w-140 mt-3 font-semibold mt-5'>Custom Real Estate Help For Everyone </h1>
    <p className='leading-normal font-semibold text-md lg:w-150 mt-5'>At DreamingHome. We aim to give our clients smooth real estate solutions that fit their individual needs, making sure they have a great and enjoyable experience every step of the day</p>
    <div className='flex flex-wrap lg:flex-row justify-center lg:gap-10 gap-5 mt-5'>
        <div className='bg-gray-100 w-45  h-25  rounded-xl flex flex-col justify-center text-center'>
            <h1 className='font-semibold text-2xl'>1,200+</h1>
            <p className='text-md text-gray-400'>Properties Sold</p>
        </div>

         <div className='bg-gray-100 w-45  h-25  rounded-xl flex flex-col justify-center text-center'>
            <h1 className='font-semibold text-2xl'>95%</h1>
            <p className='text-md text-gray-400'>Customer Satisfaction</p>
        </div>

         <div className='bg-gray-100 w-45  h-25  rounded-xl flex flex-col justify-center text-center'> 
            <h1 className='font-semibold text-2xl'>$500M+</h1>
            <p className='text-md text-gray-400'>In Transactions</p>
        </div>
    </div>

    </div>
     <div>
        <img src={old} alt=""  className='w-150 rounded-xl'/>
    </div>
</div>
        </section>
    )
}
export default Section3