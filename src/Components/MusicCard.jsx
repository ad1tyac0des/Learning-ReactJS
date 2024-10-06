import React from 'react'

function MusicCard({values, handleClick, index}) {
    const {image, name, artist, favourite} = values;

    return (
        <div className='w-72 p-4 pb-10 bg-zinc-100 rounded flex justify-between relative my-10'>
            <div className='w-24 h-24 bg-orange-600 rounded overflow-hidden'>
                <img className='w-full h-full object-cover' src={image} />
            </div>
            <div className=' w-32'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <h6 className='text-sm'>{artist}</h6>
            </div>
            <button onClick={()=> handleClick(index)} className={`px-3 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 ${favourite ? 'bg-green-600' : 'bg-orange-600'} rounded-full whitespace-nowrap`}>
                <h3 className='text-white'>{favourite ? 'Added' : 'Add to Favourites'}</h3>
            </button>
        </div>
    )
}

export default MusicCard