import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CarouselOffer = () => {
    
const slides =  [
"https://i.pinimg.com/originals/5a/8e/db/5a8edbb220543eb6da830a78a107b4bb.jpg",
"https://png.pngtree.com/background/20210710/original/pngtree-vector-flat-shopping-promotion-discount-poster-background-picture-image_1052592.jpg",
"https://png.pngtree.com/background/20210711/original/pngtree-vintage-offer-poster-background-picture-image_1097706.jpg",
"https://img.lovepik.com/background/20211028/medium/lovepik-holiday-discount-event-poster-background-image_605624223.jpg"
]
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  centerMode: false,
  variableWidth: false,
  adaptiveHeight:false
};

  return (
    <div className="pt-6 ">
    <Slider {...settings}>
                {
                  slides.map((data, index) => (
                  
                        <div
                          className="carousel_image"
                          style={{
                            display: "flex",
                            textAlign: "center",
                            color: "blue",
                            fontWeight: "bold",
                            flexDirection: "column",
                            border: "0px",
                            alignItems: "center",
                            borderRadius: "0px",
                            width: "200px",
                            marginLeft: '15px'
                          }}
                       
                        >
                          <img
                            className="carousel_image"
                            src={data}
                            alt="img"
                            style={{
                              width: "100px !imprtant",
                              // objectFit: "cover",
                              borderRadius: "20px",
                            }}
                            height={200}
                            width={200}

                          />
                        </div>
                     
                  ))}
              </Slider>
    </div>
  )
}

export default CarouselOffer




