import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Hamburger from './Hamburgerhover/Hamburger';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >=961) {
        setIsOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="bg-[#fff] border-b border-[#ebebeb] shadow-[0_3px_4px_rgba(0,0,0,0.04)] fixed top-0 left-0 w-full z-50">
      <nav className="flex start:justify-between mobile:justify-between mini:justify-between tab:justify-around laptop:space-x-10 laptop:justify-center h-[70px] mx-4 pt-4">
        <div className="first-half flex space-x-1">
          <div className={`hamburger mt-[6px] mini:hidden lg:hidden ${isOpen ? "hidden" : "block"}`} onClick={toggleHamburger}>
            <div className="line h-[2px] w-6 bg-[#39b75d] my-[5px] cursor-pointer"></div>
            <div className="line h-[2px] w-6 bg-[#39b75d] my-[5px] cursor-pointer"></div>
            <div className="line h-[2px] w-6 bg-[#39b75d] cursor-pointer"></div>
          </div>
          {isOpen && (
            <div className="mt-[20px]">
              <Hamburger onClose={toggleHamburger}/> 
            </div>
          )}

          <div className="logo ml-[-2px] mini:ml-0 h-[70px]">
            <img
              src="https://printify.com/wp-content/themes/printify/assets/favicon-48.png"
              alt="Logo"
              className="h-[40px] w-[40px] block sm:hidden"
            />
            <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              alt="Logo"
              className="h-[50px] w-[150px] hidden sm:block sm:ml-[5px] sm:mt-[-5px] lg:h-[60px] lg:w-[160px] lg:ml-[-20px] mini:w-[150px]"
            />
          </div>
        </div>
        <div className="mid-half hidden sm:hidden mini:block pl-3 pr-3">
          <div className="nav-options">
            <ul className="flex justify-center space-x-6 mini:space-x-3 tab:w-[620px] text-base text-[#6f7585] font-medium transition-colors duration-150 my-2">
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px]">
                Catalogue
              </li>
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px] relative">
                How it works <FontAwesomeIcon className="mx-1" icon={faCaretDown} />
              </li>
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px]">
                Pricing
              </li>
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px]">
                Blog
              </li>
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px]">
                Services <FontAwesomeIcon icon={faCaretDown} />
              </li>
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px]">
                Use-cases <FontAwesomeIcon icon={faCaretDown} />
              </li>
              <li className="hover:text-[#39b75d] cursor-pointer text-[14px] mini:text-[15px]">
                Need help? <FontAwesomeIcon icon={faCaretDown} />
              </li>
            </ul>
          </div>
        </div>

        <div className="second-half flex mini:w-[100px] lg:w-[200px]">
          <div className="login-btn">
            <button className="h-[36px] w-[88px] inline-block text-[16px] cursor-pointer text-[#353a47] font-medium border border-[#c2c2c2] bg-white shadow-[0_0_#00c3603d] rounded text-center hover:text-[#39b75d]">
              Log in
            </button>
          </div>
          <div className="signUp-btn">
            <button className="h-[36px] w-[88px] inline-block text-[16px] font-medium cursor-pointer text-[#fff] border border-[#c2c2c2] bg-[#39b75d] hover:bg-[#379e54] shadow-[0_0_#00c3603d] rounded text-center ml-[16px]">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
