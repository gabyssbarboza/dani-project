import React from 'react'
import Slider from "react-slick";
import Carro1 from './HRT.png';
import Carro2 from './tororosso.png';
import Carro3 from './redbull.png';
import Carro4 from './carro-renault.png';


const Cars = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className="cars-container">
            <h3>F1 Cars</h3>
 <Slider {...settings}>
        <div>
            <img src={Carro1} alt="HRT" />
            <p>HRT 2011</p>

        </div>

        <div>
        <img src={Carro2}  alt="TORO ROSSO" />
        <p>TORO ROSSO 2012</p>

        </div>

        <div>
        <img src={Carro3} alt="RED Bull"  />
        <p>RED Bull 2014-18</p>

        </div>

        <div>
        <img src={Carro4} alt="Renault"  />
        <p>Renault 2019-20</p>

        </div>
      </Slider>

            
        </div>
    )
}

export default Cars
