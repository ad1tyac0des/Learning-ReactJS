import React from 'react'

function userCard({user, removeUser, index}) {
    return (
        <div className='w-56 bg-zinc-100 flex flex-col items-center rounded-md p-2'>
            <div className='image w-24 h-24 rounded-full overflow-hidden bg-zinc-400'>
                <img className='w-full h-full object-cover object-top' src={user.image} />
            </div>

            <h1 className='text-xl text-center font-semibold mt-1'>{user.name}</h1>
            <h2 className='text-sm text-center opacity-60'>{user.email}</h2>
            <p className='text-base text-center tracking-tight mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore quae voluptates!</p>
            <button onClick={() => removeUser(index)} className='px-5 py-1 bg-red-600 text-white text-xs rounded mt-5'>Remove</button>
        </div>
    )
}

export default userCard