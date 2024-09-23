import PropTypes from 'prop-types';

export default function Featurescard({data}) {
  return (
        // <div className="pt-[56px]   mini:pt-[144px] mini:pb-[144px] mini:pl-[74px] mini:pr-[74px]  pb-[56px] mr-[19.5px] ml-[19.5px] mini:flex">
        <>
        <div className=' mini:flex mini:mt-[30px] mini:justify-between mini:pr-[40px] mini:pl-[40px]'>
        <div className='logo'> 
            <img className='start:w-[135px] start:h-[50px] start:ml-[32px] start:mr-[32px] start:mt-[20px] mini:mt-0' src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt="" />
        </div>
        <div className="flex start:space-x-3 mini:space-x-7 start:mt-[10px] start:mr-[10px] start:ml-[10px] mobilelg:pr-[20px] mobilelg:pl-[20px] mini:pr-[30px] mini:pl-[30px] start:justify-around">
        {
            data.map((data)=> (
            <div className="flex "key={data.id}>
                <div className='block'>
                <img className=" cursor-pointer start:h-[32px] start:w-[32px] mobilelg:h-[42px] mobilelg:w-[42px] md:h-[48px] md:w-[48px] " src={data.img} alt="Features"/></div>
            </div>
            ))
        }    
        </div>
        </div>
        </>
  )
}
Featurescard.propTypes={
    data:PropTypes.string,
}