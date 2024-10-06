import React, { useRef } from 'react'

function App() {

    const name = useRef(null);
    const age = useRef(null);

    const handleSubmit = (event)=> {
        event.preventDefault()
        console.log(name.current.value)
        console.log(age.current.value)
    }

    return (
        <form className='p-4 flex gap-5' action="" onSubmit={handleSubmit}>
            <input ref={name} className='border border-zinc-700 outline-none px-2' placeholder='Name' type="text" />
            <input ref={age} className='border border-zinc-700 outline-none px-2' placeholder='Age' type="text" />
            <input className='px-5 border border-zinc-700 cursor-pointer' type="submit" value="Submit" />
        </form>
    )
}

export default App