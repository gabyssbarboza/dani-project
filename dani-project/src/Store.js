import React from 'react'

const Store = ({src1, src2, src3}) => {
    return (
        <div className="store-container">
             <div className="store-top">   
            <img src={src1} alt="Foto1"/>
            <img src={src2}  alt="Foto2" />
            </div>
            <div className="store-bottom">
            <img src={src3}  alt="Foto3" />
            </div>
        </div>
    )
}

export default Store
