import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

export default function Carousel({ items }) { 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="w-[mx-auto]">
      {windowWidth < 981 ? (
        <Slider {...settings}>
          {items.map((data, index) => (
            <div
              className={`mini:mr-[38px] ${
                data.id == 1 ? `pt-0 ` : `pt-[40px] start:h-[293px]`
              } mobilelg:h-[421px] mobilelg:mr-[18px] mobilelg:pt-[200px]`}
              key={index}
            >
              <div className="flex justify-center">
                <img
                  className="start:h-[120px] start:w-[120px]"
                  src={data.img}
                  alt="Services"
                />
              </div>
              <p className="start:text-[24px] text-[#39b75d] pt-[10px] text-center font-semibold mobilelg:h-[40px] mobilelg:pt-[20px] mini:h-[64px] mini:pt-[32px] mini:text-[24px]  font-sans laptop:leading-[32px]">
                {data.title}
              </p>
              <p className="text-[#17262B] start:text-[24px] text-center font-semibold mobilelg:h-[50px] mobilelg:pt-[13px] mini:h-[64px] mini:pt-[32px] mini:text-[24px]  font-sans laptop:leading-[32px]">
                {data.title2}
              </p>
              <p className="start:h-[77px] start:text-[16px] text-[#485256] pt[8px] pb-14 text-center leading-[23px] font-normal font-sans mobilelg:h-[199px] mobilelg:font-medium mobilelg:pt-[15px] mini:h-[116px] mini:pt-[24px] mini:leading-[23px] laptop:h-[93px] laptop:font-semibold">
                {data.description}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-between">
          {items.map((data, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="start:h-[120px] start:w-[120px]"
                src={data.img}
                alt="Services"
              />
              <p className="start:text-[24px] text-[#39b75d] pt-[10px] text-center font-bold mini:text-[24px] font-sans">
                {data.title}
              </p>
              <p className="text-[#17262B] start:text-[24px] text-center font-semibold mini:text-[24px] font-sans">
                {data.title2}
              </p>
              <p className="start:h-[77px] start:text-[16px] text-[#485256] pt-[8px] pb-14 text-center leading-[23px] font-sans font-semibold">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      title2: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
