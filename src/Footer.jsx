import face from '../src/assets/facebook.png';
import insta from '../src/assets/instagram.webp';
import link from '../src/assets/link.png';
import x from '../src/assets/x.png';
import you from '../src/assets/youtube.webp';
function Footer(){
    return(
       <section className="w-full left-0 absolute lg:mt-1530 h-5   mt-1920 ">
<div className='flex flex-col justify-center gap-20 lg:gap-100 '>
    <div className='flex flex-col justify-center gap-3 lg:gap-10 font-semibold'>
        <p className='mx-auto'> ©2025. All rights reserved</p>
        <a className='mx-auto' href="#">PrivacyPolicy</a>
         <a className='mx-auto' href="#">Terms of Service</a>
          <a className='mx-auto' href="#">Cookies Settingss</a>
    </div>
    <div className='flex gap-6 items-center justify-center'>
        <img src={face} alt=""  className='w-5 h-5'/>
          <img src={insta} alt="" className='w-7 h-7'/>
            <img src={link} alt="" className='w-5 h-5' />
              <img src={x} alt="" className='w-5 h-5' />
                <img src={you} alt="" className='w-7 h-7' />
    </div>
</div>
       </section>
    )
}
export default Footer;