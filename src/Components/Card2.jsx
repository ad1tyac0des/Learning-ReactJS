import React from 'react'
import PropTypes from 'prop-types'

function Card2({values, handleClick, index}) {
    const {name, profession, image, friends} = values;

    return (
        <div className='w-60 h-96 bg-zinc-100 rounded-md overflow-hidden'>
            <div className='w-full h-64 bg-zinc-200'>
                <img className='w-full h-full object-cover object-top' src={image} />
            </div>
            <div className='p-3'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h4 className='text-sm'>{profession}</h4>
                <button onClick={()=> handleClick(index)} className={`px-2 py-1 bg-${friends ? 'green' : 'blue'}-500 text-white text-sm rounded mt-7`}>{friends ? 'Friends!' : 'Add to Friend'}</button>
            </div>
        </div>
    )
}

Card2.propTypes = {
    values: PropTypes.object,
    handleClick: PropTypes.func,
    index: PropTypes.number
}

export default Card2