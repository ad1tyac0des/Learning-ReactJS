import React, { useState } from 'react'

function App() {
    const [val, setVal] = useState(0)

    return (
        <div className='p-10'>
            <h1 className='text-xl font-semibold'>
                {val}
            </h1>

            <button onClick={() => setVal(prev => prev + 1)} className='px-4 py-1 bg-sky-500 text-white rounded'>Add</button>
        </div>
    )
}

export default App