import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <div className="bg-[url('https://printify.com/pfh/media/background-IAMAETLT.svg')] bg-cover bg-center h-screen mini:flex  laptop:flex laptop:justify-center start:mb-[56px] mobile:mb-0 mini:pb-[56px]">
        <div className="content text-start mt-28 ml-12  ">
            <div className="text-[32px] text-[#17262b] font-cerebri font-bold  w-[254px] mobile:w-[350px] mini:w-[373px] mini:text-[56px] mini:pt-14 mini:ml-4 mini:leading-[75px] tab:w-[452px] laptop:w-[508px] pr-[68px] space leading-[40px] tracking-[-1px]">
                 Create and sell custom products 
            </div>
            <div className="advantages pt-5 space-y-2 mini:pl-7 mini:text-[18px]">
                <p className="start:text-[16px] mini:text-[18px] text-[#485256]  font-medium"><FontAwesomeIcon className='text-[#39b75d] mr-3' icon={faCheck} /> 
                    100% Free to use
                </p>
                <p className="start:text-[16px] mini:text-[18px] text-[#485256] font-medium"> <FontAwesomeIcon className='text-[#39b75d] mr-3' icon={faCheck} />
                    900+ High-Quality Products
                </p>   
                <p className="start:text-[16px] mini:text-[18px] text-[#485256] font-medium"> <FontAwesomeIcon className='text-[#39b75d] mr-3' icon={faCheck} />
                    Largest global print network
                </p> 
            </div>
            <div className='space-y-3 pt-5 mobile:flex mobile:space-y-0 mobile:space-x-3 mobile:pt-6'>
                <button className='start:h-[48px] start:w-[254px] mobile:w-[155px] start:block text-center bg-[#39B75D] rounded text-white font-medium'>Start for free</button>
                <button className='start:h-[48px] start:w-[254px] mobile:w-[155px] start:block text-center rounded text-[#17262b] font-medium border-2'><FontAwesomeIcon icon={faCirclePlay} /> How it works ?</button>
            </div>
        <p className='text-[#39B75D] font-semibold start:w-[247px] mobile:w-[320px]  start:pt-4'>Trusted by over 8M sellers around the world</p>
        </div>
        <div className='start:mx-12 mini:mt-44 start:my-5 relative'>
            <div className='start:h-[170px] start:w-[146px] mini:h-[303px] mini:w-[260px] border-[1px] rounded-lg flex items-center order-1 start:left-0 relative z-10 bg-[#FFFEFF]'>
                <img className='start:h-[135px] start:w-[128px] mini:h-[269px] mini:w-[256px]' src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="tshirts" />
            </div>
            <div className='start:h-[170px] start:w-[146px] mini:h-[303px] mini:w-[260px] start:ml-[100px] start:mt-[-100px] border-[1px] rounded-lg flex items-center  z-20 bg-[#FFFEFF]'>
                <img className='start:h-[135px] start:w-[128px] mini:h-[269px] mini:w-[256px]' src="https://printify.com/pfh/assets/animations/images/img_5.png" alt="tshirts" />
            </div>
        </div>
    </div>
  )
}

export default Hero