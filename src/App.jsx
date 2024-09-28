import React, { useState } from 'react'
function App() {
    const [banned, setBanned] = useState(false)

    return (
        <div className='p-10'>
            <h1 className={`text-lg font-semibold ${banned ? 'text-red-500' : 'text-green-500'}`}>{banned ? 'Banned' : 'Not Banned'}</h1>
            <button onClick={()=> setBanned(!banned)} className={`px-6 py-1 text-white rounded-full text-lg mt-10 bg-red-500`}>Ban</button>
        </div>
    )
}

export default App