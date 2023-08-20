import Slider from "react-slick";
import { offer_slides } from "../assets/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselOffer = () => {
    

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerMode: true,
  variableWidth: false,
  adaptiveHeight:false,
  autoplay:true
};

  return (
    <div className="pt-6 ">
    <Slider {...settings}>
                {
                  offer_slides.map((data, index) => (
                  
                        <div key={index} className="text-white relative ">
                          <img className=" w-[9rem]  h-[14rem] md:w-[20rem] md:h-[20rem]  rounded-2xl"  src={data.slide} alt="img"/>
                           <div className="font-thin md:text-3xl  absolute   top-8 left-3">Get</div>
                           <div className="absolute font-bold  top-14 md:top-16 left-3 text-2xl md:text-4xl">50% off</div>
                           <div className="w-36 md:w-full font-thin absolute top-24 md:top-28 md:text-2xl left-3">On your First Celebration</div>
                           <button className="text-black bg-white font-medium rounded-md p-1 px-2 absolute top-40 md:top-56 md:text-xl left-3">Claim Now</button>
                        </div>
                     
                  ))}
     </Slider>
    </div>
  )
}

export default CarouselOffer




