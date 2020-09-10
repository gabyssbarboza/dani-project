import React from 'react'

const Numbers = ({title, first, second, third, four}) => {
    return (
        <div className="numbers-container">
            <div>
            <p className="numbers-title">{title}</p>
            </div>
            <div className="numbers-tips">
                <div>
                    <p>{first}</p>
                    <p>Podiums</p>
                </div>
                <div>
                    <p>{second}</p>
                    <p>Race wins</p>
                </div>
                <div>
                    <p>{third}</p>
                    <p>Pole</p>
                </div>
                <div>
                    <p>{four}</p>
                    <p>Fatest Laps</p>
                </div>
                
            </div>

        </div>
    )
}

export default Numbers
