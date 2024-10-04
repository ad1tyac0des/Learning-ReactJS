import React from 'react'
import PropTypes from 'prop-types'

function Card2({values, handleClick, cardIndex}) {
    const {name, image, profession, friends} = values;

    return (
        <div className='w-60 h-76 bg-white rounded-md overflow-hidden'>
            <div className='w-full h-56'>
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className='p-3'>
                <h1 className='text-2xl'>{name}</h1>
                <h5 className='text-sm'>{profession}</h5>
                <button onClick={()=> handleClick(cardIndex)} className={`px-2 py-1 ${friends ? 'bg-green-500' : 'bg-blue-500'} rounded text-white text-sm mt-3`}>{friends ? "Friends!" : "Add to Friend"}</button>
            </div>
        </div>
    )
}

Card2.propTypes = {
    values: PropTypes.object,
    handleClick: PropTypes.func,
    cardIndex: PropTypes.number
}

export default Card2