import React, { useState } from 'react'

function App() {
    const [val, setVal] = useState({"name": "harsh", "isBanned": false})

    return (
        <div className='p-10'>
            <h1 className='text-lg font-semibold'>Name: {val.name}</h1>
            <h1 className='text-lg font-semibold'>Banned: {val.isBanned.toString()}</h1>
            <button onClick={()=> setVal({...val, isBanned: !val.isBanned})} className='px-3 py-1 bg-blue-500 text-white uppercase font-bold rounded mt-4'>Change</button>
        </div>
    )
}

export default App