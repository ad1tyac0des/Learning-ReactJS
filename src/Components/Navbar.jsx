import React from 'react'
function Navbar({data}) {
    const favouritesCount = data.filter((item) => item.favourite).length

    return (
        <div className='w-full px-20 py-6 flex justify-between items-center'>
            <h1 className='text-orange-600 font-semibold text-2xl uppercase'>Green</h1>
            <div className={`px-3 py-2 flex items-center justify-center gap-3 text-white text-base ${favouritesCount === 0 ? 'bg-orange-600' : 'bg-green-600'} rounded`}>
                <h3>Favourites</h3>
                <h3>{favouritesCount}</h3>
            </div>
        </div>
    )
}

export default Navbar