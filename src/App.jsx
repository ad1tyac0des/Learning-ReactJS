import React, { useState } from 'react'

function App() {

    const [val, setVal] = useState({name: "", email: ""})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(val)
    }

    return (
        <form action="" className='p-5 flex flex-col gap-4' onSubmit={handleSubmit}>
            <input onChange={(e)=> setVal({...val, name: e.target.value})} className='px-2 py-1 w-fit outline-none border border-black' type="text" placeholder='Enter Name' />
            <input onChange={(e)=> setVal({...val, email: e.target.value})} className='px-2 py-1 w-fit outline-none border border-black' type="email" placeholder='Enter Email' />
            <input className='px-2 py-1 w-fit outline-none border border-black cursor-pointer' type="submit" value="Submit" />
        </form>
    )
}

export default App