import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Designs() {
    //     const tshirtSize=()=>{
    //        setInterval(function () {
    //            width:"141px"
    //            height:"140px"
    //        }, 5000);
    //    }
       
  return (
    <div className="start:h-[700px] start:pt-[56px] start:pb-[56px] start:pr-[16px] start:pl-[16px] mobile:h-[750px]  mobilelg:h-[500px] mobilelg:pt-[100px] mobilelg:pb-[100px] mobilelg:pr-[24px] mobilelg:pl-[24px] mini:flex  mini:h-[650px] mini:pt-[100px] mini:pb-[100px] mini:[pr-24px] mini:pl[24px] tab:h-[700px] laptop:h-[800px] bg-[#F7F7F7]">
        <div className="productLinks mini:flex ">
            <div className="design-img">
                <img className="start:h-[229px] mobile:h-[225px] mobile:w-[344px] mobilelg:h-[283px] mobilelg:w-[433px] mini:h-[507px] mini:w-[360px] tab:h-[541px] tab:w-[385px] laptop:h-[647px] laptop:w-[460px] rounded-[20px]" src="https://printify.com/pfh/media/clothes-mobile-Q6UN6X6P.webp" alt="" />
            </div>
            <div className="preview start:hidden mini:block h-[366px] w-[278px] mt-[200px] ml-[-100px] relative z-10">
                <div className="mini:h-[264px] mini:w-[186px] rounded-lg bg-white mini:pt-[20px] pl-[20px]">
                    <div className="flex mini:h-[29px] mini:w-[148px] rounded-[5px] border-2 text-center">
                        <p className="mini:h-[27px] mini:w-[74px] border-r-2 text-sm text-gray-600">Edit</p>
                        <p className="mini:h-[29px] mini:w-[74px] text-sm text-gray-600">Preview</p>
                    </div>
                    <div className="mini:mt-[30px] mini:ml-[0px]">
                        <img
                            className="animate-growShrink"
                            src="https://printify.com/pfh/assets/animations/images/img_5.png"
                            alt="Animated T-shirt"/>
                    </div>
                    <div className="h-[34px] w-[152px] bg-[#39b75d] rounded-[5px] mt-[30px] absolute animate-growSize">

                    </div>
                </div>
            </div>
            <div className="design-title start:h-[361px] start:pt-[31px] start:pb-[31px] start:pr-[16px] start:pl-[16px] mobile:h-[400px] mobile:pt-[31px] mobile:pb-[31px] mobile:pl-[24px] mobile:pr-[24px] mini:w-[628px] text-center mini:pt-[100px] bg-white rounded-[20px] mini:ml-[-160px] mini:pl-[150px] tab:mt-[104px] tab:w-[] laptop:mt-[38px] laptop:h-[613px] laptop:w-[678px]">
                <h1 className="text-[#17262b] font-sans start:h-[117px] start:text-[32px] start:font-cerebriSans font-bold mobile:h-[156px] mobile:pr-[65px] mobilelg:w-[385px] mobilelg:leading-[39px] mini:w-[400px] mini:h-[170px] tab:w-[410px] tab:ml-[20px] laptop:h-[116px] laptop:w-[455px]">
                    Easily add your design to a wide range of products
                </h1>
                <p className="text-[#848e92] font-normal start:text-[16px] start:h-[150px] start:w-[302px] start:pt-[50px] start:pb-[24px] mobilelg:w-[358px] mobilelg:pt-0 laptop:w-[432px]">  With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.  </p>
            <div>
                <p className="text-[#39b75d] mt-[20px] font-bold mobilelg:mt-[-57px]">All products <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Designs