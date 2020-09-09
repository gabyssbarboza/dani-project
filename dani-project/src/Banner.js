import React from 'react'

const Banner = ({titulo, subtitle}) => {
    return (
        <div className="banner-img">
            <h1>{titulo}</h1>
                <h2>{subtitle}</h2>
        </div>
    )
}

export default Banner;
