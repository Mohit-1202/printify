import PropTypes from 'prop-types';

export default function Featurescard({data}) {
  return (
        // <div className="pt-[56px]   mini:pt-[144px] mini:pb-[144px] mini:pl-[74px] mini:pr-[74px]  pb-[56px] mr-[19.5px] ml-[19.5px] mini:flex">
        <div className="pt-[56px] mini:pt-[144px] mini:pb-[144px] mobilelg:pl-[20px] mobilelg:pr-[20px] mobilelg:h-[533px] pb-[56px] mobilelg:flex w-screen">

        {
            data.map((data)=> (
            <div className={`mini:mr-[38px] ${data.id==1 ? `pt-0 `: `pt-[40px] start:h-[293px]`} mobilelg:h-[421px] mobilelg:mr-[18px] mobilelg:pt-[40px]`} key={data.id}>
                <div className='flex justify-center'>
                <img className="start:h-[120px] start:w-[120px]" src={data.img} alt="Features"/></div>
                <p className='start:text-[24px] text-[#17262B] pt-[24px] text-center font-semibold mobilelg:h-[96px] mobilelg:pt-[32px] mini:h-[64px] mini:pt-[32px] mini:text-[24px]  font-sans laptop:leading-[32px]'>{data.title}</p>
                <p className='start:h-[77px] start:text-[16px]  text-[#485256] pt[8px] pb-14 text-center leading-[23px] font-normal font-sans mobilelg:h-[199px] mobilelg:font-medium mobilelg:pt-[15px]  mini:h-[116px] mini:pt-[24px] mini:leading-[23px]  laptop:h-[93px] laptop:font-semibold'>{data.description}</p>
            </div>
            ))
        }    
        </div>
  )
}
Featurescard.propTypes={
    data:PropTypes.string,
}