import React, { useState } from 'react'

function App() {
    const [val, setVal] = useState({name: "Electron777", isBanned: true})

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='w-56 px-4 py-2 border-2 border-zinc-200 inline-block text-center'>
                <h1 className='font-semibold text-xl'>{val.name}</h1>
                <h1 className='font-semibold text-xl'>{val.isBanned ? "Banned!😔" : "Unbanned😁"}</h1>
            </div>
            <button onClick={()=> setVal({...val, isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? 'bg-blue-500' : 'bg-red-500'} text-white font-bold rounded-sm mt-5 block`}>
                {val.isBanned ? 'Unban Account' : 'Ban Account'}
            </button>
            
        </div>
    )
}

export default App