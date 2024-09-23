import PropTypes from 'prop-types';

export default function FooterCard({integration,Discover,startSelling,Printify}) {
  return (
    <>
     <div className='xl:flex xl:justify-center xl:mt-[20px]'>
        <div className='first-section flex text-center mobilelg:justify-around'>
        <div className="p-4 block">
      <h1 className="start:text-[24px] start:font-medium mb-4">Integrations</h1>
      <div className="flex flex-col space-y-2">
        {integration.map((integration, index) => (
          <p key={index} className="cursor-pointer start:text-[14px] mini:text-[18px] mini:font-semibold text-gray-700">
            {integration}
          </p>
        ))}
      </div>
    </div>
        <div className="p-4">
      <h1 className="start:text-[24px] start:font-medium mb-4">Discover</h1>
      <div className="flex flex-col space-y-2">
        {Discover.map((Discover, index) => (
          <p key={index} className="cursor-pointer start:text-[14px] mini:text-[18px] mini:font-semibold text-gray-700">
            {Discover}
          </p>
        ))}
      </div>
      </div>
    </div>
        <div className='first-section flex text-center mobilelg:justify-around'>
        <div className="p-4 block">
      <h1 className="start:text-[24px] start:font-medium mb-4">Start Selling</h1>
      <div className="flex flex-col space-y-2">
        {startSelling.map((startSelling, index) => (
          <p key={index} className=" cursor-pointer start:text-[14px] mini:text-[18px] mini:font-semibold text-gray-700">
            {startSelling}
          </p>
        ))}
      </div>
    </div>
        <div className="p-4">
      <h1 className="start:text-[24px] start:font-medium mb-4">Printify</h1>
      <div className="flex flex-col space-y-2">
        {Printify.map((Printify, index) => (
          <p key={index} className="cursor-pointer start:text-[14px]  mini:text-[18px] mini:font-semibold text-gray-700">
            {Printify}
          </p>
        ))}
      </div>
      </div>
    </div>
        </div>
        <div className='h-[160px] bg-[#F7F7F7]  text-center "text-[13px] my-2"'>
            <div className='mini:flex mini:justify-center mini:items-center mini:pt-[40px] mini:space-x-3'>
            <div className='mobile:flex mobile:justify-center mobile:space-x-5 mobile:pt-[40px] mini:pt-0'>
                <p className="text-[13px] text-gray-400 pt-2">Intellectual Property Info</p>
                <p className="text-[13px] text-gray-400 my-2">Terms of Service</p>
            </div>
            <div className='mobile:flex mobile:justify-center mobile:space-x-5 mobile-mt-[20px]'>
                <p className="text-[13px] text-gray-400 my-2">Privacy Policy</p>
                <p className="text-[13px] text-gray-400 my-2">Security</p>
            </div>
            </div>
            <p className="text-[13px] text-[#1B1B1B] start:pb-[10px] mini:pt-5">&copy; 2024 Printify, Inc. All right reserved</p>
        </div>
        </>
  )
}

FooterCard.propTypes={
    integration:PropTypes,
    Discover:PropTypes.string,
    startSelling:PropTypes.string,
    Printify:PropTypes.string,
}