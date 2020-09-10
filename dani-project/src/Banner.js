import React from 'react'

const Banner = ({titulo, subtitle, srcImg}) => {
    return (
        <div className="banner-img">
            <img src={srcImg} alt="Banner-Dani" />
        <div className="banner-text">
            <h1>{titulo}</h1>
                <h2>{subtitle}</h2>
        </div>
        </div>
    )
}

export default Banner;
