import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Hamburger({ onClose }) {
    return (
      <div className="start:w-[200px] bg-white fixed top-0 left-0 h-full shadow-lg z-50">
        <div className="header flex justify-between items-center p-4">
          <h1 className="text-[24px] ml-[20px]">Menu</h1>
          <p
            className="cursor-pointer text-[18px]"
            onClick={onClose}
          >
           <FontAwesomeIcon icon={faXmark} />
          </p>
        </div>
        <div>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">Catalogue</p>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">How it Works</p>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">Pricing</p>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">Blog</p>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">Services</p>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">Use-Cases</p>
          <p className="mt-[10px] mb-[10px] pl-[10px] pr-[10px] font-bold text-[#353A47] text-center">Need help?</p>
        </div>
      </div>
    );
  }
  Hamburger.propTypes={
    onClose:PropTypes.func
} 